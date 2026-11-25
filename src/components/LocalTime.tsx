"use client";

import { useEffect, useState } from "react";

type Props = { timeZone: string; locale: string; label: string };

/**
 * Hora local del autor. Único elemento vivo de la página.
 * Renderiza un placeholder hasta montar para evitar desajuste de hidratación.
 */
export function LocalTime({ timeZone, locale, label }: Props) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [timeZone, locale]);

  return (
    <time
      dateTime={time ?? undefined}
      className="tabular-nums"
      aria-label={label}
      suppressHydrationWarning
    >
      {time ?? "––:––"}
    </time>
  );
}
