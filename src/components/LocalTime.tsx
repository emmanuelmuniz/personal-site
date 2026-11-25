"use client";

import { useEffect, useState } from "react";

type Props = { timeZone: string };

/**
 * Hora local del autor. Único elemento vivo de la página.
 * Renderiza un placeholder hasta montar para evitar desajuste de hidratación.
 */
export function LocalTime({ timeZone }: Props) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <time
      dateTime={time ?? undefined}
      className="tabular-nums"
      aria-label="Hora local"
      suppressHydrationWarning
    >
      {time ?? "––:––"}
    </time>
  );
}
