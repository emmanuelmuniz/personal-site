import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { getContent } from "@/content";

const c = getContent("en");

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: "/", languages: { en: "/", es: "/es" } },
  openGraph: { title: c.meta.title, description: c.meta.description, type: "website", locale: c.meta.ogLocale },
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
