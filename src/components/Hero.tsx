"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        const split = SplitText.create("[data-hero-name]", { type: "lines", mask: "lines" });
        tl.from(split.lines, { yPercent: 110, duration: 1.3, stagger: 0.12 }, 0.15)
          .fromTo(
            "[data-hero-fade]",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
            0.7,
          )
          .fromTo("[data-hero-rule]", { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "power3.inOut" }, 0.5);
        return tl;
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero-fade]", { opacity: 1 });
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      id="inicio"
      data-scene="hero"
      className="relative flex min-h-dvh flex-col justify-end px-5 pb-10 pt-28 sm:px-8 md:pb-14"
    >
      <div className="mx-auto w-full max-w-[88rem]">
        <p data-hero-fade className="label mb-6 opacity-0">
          {site.role} · {site.location}
        </p>
        <h1
          data-hero-name
          className="display text-[clamp(3.25rem,12.5vw,11.5rem)] font-semibold leading-[0.88] tracking-[-0.035em]"
          style={{ fontVariationSettings: '"wdth" 92' }}
        >
          Emmanuel
          <br />
          Muñiz Adaro
        </h1>

        <div data-hero-rule className="my-8 h-px w-full origin-left bg-rule md:my-10" />

        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <p
            data-hero-fade
            className="text-[1.35rem] leading-[1.3] opacity-0 md:col-span-7 md:text-[1.75rem]"
          >
            {site.heroLine}{" "}
            <span className="text-muted">{site.tagline}</span>
          </p>
          <ol data-hero-fade className="label flex flex-wrap gap-x-8 gap-y-4 opacity-0 md:col-span-5 md:justify-end">
            {[
              ["01", "#sobre-mi", "Sobre mí"],
              ["02", "#herramientas", "Herramientas"],
              ["03", "#experiencia", "Experiencia"],
              ["04", "#contacto", "Contacto"],
            ].map(([n, href, label]) => (
              <li key={href}>
                <a href={href} className="group flex flex-col gap-1 transition-colors hover:text-accent">
                  <span className="text-accent">{n}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
