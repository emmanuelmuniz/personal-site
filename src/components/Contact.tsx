"use client";

import { shared } from "@/content";
import { CopyEmail } from "./CopyEmail";
import { useContent } from "./LangProvider";
import { Reveal } from "./Reveal";

export function Contact() {
  const { sections, now, contactHeadline, copy } = useContent();
  return (
    <section id="contact" data-scene="contact" className="relative px-5 pb-16 pt-24 sm:px-8 md:pt-40">
      <div className="mx-auto max-w-[88rem]">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="big-num block" aria-hidden>
              03
            </span>
            <h2 data-reveal className="label mt-4">
              {sections.contact}
            </h2>
            <div className="mt-12 hidden md:block">
              <p data-reveal className="label">
                {now.title}
              </p>
              <ul className="mt-3 space-y-1.5 text-muted">
                {now.items.map((i) => (
                  <li key={i} data-reveal>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-8">
            <p
              data-split
              className="display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
            >
              {contactHeadline}
            </p>
            <div data-reveal className="mt-10">
              <CopyEmail email={shared.email} labels={copy} />
            </div>
            <ul data-reveal className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-rule pt-6">
              {shared.links.map((l) => (
                <li key={l.label} className="flex items-baseline gap-3">
                  <span className="label">{l.label}</span>
                  <a href={l.href} className="link" target="_blank" rel="noreferrer">
                    {l.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
