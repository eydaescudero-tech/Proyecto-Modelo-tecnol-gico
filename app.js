const modules = [
  {
    title: 'Introducción a la conciencia ambiental',
    label: 'Conoce tu papel',
    text: 'La conciencia ambiental reúne saberes, valores y acciones. En comunidad, cada persona tiene responsabilidad y sus decisiones pueden animar cambios positivos.',
    points: ['Comprende el propósito del proyecto comunitario.', 'Reconoce tu rol en el cuidado del entorno.', 'Relaciona tus hábitos con el bienestar común.'],
    overview: `<section class="module-overview" aria-labelledby="background-title">
      <div class="overview-heading"><span class="tag">El contexto local</span><h4 id="background-title">Antecedentes</h4><p>Comprender el reto ayuda a elegir acciones útiles para Panamá y para nuestra comunidad.</p></div>
      <div class="context-facts"><article class="context-fact"><span class="fact-number">Panamá</span><p>Los residuos orgánicos son la fracción más abundante en los rellenos sanitarios. Papel y cartón también representan materiales reciclables importantes; entre los no orgánicos destacan plástico, vidrio y metales.</p></article><article class="context-fact"><span class="fact-number">500,000+ t</span><p>El documento cita una estimación anual de residuos orgánicos recibidos en Cerro Patacón, el relleno sanitario más grande del país (UNESCO, 2023; Pedreño Muñoz et al., 2024).</p></article></div>
      <p class="context-paragraph">Desde 2020 se estudió la conciencia ambiental en Residencial La Colina, La Chorrera, mediante el <strong>Ecobarómetro</strong>. Sus resultados señalaron un nivel regular en la gestión de residuos sólidos. El proyecto busca fortalecer esa conciencia ante la crisis sanitaria y apoyar el aprendizaje con innovación y tecnología.</p>
      <div class="community-concept"><span class="concept-icon" aria-hidden="true">🤝</span><div><h5>¿Qué es el desarrollo comunitario?</h5><p>Es la participación coordinada de vecinos e instituciones para aprender, desarrollar capacidades y alcanzar metas comunes. En este proyecto, significa organizarse para separar y reciclar papel, botellas plásticas, aluminio, latas y otros materiales, y facilitar su recolección.</p></div></div>
      <div class="concept-map"><h5>Del desafío a una comunidad más limpia</h5><ol class="concept-flow"><li><span>01</span><strong>Reconocer</strong><small>Qué residuos generamos</small></li><li><span>02</span><strong>Aprender juntos</strong><small>Vecinos e instituciones participan</small></li><li><span>03</span><strong>Organizarse</strong><small>Separar y coordinar el reciclaje</small></li><li><span>04</span><strong>Actuar</strong><small>Facilitar la recolección y reducir contaminación</small></li></ol></div>
      <aside class="community-ripple"><span aria-hidden="true">🌱</span><p><strong>Una buena acción se multiplica.</strong> Lo positivo que hace una persona puede inspirar a su familia y a sus vecinos, y beneficiar a toda la comunidad.</p></aside>
    </section>`,
    reflection: {
      question: '¿Cuál es mi responsabilidad como persona integrada a una sociedad?',
      answer: 'Cumplir con compromiso la parte que me corresponde, sin esperar a que los demás actúen, y ser un ejemplo positivo. Mis acciones ayudan a que la comunidad alcance sus metas ambientales.'
    },
    videos: [
      { id: 'D5NKrsDkQ00', title: 'Gestión de desechos' }
    ],
    questions: [
      ['¿El método de intervención comunitaria busca involucrar a todos los agentes de la comunidad y las instituciones para potenciar capacidades participativas y alcanzar objetivos comunes?', 'Sí'],
      ['¿Panamá y muchos países enfrentan una crisis sanitaria por la incorrecta gestión de los residuos sólidos comunes?', 'Sí'],
      ['¿La conciencia ambiental es solo la actitud, la acción y el saber sobre los efectos de la actividad humana en favor o en contra del equilibrio medioambiental?', 'No'],
      ['¿El conocimiento, la actitud, el afecto y el hacer son las cuatro dimensiones que componen la conciencia ambiental?', 'Sí'],
      ['¿Las acciones ambientales positivas realizadas por un miembro de la comunidad no tienen impacto en los demás miembros de esa comunidad?', 'No']
    ]
  },
  {
    title: 'Dimensión del conocimiento',
    label: 'Aprende para decidir',
    text: 'Conocer permite entender los problemas ambientales y elegir cómo actuar. Informarse sobre residuos, consumo y recursos ayuda a tomar decisiones sostenibles.',
    points: ['Busca información y aprende algo nuevo.', 'Conoce qué residuos pueden recuperarse.', 'Usa los recursos con responsabilidad pensando en el futuro.'],
    material: `<section class="module-material" aria-labelledby="knowledge-title">
      <header class="material-heading"><span class="tag">Material informativo</span><h4 id="knowledge-title">Conocer para comprender y decidir</h4><p>La dimensión cognitiva no es solo memorizar datos: es interpretar los problemas ambientales y relacionarlos de forma crítica.</p></header>
      <div class="material-focus"><strong>En este curso:</strong> el foco está en la gestión de residuos sólidos comunes.</div>
      <h5 class="diagram-title">Del entorno a una decisión informada</h5>
      <ol class="learning-flow"><li><span>01</span><strong>Observar</strong><small>Reconocer los residuos y los problemas ambientales cercanos.</small></li><li><span>02</span><strong>Informarse</strong><small>Aprender a separar y averiguar dónde y cuándo reciben reciclaje.</small></li><li><span>03</span><strong>Relacionar</strong><small>Conectar las acciones locales con sus efectos a largo plazo.</small></li><li><span>04</span><strong>Aplicar</strong><small>Usar lo aprendido para elegir cómo manejar los residuos.</small></li></ol>
      <div class="topic-strip"><strong>Temas que aborda el material · selecciona uno para leer más</strong>
        <details><summary>Cambio climático</summary><p>Es la alteración a largo plazo de las temperaturas y los patrones meteorológicos de la Tierra. Aunque también ocurre por causas naturales, desde el siglo XIX las actividades humanas son su principal motor, impulsado por el calentamiento global.</p></details>
        <details><summary>Deforestación</summary><p>La pérdida de bosques en Panamá se relaciona con la expansión agrícola, la ganadería y el desarrollo urbano. El documento cita para 2024 una pérdida de 17,400 hectáreas de bosque natural.</p></details>
        <details><summary>Contaminación del agua</summary><p>El documento menciona contaminación en ríos y cuencas por residuos urbanos e industriales. En Matasnillo, Curundú, Tocumen y Tapia se identificaron provisionalmente 68 contaminantes emergentes.</p></details>
        <details><summary>Pérdida de biodiversidad</summary><p>La urbanización, la deforestación y las obras de infraestructura reducen y fragmentan hábitats. Esto amenaza especies y puede afectar su movimiento y supervivencia.</p></details>
        <details><summary>Contaminación por plásticos</summary><p>Los residuos plásticos afectan la vida marina y los ecosistemas costeros. Comprender este impacto ayuda a tomar decisiones responsables sobre el consumo y el manejo de residuos.</p></details>
      </div>
    </section>`,
    reflection: {
      question: '¿Cuándo sé que mi dimensión del conocimiento va en aumento?',
      answer: 'Cuando comprendo los problemas ambientales, conecto ideas, aplico lo aprendido y comienzo a aprender y reaprender automáticamente.'
    },
    videos: [
      { id: 'vejg2oCD02w', title: 'Cambio climático' },
      { id: 'jJIFOZAh9W0', title: 'La mitigación' },
      { id: '7wOptB-I5_s', title: 'Acción ciudadana' }
    ],
    questions: [
      ['¿La dimensión cognitiva o de conocimiento se refiere únicamente a memorizar datos sobre el medio ambiente?', 'No'],
      ['¿No es necesario buscar información sobre los lugares y horarios donde reciben reciclaje porque el gobierno debe encargarse de recoger todos los residuos?', 'No'],
      ['¿Debemos consumir menos recursos para que las generaciones presentes y futuras puedan disfrutarlos?', 'Sí'],
      ['¿La contaminación de las aguas en ciertos ríos es un problema complejo con múltiples fuentes de contaminantes?', 'Sí'],
      ['¿La pérdida de bosques en Panamá contribuye significativamente a las emisiones de gases de efecto invernadero?', 'Sí']
    ]
  },
  {
    title: 'Dimensión afectiva',
    label: 'Conecta con la naturaleza',
    text: 'Las emociones y los valores influyen en nuestra relación con el ambiente. Reconocer lo que sentimos puede convertir la preocupación en empatía, resiliencia y compromiso.',
    points: ['Reconoce y nombra tus emociones.', 'Conecta con otras personas y especies.', 'Transforma la preocupación en motivación para cuidar.'],
    material: `<section class="module-material" aria-labelledby="affective-title">
      <header class="material-heading"><span class="tag">Material informativo</span><h4 id="affective-title">Reconocer lo que sentimos también ayuda a actuar</h4><p>Ante los problemas ambientales podemos sentir ansiedad, culpa, desesperanza o indignación; también esperanza, amor y compasión.</p></header>
      <ol class="emotion-flow"><li><span>1</span><strong>Reconocer</strong><small>¿Qué emoción me provoca lo que ocurre?</small></li><li><span>2</span><strong>Nombrar</strong><small>Identificar con claridad lo que estoy sintiendo.</small></li><li><span>3</span><strong>Replantear</strong><small>Cambiar “no puedo hacer nada” por “puedo aportar desde mi lugar”.</small></li><li><span>4</span><strong>Actuar</strong><small>Buscar apoyo y sumarme a una acción individual o colectiva.</small></li></ol>
      <div class="material-note"><strong>Práctica sugerida</strong><p>Anota qué emoción te provoca un tema ambiental y una acción concreta que podría transformarla en motivación.</p></div>
    </section>`,
    videos: [
      { id: '2IEvEXxQ2og', title: 'Conexión del ser Humano con la Naturaleza' },
      { id: 'MXib-QRZbqA', title: 'Afectividad Ambiental - video opcional (no requerido para el cuestionario)', optional: true },
      { id: '5dXcK6ruGnc', title: 'Impacto ambiental' }
    ],
    questions: [
      ['¿Es importante reconocer y nombrar conscientemente las emociones personales para gestionarlas frente a la crisis ambiental?', 'Sí'],
      ['¿La ansiedad y la culpa siempre deben evitarse porque no aportan nada positivo a la acción ambiental?', 'No'],
      ['¿Transformar emociones negativas en resiliencia puede motivar a las personas a participar en acciones ambientales?', 'Sí'],
      ['¿La conexión emocional con otras especies y la naturaleza contribuye a desarrollar un sentido de responsabilidad ambiental?', 'Sí'],
      ['¿Tomar decisiones ambientales alineadas con valores de justicia y sostenibilidad implica integrar emociones y reflexión?', 'Sí']
    ]
  },
  {
    title: 'Dimensión conativa',
    label: 'Decide comprometerte',
    text: 'La dimensión conativa es la intención y voluntad de actuar. Integra conocimientos y emociones para sostener decisiones personales y colectivas, incluso cuando hay obstáculos.',
    points: ['Define una meta ambiental posible.', 'Identifica apoyos y barreras de tu entorno.', 'Suma tus esfuerzos a iniciativas comunitarias.'],
    material: `<section class="module-material" aria-labelledby="conative-title">
      <header class="material-heading"><span class="tag">Material informativo</span><h4>De lo que sé y siento a lo que decido hacer</h4><p>La dimensión conativa reúne la voluntad, las motivaciones, los valores y las decisiones que orientan una posible acción ambiental.</p></header>
      <div class="intention-equation"><span>Conocimiento</span><b>+</b><span>Emoción y valores</span><b>→</b><strong>Voluntad de actuar</strong></div>
      <div class="factor-grid"><article><h5>Puede impulsar</h5><p>Aprender sobre el ambiente, contar con apoyo social y tener valores que favorezcan el cuidado.</p></article><article><h5>Puede limitar</h5><p>La falta de recursos o de puntos de reciclaje cercanos, y no comprender las consecuencias de las acciones.</p></article></div>
      <div class="material-note"><strong>Decisiones cotidianas</strong><p>Llevar una taza reutilizable, separar los residuos y pensar si algo se puede reparar o reutilizar antes de comprar.</p></div>
    </section>`,
    activity: [
      '¿De qué manera puedo fortalecer mi voluntad activa para separar residuos de forma ética?',
      '¿Qué estrategias me ayudan a priorizar la reparación y reutilización en mis decisiones diarias?',
      '¿Cómo puedo mantener mi determinación para adoptar prácticas sostenibles ante presiones sociales o comerciales?'
    ],
    videos: [],
    questions: [
      ['¿La dimensión conativa requiere integrar conocimientos previos y emociones para generar acciones concretas?', 'Sí'],
      ['¿La falta de centros de reciclaje cercanos puede ser un factor limitante de la dimensión conativa?', 'Sí'],
      ['¿Las normas sociales son un factor intrínseco o interno de motivación?', 'No'],
      ['¿La dimensión conativa incluye únicamente acciones individuales y excluye iniciativas colectivas?', 'No'],
      ['¿Usar una taza reutilizable en el trabajo puede manifestar la voluntad activa descrita en la dimensión conativa?', 'Sí']
    ]
  },
  {
    title: 'Dimensión activa · Acción local',
    label: 'Pasa a la práctica',
    text: 'La dimensión activa convierte conocimientos, emociones y voluntad en comportamientos concretos. Separar residuos, reducir el consumo y organizarse localmente son formas de ponerla en práctica.',
    points: ['Reduce y separa tus residuos en casa.', 'Reutiliza materiales y organiza su entrega.', 'Propón acciones locales y revisa sus resultados.'],
    material: `<section class="module-material" aria-labelledby="active-title">
      <header class="material-heading"><span class="tag">Material informativo</span><h4>La conciencia ambiental se demuestra con acciones</h4><p>La dimensión activa convierte lo que sabemos y sentimos en acciones concretas, sistemáticas y sostenibles.</p></header>
      <div class="active-flow"><article><span>01 · Cada día</span><h5>Crear hábitos</h5><p>Separar residuos, reducir plásticos, ahorrar energía y elegir formas de transporte y consumo responsables.</p></article><article><span>02 · En comunidad</span><h5>Hacer proyectos</h5><p>Organizar iniciativas como jardines urbanos, reforestación o educación ambiental.</p></article><article><span>03 · Revisar</span><h5>Evaluar resultados</h5><p>Observar cuánto se recicla, qué cambios se perciben y si las acciones se mantienen.</p></article></div>
      <div class="material-note"><strong>Recuerda:</strong><p>Un hábito sostenible se repite y se integra a la rutina. Evaluar los resultados ayuda a saber si la acción está dando fruto.</p></div>
    </section>`,
    videos: [
      { id: 'IoWmF0fo2Wc', title: 'Experiencia real de reciclaje' }
    ],
    questions: [
      ['¿Separar residuos y usar bolsas reutilizables son comportamientos observables de la dimensión activa?', 'Sí'],
      ['¿La dimensión activa se enfoca únicamente en conocer los problemas ambientales, sin necesidad de actuar?', 'No'],
      ['¿Implementar proyectos como reforestación o jardines urbanos forma parte de la dimensión activa?', 'Sí'],
      ['¿Los hábitos sostenibles son acciones aisladas que se hacen una sola vez y sin repetir?', 'No'],
      ['¿Evaluar si nuestras acciones ayudan al medio ambiente es parte importante de la dimensión activa?', 'Sí']
    ]
  }
];

