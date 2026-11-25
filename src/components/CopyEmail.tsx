"use client";

import { useEffect, useRef, useState } from "react";

type Props = { email: string };

/** Email grande con copiado al portapapeles y feedback breve. */
export function CopyEmail({ email }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Sin clipboard: el mailto sigue funcionando.
    }
  }

  return (
    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
      <a
        href={`mailto:${email}`}
        className="display link break-all text-[clamp(1.25rem,3.2vw,2.5rem)] font-medium tracking-tight"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className="label cursor-pointer rounded-full border border-rule px-3 py-1.5 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {copied ? "Copiado ✓" : "Copiar"}
      </button>
    </div>
  );
}
