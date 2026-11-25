"use client";

import { shared } from "@/content";
import { LangToggle } from "./LangToggle";
import { useContent } from "./LangProvider";
import { LocalTime } from "./LocalTime";
import { ThemeToggle } from "./ThemeToggle";

export function TopBar() {
  const { nav, localTimeAria, timeLocale } = useContent();
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-rule/60 bg-[color-mix(in_oklab,var(--bg)_78%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="display text-sm font-semibold tracking-tight">
          {shared.shortName}
          <span className="text-accent">.</span>
        </a>
        <nav aria-label={nav.map((n) => n.label).join(", ")} className="label hidden gap-6 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-accent">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="label flex items-center gap-4">
          <span className="hidden sm:inline">
            {shared.location} <LocalTime timeZone={shared.timezone} locale={timeLocale} label={localTimeAria} />
          </span>
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
