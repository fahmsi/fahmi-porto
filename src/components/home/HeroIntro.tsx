import { MapPin } from "lucide-react";
import ProtectedCanvasImage from "../profile/ProtectedCanvasImage";

export default function HeroIntro() {
  return (
    <section className="pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-editorial-border/60">
      <div className="max-w-article mx-auto space-y-6">
        {/* Author Avatar Photo - Protected Canvas */}
        <ProtectedCanvasImage
          src="/images/profile/fahmi-profile-web.webp"
          alt="Fahmi Muhammad Al Hafizh"
          size={64}
          shape="circle"
          objectPosition={{ x: 50, y: 15 }} // Shift down slightly to center the face crop properly
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-editorial-border shadow-sm"
        />

        {/* Hero Headline */}
        <div className="space-y-4">
          <h1 className="font-serif text-2xl sm:text-3xl text-editorial-text font-normal leading-tight tracking-tight">
            I’m Fahmi — Information Systems, UI/UX Design, Product &amp; Business Analysis.
          </h1>

          <p className="text-base sm:text-lg text-editorial-secondary leading-relaxed font-normal">
            Information Systems graduate (IPK 3,74/4,00, STT Terpadu Nurul Fikri) based in Sukmajaya, Depok. Experienced in academic and applied projects spanning user requirement analysis, system documentation, website development, Agile methods, and application testing.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-editorial-muted pt-1">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-editorial-accent" />
              <span>Sukmajaya, Depok</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-editorial-border" />
            <span>S1 Sistem Informasi · IPK 3,74</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="px-5 py-2.5 bg-editorial-text text-editorial-bg hover:bg-editorial-accent transition-colors font-medium text-xs rounded tracking-wide shadow-sm"
          >
            View Work
          </a>
          <a
            href="/resume/fahmi-muhammad-al-hafizh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white border border-editorial-border text-editorial-text hover:border-editorial-accent hover:text-editorial-accent transition-colors font-medium text-xs rounded tracking-wide"
          >
            Resume
          </a>
          <a
            href="mailto:work.fahmialhafizh@gmail.com"
            className="px-5 py-2.5 bg-white border border-editorial-border text-editorial-text hover:border-editorial-accent hover:text-editorial-accent transition-colors font-medium text-xs rounded tracking-wide"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
