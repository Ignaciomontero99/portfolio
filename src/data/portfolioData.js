export const profile = {
  name: 'Ignacio Montero López',
  role: 'Responsable técnico informático y desarrollador web y de aplicaciones',
  status: 'Disponible para nuevos proyectos',
  description:
  'Desarrollo interfaces modernas, funcionales y adaptadas a diferentes dispositivos. Además, cuento con experiencia como responsable técnico informático, gestionando incidencias, soporte técnico, mantenimiento de equipos y soluciones tecnológicas. Me gusta construir proyectos limpios, escalables y orientados a una buena experiencia de usuario.',
  email: 'ignaciomonterolopez99@gmail.com',
  github: 'https://github.com/Ignaciomontero99',
  linkedin: 'https://www.linkedin.com/in/nacho-montero-lopez/',
  cv: '/cv/CV_Nacho.pdf',
  heroImage: 'images/image.png',
};

export const about = {
  tag: 'Sobre mí',
  title: 'Perfil profesional',
  subtitle:
    'Una breve presentación sobre mi forma de trabajar, mis intereses y el tipo de proyectos que desarrollo.',
  heading: 'Desarrollador enfocado en crear soluciones útiles',
  paragraphs: [
    'Soy desarrollador con conocimientos en JavaScript, React, Java y Kotlin. Me interesa crear aplicaciones bien estructuradas, con una interfaz clara y una experiencia de usuario sencilla.',
    'También cuento con experiencia como responsable técnico informático, realizando tareas de soporte, mantenimiento, resolución de incidencias y gestión de soluciones tecnológicas.',
    'He trabajado en proyectos relacionados con desarrollo web, aplicaciones móviles, APIs REST y videojuegos. Me gusta aprender nuevas tecnologías y aplicar buenas prácticas para construir proyectos mantenibles y escalables.',
  ],
  cards: [
    {
      number: '01',
      title: 'Frontend',
      description: 'Interfaces modernas con React, React Native, JavaScript, Java, PHP, HTML, CSS y Kotlin.',
    },
    {
      number: '02',
      title: 'Backend',
      description: 'APIs, lógica de negocio, bases de datos, MySQL, Oracle y autenticación.',
    },
    {
      number: '03',
      title: 'Soporte técnico',
      description:
        'Resolución de incidencias, mantenimiento de equipos y gestión técnica.',
    },
  ],
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'React Native',
      'Vite',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Java',
      'PHP',
      'APIs REST',
      'Bases de datos',
      'MySQL',
      'Oracle',
      'JWT',
      'Symfony',
    ],
  },
  {
    category: 'Mobile y videojuegos',
    items: [
      'Kotlin',
      'Android Studio',
      'Unity',
    ],
  },
  {
    category: 'Herramientas de desarrollo',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'Docker',
      'VS Code',
      'IntelliJ IDEA',
      'Figma',
    ],
  },
  {
    category: 'Sistemas y soporte técnico',
    items: [
      'Windows',
      'Linux',
      'MacOS',
      'Mantenimiento de equipos',
      'Resolución de incidencias',
      'Soporte técnico',
      'Gestión de soluciones tecnológicas',
    ],
  },
  {
    category: 'Gestión y competencias',
    items: [
      'Jira',
      'Trello',
      'Slack',
      'Microsoft Office',
      'Google Workspace',
      'Comunicación efectiva',
      'Trabajo en equipo',
      'Gestión de proyectos',
      'Adaptabilidad',
      'Aprendizaje continuo',
    ],
  },
];

