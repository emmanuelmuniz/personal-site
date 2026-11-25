import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="px-5 pb-8 sm:px-8">
      <div className="label mx-auto flex max-w-[88rem] flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-rule pt-4">
        <span>
          © {site.year} {site.name}
        </span>
        <span className="text-faint">Bricolage Grotesque · Newsreader · Three.js · GSAP · Next.js</span>
      </div>
    </footer>
  );
}
