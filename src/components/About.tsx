"use client";

import { useRef } from "react";
import { shared } from "@/content";
import { gsap, useGSAP } from "@/lib/gsap";
import { useContent } from "./LangProvider";
import { Reveal } from "./Reveal";

export function About() {
  const photoRef = useRef<HTMLDivElement>(null);
  const c = useContent();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          photoRef.current,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: { trigger: photoRef.current, start: "top 80%", once: true },
          },
        );
        gsap.to(photoRef.current!.querySelector("img"), {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: photoRef.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: photoRef },
  );

  return (
    <Reveal
      as="section"
      id="about"
      data-scene="about"
      className="relative px-5 py-24 sm:px-8 md:py-40"
    >
      <div className="mx-auto grid max-w-[88rem] gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <span className="big-num block" aria-hidden>
            01
          </span>
          <h2 data-reveal className="label mt-4">
            {c.sections.about}
          </h2>
        </div>

        <div className="md:col-span-4">
          <figure className="relative ml-auto w-[64%] max-w-[16rem] md:ml-0 md:w-full md:max-w-[19rem]">
            <div className="relative">
              {/* Marco desplazado detrás del retrato, como una lámina montada. */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-sm border border-accent/50 md:translate-x-4 md:translate-y-4"
              />
              <div className="relative w-full overflow-hidden rounded-sm">
                <div ref={photoRef} className="photo aspect-[4/5] w-full" style={{ clipPath: "inset(0 0 0 0)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shared.photo.src}
                    alt={shared.name}
                    decoding="async"
                    style={{ transform: "scale(1.1)", objectPosition: "50% 18%" }}
                  />
                </div>
              </div>
            </div>
            <figcaption className="label mt-5 flex items-baseline justify-between gap-3 text-faint md:mt-6">
              <span>{shared.location}</span>
              <span>{shared.year}</span>
            </figcaption>
          </figure>
        </div>

        <div className="md:col-span-4">
          <p
            data-split
            className="display text-[1.75rem] font-medium leading-[1.15] tracking-tight md:text-[2.1rem]"
          >
            {c.heroLine}
          </p>
          <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.65] text-muted">
            {c.intro.map((p) => (
              <p key={p} data-reveal>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
