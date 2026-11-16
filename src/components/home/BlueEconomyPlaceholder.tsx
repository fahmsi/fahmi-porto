import Image from "next/image";
import { Clock } from "lucide-react";

export default function BlueEconomyPlaceholder() {
  return (
    <section className="px-6 sm:px-8 pt-12 pb-24 border-t border-editorial-border/60">
      <div className="max-w-article mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h2 className="font-serif text-2xl text-editorial-text mb-2 sm:mb-0">
            Sustainable Blue Economy Program (Ocean)
          </h2>
          <div className="flex items-center gap-x-3 text-sm">
            <span className="text-editorial-muted">Okt – Des 2024</span>
            <span className="px-2 py-0.5 bg-gray-100 text-editorial-secondary text-xs font-medium rounded">
              MSIB Batch 7 · UI/UX Designer (Score: 88/100)
            </span>
          </div>
        </div>

        {/* Project Summary */}
        <p className="text-editorial-secondary text-lg leading-relaxed mb-8">
          Digital product design focused on UX research and customer discovery through user interviews, personas, empathy maps, journey mapping, and information architecture. Designed responsive wireframes, design systems, and interactive prototypes in Figma using Auto Layout and reusable components, followed by usability testing to evaluate user flows and product clarity.
        </p>

        {/* Image Preview Container */}
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-editorial-border/80 bg-[#001F3F]/90 mb-6">
          <Image
            src="/images/brand-identity-maritimate/gallery/brand-value-1.webp"
            alt="Maritimate Brand Identity Preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Status Indicator (Non-clickable) */}
        <div className="flex items-center justify-between text-xs text-editorial-muted pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-editorial-border/40 font-mono text-editorial-secondary">
            <Clock className="w-3.5 h-3.5 text-editorial-muted" />
            <span>Case study in preparation</span>
          </span>
          <span className="font-mono text-editorial-muted">
            02 / 02
          </span>
        </div>
      </div>
    </section>
  );
}
