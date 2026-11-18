import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BlueEconomyPlaceholder() {
  return (
    <section className="px-6 sm:px-8 pt-12 pb-24 border-t border-editorial-border/60">
      <div className="max-w-article mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h2 className="font-serif text-2xl text-editorial-text mb-2 sm:mb-0">
            <Link
              href="/projects/maritimate"
              className="hover:text-editorial-accent transition-colors"
            >
              Maritimate — Sustainable Blue Economy
            </Link>
          </h2>
          <div className="flex items-center gap-x-3 text-sm">
            <span className="text-editorial-muted">Okt – Des 2024</span>
            <span className="px-2 py-0.5 bg-blue-50 text-editorial-accent text-xs font-medium rounded border border-blue-100">
              MSIB Batch 7 · UI/UX Designer
            </span>
          </div>
        </div>

        {/* Project Summary */}
        <p className="text-editorial-secondary text-lg leading-relaxed mb-8">
          A maritime technology mobile application concept designed to improve fish price transparency and reduce information asymmetry for suppliers and distributors in Indonesia. Grounded in desk research, in-depth interviews with 5 fishery practitioners, customer journey mapping, information architecture, Figma design system &amp; prototyping, and evaluated through usability testing (SUS score: 78 &ldquo;Good&rdquo;; SEQ / NES: 60% for Price Search, 80% for Price Recommendation, 80% for PPN Info).
        </p>

        {/* Clickable Image Preview Container */}
        <Link
          href="/projects/maritimate"
          className="group block relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-editorial-border/80 bg-[#001F3F]/90 mb-6 shadow-xs hover:border-editorial-accent/60 transition-all duration-300"
        >
          <Image
            src="/images/brand-identity-maritimate/gallery/brand-value-1.webp"
            alt="Maritimate Brand Identity Preview"
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
            <span className="font-medium tracking-wide bg-black/40 backdrop-blur px-2.5 py-1 rounded">
              Fish Supplier &amp; Distributor Platform Concept
            </span>
            <span className="inline-flex items-center gap-1 font-medium bg-editorial-accent/90 px-2.5 py-1 rounded group-hover:bg-editorial-accent transition-colors">
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Link>

        {/* Action CTAs & Highlights */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-editorial-border/40 font-mono text-editorial-secondary">
              <Sparkles className="w-3 h-3 text-editorial-accent" />
              <span>SUS: 78 (Good)</span>
            </span>
            <span className="px-2.5 py-1 rounded bg-editorial-border/40 font-mono text-editorial-secondary">
              Price Rec / PPN Info: 80% NES
            </span>
            <span className="px-2.5 py-1 rounded bg-editorial-border/40 font-mono text-editorial-secondary">
              Price Search: 60% NES
            </span>
            <span className="px-2.5 py-1 rounded bg-editorial-border/40 font-mono text-editorial-secondary">
              Evaluation: 88/100
            </span>
          </div>

          <Link
            href="/projects/maritimate"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-editorial-accent hover:underline self-start sm:self-auto"
          >
            <span>Read full case study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
