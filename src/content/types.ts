export type Lang = "en" | "es";

export type Experience = {
  company: string;
  role: string;
  start: string;
  /** Año de fin, o `null` si sigue vigente. */
  end: string | null;
  mode?: string;
  summary: string;
  highlights?: string[];
  stack: string[];
};

export type Education = {
  institution: string;
  degree: string;
  location: string;
  start: string;
  end: string;
};

/** Todo el texto de un idioma. Las dos versiones comparten esta forma. */
export type Content = {
  lang: Lang;
  /** Etiqueta del toggle para pasar al otro idioma. */
  otherLang: { lang: Lang; label: string; href: string; aria: string };
  meta: { title: string; description: string; ogLocale: string };
  role: string;
  heroLine: string;
  tagline: string;
  intro: string[];
  nav: { href: string; label: string }[];
  sections: { about: string; experience: string; education: string; contact: string };
  /** Mención breve de la herramienta abierta, al final de "Sobre mí". */
  aside: { label: string; name: string; text: string; href: string };
  experienceIntro: string;
  experience: Experience[];
  present: string;
  education: Education;
  now: { title: string; items: string[] };
  contactHeadline: string;
  copy: { idle: string; done: string };
  theme: { label: string; dark: string; light: string; toLight: string; toDark: string };
  localTimeAria: string;
  timeLocale: string;
};
