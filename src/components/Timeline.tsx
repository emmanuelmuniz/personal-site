"use client";

import { useContent } from "./LangProvider";
import { Reveal } from "./Reveal";

export function Timeline() {
  const { sections, experienceIntro, experience, present, education } = useContent();
  return (
    <section id="experience" data-scene="timeline" className="relative px-5 py-24 sm:px-8 md:py-40">
      <div className="mx-auto max-w-[88rem]">
        <Reveal className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="big-num block" aria-hidden>
              03
            </span>
            <h2 data-reveal className="label mt-4">
              {sections.experience}
            </h2>
          </div>
          <p
            data-split
            className="display text-[1.75rem] font-medium leading-[1.15] tracking-tight md:col-span-7 md:col-start-6 md:text-[2.1rem]"
          >
            {experienceIntro}
          </p>
        </Reveal>

        <ol className="mt-16 border-t border-rule md:mt-24">
          {experience.map((job) => (
            <Reveal
              as="li"
              key={`${job.company}-${job.start}-${job.role}`}
              className="grid gap-y-3 border-b border-rule py-7 md:grid-cols-12 md:gap-x-8 md:py-9"
            >
              <div data-reveal className="md:col-span-3">
                <p className="display text-[1.5rem] font-medium tabular-nums tracking-tight md:text-[1.75rem]">
                  {job.start}
                  {job.end !== job.start ? <span className="text-faint"> – {job.end ?? present}</span> : null}
                </p>
                {job.mode ? <p className="label mt-1 text-faint">{job.mode}</p> : null}
              </div>
              <div data-reveal className="md:col-span-4">
                <h3 className="display text-[1.25rem] font-medium leading-snug tracking-tight">{job.role}</h3>
                <p className="mt-1 text-muted">{job.company}</p>
              </div>
              <div data-reveal className="md:col-span-5">
                <p className="leading-relaxed text-muted">{job.summary}</p>
                {job.highlights ? (
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 leading-relaxed text-muted">
                        <span aria-hidden className="mt-[0.72em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <p className="label mt-4 text-faint">{job.stack.join(" · ")}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 grid gap-y-3 md:grid-cols-12 md:gap-x-8">
          <p data-reveal className="label md:col-span-3">
            {sections.education}
          </p>
          <div data-reveal className="md:col-span-9">
            <p className="display text-[1.25rem] font-medium tracking-tight">{education.degree}</p>
            <p className="mt-1 text-muted">
              {education.institution} · {education.location} · {education.start}–{education.end}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
