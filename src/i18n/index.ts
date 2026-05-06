import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      experience: 'Experience',
    },
    hero: {
      iam: "I'm",
      hi: 'Hi',
      subtitle: 'Full Stack Developer',
      description: 'I create beautiful and functional web applications',
      contact: 'Contact Me',
      projects: 'View Projects',
    },
    experience: {
      title: 'Experience',
      exp1: {
        title: 'Frontend Developer',
        company: 'Sioma Eco Zomac',
        period: 'Mar 2025 - Feb 2026',
        description:  "I maintained and implemented web developments in a hybrid PHP+React environment, led the migration of the legacy project to a new environment with Next.js using modern technologies such as Tailwindcss, Zustand, Shadcn, among others",
        technologies: ['React.js', 'PHP', 'TypeScript', 'Docker', 'Next.js', 'Tailwindcss', 'Zustand', 'Shadcn', "Redux"],
      },
      exp2: {
        title: 'Software Engineer',
        company: 'Cuculi Inc',
        period: 'May 2024 - Sep 2024',
        description: "I developed web and mobile applications using Vue.js and Node.js. My biggest challenge was resolving the camera permissions issue between Expo 42 and Expo 44 on Android devices. I strengthened my responsive design skills",
        technologies: ['VueJS', 'Node.js', 'TypeScript', 'MongoDB','React Native', 'Angular'],
      },
      exp3: {
        title: 'Mobile Application Developer',
        company: 'Magdalena University',
        period: 'Aug 2022 - Jul 2024',
        description: "I developed a PWA using Next JS, PostgresQL, TailwindCSS, Prisma, Redux, Node, and Express. My biggest challenge was understanding the project requirements and deciding how and with what technologies to execute it. I also developed an administrative portal using VueJS, Pinia, TailwindCSS, NodeJS, Express, and PostgresSQL",
        technologies: ['React', 'JavaScript', 'REST APIs', 'TailwindCSS', 'Prisma', 'Redux', 'PostgresQL', 'VueJS'],
      },
    },
    about: {
      title: 'About Me',
      description1:
        "I'm a passionate Full Stack Developer with experience in building modern web applications. I specialize in React, Vue.js, Node.js, and various modern web technologies.",
      description2:
        'My goal is to create beautiful, functional, and user-friendly applications that solve real-world problems.',
    },
    skills: {
      title: 'My Skills',
      soft: 'Soft',
      hard: 'Hard',
      softSkills:
        "Communitation: I have introduced a bug and I don't know how to solve it. I contact my colleagues, bosses or the appropriate person to discuss the problem and find a solution; Teamwork: I finished my work, but my colleague is stuck with a problem. I am looking for a way to help him and so our team is doing well; Problem solving: Our boss need a preview of the application working, but the backend is not ready. I use a mockup; Time Management: I list all my tasks for the week and assign time to them, so I know how much time I have available and how many tasks I can take on; Adaptability: The requirements of the project changed, and I had to adjust my approach. I quickly learned the new specifications and adapted my work to meet the updated goals",
    },

    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      title1: 'Website created in 1 hour for a client',
      description1: 'A simple yet elegant website for a client company',
      title2: 'Administrative portal for soccer fields for a client',
      description2: 'Simple and functional website to manage payments made by customers to different soccer field recreation establishments.',
      title3: 'Medical App',
      description3:'This app connects to a backend that processes data from a Cardiac Holter to display the data as medical support',
      title4: 'Infrigment defender',
      description4: "Chatbot integrated into a backend connected to an OpenAI assistant that, based on Colombian traffic laws, answers users' questions about regulations and can be used as a legal advisor",
      title5: 'Authentication and authorization system',
      description5: 'Authentication and authorization system for an agricultural company',
      title6: 'Fylakax',
      description6: 'Monolith application for an events with friends',
    },
    contact: {
      title: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      thanks: 'Thanks for contacting me, I will get back to you as soon as possible.',
    },
    footer: {
      rights: 'You can visit my portfolio on GitHub',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      experience: 'Experiencia',
    },
    hero: {
      iam: 'soy',
      hi: 'Hola',
      subtitle: 'Desarrollador Full Stack',
      description: 'Creo aplicaciones web hermosas y funcionales',
      contact: 'Contáctame',
      projects: 'Ver Proyectos',
    },
    experience: {
      title: 'Experiencia',
      exp1: {
        title: 'Desarrollador frontend',
        company: 'Sioma Eco Zomac',
        period: 'Mar 2025 - Feb 2026',
        description:  "Mantuve e implemente de desarrollos web en entorno híbrido PHP+React, lideré migración del proyecto legacy a nuevo entorno con Next.js usando tecnologías modernas como Tailwindcss, Zustand, Shadcn,  entre otras",
        technologies: ['React.js', 'PHP', 'TypeScript', 'Docker', 'Next.js', 'Tailwindcss', 'Zustand', 'Shadcn', "Redux"],
      },
      exp2: {
        title: 'Ingeniero de Software',
        company: 'Cuculi Inc',
        period: 'May 2024 - Sep 2024',
        description:  "Estuve desarrollando para aplicaciones web y mobile utilizando Vue.js y Node.js; Mi mayor reto fue resolver el breaking change entre expo 42 y expo 44 con los permisos de camara en dispositivos android; Fortalecí mis habilidades para realizar diseños responsivos",
        technologies: ['Vue.js', 'Node.js', 'TypeScript', 'MongoDB'],
      },
      exp3: {
        title: 'Desarrollador de aplicaciones móviles',
        company: 'Universidad del Magdalena',
        period: 'Ago 2022 - Jul 2024',
        description: "Realicé el desarrollo de un PWA con Next JS, PostgresQL, TailwindCSS, Prisma, Redux, Node, Express; Mi mayor reto fue entender los requerimientos del proyecto y decidir cómo y con qué tecnologías realizarlo; También desarrollé de portal administrativo con VueJS, Pinia, TailwindCSS, NodeJS, Express y PostgresSQL",
        technologies: ['React', 'JavaScript', 'CSS3', 'REST APIs'],
      },
    },
    about: {
      title: 'Sobre Mí',
      description1:
        'Soy un Desarrollador Full Stack apasionado con experiencia en la construcción de aplicaciones web modernas. Me especializo en React, Vue.js, Node.js y varias tecnologías web modernas.',
      description2:
        'Mi objetivo es crear aplicaciones hermosas, funcionales y fáciles de usar que resuelvan problemas del mundo real.',
    },
    skills: {
      title: 'Mis Habilidades',
      soft: 'Blandas',
      hard: 'Duras',
      softSkills:
        'Comunicación: He introducido un bug y no sé cómo resolverlo. Me comunico con mis compañeros, jefes o persona indicada para tratar el problema y darle solución; Trabajo en equipo: Terminé mi trabajo, pero mi compañero está bloqueado con un problema. Busco la forma de ayudarle y así nuestro equipo queda bien; Resolución de problemas: Nuestro jefe necesitas una vista previa del aplicativo funcionando, pero el backend no está listo. Uso un datos de prueba; Gestión del tiempo: Enumero todas las tareas de mis semanas y les asigno tiempo, así sé cuánto tiempo tengo disponible y qué tantas tareas puedo tomar; Adaptabilidad: Los requisitos del proyecto cambiaron y tuve que adaptar mi enfoque. Aprendí rápidamente las nuevas especificaciones y adapté mi trabajo para cumplir con los objetivos actualizados',
    },
    projects: {
      title: 'Proyectos',
      viewProject: 'Ver Proyecto',
      title1: 'Web creada en 1 hora para un cliente',
      description1: 'Un sitio web simple pero elegante para una empresa cliente',
      title2: 'Portal administrativo de canchas de fútbol para un cliente',
      description2: 'Página web simple y funcional para administrar los pagos realizados por clientes a diferentes establecimientos de recreación de canchas de fútbol',
      title3: 'App Médica',
      description3:'Esta app se conecta con backend que procesa los datos de un Holter Cardíaco para visualizar los datos como apoyo médico',
      title4: 'Defensor de infracciones',
      description4: 'Chatbot integrado a un backend conectado a un asistente de openai que, basado en las leyes de tránsito colombianas, responde a los usuarios acerca de la normativa y puede ser usuado como asesor legal',
      title5: 'Sistema de autenticación y autorización',
      description5: 'Sistema de autenticación y autorización para una empresa de agricultura',
      title6: 'Fylakax',
      description6: 'Aplicación monolítica para eventos con amigos',
    },
    contact: {
      title: 'Contacto',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      thanks: 'Gracias por contactarme, me pondré en contacto contigo lo antes posible.',
    },
    footer: {
      rights: 'Puedes visitar mi portafolio en GitHub',
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
