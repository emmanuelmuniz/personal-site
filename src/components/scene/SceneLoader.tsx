"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SignalScene = dynamic(() => import("./SignalScene").then((m) => m.SignalScene), {
  ssr: false,
});

/**
 * Monta la escena 3D solo en el cliente, detrás de todo el contenido.
 * Detecta reduced-motion y pantallas táctiles para bajar densidad y quitar el cursor.
 */
export function SceneLoader() {
  const [env, setEnv] = useState<{ reduced: boolean; coarse: boolean } | null>(null);

  useEffect(() => {
    const rm = matchMedia("(prefers-reduced-motion: reduce)");
    const pc = matchMedia("(pointer: coarse)");
    const update = () => setEnv({ reduced: rm.matches, coarse: pc.matches });
    update();
    rm.addEventListener("change", update);
    pc.addEventListener("change", update);
    return () => {
      rm.removeEventListener("change", update);
      pc.removeEventListener("change", update);
    };
  }, []);

  if (!env) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <SignalScene reduced={env.reduced} coarse={env.coarse} />
    </div>
  );
}