const tabs = document.querySelector('#tabs');
const mobileTabs = document.querySelector('#mobile-tabs');
const card = document.querySelector('#module-card');
const contents = document.querySelector('#contents');
const moduleParts = document.createElement('div');
moduleParts.id = 'module-parts';
moduleParts.className = 'module-parts';
moduleParts.setAttribute('role', 'tablist');
moduleParts.setAttribute('aria-label', 'Partes del módulo 5');
moduleParts.innerHTML = '<button type="button" class="module-part-tab active" id="module-part-one-tab" role="tab" aria-selected="true" aria-controls="module-card">Parte I</button><button type="button" class="module-part-tab" id="module-part-two-tab" role="tab" aria-selected="false" aria-controls="module-part-two">Parte II</button>';
card.before(moduleParts);
const modulePartTwo = document.createElement('section');
modulePartTwo.id = 'module-part-two';
modulePartTwo.className = 'module-part-two';
modulePartTwo.setAttribute('role', 'tabpanel');
modulePartTwo.setAttribute('aria-labelledby', 'module-part-two-tab');
modulePartTwo.setAttribute('aria-label', 'Parte II del módulo 5');
card.after(modulePartTwo);
let players = [];
let youtubeReady = false;
let currentModule = 0;
let watchedVideos = new Set();
const pageNames = new Set(['inicio', 'introduccion', 'contenido', 'modulos']);
const pagePanels = [...document.querySelectorAll('[data-page]')];
const pageNavLinks = [...document.querySelectorAll('#links a')];

