"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
  "data-scene"?: string;
};

/**
 * Contenedor que revela al scrollear:
 *  - [data-reveal]  → sube y aparece, en cascada
 *  - [data-split]   → el texto entra línea por línea con máscara
 * Respeta prefers-reduced-motion: en ese caso todo queda visible sin animar.
 */
export function Reveal({ children, className, as: Tag = "div", ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
        if (items.length) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.09,
              scrollTrigger: { trigger: root, start: "top 78%", once: true },
            },
          );
        }
        root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
              return gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.1,
                ease: "power4.out",
                stagger: 0.09,
                scrollTrigger: { trigger: el, start: "top 85%", once: true },
              });
            },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(root.querySelectorAll("[data-reveal]"), { opacity: 1, y: 0 });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
