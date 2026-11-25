/** Datos que no dependen del idioma. */
export const shared = {
  name: "Emmanuel Muñiz Adaro",
  shortName: "Emmanuel",
  location: "Mendoza, AR",
  timezone: "America/Argentina/Mendoza",
  year: "2026",
  email: "munizadaroemmanuel@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/emmanuelmuniz", handle: "/in/emmanuelmuniz" },
    { label: "GitHub", href: "https://github.com/emmanuelmuniz", handle: "@emmanuelmuniz" },
  ],
  photo: { src: "/photo.jpg" },
} as const;

export const llmCosts = {
  name: "LLM Costs",
  stack: ["React", "TypeScript", "Vite", "Tailwind"],
  year: "2026",
  url: "https://llm-costs-app.vercel.app",
  repo: "https://github.com/emmanuelmuniz/llm-costs",
  status: "live",
} as const;