function showPage(page, scrollToTop = true) {
  if (!pageNames.has(page)) return;
  pagePanels.forEach(panel => { panel.hidden = panel.dataset.page !== page; });
  pageNavLinks.forEach(link => {
    const active = link.hash === `#${page}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (page !== 'modulos') players.forEach(player => player?.pauseVideo?.());
  document.querySelector('#topbar').classList.remove('hide');
  if (scrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setModule5Part(part) {
  const showPartTwo = part === 'II';
  card.hidden = showPartTwo;
  modulePartTwo.hidden = !showPartTwo;
  document.querySelector('#module-part-one-tab').classList.toggle('active', !showPartTwo);
  document.querySelector('#module-part-one-tab').setAttribute('aria-selected', String(!showPartTwo));
  document.querySelector('#module-part-two-tab').classList.toggle('active', showPartTwo);
  document.querySelector('#module-part-two-tab').setAttribute('aria-selected', String(showPartTwo));
  if (showPartTwo) players.forEach(player => player?.pauseVideo?.());
}

document.querySelector('#module-part-one-tab').addEventListener('click', () => setModule5Part('I'));
document.querySelector('#module-part-two-tab').addEventListener('click', () => setModule5Part('II'));

window.onYouTubeIframeAPIReady = () => {
  youtubeReady = true;
  initializePlayers();
};
const youtubeApi = document.createElement('script');
youtubeApi.src = 'https://www.youtube.com/iframe_api';
document.head.append(youtubeApi);

function moduleButton(i) {
  const button = document.createElement('button');
  button.className = `tab${i === 0 ? ' active' : ''}`;
  button.textContent = `Módulo ${i + 1}`;
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', String(i === 0));
  button.addEventListener('click', () => showModule(i));
  return button;
}

modules.forEach((module, i) => {
  tabs.append(moduleButton(i));
  mobileTabs.append(moduleButton(i));
  const link = document.createElement('a');
  link.className = 'content-link';
  link.href = '#modulos';
  link.innerHTML = `<span class="num">0${i + 1}</span><span>${module.title}</span>`;
  link.addEventListener('click', () => showModule(i));
  contents.append(link);
});

function initializePlayers() {
  if (!youtubeReady) return;
  players = [];
  modules[currentModule].videos.forEach((video, i) => {
    const originIsWeb = location.protocol === 'http:' || location.protocol === 'https:';
    const playerVars = { enablejsapi: 1, rel: 0 };
    if (originIsWeb) playerVars.origin = location.origin;
    const player = new YT.Player(`module-video-${i}`, {
      playerVars,
      events: {
        onStateChange(event) {
          if (event.data !== YT.PlayerState.ENDED) return;
          watchedVideos.add(i);
          const status = card.querySelector(`#video-status-${i}`);
          if (status) status.textContent = 'Video completado ✓';
          if (modules[currentModule].videos.every((video, index) => video.optional || watchedVideos.has(index))) {
            const reflection = card.querySelector('.module-reflection');
            if (reflection) reflection.hidden = false;
            const evaluation = card.querySelector('.evaluation');
            evaluation.hidden = false;
            (reflection || evaluation).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        },
        onError(event) {
          const status = card.querySelector(`#video-status-${i}`);
          if (!status) return;
          status.textContent = event.data === 153
            ? 'Error 153: YouTube no recibió la identidad del sitio. Abre la página desde Live Server o un servidor HTTPS.'
            : event.data === 101 || event.data === 150
              ? 'El propietario no permite reproducir este video en sitios externos. Ábrelo en YouTube.'
            : `No se pudo reproducir el video (error ${event.data}). Usa el enlace de YouTube.`;
        }
      }
    });
    players.push(player);
  });
}

