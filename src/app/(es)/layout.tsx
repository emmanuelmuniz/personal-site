import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { getContent } from "@/content";

const c = getContent("es");

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: "/es", languages: { en: "/", es: "/es" } },
  openGraph: { title: c.meta.title, description: c.meta.description, type: "website", locale: c.meta.ogLocale },
};

export default function EsLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
