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
    videos: [
      { id: 'YaEX8h42wZA', title: 'Video de la dimensi\u00F3n conativa' }
    ],
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
const activePartTwoSections = [
  {
    title: '5.1 · Cuidando el planeta con las 5R y el reciclaje',
    intro: 'Empieza por rechazar lo que no necesitas, reduce tu consumo y organiza el reciclaje en casa.',
    videos: [['k9XQ8_ziYEE', 'La clave para salvar el planeta: empieza por decir NO'], ['srdzUzDXLlM', '¿Quieres empezar a reciclar? ¡Hazlo bien desde el principio!']],
    questions: [
      ['¿Cuál es la primera y más importante de las 5R?', ['Reciclar', 'Reutilizar', 'Rechazar', 'Recuperar'], 2],
      ['¿Qué significa reducir?', ['Separar los residuos', 'Recoger basura de la calle', 'Comprar y consumir menos desde el inicio', 'Usar menos agua al lavar los platos'], 2],
      ['¿Por qué reciclar no es la primera opción para cuidar el planeta?', ['Solo sirve con plásticos', 'Está prohibido en algunos países', 'Consume energía y no siempre se recicla todo', 'Es difícil encontrar tachos de colores'], 2],
      ['¿Cuál es el orden correcto de las 5R?', ['Reciclar, reutilizar, reducir, rechazar, recuperar', 'Rechazar, reducir, reutilizar, reciclar, recuperar', 'Recuperar, reutilizar, reciclar, rechazar, reducir', 'Rechazar, reciclar, reutilizar, reducir, recuperar'], 1],
      ['¿Qué significa recuperar como última R?', ['Llevar los residuos al basurero', 'Aprovechar residuos para energía o compostaje', 'Recolectar materiales reciclables de la calle', 'Guardar la basura hasta separarla'], 1],
      ['¿Qué conviene hacer primero al iniciar un sistema de reciclaje en casa?', ['Imprimir guías de reciclaje', 'Llamar al servicio de limpieza', 'Organizar un espacio cómodo para almacenar residuos', 'Comprar muchos botes nuevos'], 2],
      ['¿Qué color se recomienda para el recipiente de residuos orgánicos?', ['Azul', 'Amarillo', 'Marrón', 'Negro'], 2]
    ],
    homePractice: 'Durante esta semana, antes de comprar algo, detente y pregúntate si lo necesitas. Prueba decir «no» a un producto desechable y cuéntale a tu familia qué R aplicaste.',
    encouragement: 'Cada compra consciente es una decisión pequeña que puede convertirse en un hábito.'
  },
  {
    title: '5.2 · Reutilizar y reciclar desde casa',
    intro: 'Pon en práctica lo aprendido para darles más vida a los objetos y preparar bien los materiales reciclables.',
    videos: [['YwTpn9F3Yas', 'Reciclar y reutilizar en familia: paso a paso desde casa'], ['q78QS4AAtp4', 'Reciclaje de papel, cartón y Tetrapak: fácil y desde casa']],
    questions: [
      ['¿Qué conviene pensar antes de tirar un objeto?', ['Si cabe en el tinaco', 'Si puedo reutilizarlo', 'Si está roto', 'Si tiene color'], 1],
      ['¿Cuál de estos objetos se puede reutilizar en casa?', ['Cáscaras de frutas', 'Bolsas de papitas', 'Botellas plásticas vacías', 'Papel higiénico usado'], 2],
      ['¿Cómo deben prepararse los envases plásticos para reciclarlos?', ['Con restos de comida', 'Sin enjuagar', 'Limpios, secos y aplastados', 'Mojados y enteros'], 2],
      ['¿Qué pasos debes seguir para reciclar un envase Tetrapak?', ['Romperlo, tirarlo y quemarlo', 'Llenarlo de agua', 'Vaciarlo, enjuagarlo y aplastarlo', 'Cortarlo en pedacitos'], 2],
      ['¿Qué se recomienda hacer con papel o libros antes de reciclarlos?', ['Pintarlos', 'Quemarlos para abono', 'Reutilizarlos como notas o dibujos', 'Guardarlos en una bolsa mojada'], 2],
      ['¿Qué condición debe cumplir el cartón antes de reciclarse?', ['Estar sucio', 'Tener restos de comida', 'Estar seco y limpio', 'Estar arrugado y húmedo'], 2],
      ['¿Cuál es un ejemplo de reutilización creativa?', ['Convertir una botella en maceta', 'Tirar papel mojado a la basura', 'Guardar comida en una caja de pizza sucia', 'Tirar un frasco roto al suelo'], 0]
    ],
    homePractice: 'Elige un envase o una hoja que normalmente desecharías. Dale un segundo uso y prepara un material reciclable limpio y seco para llevarlo a un punto de acopio.',
    encouragement: 'Reutilizar algo en casa es una forma sencilla de empezar; compartir la idea ayuda a que se vuelva costumbre.'
  },
  {
    title: '5.3 · Aceite, pilas, electrodomésticos y muebles',
    intro: 'Aprende a manejar residuos especiales y voluminosos de forma responsable, buscando opciones para reciclar, reparar o darles otra vida.',
    videos: [['p-A14HEVK6k', 'Aceite y pilas usadas: pequeños residuos, grandes impactos'], ['n8JwQAXQbOw', 'Electrodomésticos y muebles: ¿tirarlos? ¡Mejor reciclarlos o darles nueva vida!']],
    questions: [
      ['¿Qué debes hacer con el aceite de cocina antes de desecharlo?', ['Tirarlo caliente por el fregadero', 'Mezclarlo con agua', 'Dejarlo enfriar, colarlo y guardarlo en una botella cerrada', 'Verterlo en la tierra'], 2],
      ['¿Cuánto puede contaminar un litro de aceite usado si se desecha mal?', ['Nada, es biodegradable', 'Hasta 1,000 litros de agua', 'Solo el fregadero', 'Una cubeta de agua'], 1],
      ['¿Qué debes hacer con las pilas usadas?', ['Guardarlas en un recipiente resistente y llevarlas a un punto limpio', 'Tirarlas con los residuos orgánicos', 'Enterrarlas', 'Lavarlas y volver a usarlas'], 0],
      ['¿Por qué no se deben tirar pilas a la basura común?', ['Ocupan mucho espacio', 'Contienen metales tóxicos que contaminan agua y suelo', 'Solo se reciclan en fábricas', 'No se degradan'], 1],
      ['¿Qué puedes hacer antes de desechar un electrodoméstico que no funciona?', ['Guardarlo indefinidamente', 'Llevarlo directo al basurero', 'Intentar repararlo o buscar una campaña de recolección', 'Romperlo y tirar las partes'], 2],
      ['¿Qué se recomienda hacer con muebles viejos que están en buen estado?', ['Reutilizarlos, donarlos o transformarlos', 'Dejarlos en la calle', 'Quemarlos', 'Venderlos como chatarra'], 0],
      ['Si no hay centros de reciclaje cerca, ¿qué puedes hacer con muebles o electrónicos?', ['Guardarlos para siempre', 'Organizar un intercambio o consultar en la comunidad', 'Tirarlos con los residuos inorgánicos', 'Dejarlos afuera'], 1]
    ],
    homePractice: 'Separa el aceite usado en una botella cerrada y coloca las pilas aparte. En familia, elijan un objeto que puedan reparar, donar o transformar antes de desecharlo.',
    encouragement: 'Cuidar también significa detenerse a buscar una alternativa antes de tirar algo.'
  },
  {
    title: '5.4 · Transporte, transformación y nuevos usos',
    intro: 'Descubre cómo llevar tus materiales al lugar correcto y qué nuevos productos pueden surgir del reciclaje.',
    videos: [['tDvCGXb9cCw', 'Transporte responsable: cómo llevar tus reciclables al lugar correcto'], ['iPyPKntpSwU', 'Cuando reciclas, creas: el poder de tus acciones']],
    questions: [
      ['¿Qué debes hacer antes de transportar materiales reciclables?', ['Mezclarlos en una bolsa grande', 'Quemarlos', 'Verificar qué acepta el punto de acopio cercano', 'Guardarlos sin lavar'], 2],
      ['¿Cómo deben estar los materiales antes de llevarlos al centro de acopio?', ['Mezclados con basura', 'Limpios, secos y separados', 'Húmedos', 'Con restos de comida'], 1],
      ['¿Qué puedes hacer si tienes poco espacio en casa?', ['Dejar de reciclar', 'Tirar todo junto', 'Separar por bolsas o cajas dentro del mismo tinaco', 'Esperar a tener otro tinaco'], 2],
      ['¿Cómo puedes hacer más sencillo transportar reciclables?', ['Hacerlo una vez al año', 'Tirarlos por la ventana', 'Integrarlo en tu rutina o compartirlo con vecinos', 'Guardarlos por meses'], 2],
      ['¿Qué se recomienda hacer con los plásticos reciclables antes de transportarlos?', ['Dejarlos con líquidos', 'Aplastarlos y asegurarse de que estén limpios', 'Romperlos en pedazos', 'Guardarlos con los orgánicos'], 1],
      ['¿En qué pueden convertirse las botellas PET después del reciclaje?', ['En basura de otro basurero', 'En textiles, mochilas o envases nuevos', 'Se queman', 'No se pueden reutilizar'], 1],
      ['¿Qué materiales se pueden obtener del reciclaje de Tetrapak?', ['Solo basura', 'Vidrio y cartón', 'Papel, aluminio y plástico', 'Madera y tela'], 2]
    ],
    homePractice: 'Prepara los reciclables limpios y secos de tu hogar, verifica qué recibe el punto de acopio más cercano y coordina con alguien de tu comunidad cómo llevarlos.',
    encouragement: 'Tu reciclaje puede seguir su camino cuando lo entregas en el lugar correcto. Comparte el plan e invita a alguien a sumarse.'
  }
];
const activePartTwoExtraVideos = [['sSTazs4Tez0', 'Imagina el futuro de la Tierra']];
function cleanPartTwoMarkup(markup) {
  const pairs = [
    ['\u00C2\u00BF', '\u00BF'], ['\u00C2\u00A1', '\u00A1'], ['\u00C2\u00B7', '\u00B7'], ['\u00C2\u00AB', '\u00AB'], ['\u00C2\u00BB', '\u00BB'],
    ['\u00C3\u00A1', '\u00E1'], ['\u00C3\u00A9', '\u00E9'], ['\u00C3\u00AD', '\u00ED'],
    ['\u00C3\u00B3', '\u00F3'], ['\u00C3\u00BA', '\u00FA'], ['\u00C3\u00B1', '\u00F1'],
    ['\u00C3\u00BC', '\u00FC'], ['\u00E2\u2020\u2014', '&#8599;']
  ];
  return pairs.reduce((text, [broken, corrected]) => text.replaceAll(broken, corrected), markup);
}