function renderEvaluation(module, hidden) {
  return `<section class="evaluation" ${hidden ? 'hidden' : ''} aria-live="polite">
    <span class="tag">Autoevaluación</span>
    <h4>Comprueba lo aprendido</h4>
    <p class="evaluation-help">Responde una pregunta a la vez. La siguiente aparecerá después de contestar.</p>
    <div class="evaluation-stage">
      <div class="evaluation-counter" aria-live="polite"></div>
      <progress class="evaluation-progress" max="${module.questions.length}" value="1" aria-label="Progreso de la evaluación"></progress>
      <p class="evaluation-question"></p>
      <div class="quiz-options" role="group" aria-label="Elige Sí o No">
        <button type="button" data-answer="Sí">Sí</button>
        <button type="button" data-answer="No">No</button>
      </div>
      <p class="evaluation-feedback" aria-live="polite"></p>
      <button type="button" class="evaluation-next" hidden>Siguiente pregunta</button>
    </div>
    <p class="evaluation-result" aria-live="polite" hidden></p>
    <button type="button" class="evaluation-restart" hidden>Intentar nuevamente</button>
  </section>`;
}

function setupEvaluation(module) {
  const evaluation = card.querySelector('.evaluation');
  if (!evaluation) return;
  const stage = evaluation.querySelector('.evaluation-stage');
  const counter = evaluation.querySelector('.evaluation-counter');
  const progress = evaluation.querySelector('.evaluation-progress');
  const question = evaluation.querySelector('.evaluation-question');
  const feedback = evaluation.querySelector('.evaluation-feedback');
  const choices = [...evaluation.querySelectorAll('.quiz-options button')];
  const next = evaluation.querySelector('.evaluation-next');
  const result = evaluation.querySelector('.evaluation-result');
  const restart = evaluation.querySelector('.evaluation-restart');
  let questionIndex = 0;
  let score = 0;

  function showQuestion() {
    const [prompt] = module.questions[questionIndex];
    counter.textContent = `Pregunta ${questionIndex + 1} de ${module.questions.length}`;
    progress.value = questionIndex + 1;
    question.textContent = prompt;
    feedback.textContent = '';
    next.hidden = true;
    next.textContent = questionIndex === module.questions.length - 1 ? 'Ver resultado' : 'Siguiente pregunta';
    choices.forEach(button => {
      button.disabled = false;
      button.classList.remove('selected', 'correct', 'incorrect');
    });
  }

  choices.forEach(button => button.addEventListener('click', () => {
    if (button.disabled) return;
    const correctAnswer = module.questions[questionIndex][1];
    const isCorrect = button.dataset.answer === correctAnswer;
    if (isCorrect) score += 1;
    choices.forEach(choice => {
      choice.disabled = true;
      if (choice === button) choice.classList.add('selected', isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect && choice.dataset.answer === correctAnswer) choice.classList.add('correct');
    });
    feedback.textContent = isCorrect ? '¡Correcto!' : `La respuesta correcta es: ${correctAnswer}.`;
    next.hidden = false;
    const answeredIndex = questionIndex;
    window.setTimeout(() => {
      if (questionIndex === answeredIndex && !stage.hidden) next.click();
    }, 1300);
  }));

  next.addEventListener('click', () => {
    questionIndex += 1;
    if (questionIndex < module.questions.length) {
      showQuestion();
      return;
    }
    stage.hidden = true;
    result.hidden = false;
    restart.hidden = false;
    result.textContent = `Resultado: ${score} de ${module.questions.length} respuestas correctas. ${score === module.questions.length ? '¡Excelente trabajo!' : 'Repasa el módulo y vuelve a intentarlo.'}`;
    const activity = card.querySelector('.module-activity');
    if (activity) {
      activity.hidden = false;
      activity.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  restart.addEventListener('click', () => {
    questionIndex = 0;
    score = 0;
    result.hidden = true;
    restart.hidden = true;
    const activity = card.querySelector('.module-activity');
    if (activity) activity.hidden = true;
    stage.hidden = false;
    showQuestion();
  });

  showQuestion();
}

function showModule(i) {
  players.forEach(player => player?.destroy?.());
  players = [];
  currentModule = i;
  watchedVideos = new Set();
  const module = modules[i];
  const hasRequiredVideos = module.videos.some(video => !video.optional);
  const hasOptionalVideos = module.videos.some(video => video.optional);
  card.classList.toggle('no-videos', module.videos.length === 0);
  card.classList.toggle('has-overview', Boolean(module.overview));
  card.classList.toggle('has-material', Boolean(module.material));
  card.classList.toggle('has-material-5', Boolean(module.material) && i === 4);
  document.querySelectorAll('#tabs .tab, #mobile-tabs .tab').forEach((button, index) => {
    const active = index % modules.length === i;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  card.innerHTML = `<div class="module-copy"><span class="tag">${module.label}</span><h3>${module.title}</h3><p>${module.text}</p><div class="learning-points">${module.points.map(point => `<div class="point"><i>✓</i><span>${point}</span></div>`).join('')}</div>${module.overview || ''}${module.material || ''}
    ${module.videos.length ? `<div class="video-progress"><strong>Videos del módulo</strong><span>${hasOptionalVideos ? 'Completa los videos requeridos para desbloquear la autoevaluación. El video opcional no es necesario para el cuestionario.' : 'Completa todos los videos para desbloquear la autoevaluación.'}</span></div><div class="module-videos-list">${module.videos.map((video, index) => `<span class="video-status" id="video-status-${index}">Video ${index + 1} · ${video.optional ? 'Opcional' : 'Pendiente'}</span>`).join('')}</div>` : '<div class="video-progress"><strong>Sin video en este módulo</strong><span>La autoevaluación está disponible.</span></div>'}
    </div>${module.videos.length ? `<div class="module-videos">${module.videos.map((video, index) => `<div class="video-box"><iframe id="module-video-${index}" src="https://www.youtube.com/embed/${video.id}?enablejsapi=1&rel=0${location.protocol === 'http:' || location.protocol === 'https:' ? `&origin=${encodeURIComponent(location.origin)}` : ''}" title="${video.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><div class="video-caption">Video ${index + 1} · ${video.title} · <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></div></div>`).join('')}</div>` : ''}
    ${module.reflection ? `<aside class="module-reflection" hidden><span class="reflection-mark" aria-hidden="true">✦</span><div><span class="tag">Para reflexionar</span><h4>${module.reflection.question}</h4><p>${module.reflection.answer}</p></div></aside>` : ''}${renderEvaluation(module, hasRequiredVideos)}${module.activity ? `<section class="module-activity" hidden aria-labelledby="activity-title"><header><span class="activity-icon" aria-hidden="true">✎</span><div><span class="tag">Ponte en práctica</span><h4 id="activity-title">Actividad sugerida</h4><p>Toma un lápiz y un papel. Responde estas preguntas:</p></div></header><ol>${module.activity.map(prompt => `<li>${prompt}</li>`).join('')}</ol></section>` : ''}`;
  moduleParts.hidden = i !== 4;
  setModule5Part('I');
  card.querySelectorAll('.topic-strip details').forEach(detail => detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    card.querySelectorAll('.topic-strip details').forEach(other => {
      if (other !== detail) other.open = false;
    });
  }));
  setupEvaluation(module);
  initializePlayers();
}

showModule(0);

const menu = document.querySelector('#menu');
const links = document.querySelector('#links');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '×' : '☰';
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.textContent = '☰';
}));

let previousScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  document.querySelector('#topbar').classList.toggle('hide', currentScroll > 150 && currentScroll > previousScroll);
  previousScroll = currentScroll;
}, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach(link => {
  const page = link.getAttribute('href').slice(1);
  if (!pageNames.has(page)) return;
  link.addEventListener('click', event => {
    event.preventDefault();
    showPage(page);
  });
});
showPage('inicio', false);
