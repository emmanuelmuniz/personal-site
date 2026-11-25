import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { TopBar } from "@/components/TopBar";
import { Tools } from "@/components/Tools";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="relative">
        <Hero />
        <About />
        <Tools />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
