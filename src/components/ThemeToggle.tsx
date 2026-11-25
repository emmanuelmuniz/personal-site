"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

/** Suscripción al atributo data-theme del <html>, sin estado duplicado. */
function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
}
const getSnapshot = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
const getServerSnapshot = (): Theme | null => null;

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), 500);
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      aria-pressed={isDark}
      className="label flex cursor-pointer items-center gap-2 rounded-full border border-rule px-3 py-1.5 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        aria-hidden
        className="block size-2 rounded-full bg-accent transition-transform duration-500"
        style={{ transform: isDark ? "scale(1)" : "scale(0.55)" }}
      />
      <span className="hidden sm:inline">{theme === null ? "Tema" : isDark ? "Oscuro" : "Claro"}</span>
    </button>
  );
}
