import { tools } from "@/content/site";
import { Reveal } from "./Reveal";

export function Tools() {
  return (
    <section id="herramientas" data-scene="tools" className="relative px-5 py-24 sm:px-8 md:py-40">
      <div className="mx-auto max-w-[88rem]">
        <Reveal className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="big-num block" aria-hidden>
              02
            </span>
            <h2 data-reveal className="label mt-4">
              Herramientas
            </h2>
          </div>
          <p
            data-split
            className="display text-[1.75rem] font-medium leading-[1.15] tracking-tight md:col-span-7 md:col-start-6 md:text-[2.1rem]"
          >
            Herramientas de código abierto y alcance acotado. Cada una tiene su propio repositorio, se ejecuta en el navegador y puede clonarse.
          </p>
        </Reveal>

        <ol className="mt-20 border-t border-rule md:mt-28">
          {tools.map((t) => (
            <Reveal
              as="li"
              key={t.name}
              className="grid gap-x-8 gap-y-10 border-b border-rule py-14 md:grid-cols-12 md:py-20"
            >
              <div className="md:col-span-7">
                <p data-reveal className="label">
                  {t.year} · {t.status === "live" ? "Publicada" : "En desarrollo"}
                </p>
                <h3
                  data-split
                  className="display mt-5 text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.035em]"
                >
                  {t.name}
                </h3>
                <p data-reveal className="display mt-4 text-[1.35rem] font-medium tracking-tight text-accent md:text-[1.75rem]">
                  {t.tagline}
                </p>
                <p data-reveal className="mt-8 max-w-[40rem] text-[1.2rem] leading-[1.55] text-muted md:text-[1.375rem]">
                  {t.description}
                </p>
                <div data-reveal className="mt-10 flex flex-wrap gap-3">
                  <a href={t.url} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Abrir
                    <span aria-hidden>→</span>
                  </a>
                  <a href={t.repo} target="_blank" rel="noreferrer" className="btn">
                    Repositorio
                  </a>
                </div>
              </div>

              <dl className="grid grid-cols-3 gap-6 self-end md:col-span-4 md:col-start-9 md:grid-cols-1 md:gap-5 md:pl-8 md:[border-left:1px_solid_var(--rule)]">
                <div data-reveal>
                  <dt className="label">Stack</dt>
                  <dd className="mt-1.5 text-muted">{t.stack.join(" · ")}</dd>
                </div>
                <div data-reveal>
                  <dt className="label">Licencia</dt>
                  <dd className="mt-1.5 text-muted">MIT</dd>
                </div>
                <div data-reveal>
                  <dt className="label">Datos</dt>
                  <dd className="mt-1.5 text-muted">Precios en vivo, snapshot semanal</dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </ol>

      </div>
    </section>
  );
}
