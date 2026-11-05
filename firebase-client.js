const firebaseConfig = {
  apiKey: 'AIzaSyCux_q0WTI1DSul_4exVOQ79610Esa6aMc',
  authDomain: 'curso-de-conciencia-ambiental.firebaseapp.com',
  projectId: 'curso-de-conciencia-ambiental',
  storageBucket: 'curso-de-conciencia-ambiental.firebasestorage.app',
  messagingSenderId: '696935854871',
  appId: '1:696935854871:web:f64388cc036d1ef54fbd52',
  measurementId: 'G-18C1J03RV0'
};

const registrationScreen = document.querySelector('#registration-screen');
const appShell = document.querySelector('#app-shell');
const form = document.querySelector('#registration-form');
const submitButton = document.querySelector('#registration-submit');
const loginToggle = document.querySelector('#registered-login-toggle');
const statusMessage = document.querySelector('#registration-message');
const personalFields = document.querySelector('#personal-fields');
const nameInput = form.elements.nombre;
const lastNameInput = form.elements.apellido;
const registrationTitle = document.querySelector('#registration-title');
const registrationDescription = form.previousElementSibling;
const participantStorageKey = 'conciencia-ambiental-participant';
let accessMode = 'register';

async function enterCourse(participant) {
  try {
    localStorage.setItem(participantStorageKey, JSON.stringify(participant));
  } catch (error) {
    console.warn('No se pudo guardar la sesión en este navegador.', error);
  }
  window.currentParticipant = participant;
  let houseProgress = null;
  try {
    await window.recordHouseVisit(participant);
    houseProgress = await window.loadHouseProgress(participant.numeroCasa);
  } catch (error) {
    console.warn('No se pudo cargar el progreso compartido de la casa.', error);
  }
  let remoteProgress = houseProgress?.progresoCompartido || null;
  try {
    if (!participant.householdLogin) {
      remoteProgress = await window.loadParticipantProgress(participant.participantId) || remoteProgress;
    }
    if (remoteProgress) localStorage.setItem(`conciencia-ambiental-progress-${participant.participantId}`, JSON.stringify(remoteProgress));
  } catch (error) {
    console.warn('No se pudo recuperar el avance desde Firebase; se usará el avance local.', error);
  }
  registrationScreen.hidden = true;
  appShell.hidden = false;
  window.updateHouseProgressUI?.(houseProgress);
  window.restoreCourseProgress?.(remoteProgress, houseProgress);
}

function setAccessMode(mode) {
  accessMode = mode;
  const loginMode = accessMode === 'login';
  submitButton.textContent = loginMode ? 'Entrar' : 'Guardar y entrar';
  loginToggle.textContent = loginMode
    ? '¿Primera vez aquí? Regístrate'
    : '¿Ya te habías registrado? Ingresa aquí';
  personalFields.hidden = loginMode;
  nameInput.required = !loginMode;
  lastNameInput.required = !loginMode;
  registrationTitle.innerHTML = loginMode
    ? 'Ingresa con tu<br><em>número de casa.</em>'
    : 'Antes de comenzar,<br><em>registra tus datos.</em>';
  registrationDescription.textContent = loginMode
    ? 'Escribe el número de casa registrado para continuar con el avance compartido del hogar.'
    : 'Identifícate para ingresar al curso y guardar los resultados de tus autoevaluaciones.';
  statusMessage.textContent = loginMode
    ? 'Solo necesitas el número de casa.'
    : 'Completa nombre, apellido y número de casa para crear un registro.';
}

loginToggle.addEventListener('click', () => {
  setAccessMode(accessMode === 'register' ? 'login' : 'register');
});

