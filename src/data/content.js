// Contenido editorial de Luminarum — centralizado para fácil edición.

export const disciplines = [
  { rune: 'ᚱ', name: 'Runas y Galdr', desc: 'El alfabeto sagrado nórdico: lectura, bindrunes y cantos de poder.', count: '12 cursos' },
  { rune: '☉', name: 'Astrología Arcana', desc: 'Cartas natales, tránsitos y la danza de los astros sobre el destino.', count: '9 cursos' },
  { rune: '✶', name: 'Tarot y Oráculos', desc: 'Arcanos mayores y menores, tiradas y lectura intuitiva profunda.', count: '11 cursos' },
  { rune: '☿', name: 'Alquimia y Herbolaria', desc: 'Pociones, esencias y la transmutación de la materia y el alma.', count: '8 cursos' },
  { rune: '☾', name: 'Brujería Lunar', desc: 'Hechizos, ciclos de la luna, sabbats y la rueda del año.', count: '14 cursos' },
  { rune: '✦', name: 'Energía y Sanación', desc: 'Cristales, chakras, reiki y limpieza del campo etérico.', count: '10 cursos' },
]

export const path = [
  { deg: 'Iniciación', title: 'Aprendiz', desc: 'Fundamentos de las artes mágicas, protección y ética del oficio.' },
  { deg: 'Primer círculo', title: 'Adepto', desc: 'Especialización en tu disciplina y prácticas rituales guiadas.' },
  { deg: 'Segundo círculo', title: 'Artífice', desc: 'Trabajo avanzado, mentorías 1:1 y proyectos de magia aplicada.' },
  { deg: 'Maestría', title: 'Magister', desc: 'Certificación etérea, enseñanza y tu propio grimorio de autor.' },
]

export const mentors = [
  { initials: 'EV', name: 'Elara V* | Vala', role: 'Maestra de Runas', bio: 'Vidente y rúnologa con 18 años recorriendo la tradición nórdica.' },
  { initials: 'TA', name: 'Tobías Arcanum', role: 'Astrólogo', bio: 'Cartas natales y astrología kármica para miles de consultantes.' },
  { initials: 'MN', name: 'Morgana Nyx', role: 'Bruja Lunar', bio: 'Guardiana de la rueda del año y la magia de las diosas.' },
  { initials: 'CS', name: 'Cipriano Salt', role: 'Alquimista', bio: 'Herbolario y maestro de la espagiria y los elixires.' },
]

export const plans = [
  {
    tier: 'Aprendiz',
    price: '$0',
    per: '/ siempre',
    tagline: 'Cruza el umbral y prueba el sendero.',
    features: ['3 cursos introductorios', 'Acceso a la comunidad', 'Boletín lunar mensual', '1 ritual guiado en vivo'],
    cta: 'Empezar gratis',
    featured: false,
  },
  {
    tier: 'Círculo Etéreo',
    price: '$24',
    per: '/ mes',
    tagline: 'Acceso total a la universidad etérea.',
    features: [
      'Todos los cursos y disciplinas',
      'Clases en vivo cada semana',
      'Biblioteca arcana completa',
      'Círculos de práctica y rituales',
      'Certificaciones por nivel',
    ],
    cta: 'Unirme al círculo',
    featured: true,
  },
  {
    tier: 'Magister',
    price: '$59',
    per: '/ mes',
    tagline: 'Mentoría personal hacia la maestría.',
    features: [
      'Todo lo del Círculo Etéreo',
      'Mentorías 1:1 mensuales',
      'Lecturas y cartas personales',
      'Acceso anticipado a retiros',
      'Tutoría para tu propio grimorio',
    ],
    cta: 'Buscar la maestría',
    featured: false,
  },
]

export const testimonials = [
  { quote: 'Luminarum convirtió mi curiosidad por las runas en una práctica diaria. Es la escuela que siempre busqué.', name: 'Daniela R.', meta: 'Bogotá · Adepta de Runas' },
  { quote: 'Las clases en vivo y la biblioteca valen mil veces la suscripción. Siento que estudio en una verdadera universidad mágica.', name: 'Mateo L.', meta: 'CDMX · Círculo Etéreo' },
  { quote: 'Pasé de leer tarot por hobby a certificarme y dar mis propias consultas. Las mentoras son de otro mundo.', name: 'Carolina V.', meta: 'Medellín · Magister' },
]

export const faqs = [
  { q: '¿Necesito experiencia previa en magia?', a: 'En absoluto. El sendero comienza con la Iniciación del Aprendiz, pensada desde cero. Avanzas a tu ritmo por cada círculo de conocimiento.' },
  { q: '¿Cómo funciona la suscripción?', a: 'Con un solo plan accedes a todas las disciplinas, clases en vivo y la biblioteca arcana. Puedes pausar o cancelar cuando quieras, sin ataduras.' },
  { q: '¿Las certificaciones tienen validez?', a: 'Emitimos certificaciones internas por cada nivel completado (Aprendiz, Adepto, Artífice y Magister), reconocidas dentro de la comunidad y avaladas por nuestros maestros.' },
  { q: '¿Las clases son en vivo o grabadas?', a: 'Ambas. Cada semana hay encuentros en vivo con maestros, y todo queda grabado en tu biblioteca para revisarlo cuando lo necesites.' },
  { q: '¿En qué idioma está el contenido?', a: 'Todo el contenido es originalmente en español, creado por maestros hispanohablantes de toda Latinoamérica y España.' },
]
