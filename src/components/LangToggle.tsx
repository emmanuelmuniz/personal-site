"use client";

import { useContent } from "./LangProvider";

/** Pasa al otro idioma. Son dos layouts raíz (`/` y `/es`): el cambio es una carga completa, a propósito. */
export function LangToggle() {
  const { lang, otherLang } = useContent();
  return (
    <a
      href={otherLang.href}
      hrefLang={otherLang.lang}
      aria-label={otherLang.aria}
      className="label flex cursor-pointer items-center gap-1.5 rounded-full border border-rule px-3 py-1.5 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="text-faint">{lang.toUpperCase()}</span>
      <span aria-hidden className="text-faint">
        /
      </span>
      <span>{otherLang.label}</span>
    </a>
  );
}