try {
  const [{ initializeApp }, { getFirestore, collection, addDoc, query, where, getDocs, doc, getDoc, setDoc, updateDoc, arrayUnion, increment, serverTimestamp }] = await Promise.all([
    import('https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'),
    import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js')
  ]);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const participants = collection(db, 'encuestas');

  window.loadParticipantProgress = async participantId => {
    const participantSnapshot = await getDoc(doc(db, 'encuestas', participantId));
    return participantSnapshot.exists() ? participantSnapshot.data().progreso || null : null;
  };
  window.saveParticipantProgress = async (participantId, progress) => {
    await setDoc(doc(db, 'encuestas', participantId), { progreso: progress }, { merge: true });
  };
  window.saveHouseholdCourseProgress = async (numeroCasa, progress) => {
    await setDoc(doc(db, 'casas_progreso', numeroCasa), { progresoCompartido: progress }, { merge: true });
  };
  window.recordHouseVisit = async participant => {
    const houseRef = doc(db, 'casas_progreso', participant.numeroCasa);
    const houseSnapshot = await getDoc(houseRef);
    if (houseSnapshot.exists()) {
      await updateDoc(houseRef, {
        totalVisitasCasa: increment(1),
        ultimaVisita: serverTimestamp()
      });
    } else {
      await setDoc(houseRef, {
        numeroCasa: participant.numeroCasa,
        totalVisitasCasa: 1,
        modulosCompletados: [],
        fechaCreacion: serverTimestamp(),
        ultimaVisita: serverTimestamp()
      });
    }
  };
  window.loadHouseProgress = async numeroCasa => {
    const houseSnapshot = await getDoc(doc(db, 'casas_progreso', numeroCasa));
    return houseSnapshot.exists() ? houseSnapshot.data() : null;
  };
  window.saveHouseModuleProgress = async moduleName => {
    const participant = window.currentParticipant;
    if (!participant?.numeroCasa) throw new Error('No hay una casa activa.');
    await updateDoc(doc(db, 'casas_progreso', participant.numeroCasa), {
      modulosCompletados: arrayUnion(moduleName)
    });
    return window.loadHouseProgress(participant.numeroCasa);
  };

  window.saveModuleResult = async (moduleName, score, totalQuestions, answers, updateHouseProgress = true) => {
    const participant = window.currentParticipant;
    if (!participant?.participantId) throw new Error('No hay una persona ingresada.');
    const results = collection(db, 'resultados_pruebas');
    const previousAttempts = await getDocs(query(
      results,
      where('participanteId', '==', participant.participantId),
      where('modulo', '==', moduleName)
    ));
    const attemptNumber = previousAttempts.size + 1;
    await addDoc(results, {
      participanteId: participant.participantId,
      numeroCasa: participant.numeroCasa,
      nombre: participant.nombre,
      apellido: participant.apellido,
      usuario: `${participant.nombre} ${participant.apellido}`,
      modulo: moduleName,
      puntaje: score,
      totalPreguntas: totalQuestions,
      respuestas: answers,
      intentoNumero: attemptNumber,
      fechaIntento: serverTimestamp()
    });
    if (!updateHouseProgress) return;
    try {
      const houseProgress = await window.saveHouseModuleProgress(moduleName);
      window.updateHouseProgressUI?.(houseProgress);
    } catch (error) {
      console.warn('El resultado individual se guardó, pero no se pudo actualizar el avance compartido de la casa.', error);
    }
  };

  submitButton.disabled = false;
  loginToggle.disabled = false;
  statusMessage.textContent = 'Completa tus datos para crear un registro nuevo.';

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const numeroCasa = form.elements.numeroCasa.value.trim();
    const nombre = form.elements.nombre.value.trim();
    const apellido = form.elements.apellido.value.trim();
    const loginMode = accessMode === 'login';
    if (!numeroCasa || (!loginMode && (!nombre || !apellido))) {
      statusMessage.textContent = loginMode
        ? 'Escribe un número de casa válido.'
        : 'Completa los tres campos con información válida.';
      return;
    }

    submitButton.disabled = true;
    loginToggle.disabled = true;
    statusMessage.textContent = loginMode ? 'Validando el número de casa…' : 'Guardando tu nuevo registro…';

    try {
      let participant;
      if (loginMode) {
        const houseSnapshot = await getDoc(doc(db, 'casas_progreso', numeroCasa));
        if (!houseSnapshot.exists()) {
          statusMessage.textContent = `La Casa ${numeroCasa} todavía no está registrada. Usa «¿Primera vez aquí? Regístrate».`;
          return;
        }
        participant = {
          participantId: `casa-${encodeURIComponent(numeroCasa)}`,
          numeroCasa,
          nombre: `Residente Casa ${numeroCasa}`,
          apellido: '',
          householdLogin: true
        };
      } else {
        const duplicate = await getDocs(query(
          participants,
          where('nombre', '==', nombre),
          where('apellido', '==', apellido),
          where('numeroCasa', '==', numeroCasa)
        ));
        if (!duplicate.empty) {
          setAccessMode('login');
          statusMessage.textContent = 'Este registro ya existe. Verifica tus datos y presiona «Ingresar».';
          return;
        }

        const record = await addDoc(participants, {
          numeroCasa, nombre, apellido,
          fechaRegistro: serverTimestamp(),
          numeroVisitas: 1,
          ultimaVisita: serverTimestamp(),
          historialVisitas: [new Date().toISOString()]
        });
        participant = { participantId: record.id, numeroCasa, nombre, apellido };
      }
      await enterCourse(participant);
    } catch (error) {
      console.error('Error de registro o ingreso en Firestore:', error);
      statusMessage.textContent = 'No se pudo completar la operación. Revisa tu conexión y las reglas de Firestore.';
    } finally {
      submitButton.disabled = false;
      loginToggle.disabled = false;
    }
  });
} catch (error) {
  console.error('No se pudo iniciar Firebase:', error);
  statusMessage.textContent = 'No se pudo conectar con Firebase. Revisa la conexión e inténtalo de nuevo.';
}
