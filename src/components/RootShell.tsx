import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import type { ReactNode } from "react";
import type { Lang } from "@/content";
import { themeScript } from "@/lib/theme-script";
import { SceneLoader } from "./scene/SceneLoader";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Documento HTML completo. Hay un layout raíz por idioma (`(en)` y `(es)`), así cada
 * uno declara su `lang` y el cambio de idioma es una carga completa de página.
 */
export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning className={`${bricolage.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Aplica el tema guardado antes del primer pintado, para evitar el destello. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <SceneLoader />
        {children}
      </body>
    </html>
  );
}
