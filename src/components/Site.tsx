import { getContent, type Lang } from "@/content";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { LangProvider } from "./LangProvider";
import { Timeline } from "./Timeline";
import { TopBar } from "./TopBar";

/** La página completa en un idioma. `/` la renderiza en inglés y `/es` en español. */
export function Site({ lang }: { lang: Lang }) {
  return (
    <LangProvider content={getContent(lang)}>
      <TopBar />
      <main className="relative">
        <Hero />
        <About />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
