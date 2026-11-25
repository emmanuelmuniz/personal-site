import { en } from "./en";
import { es } from "./es";
import type { Content, Lang } from "./types";

export { shared } from "./shared";
export type { Content, Lang } from "./types";

const contents: Record<Lang, Content> = { en, es };

/** Texto del sitio en un idioma. Inglés es el predeterminado (`/`); español vive en `/es`. */
export function getContent(lang: Lang): Content {
  return contents[lang];
}
