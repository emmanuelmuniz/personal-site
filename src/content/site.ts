/**
 * Todo el texto del sitio vive acá.
 * Cambiá cualquier string y la página se actualiza; no hace falta tocar componentes.
 */

export const site = {
  name: "Emmanuel Muñiz Adaro",
  shortName: "Emmanuel",
  role: "Full Stack Developer",
  location: "Mendoza, AR",
  timezone: "America/Argentina/Mendoza",
  year: "2026",
  heroLine: "Llevo modelos de lenguaje a productos reales.",
  tagline:
    "Seis años construyendo aplicaciones web, móviles y sistemas para empresas. Últimamente, llevando modelos de lenguaje a producción: agentes de voz, clasificación de documentos, evaluación de modelos.",
  intro: [
    "Soy Licenciado en Informática y Desarrollo de Software. Trabajé en equipos y contextos muy distintos: consultoras, una telco, una empresa de producto, proyectos freelance. Eso me dio una mirada completa del stack, del backend en Java o Node hasta la interfaz en React.",
    "Lo que más me interesa hoy es el punto donde la IA se vuelve software real: integrar modelos como OpenAI y Gemini en productos que la gente usa todos los días, y entender cómo se evalúan y entrenan. Me importa que los sistemas escalen, sean seguros y resuelvan algo concreto.",
  ],
  email: "munizadaroemmanuel@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/emmanuelmuniz", handle: "/in/emmanuelmuniz" },
    { label: "GitHub", href: "https://github.com/emmanuelmuniz", handle: "@emmanuelmuniz" },
  ],
} as const;

/** Herramientas chicas, abiertas y usables. Cada una vive en su propio repo. */
export type Tool = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  year: string;
  url: string;
  repo: string;
  status: "live" | "soon";
};

export const tools: Tool[] = [
  {
    name: "LLM Costs",
    tagline: "¿Cuánto cuesta ese prompt?",
    description:
      "Pegás un texto o escribís tokens, elegís modelos y ves el costo por llamada, por día y por mes. Los precios se actualizan en vivo desde el catálogo público de OpenRouter, sobre un snapshot verificado contra cada proveedor. Corre entero en el navegador: sin keys, sin cuentas, sin tracking.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    year: "2026",
    url: "https://llm-costs-app.vercel.app",
    repo: "https://github.com/emmanuelmuniz/llm-costs",
    status: "live",
  },
];

/** Lo que viene después. Una línea, sin promesas grandes. */
export const toolsNext = "En camino: un playground de salida estructurada y un visor de conversaciones de agentes.";

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  mode?: string; // Remoto, Híbrido
  summary: string;
  /** Dos o tres líneas concretas de en qué trabajó el equipo. En plural, sin inflar. */
  highlights?: string[];
  stack: string[];
  href?: string;
};

export const experience: Experience[] = [
  {
    company: "micro1",
    role: "AI Training Expert",
    start: "2026",
    end: "Presente",
    mode: "Remoto · contratista",
    summary:
      "Soporte a pipelines de entrenamiento de IA: evaluación de respuestas, revisión de razonamiento técnico y aporte de conocimiento de dominio.",
    stack: ["Evaluación de modelos", "Ingeniería de software"],
  },
  {
    company: "Alignerr",
    role: "Data Annotator · Software Engineer",
    start: "2026",
    end: "2026",
    mode: "Remoto · contratista",
    summary:
      "Evaluación de LLMs en tareas de código. Redacción de soluciones de referencia, casos de prueba y rúbricas.",
    stack: ["Java", "TypeScript", "Python"],
  },
  {
    company: "Lazo",
    role: "Software Developer",
    start: "2025",
    end: "2026",
    mode: "Remoto",
    summary: "Equipo de producto. Backend en Java y Spring Boot, herramientas internas en Next.js.",
    highlights: [
      "Gemini en producción: chatbots, clasificación automática de documentos y generación de instrucciones para formularios de impuestos, sobre servicios Java con Spring Boot.",
      "Herramientas internas con Next.js y React, bases MySQL y despliegues en AWS.",
    ],
    stack: ["Java", "Spring Boot", "Next.js", "MySQL", "AWS"],
  },
  {
    company: "Mirlo Telecom",
    role: "Software Developer",
    start: "2024",
    end: "2025",
    mode: "Híbrido",
    summary: "Telco. Sistemas con NestJS en microservicios y arquitectura hexagonal sobre PostgreSQL y AWS.",
    highlights: [
      "Agentes de voz con OpenAI para atender y realizar llamadas en tiempo real, con la orquestación de la conversación y la automatización de los flujos detrás.",
      "Mensajería por SMS, WhatsApp y email, CRM interno y gestión de catálogos y ofertas: microservicios NestJS con arquitectura hexagonal sobre PostgreSQL y AWS.",
    ],
    stack: ["NestJS", "PostgreSQL", "AWS", "OpenAI"],
  },
  {
    company: "Freelance",
    role: "NestJS, Next.js y React Developer",
    start: "2024",
    end: "2024",
    mode: "Remoto",
    summary:
      "Aplicaciones web y APIs REST para clientes. Autenticación de usuarios con MongoDB y Next.js. PostgreSQL, MongoDB y Firebase.",
    stack: ["Next.js", "NestJS", "Tailwind", "MongoDB"],
  },
  {
    company: "Globant",
    role: "Java Developer",
    start: "2021",
    end: "2023",
    mode: "Remoto",
    summary:
      "APIs de microservicios en Java, bases de datos no relacionales, pruebas con JUnit y Mockito, servicios de Google Cloud.",
    stack: ["Java", "Microservicios", "GCP", "JUnit"],
  },
  {
    company: "Fixxin Consultoría & Soluciones",
    role: "Frontend Developer",
    start: "2020",
    end: "2021",
    mode: "Remoto",
    summary:
      "Apps móviles con Ionic para órdenes de telecomunicaciones y cronometraje, y una plataforma web de alquileres temporarios con Angular.",
    stack: ["Ionic", "Angular", "MySQL", "PostgreSQL"],
  },
];

/** Foto en /public. */
export const photo = {
  src: "/photo.jpg",
  alt: "Retrato de Emmanuel Muñiz Adaro",
};

export const education = {
  institution: "Universidad del Aconcagua",
  degree: "Licenciatura en Informática y Desarrollo de Software",
  location: "Mendoza, Argentina",
  start: "2019",
  end: "2024",
};

export const now = {
  title: "Ahora",
  items: [
    "Trabajando en evaluación y entrenamiento de modelos de IA.",
    "Profundizando en cómo llevar LLMs a producción de forma confiable.",
    "Armando este sitio.",
  ],
};