let currentPartTwoStage = 0;

function highestUnlockedPartTwoStage() {
  let unlocked = 0;
  while (unlocked < activePartTwoSections.length - 1 && courseProgress.partTwoQuizzes?.[unlocked]?.completed) unlocked += 1;
  return unlocked;
}

function updatePartTwoNavigation() {
  const completedCount = activePartTwoSections.filter((_, index) => courseProgress.partTwoQuizzes?.[index]?.completed).length;
  const progress = modulePartTwo.querySelector('#part-two-progress');
  if (progress) {
    progress.value = completedCount;
    progress.setAttribute('aria-label', `Progreso: ${completedCount} de ${activePartTwoSections.length} etapas completadas`);
  }
  const summary = modulePartTwo.querySelector('#part-two-progress-label');
  if (summary) summary.textContent = `${completedCount} de ${activePartTwoSections.length} etapas completadas`;
  const unlocked = highestUnlockedPartTwoStage();
  modulePartTwo.querySelectorAll('.part-two-stage-button').forEach((button, index) => {
    const completed = Boolean(courseProgress.partTwoQuizzes?.[index]?.completed);
    const locked = index > unlocked;
    button.disabled = locked;
    button.classList.toggle('is-current', index === currentPartTwoStage);
    button.classList.toggle('is-complete', completed);
    button.classList.toggle('is-locked', locked);
    if (index === currentPartTwoStage) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
    const state = button.querySelector('.part-two-stage-state');
    if (state) state.textContent = completed ? 'Completada' : locked ? 'Bloqueada' : index === currentPartTwoStage ? 'En curso' : 'Disponible';
    button.setAttribute('aria-label', `Etapa ${index + 1}: ${completed ? 'completada' : locked ? 'bloqueada' : index === currentPartTwoStage ? 'en curso' : 'disponible'}`);
  });
  const finalStepButton = modulePartTwo.querySelector('#part-two-final-step-button');
  if (finalStepButton) {
    const allStagesComplete = completedCount === activePartTwoSections.length;
    finalStepButton.disabled = !allStagesComplete;
    finalStepButton.classList.toggle('is-complete', Boolean(courseProgress.courseCompleted));
    finalStepButton.classList.toggle('is-current', allStagesComplete && Boolean(courseProgress.finalStepOpen) && !courseProgress.courseCompleted);
    const state = finalStepButton.querySelector('.part-two-stage-state');
    if (state) state.textContent = courseProgress.courseCompleted ? 'Completado' : allStagesComplete ? courseProgress.finalStepOpen ? 'Video final' : 'Disponible' : 'Se abre al terminar la etapa 4';
    finalStepButton.setAttribute('aria-label', `Video final y despedida: ${courseProgress.courseCompleted ? 'completado' : allStagesComplete ? 'disponible' : 'bloqueado hasta completar la etapa 4'}`);
  }
  const extras = modulePartTwo.querySelector('#part-two-extras');
  if (extras) extras.hidden = completedCount !== activePartTwoSections.length || !courseProgress.finalStepOpen;
  const completion = modulePartTwo.querySelector('#course-completion');
  if (completion) completion.hidden = !courseProgress.courseCompleted;
}

