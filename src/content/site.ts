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
  heroLine: "Integro modelos de lenguaje en sistemas de producción.",
  tagline:
    "Seis años de desarrollo de software: backends en Java y Node.js, interfaces en React y Next.js, infraestructura en AWS y GCP. En los últimos dos, aplicación de LLMs a productos en uso: agentes de voz, clasificación de documentos y evaluación de modelos.",
  intro: [
    "Licenciado en Informática y Desarrollo de Software por la Universidad del Aconcagua. Trabajé en consultoras, en una empresa de telecomunicaciones, en una empresa de producto y en proyectos independientes, con equipos de distinto tamaño y madurez técnica. Esa trayectoria cubre el ciclo completo de un sistema: diseño de APIs, modelado de datos, interfaz, despliegue y operación.",
    "Mi foco actual es la integración de modelos de lenguaje en software de producción: orquestación de agentes, pipelines de clasificación y extracción, y evaluación sistemática de modelos. Aplico a estos componentes los mismos criterios que a cualquier otro: deben ser medibles, seguros y mantenibles.",
  ],
  email: "munizadaroemmanuel@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/emmanuelmuniz", handle: "/in/emmanuelmuniz" },
    { label: "GitHub", href: "https://github.com/emmanuelmuniz", handle: "@emmanuelmuniz" },
  ],
} as const;

/** Herramientas de código abierto. Cada una tiene su propio repositorio. */
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
    tagline: "Costo por llamada, por modelo.",
    description:
      "Calcula el costo por llamada, por día y por mes de un prompt, a partir de un texto o de una cantidad de tokens, para los modelos seleccionados. Los precios se actualizan desde el catálogo público de OpenRouter sobre un snapshot verificado contra cada proveedor. Se ejecuta íntegramente en el navegador: sin claves, sin cuentas y sin seguimiento.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    year: "2026",
    url: "https://llm-costs-app.vercel.app",
    repo: "https://github.com/emmanuelmuniz/llm-costs",
    status: "live",
  },
];


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
      "Evaluación de respuestas de modelos, revisión de razonamiento técnico y aporte de conocimiento de dominio para pipelines de entrenamiento de IA.",
    stack: ["Evaluación de modelos", "Ingeniería de software"],
  },
  {
    company: "Alignerr",
    role: "Data Annotator · Software Engineer",
    start: "2026",
    end: "2026",
    mode: "Remoto · contratista",
    summary:
      "Evaluación de modelos de lenguaje en tareas de programación: soluciones de referencia, casos de prueba y rúbricas de calificación.",
    stack: ["Java", "TypeScript", "Python"],
  },
  {
    company: "Lazo",
    role: "Software Developer",
    start: "2025",
    end: "2026",
    mode: "Remoto",
    summary: "Equipo de producto. Servicios backend en Java y Spring Boot; herramientas internas en Next.js.",
    highlights: [
      "Integración de Gemini en producción: asistentes conversacionales, clasificación automática de documentos y generación de instrucciones para formularios impositivos, sobre servicios Java con Spring Boot.",
      "Herramientas internas en Next.js y React, con MySQL y despliegues en AWS.",
    ],
    stack: ["Java", "Spring Boot", "Next.js", "MySQL", "AWS"],
  },
  {
    company: "Mirlo Telecom",
    role: "Software Developer",
    start: "2024",
    end: "2025",
    mode: "Híbrido",
    summary: "Empresa de telecomunicaciones. Microservicios en NestJS con arquitectura hexagonal, sobre PostgreSQL y AWS.",
    highlights: [
      "Agentes de voz con OpenAI para atención y emisión de llamadas en tiempo real, incluyendo la orquestación de la conversación y la automatización de los flujos asociados.",
      "Mensajería por SMS, WhatsApp y correo electrónico, CRM interno y gestión de catálogos y ofertas comerciales.",
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
      "Aplicaciones web y APIs REST para clientes. Autenticación de usuarios y persistencia en PostgreSQL, MongoDB y Firebase.",
    stack: ["Next.js", "NestJS", "Tailwind", "MongoDB"],
  },
  {
    company: "Globant",
    role: "Java Developer",
    start: "2021",
    end: "2023",
    mode: "Remoto",
    summary:
      "APIs basadas en microservicios en Java, bases de datos no relacionales, pruebas unitarias con JUnit y Mockito, y servicios de Google Cloud.",
    stack: ["Java", "Microservicios", "GCP", "JUnit"],
  },
  {
    company: "Fixxin Consultoría & Soluciones",
    role: "Frontend Developer",
    start: "2020",
    end: "2021",
    mode: "Remoto",
    summary:
      "Aplicaciones móviles en Ionic para gestión de órdenes de telecomunicaciones y control de tiempos, y una plataforma web de alquileres temporarios en Angular.",
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
  title: "Actualmente",
  items: [
    "Evaluación y entrenamiento de modelos de IA, como contratista.",
    "Diseño de sistemas con LLMs en producción: agentes, evaluación y control de costos.",
    "Abierto a propuestas en equipos de producto.",
  ],
};
