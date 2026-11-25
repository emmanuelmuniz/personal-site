"use client";

import { useRef } from "react";
import { photo, site } from "@/content/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { Reveal } from "./Reveal";

export function About() {
  const photoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          photoRef.current,
          { clipPath: "inset(100% 0 0 0 round 1rem)" },
          {
            clipPath: "inset(0% 0 0 0 round 1rem)",
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
      id="sobre-mi"
      data-scene="about"
      className="relative px-5 py-24 sm:px-8 md:py-40"
    >
      <div className="mx-auto grid max-w-[88rem] gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <span className="big-num block" aria-hidden>
            01
          </span>
          <h2 data-reveal className="label mt-4">
            Sobre mí
          </h2>
        </div>

        <div className="md:col-span-4">
          <div
            ref={photoRef}
            className="photo aspect-square w-full max-w-[15rem] rounded-2xl md:max-w-[17rem]"
            style={{ clipPath: "inset(0 0 0 0 round 1rem)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={photo.alt} loading="lazy" style={{ transform: "scale(1.08)" }} />
          </div>
        </div>

        <div className="md:col-span-4">
          <p
            data-split
            className="display text-[1.75rem] font-medium leading-[1.15] tracking-tight md:text-[2.1rem]"
          >
            {site.heroLine}
          </p>
          <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.65] text-muted">
            {site.intro.map((p) => (
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
