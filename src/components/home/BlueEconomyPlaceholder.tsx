import Image from "next/image";
import { Clock } from "lucide-react";

export default function BlueEconomyPlaceholder() {
  return (
    <section className="px-6 sm:px-8 pt-12 pb-24 border-t border-editorial-border/60">
      <div className="max-w-article mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h2 className="font-serif text-2xl text-editorial-text mb-2 sm:mb-0">
            Sustainable Blue Economy Program (Ocean) — Maritimate
          </h2>
          <div className="flex items-center gap-x-3 text-sm">
            <span className="text-editorial-muted">Okt – Des 2024</span>
            <span className="px-2 py-0.5 bg-gray-100 text-editorial-secondary text-xs font-medium rounded">
              UI/UX Designer · MSIB Batch 7
            </span>
          </div>
        </div>

        {/* Project Summary Grounded in Latest CV */}
        <p className="text-editorial-secondary text-lg leading-relaxed mb-6">
          Conducted UX research and customer discovery through user interviews, user personas, empathy maps, user journey maps, and information architecture. Designed wireframes, high-fidelity UI, design systems, and interactive prototypes in Figma with Auto Layout and reusable components. Executed usability testing and prioritized recommendations to optimize user flow and usability (Final Grade: 88/100).
        </p>

        {/* Key Competencies Badge Row */}
        <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono text-editorial-secondary">
          <span className="px-2.5 py-1 bg-white border border-editorial-border rounded">UX Research</span>
          <span className="px-2.5 py-1 bg-white border border-editorial-border rounded">User Personas</span>
          <span className="px-2.5 py-1 bg-white border border-editorial-border rounded">Design System</span>
          <span className="px-2.5 py-1 bg-white border border-editorial-border rounded">Figma Prototyping</span>
          <span className="px-2.5 py-1 bg-white border border-editorial-border rounded">Usability Testing</span>
        </div>

        {/* Image Preview Container */}
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-editorial-border/80 bg-[#001F3F]/90 mb-6">
          <Image
            src="/images/brand-identity-maritimate/gallery/brand-value.webp"
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
