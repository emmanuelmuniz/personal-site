"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Content } from "@/content";

const Ctx = createContext<Content | null>(null);

/** Entrega el texto del idioma activo a todos los componentes. El `lang` del documento lo pone el layout raíz. */
export function LangProvider({ content, children }: { content: Content; children: ReactNode }) {
  return <Ctx.Provider value={content}>{children}</Ctx.Provider>;
}

export function useContent(): Content {
  const c = useContext(Ctx);
  if (!c) throw new Error("useContent fuera de LangProvider");
  return c;
}