function completeCourse() {
  courseProgress.courseCompleted = true;
  persistCourseProgress();
  markHouseModuleCompleted(modules[4].title);
  const state = modulePartTwo.querySelector('#part-two-final-video-state');
  const button = modulePartTwo.querySelector('#part-two-final-video-done');
  if (state) state.textContent = 'Video final completado';
  if (button) {
    button.disabled = true;
    button.textContent = 'Visto ✓';
  }
  const completion = modulePartTwo.querySelector('#course-completion');
  if (completion) {
    completion.hidden = false;
    completion.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function markHouseModuleCompleted(moduleName) {
  const participant = window.currentParticipant;
  if (!participant?.numeroCasa) return;
  const completedModules = new Set(currentHouseProgress?.modulosCompletados || []);
  completedModules.add(moduleName);
  currentHouseProgress = {
    ...(currentHouseProgress || {}),
    numeroCasa: participant.numeroCasa,
    modulosCompletados: [...completedModules]
  };
  window.updateHouseProgressUI?.(currentHouseProgress);
  if (typeof window.saveHouseModuleProgress !== 'function') return;
  window.saveHouseModuleProgress(moduleName)
    .then(houseProgress => window.updateHouseProgressUI?.(houseProgress))
    .catch(error => console.warn('No se pudo actualizar el avance compartido de la casa.', error));
}

function downloadParticipationCertificate() {
  const name = modulePartTwo.querySelector('#certificate-participant-name')?.value.trim() || 'Participante';
  const escapeXml = value => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character]);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="990" viewBox="0 0 1400 990"><rect width="1400" height="990" fill="#f8f7ef"/><rect x="35" y="35" width="1330" height="920" rx="20" fill="none" stroke="#315b47" stroke-width="8"/><rect x="55" y="55" width="1290" height="880" rx="14" fill="none" stroke="#c59a55" stroke-width="2"/><text x="700" y="210" text-anchor="middle" font-family="Georgia,serif" font-size="35" fill="#315b47" letter-spacing="8">CURSO COMUNITARIO</text><text x="700" y="340" text-anchor="middle" font-family="Georgia,serif" font-size="68" fill="#20392e">Certificado de participación</text><path d="M350 400H1050" stroke="#c59a55" stroke-width="3"/><text x="700" y="495" text-anchor="middle" font-family="Arial,sans-serif" font-size="27" fill="#58675c">Se otorga el presente certificado a</text><text x="700" y="605" text-anchor="middle" font-family="Georgia,serif" font-size="56" font-weight="bold" fill="#315b47">${escapeXml(name)}</text><path d="M320 635H1080" stroke="#8b9d8c" stroke-width="2"/><text x="700" y="710" text-anchor="middle" font-family="Arial,sans-serif" font-size="25" fill="#58675c">Por completar satisfactoriamente el curso comunitario</text><text x="700" y="755" text-anchor="middle" font-family="Arial,sans-serif" font-size="25" fill="#58675c">y su recorrido de aprendizaje sobre acción local y cuidado ambiental.</text><circle cx="700" cy="850" r="34" fill="#315b47"/><path d="M684 850l11 11 22-25" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
  link.download = 'certificado-participacion-curso-comunitario.svg';
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function nextPartTwoVideoIndex(stageIndex) {
  const videos = activePartTwoSections[stageIndex].videos;
  const watched = new Set(courseProgress.partTwoVideos?.[stageIndex] || []);
  const nextIndex = videos.findIndex((_, index) => !watched.has(index));
  return nextIndex === -1 ? videos.length - 1 : nextIndex;
}

function renderPartTwoStage(index) {
  const section = activePartTwoSections[index];
  const watched = new Set(courseProgress.partTwoVideos?.[index] || []);
  const savedQuiz = courseProgress.partTwoQuizzes?.[index];
  const allVideosWatched = watched.size === section.videos.length;
  const readyForQuiz = allVideosWatched || savedQuiz?.completed;
  const videoIndex = nextPartTwoVideoIndex(index);
  const visibleVideoCount = allVideosWatched ? section.videos.length : videoIndex + 1;
  const panel = modulePartTwo.querySelector('#part-two-stage-content');
  const videoCards = section.videos.slice(0, visibleVideoCount).map(([videoId, videoTitle], displayedIndex) => {
    const videoWatched = watched.has(displayedIndex);
    return `<article class="part-two-video-card"><div class="video-box"><iframe id="part-two-video-${index}-${displayedIndex}" src="https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0${location.protocol === 'http:' || location.protocol === 'https:' ? `&origin=${encodeURIComponent(location.origin)}` : ''}" title="${videoTitle}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><div class="video-caption">Video ${displayedIndex + 1} de ${section.videos.length} · ${videoTitle} · <a href="https://youtu.be/${videoId}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></div></div><div class="part-two-video-footer"><p class="part-two-video-state">${videoWatched ? 'Video completado' : `${watched.size} de ${section.videos.length} videos completados`}</p><button class="part-two-mark-watched" type="button" data-stage="${index}" data-video="${displayedIndex}" ${videoWatched ? 'disabled' : ''}>${videoWatched ? 'Visto ✓' : 'Marcar como visto'}</button></div></article>`;
  });
  const videosCompleteMessage = allVideosWatched
    ? `<div class="part-two-videos-complete" role="status"><span class="part-two-complete-mark" aria-hidden="true">OK</span><div><strong>¡Videos completados!</strong><span>Ya puedes responder la evaluación de esta etapa.</span></div></div>`
    : '';
  const gateMessage = watched.size === 0 ? 'Al terminar este video aparecerá el siguiente.' : 'Al terminar el segundo video se abrirá la evaluación.';
  panel.innerHTML = cleanPartTwoMarkup(`<section class="part-two-stage-view" aria-labelledby="part-two-stage-title"><header class="part-two-section-heading"><span class="part-two-step">Etapa ${String(index + 1).padStart(2, '0')}</span><div><h4 id="part-two-stage-title">${section.title}</h4><p>${section.intro}</p></div></header><div class="part-two-video-progress"><div><strong>Videos de la etapa</strong><span>${allVideosWatched ? `${section.videos.length} de ${section.videos.length} completados` : `Video ${videoIndex + 1} de ${section.videos.length}`}</span></div><progress max="${section.videos.length}" value="${watched.size}" aria-label="${watched.size} de ${section.videos.length} videos completados"></progress></div><div class="part-two-video-list">${videoCards.join('')}${videosCompleteMessage}</div><div class="part-two-quiz-gate" id="part-two-quiz-gate" ${readyForQuiz ? 'hidden' : ''} role="status" aria-live="polite"><strong>Completa los videos para continuar.</strong><span>${gateMessage}</span></div><section class="evaluation part-two-quiz" data-quiz="${index}" aria-labelledby="part-two-quiz-title" ${readyForQuiz ? '' : 'hidden'}><span class="tag">Autoevaluación ${section.title.slice(0, 3)}</span><h4 id="part-two-quiz-title">Comprueba lo aprendido</h4><p class="evaluation-help">Responde una pregunta a la vez. La siguiente aparecerá después de contestar.</p><div class="evaluation-stage part-two-evaluation-stage"><div class="evaluation-counter" aria-live="polite"></div><progress class="evaluation-progress" max="${section.questions.length}" value="0" aria-label="Progreso de la evaluación"></progress><p class="evaluation-question"></p><div class="quiz-options" role="group" aria-label="Opciones de respuesta"></div><p class="evaluation-feedback" aria-live="polite"></p><button type="button" class="evaluation-next" hidden>Siguiente pregunta</button></div><p class="evaluation-result" role="status" aria-live="polite" hidden></p><button type="button" class="evaluation-restart" hidden>Intentar nuevamente</button></section><aside class="part-two-practice" hidden><span class="tag">Ahora, en casa</span><h4>Tu reto de esta etapa</h4><p>${section.homePractice}</p><p class="part-two-encouragement">${section.encouragement}</p></aside><button class="btn secondary part-two-next" type="button" data-next-stage="${index + 1}" ${savedQuiz?.completed && index < activePartTwoSections.length - 1 ? '' : 'hidden'}>Continuar a la etapa ${index + 2} <span aria-hidden="true">→</span></button></section>`);
  const gate = panel.querySelector('#part-two-quiz-gate');
  if (gate) gate.querySelector('strong').textContent = cleanPartTwoMarkup('Completa los 2 videos para desbloquear la autoevaluación.');
  setupPartTwoEvaluation(index);
}

function setupPartTwoEvaluation(stageIndex) {
  const quiz = modulePartTwo.querySelector(`.part-two-quiz[data-quiz="${stageIndex}"]`);
  if (!quiz) return;
  const questions = activePartTwoSections[stageIndex].questions;
  const questionStage = quiz.querySelector('.part-two-evaluation-stage');
  const counter = quiz.querySelector('.evaluation-counter');
  const progress = quiz.querySelector('.evaluation-progress');
  const prompt = quiz.querySelector('.evaluation-question');
  const choices = quiz.querySelector('.quiz-options');
  const feedback = quiz.querySelector('.evaluation-feedback');
  const next = quiz.querySelector('.evaluation-next');
  const result = quiz.querySelector('.evaluation-result');
  const restart = quiz.querySelector('.evaluation-restart');
  const stageView = quiz.closest('.part-two-stage-view');
  const practice = stageView.querySelector('.part-two-practice');
  const nextStage = stageView.querySelector('.part-two-next');
  const saved = courseProgress.partTwoQuizzes?.[stageIndex];
  let retaking = Boolean(saved?.inProgress);
  let questionIndex = saved?.completed && !retaking ? 0 : Math.min(saved?.questionIndex || 0, questions.length - 1);
  let score = saved?.completed && !retaking ? 0 : saved?.score || 0;
  let answers = saved?.completed && !retaking ? [] : [...(saved?.answers || [])];
  let stageWasCompleted = Boolean(saved?.completed);
  let showingSavedResult = Boolean(saved?.completed && !retaking);

  function saveAttempt(completed = stageWasCompleted, completedScore = null) {
    courseProgress.partTwoQuizzes = courseProgress.partTwoQuizzes || {};
    const previous = courseProgress.partTwoQuizzes[stageIndex];
    courseProgress.partTwoQuizzes[stageIndex] = {
      questionIndex,
      score,
      total: questions.length,
      answers,
      completed,
      inProgress: retaking,
      lastCompletedScore: completedScore ?? previous?.lastCompletedScore ?? (previous?.completed ? previous.score : null)
    };
    persistCourseProgress();
  }

  function showQuestion() {
    if (showingSavedResult) {
      questionStage.hidden = true;
      result.hidden = false;
      result.textContent = `Resultado guardado: ${saved.lastCompletedScore ?? saved.score} de ${saved.total}.`;
      restart.hidden = false;
      progress.value = questions.length;
      progress.setAttribute('aria-label', `Evaluación completada: ${questions.length} de ${questions.length} preguntas`);
      practice.hidden = false;
      if (nextStage) nextStage.hidden = stageIndex >= activePartTwoSections.length - 1;
      return;
    }
    questionStage.hidden = false;
    result.hidden = true;
    restart.hidden = true;
    practice.hidden = true;
    counter.textContent = `Pregunta ${questionIndex + 1} de ${questions.length}`;
    const answeredCount = answers.filter(answer => answer !== undefined).length;
    progress.value = answeredCount;
    progress.setAttribute('aria-label', `Progreso de la evaluación: ${answeredCount} de ${questions.length} preguntas respondidas`);
    prompt.textContent = cleanPartTwoMarkup(questions[questionIndex][0]);
    feedback.textContent = '';
    next.hidden = true;
    next.textContent = questionIndex === questions.length - 1 ? 'Ver resultado' : 'Siguiente pregunta';
    if (nextStage) nextStage.hidden = true;
    choices.innerHTML = cleanPartTwoMarkup(questions[questionIndex][1].map((option, optionIndex) => `<button type="button" data-answer="${optionIndex}">${String.fromCharCode(97 + optionIndex)}) ${option}</button>`).join(''));
    const previousAnswer = answers[questionIndex];
    if (previousAnswer !== undefined) selectAnswer(previousAnswer, false);
  }

  function selectAnswer(selectedIndex, save = true) {
    if (questionStage.hidden || (save && answers[questionIndex] !== undefined)) return;
    const correctIndex = questions[questionIndex][2];
    const isCorrect = selectedIndex === correctIndex;
    if (save) {
      answers[questionIndex] = selectedIndex;
      if (isCorrect) score += 1;
      const answeredCount = answers.filter(answer => answer !== undefined).length;
      progress.value = answeredCount;
      progress.setAttribute('aria-label', `Progreso de la evaluación: ${answeredCount} de ${questions.length} preguntas respondidas`);
      saveAttempt();
    }
    choices.querySelectorAll('button').forEach((button, index) => {
      button.disabled = true;
      if (index === selectedIndex) button.classList.add('selected', isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect && index === correctIndex) button.classList.add('correct');
    });
    feedback.textContent = cleanPartTwoMarkup(isCorrect ? '¡Correcto!' : `La respuesta correcta es: ${questions[questionIndex][1][correctIndex]}.`);
    next.hidden = false;
    if (save) {
      const answeredIndex = questionIndex;
      window.setTimeout(() => {
        if (questionIndex === answeredIndex && !questionStage.hidden) next.click();
      }, 1300);
    }
  }

  function completeEvaluation() {
    stageWasCompleted = true;
    retaking = false;
    questionStage.hidden = true;
    result.hidden = false;
    restart.hidden = false;
    practice.hidden = false;
    result.textContent = cleanPartTwoMarkup(`Resultado: ${score} de ${questions.length}. ${score === questions.length ? '¡Excelente trabajo!' : 'Sigue repasando y poniendo en práctica lo aprendido.'}`);
    saveAttempt(true, score);
    updatePartTwoNavigation();
    initializeFinalPartTwoPlayer();
    if (nextStage && stageIndex < activePartTwoSections.length - 1) nextStage.hidden = false;
    practice.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  quiz.dataset.partTwoReady = 'true';
  quiz._partTwoActions = {
    answer: selectedIndex => selectAnswer(selectedIndex),
    next: () => {
      if (questionIndex < questions.length - 1) {
        questionIndex += 1;
        saveAttempt();
        showQuestion();
      } else completeEvaluation();
    },
    restart: () => {
      questionIndex = 0;
      score = 0;
      answers = [];
      retaking = true;
      showingSavedResult = false;
      questionStage.hidden = false;
      result.hidden = true;
      restart.hidden = true;
      practice.hidden = true;
      if (nextStage) nextStage.hidden = true;
      saveAttempt(stageWasCompleted);
      showQuestion();
    }
  };
  showQuestion();
}

function renderActivePartTwo() {
  modulePartTwo.innerHTML = cleanPartTwoMarkup(`<header class="part-two-intro"><span class="tag">Parte II · Acción local para la práctica activa</span><h3>Una ruta práctica, paso a paso</h3><p>Completa cada etapa en orden: termina los dos videos, responde la evaluación y desbloquea la siguiente.</p><div class="part-two-progress-wrap"><div class="part-two-progress-heading"><strong>Tu recorrido</strong><span id="part-two-progress-label">0 de 4 etapas completadas</span></div><progress id="part-two-progress" max="${activePartTwoSections.length}" value="0"></progress></div></header><nav class="part-two-stage-nav" aria-label="Etapas de aprendizaje">${activePartTwoSections.map((section, index) => `<button class="part-two-stage-button" type="button" data-stage-button="${index}" ${index > highestUnlockedPartTwoStage() ? 'disabled' : ''}><span class="part-two-stage-number">0${index + 1}</span><span class="part-two-stage-copy"><strong>Etapa ${index + 1}</strong><small class="part-two-stage-state">${index === 0 ? 'En curso' : 'Bloqueada'}</small></span></button>`).join('')}<button class="part-two-stage-button part-two-final-step-button" id="part-two-final-step-button" type="button" data-final-step disabled><span class="part-two-stage-number" aria-hidden="true">✦</span><span class="part-two-stage-copy"><strong>Video final · despedida</strong><small class="part-two-stage-state">Se abre al terminar la etapa 4</small></span></button></nav><div id="part-two-stage-content"></div><section class="part-two-section part-two-extras" id="part-two-extras" aria-labelledby="part-two-extras-title" hidden><header class="part-two-section-heading"><span class="part-two-step">Cierre</span><div><h4 id="part-two-extras-title">Videos complementarios y despedida</h4><p>Has completado las cuatro etapas. Continúa explorando ideas para cuidar el planeta.</p></div></header><div class="part-two-video-list">${activePartTwoExtraVideos.map(([id, title], index) => `<article class="part-two-video-card"><div class="video-box"><iframe src="https://www.youtube.com/embed/${id}?rel=0" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><div class="video-caption">Video complementario ${index + 1} · ${title} · <a href="https://youtu.be/${id}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></div></div></article>`).join('')}</div></section>`);
  const finalVideo = activePartTwoExtraVideos[0];
  const extrasTitle = modulePartTwo.querySelector('#part-two-extras-title');
  const extrasIntro = modulePartTwo.querySelector('.part-two-extras .part-two-section-heading p');
  const finalCaption = modulePartTwo.querySelector('.part-two-extras .video-caption');
  const finalIframe = modulePartTwo.querySelector('.part-two-extras iframe');
  if (extrasTitle) extrasTitle.textContent = 'Video final: despedida';
  if (extrasIntro) extrasIntro.textContent = 'Cierra esta ruta de aprendizaje con un mensaje para imaginar y construir un futuro mejor.';
  if (finalCaption) finalCaption.innerHTML = cleanPartTwoMarkup(`Video final · ${finalVideo[1]} · <a href="https://youtu.be/${finalVideo[0]}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a>`);
  if (finalIframe) {
    finalIframe.id = 'part-two-final-video-0';
    finalIframe.src = `https://www.youtube.com/embed/${finalVideo[0]}?enablejsapi=1&rel=0${location.protocol === 'http:' || location.protocol === 'https:' ? `&origin=${encodeURIComponent(location.origin)}` : ''}`;
    finalIframe.title = `Video final: ${finalVideo[1]}`;
    const player = finalIframe.closest('.video-box');
    player.insertAdjacentHTML('afterend', `<div class="part-two-video-footer"><p class="part-two-video-state" id="part-two-final-video-state">${courseProgress.courseCompleted ? 'Video final completado' : 'Mira el video de despedida para finalizar el curso.'}</p><button class="part-two-mark-watched" id="part-two-final-video-done" type="button" ${courseProgress.courseCompleted ? 'disabled' : ''}>${courseProgress.courseCompleted ? 'Visto ✓' : 'Marcar como visto al terminar'}</button></div>`);
  }
  const extras = modulePartTwo.querySelector('#part-two-extras');
  extras?.insertAdjacentHTML('beforeend', `<section class="course-completion" id="course-completion" ${courseProgress.courseCompleted ? '' : 'hidden'} role="status"><span class="course-completion-icon" aria-hidden="true">✓</span><h3>¡Felicidades, ha finalizado su Curso Comunitario!</h3><p>Gracias por completar este recorrido de aprendizaje y compromiso con su comunidad.</p><label for="certificate-participant-name">Nombre para el certificado</label><input id="certificate-participant-name" type="text" maxlength="80" placeholder="Escriba su nombre"><button class="btn" id="download-participation-certificate" type="button">Descargar certificado de participación</button></section>`);
  currentPartTwoStage = Math.min(courseProgress.partTwoStage || 0, highestUnlockedPartTwoStage());
  updatePartTwoNavigation();
  renderPartTwoStage(currentPartTwoStage);
  initializePartTwoPlayers(currentPartTwoStage);
  initializeFinalPartTwoPlayer();
}

function initializeFinalPartTwoPlayer() {
  if (!youtubeReady || currentModule !== 4 || courseProgress.modulePart !== 'II' || !courseProgress.finalStepOpen || !activePartTwoSections.every((_, index) => courseProgress.partTwoQuizzes?.[index]?.completed)) return;
  if (partTwoFinalPlayer) return;
  const iframe = modulePartTwo.querySelector('#part-two-final-video-0');
  if (!iframe || courseProgress.courseCompleted) return;
  partTwoFinalPlayer = new YT.Player(iframe, {
    playerVars: { enablejsapi: 1, rel: 0, ...(location.protocol === 'http:' || location.protocol === 'https:' ? { origin: location.origin } : {}) },
    events: { onStateChange(event) { if (event.data === YT.PlayerState.ENDED) completeCourse(); } }
  });
}

function setPartTwoStage(index) {
  if (index < 0 || index > highestUnlockedPartTwoStage()) return;
  courseProgress.finalStepOpen = false;
  currentPartTwoStage = index;
  courseProgress.partTwoStage = index;
  persistCourseProgress();
  updatePartTwoNavigation();
  renderPartTwoStage(index);
  initializePartTwoPlayers(index);
  initializeFinalPartTwoPlayer();
  modulePartTwo.querySelector('#part-two-stage-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function markPartTwoVideoWatched(stageIndex, videoIndex) {
  if (stageIndex !== currentPartTwoStage) return;
  courseProgress.partTwoVideos = courseProgress.partTwoVideos || {};
  const watched = new Set(courseProgress.partTwoVideos[stageIndex] || []);
  if (watched.has(videoIndex) || videoIndex !== nextPartTwoVideoIndex(stageIndex)) return;
  watched.add(videoIndex);
  courseProgress.partTwoVideos[stageIndex] = [...watched];
  persistCourseProgress();
  const allWatched = watched.size === activePartTwoSections[stageIndex].videos.length;
  renderPartTwoStage(stageIndex);
  initializePartTwoPlayers(stageIndex);
  const quiz = modulePartTwo.querySelector('.part-two-quiz');
  if (allWatched && quiz) quiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initializePartTwoPlayers(stageIndex) {
  partTwoPlayers.forEach(player => player?.destroy?.());
  partTwoPlayers = [];
  if (!youtubeReady || currentModule !== 4 || courseProgress.modulePart !== 'II') return;
  const videos = activePartTwoSections[stageIndex].videos;
  const videoIndex = nextPartTwoVideoIndex(stageIndex);
  if (new Set(courseProgress.partTwoVideos?.[stageIndex] || []).size >= videos.length) return;
  const player = new YT.Player(`part-two-video-${stageIndex}-${videoIndex}`, {
      playerVars: { enablejsapi: 1, rel: 0, ...(location.protocol === 'http:' || location.protocol === 'https:' ? { origin: location.origin } : {}) },
      events: {
        onStateChange(event) {
          if (event.data === YT.PlayerState.ENDED) markPartTwoVideoWatched(stageIndex, videoIndex);
        },
        onError() {
          const status = modulePartTwo.querySelector('.part-two-video-state');
          if (status) status.textContent = cleanPartTwoMarkup('No se pudo confirmar la reproducción. Usa el enlace de YouTube y marca el video como visto al terminar.');
        }
      }
  });
  partTwoPlayers.push(player);
}

modulePartTwo.addEventListener('click', event => {
  const finalStepButton = event.target.closest('[data-final-step]');
  if (finalStepButton && !finalStepButton.disabled) {
    courseProgress.finalStepOpen = true;
    persistCourseProgress();
    updatePartTwoNavigation();
    initializeFinalPartTwoPlayer();
    modulePartTwo.querySelector('#part-two-extras')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (event.target.closest('#part-two-final-video-done')) completeCourse();
  if (event.target.closest('#download-participation-certificate')) downloadParticipationCertificate();
  const markButton = event.target.closest('.part-two-mark-watched');
  if (markButton) markPartTwoVideoWatched(Number(markButton.dataset.stage), Number(markButton.dataset.video));
  const stageButton = event.target.closest('[data-stage-button]');
  if (stageButton && !stageButton.disabled) setPartTwoStage(Number(stageButton.dataset.stageButton));
  const nextButton = event.target.closest('[data-next-stage]');
  if (nextButton && !nextButton.hidden) setPartTwoStage(Number(nextButton.dataset.nextStage));
  const answerButton = event.target.closest('.part-two-evaluation-stage .quiz-options button[data-answer]');
  const nextQuestionButton = event.target.closest('.part-two-evaluation-stage .evaluation-next');
  const restartButton = event.target.closest('.part-two-quiz .evaluation-restart');
  const quiz = event.target.closest('.part-two-quiz');
  if (!quiz?._partTwoActions) return;
  if (answerButton) quiz._partTwoActions.answer(Number(answerButton.dataset.answer));
  else if (nextQuestionButton) quiz._partTwoActions.next();
  else if (restartButton) quiz._partTwoActions.restart();
});
let players = [];
let partTwoPlayers = [];
let partTwoFinalPlayer = null;
let youtubeReady = false;
let currentModule = 0;
let watchedVideos = new Set();
const pageNames = new Set(['inicio', 'introduccion', 'contenido', 'modulos']);
const pagePanels = [...document.querySelectorAll('[data-page]')];
const pageNavLinks = [...document.querySelectorAll('#links a')];
const houseProgressPanel = document.querySelector('#house-progress');
let currentHouseProgress = null;
let courseProgress = { page: 'inicio', moduleIndex: 0, modulePart: 'I', quizzes: {}, watchedVideos: {}, partTwoVideos: {}, partTwoQuizzes: {}, partTwoStage: 0 };
let progressSaveTimer;
renderActivePartTwo();

function persistCourseProgress() {
  const participantId = window.currentParticipant?.participantId;
  if (!participantId) return;
  try { localStorage.setItem(`conciencia-ambiental-progress-${participantId}`, JSON.stringify(courseProgress)); }
  catch (error) { console.warn('No se pudo guardar el avance en este navegador.', error); }
  window.clearTimeout(progressSaveTimer);
  progressSaveTimer = window.setTimeout(() => {
    const participant = window.currentParticipant;
    const writes = [];
    if (!participant?.householdLogin && typeof window.saveParticipantProgress === 'function') writes.push(window.saveParticipantProgress(participantId, courseProgress));
    if (typeof window.saveHouseholdCourseProgress === 'function' && participant?.numeroCasa) writes.push(window.saveHouseholdCourseProgress(participant.numeroCasa, courseProgress));
    Promise.all(writes).catch(error => console.warn('No se pudo sincronizar el avance con Firebase.', error));
  }, 500);
}

function saveQuizProgress(moduleIndex, quiz) {
  courseProgress.quizzes[moduleIndex] = quiz;
  persistCourseProgress();
}

window.updateHouseProgressUI = houseProgress => {
  if (!houseProgressPanel) return;
  if (!window.currentParticipant?.numeroCasa || !houseProgress) { houseProgressPanel.hidden = true; return; }
  currentHouseProgress = houseProgress;
  const completedModules = houseProgress.modulosCompletados || [];
  const completedCount = modules.filter(module => completedModules.includes(module.title)).length;
  houseProgressPanel.hidden = false;
  houseProgressPanel.innerHTML = `<div class="house-progress-heading"><strong>Avance de esta casa</strong><span>${completedCount} de ${modules.length} módulos completados · ${houseProgress.totalVisitasCasa || 0} visitas de integrantes</span></div><progress max="${modules.length}" value="${completedCount}" aria-label="La casa ha completado ${completedCount} de ${modules.length} módulos"></progress><div class="house-progress-modules">${modules.map((module, index) => `<span class="house-progress-chip${completedModules.includes(module.title) ? ' completed' : ''}">Módulo ${index + 1} · ${completedModules.includes(module.title) ? 'Completado' : 'Pendiente'}</span>`).join('')}</div>`;
  document.querySelectorAll('#tabs .tab, #mobile-tabs .tab').forEach((button, index) => button.classList.toggle('completed', completedModules.includes(modules[index % modules.length].title)));
};

window.restoreCourseProgress = (remoteProgress = null, houseProgress = null) => {
  const participantId = window.currentParticipant?.participantId;
  if (!participantId) return;
  let localProgressAvailable = false;
  try {
    const stored = remoteProgress || localStorage.getItem(`conciencia-ambiental-progress-${participantId}`);
    localProgressAvailable = Boolean(stored);
    courseProgress = stored ? { ...courseProgress, ...(typeof stored === 'string' ? JSON.parse(stored) : stored) } : { page: 'inicio', moduleIndex: 0, modulePart: 'I', quizzes: {}, watchedVideos: {} };
  } catch (error) { console.warn('No se pudo recuperar el avance guardado.', error); }
  renderActivePartTwo();
  if (window.currentParticipant?.householdLogin && !remoteProgress && !localProgressAvailable) {
    const completed = houseProgress?.modulosCompletados || [];
    const firstPendingIndex = modules.findIndex(module => !completed.includes(module.title));
    courseProgress.moduleIndex = firstPendingIndex === -1 ? modules.length - 1 : Math.max(firstPendingIndex, 0);
    courseProgress.page = 'modulos';
  }
  const moduleIndex = Math.max(0, Math.min(courseProgress.moduleIndex || 0, modules.length - 1));
  const savedModulePart = courseProgress.modulePart || 'I';
  showModule(moduleIndex);
  setModule5Part(moduleIndex === 4 ? savedModulePart : 'I');
  const destinationPage = window.currentParticipant?.householdLogin ? 'modulos' : pageNames.has(courseProgress.page) ? courseProgress.page : 'inicio';
  showPage(destinationPage, false);
  window.updateHouseProgressUI(houseProgress);
};

function showPage(page, scrollToTop = true) {
  if (!pageNames.has(page)) return;
  courseProgress.page = page;
  persistCourseProgress();
  pagePanels.forEach(panel => { panel.hidden = panel.dataset.page !== page; });
  pageNavLinks.forEach(link => {
    const active = link.hash === `#${page}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (page !== 'modulos') {
    players.forEach(player => player?.pauseVideo?.());
    partTwoPlayers.forEach(player => player?.pauseVideo?.());
    partTwoFinalPlayer?.pauseVideo?.();
  }
  document.querySelector('#topbar').classList.remove('hide');
  if (scrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setModule5Part(part) {
  const showPartTwo = part === 'II';
  courseProgress.modulePart = part;
  persistCourseProgress();
  card.hidden = showPartTwo;
  modulePartTwo.hidden = !showPartTwo;
  document.querySelector('#module-part-one-tab').classList.toggle('active', !showPartTwo);
  document.querySelector('#module-part-one-tab').setAttribute('aria-selected', String(!showPartTwo));
  document.querySelector('#module-part-two-tab').classList.toggle('active', showPartTwo);
  document.querySelector('#module-part-two-tab').setAttribute('aria-selected', String(showPartTwo));
  if (showPartTwo) {
    players.forEach(player => player?.pauseVideo?.());
    initializePartTwoPlayers(currentPartTwoStage);
    initializeFinalPartTwoPlayer();
  } else {
    partTwoPlayers.forEach(player => player?.pauseVideo?.());
    partTwoFinalPlayer?.pauseVideo?.();
  }
}

document.querySelector('#module-part-one-tab').addEventListener('click', () => setModule5Part('I'));
document.querySelector('#module-part-two-tab').addEventListener('click', () => setModule5Part('II'));

window.onYouTubeIframeAPIReady = () => {
  youtubeReady = true;
  initializePlayers();
  initializePartTwoPlayers(currentPartTwoStage);
  initializeFinalPartTwoPlayer();
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
          courseProgress.watchedVideos[currentModule] = [...watchedVideos];
          persistCourseProgress();
          const status = card.querySelector(`#video-status-${i}`);
          if (status) status.textContent = 'Video completado ✓';
          if (currentModule !== 4 && modules[currentModule].videos.every((video, index) => video.optional || watchedVideos.has(index))) {
            markHouseModuleCompleted(modules[currentModule].title);
            const reflection = card.querySelector('.module-reflection');
            if (reflection) reflection.hidden = false;
            const accessButton = card.querySelector('.module-evaluation-access');
            const accessNote = card.querySelector('.evaluation-access-note');
            if (accessButton) {
              accessButton.disabled = false;
              if (accessNote) accessNote.hidden = true;
              accessButton.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
              const evaluation = card.querySelector('.evaluation');
              if (evaluation) evaluation.hidden = false;
              (reflection || evaluation)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
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
  const answers = [];
  let resultSaved = false;

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
    answers[questionIndex] = { pregunta: module.questions[questionIndex][0], respuesta: button.dataset.answer, correcta: correctAnswer, esCorrecta: isCorrect };
    saveQuizProgress(currentModule, { questionIndex, score, answers, completed: false });
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
    saveQuizProgress(currentModule, { questionIndex: module.questions.length - 1, score, answers, completed: true });
    if (currentModule === 4) {
      const nextPartPrompt = card.querySelector('#module5-part-one-complete');
      if (nextPartPrompt) nextPartPrompt.hidden = false;
    }
    if (currentModule !== 4) markHouseModuleCompleted(module.title);
    if (!resultSaved && !window.currentParticipant?.householdLogin && typeof window.saveModuleResult === 'function') {
      resultSaved = true;
      window.saveModuleResult(module.title, score, module.questions.length, answers, currentModule !== 4).catch(error => console.warn('No se pudo guardar el resultado de la evaluación.', error));
    }
    const activity = card.querySelector('.module-activity');
    if (activity) {
      activity.hidden = false;
      activity.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  restart.addEventListener('click', () => {
    questionIndex = 0;
    score = 0;
    answers.length = 0;
    resultSaved = false;
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
  partTwoFinalPlayer?.pauseVideo?.();
  partTwoPlayers.forEach(player => player?.destroy?.());
  partTwoPlayers = [];
  currentModule = i;
  watchedVideos = new Set(courseProgress.watchedVideos[i] || []);
  courseProgress.moduleIndex = i;
  persistCourseProgress();
  const module = modules[i];
  const hasRequiredVideos = module.videos.some(video => !video.optional);
  const hasOptionalVideos = module.videos.some(video => video.optional);
  const moduleFivePartOne = i === 4;
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
    ${module.videos.length ? `<div class="video-progress"><strong>${moduleFivePartOne ? 'Video de apoyo' : 'Videos del módulo'}</strong><span>${moduleFivePartOne ? 'El video es complementario. Puedes acceder a la autoevaluación cuando quieras.' : hasOptionalVideos ? 'Completa los videos requeridos para desbloquear la autoevaluación. El video opcional no es necesario para el cuestionario.' : 'Completa todos los videos para desbloquear la autoevaluación.'}</span></div><div class="module-videos-list">${module.videos.map((video, index) => `<span class="video-status" id="video-status-${index}">Video ${index + 1} · ${video.optional ? 'Opcional' : 'Pendiente'}</span>`).join('')}</div>` : '<div class="video-progress"><strong>Sin video en este módulo</strong><span>La autoevaluación está disponible.</span></div>'}
    </div>${module.videos.length ? `<div class="module-videos">${module.videos.map((video, index) => `<div class="video-box"><iframe id="module-video-${index}" src="https://www.youtube.com/embed/${video.id}?enablejsapi=1&rel=0${location.protocol === 'http:' || location.protocol === 'https:' ? `&origin=${encodeURIComponent(location.origin)}` : ''}" title="${video.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><div class="video-caption">Video ${index + 1} · ${video.title} · <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></div></div>`).join('')}</div>` : ''}
    ${module.reflection ? `<aside class="module-reflection" hidden><span class="reflection-mark" aria-hidden="true">✦</span><div><span class="tag">Para reflexionar</span><h4>${module.reflection.question}</h4><p>${module.reflection.answer}</p></div></aside>` : ''}${i < 4 ? '<div class="evaluation-access-wrap"><button class="btn module-evaluation-access" type="button" disabled>Acceder a la autoevaluación</button><p class="evaluation-access-note">Completa los videos del módulo para habilitar la autoevaluación.</p></div>' : moduleFivePartOne ? '<button class="btn module-evaluation-access module5-evaluation-access" type="button">Acceder a la autoevaluación</button>' : ''}${renderEvaluation(module, i < 4 || moduleFivePartOne || hasRequiredVideos)}${module.activity ? `<section class="module-activity" hidden aria-labelledby="activity-title"><header><span class="activity-icon" aria-hidden="true">✎</span><div><span class="tag">Ponte en práctica</span><h4 id="activity-title">Actividad sugerida</h4><p>Toma un lápiz y un papel. Responde estas preguntas:</p></div></header><ol>${module.activity.map(prompt => `<li>${prompt}</li>`).join('')}</ol></section>` : ''}`;
  if (i === 0) {
    card.querySelectorAll('.overview-heading, .context-facts, .context-paragraph, .community-concept').forEach(element => element.remove());
    card.querySelector('.concept-map')?.insertAdjacentHTML('beforebegin', `<div class="module-overview-video video-box"><iframe src="https://www.youtube.com/embed/oOcZhKMxS00?rel=0" title="Video de conciencia ambiental" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><div class="video-caption">Video de apoyo · conciencia ambiental</div></div>`);
  }
  moduleParts.hidden = i !== 4;
  setModule5Part('I');
  card.querySelectorAll('.topic-strip details').forEach(detail => detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    card.querySelectorAll('.topic-strip details').forEach(other => {
      if (other !== detail) other.open = false;
    });
  }));
  setupEvaluation(module);
  const accessButton = card.querySelector('.module-evaluation-access');
  const accessNote = card.querySelector('.evaluation-access-note');
  if (accessButton && i < 4) {
    const requiredVideosComplete = module.videos.every((video, index) => video.optional || watchedVideos.has(index));
    accessButton.disabled = !requiredVideosComplete;
    if (accessNote) accessNote.hidden = requiredVideosComplete;
  }
  accessButton?.addEventListener('click', () => {
    if (accessButton.disabled) return;
    const evaluation = card.querySelector('.evaluation');
    if (!evaluation) return;
    evaluation.hidden = false;
    accessButton.hidden = true;
    evaluation.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  if (moduleFivePartOne) {
    card.querySelector('.evaluation')?.insertAdjacentHTML('afterend', `<section class="module5-part-one-complete" id="module5-part-one-complete" hidden role="status"><span class="tag">Siguiente paso</span><h3>¡Parte I completada!</h3><p>Ya puedes continuar con la Parte II del módulo 5: Acción Local para la Práctica Activa.</p><button class="btn" id="module5-go-part-two" type="button">Continuar a la Parte II <span aria-hidden="true">→</span></button></section>`);
    card.querySelector('#module5-go-part-two')?.addEventListener('click', () => {
      setModule5Part('II');
      modulePartTwo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  watchedVideos.forEach(index => {
    const status = card.querySelector(`#video-status-${index}`);
    if (status) status.textContent = 'Video completado ✓';
  });
  if (i !== 4 && module.videos.every((video, index) => video.optional || watchedVideos.has(index))) {
    markHouseModuleCompleted(module.title);
    const moduleAccessButton = card.querySelector('.module-evaluation-access');
    const accessNote = card.querySelector('.evaluation-access-note');
    if (moduleAccessButton) moduleAccessButton.disabled = false;
    if (accessNote) accessNote.hidden = true;
    if (!moduleAccessButton) {
      const evaluation = card.querySelector('.evaluation');
      if (evaluation) evaluation.hidden = false;
    }
  }
  const savedQuiz = courseProgress.quizzes[i];
  if (i === 4 && savedQuiz?.completed) {
    const nextPartPrompt = card.querySelector('#module5-part-one-complete');
    if (nextPartPrompt) nextPartPrompt.hidden = false;
  }
  if (savedQuiz?.completed) {
    const evaluation = card.querySelector('.evaluation');
    const stage = evaluation?.querySelector('.evaluation-stage');
    const result = evaluation?.querySelector('.evaluation-result');
    const restart = evaluation?.querySelector('.evaluation-restart');
    if (stage && result && restart) {
      stage.hidden = true;
      result.hidden = false;
      restart.hidden = false;
      result.textContent = `Resultado guardado: ${savedQuiz.score} de ${module.questions.length} respuestas correctas.`;
    }
  }
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