export const projects = [
  // Status --> Repositorio disponible, finalizado, en desarrollo, proximamente...
  {
    title: 'Aplicación Web - DAW',
    description:
        'Proyecto final de Desarrollo de Aplicaciones Web, desarrollado para aplicar conocimientos de frontend, backend, bases de datos y diseño de interfaces web.',
    technologies: ['PHP', 'JavaScript', 'Java', 'HTML', 'CSS', 'Laravel', 'MySQL'],
    image: 'images/Dreams.png',
    status: 'Repositorio disponible',
    links: [
      {
        label: 'Repositorio',
        url: 'https://github.com/Ignaciomontero99/TFG-Dreams',
        type: 'secondary',
      },
    ],
  },
  {
    title: 'TagFlow - DAM',
    description:
      'Red social desarrollada como TFG de DAM, compuesta por una API REST, una aplicación web y una aplicación móvil.',
    technologies: [
      'React',
      'React Native',
      'Symfony',
      'JWT',
      'MySQL',
      'Docker',
    ],
    image: 'images/Tagflow.png',
    status: 'Finalizado',
    featured: true,
    links: [
      {
        label: 'API',
        url: 'https://github.com/Ignaciomontero99/Tagflow-API',
        type: 'secondary',
      },
      {
        label: 'Web',
        url: 'https://github.com/Ignaciomontero99/TagFlow-APP-Web',
        type: 'secondary',
      },
      {
        label: 'Móvil',
        url: 'https://github.com/Ignaciomontero99/TagFlow-APP-Mobile',
        type: 'secondary',
      },
    ],
  },
  {
    title: 'Proximamente...',
    description:
      'Estoy trabajando en nuevos proyectos relacionados con desarrollo web, aplicaciones móviles y videojuegos. Pronto estarán disponibles para mostrar.',
    technologies: ['Próximamente'],
    image: null,
    status: 'Proximamente',
    links: [
      {
        label: 'Repositorio próximamente...',
        url: '#',
        type: 'secondary',
      },
    ],
  },
  
];

export const experience = [
  {
    year: '2025 - Presente',
    employer: 'CEF Centro de Estudios Financieros',
    title: 'Responsable técnico informático',
    description:
      'Gestión de incidencias, soporte técnico, mantenimiento de equipos y resolución de problemas tecnológicos.',
  },
  {
    year: '2026',
    employer: 'Universidad UDIMA',
    title: 'Prácticas en desarrollo multiplataforma - Full Stack Developer',
    description:
        'Desarrollo de aplicaciones web y móviles, gestión de APIs REST, gestión de bases de datos y colaboración en proyectos de software.',
  },
  {
    year: '2024',
    employer: 'Sagajean - Alojamiento Web y Servidores',
    title: 'Prácticas en desarrollo web - Frontend Developer',
    description:
        'Desarrollo de interfaces web con PHP, Java, JavaScript, HTML y CSS, centrado en la experiencia de usuario y el diseño responsive.',
  },
  {
    year: '2022 - 2023',
    employer: 'Fundación FISABIO - Investigación Sanitaria y Biomédica',
    title: 'Técnico informático nivel 1',
    description:
        'Soporte técnico, mantenimiento de equipos, resolución de incidencias y gestión de soluciones tecnológicas para usuarios finales.',
  },
  {
    year: '2018 - 2019',
    employer: 'Ayuntamiento de Alaquàs - Área de Informática',
    title: 'Prácticas en soporte técnico',
    description:
        'Soporte técnico, mantenimiento de equipos, resolución de incidencias y gestión de soluciones tecnológicas para usuarios finales.',
  },
];

export const education = [
  {
    year: '2024 - 2026',
    title: 'Desarrollo de Aplicaciones Multiplataforma',
    description:
      'Formación centrada en el desarrollo de aplicaciones móviles, escritorio, bases de datos, interfaces y servicios.',
  },
  {
    year: '2021 - 2024',
    title: 'Desarrollo de Aplicaciones Web',
    description:
      'Formación orientada al desarrollo frontend, backend, bases de datos, despliegue y creación de aplicaciones web.',
  },
  {
    year: '2017 - 2019',
    title: 'Sistemas Microinformáticos y Redes',
    description:
      'Formación enfocada en soporte técnico, mantenimiento de equipos, redes, sistemas operativos y gestión de soluciones tecnológicas.',
  },
];

export const contact = {
  tag: 'Contacto',
  title: '¿Hablamos?',
  subtitle:
    'Si quieres contactar conmigo, revisar algún proyecto o proponer una colaboración, puedes escribirme a través de estos enlaces.',
  heading: 'Envíame un mensaje',
  description:
    'Estoy disponible para nuevos proyectos, prácticas, colaboraciones o propuestas relacionadas con desarrollo web, aplicaciones y soporte técnico informático.',
};

export const footer = {
  text: '© 2026 Portafolio. Desarrollado con React.',
};