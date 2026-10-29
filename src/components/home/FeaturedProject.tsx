import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section id="work" className="px-6 sm:px-8 pt-12 pb-24 border-t border-editorial-border/60">
      <div className="max-w-article mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h2 className="font-serif text-2xl text-editorial-text mb-2 sm:mb-0">
            <Link href="/work/spmb-azzahra" className="hover:text-editorial-accent transition-colors">
              Website PSB PAUD Al-Qur&apos;an Az-Zahra Depok
            </Link>
          </h2>
          <div className="flex items-center gap-x-3 text-sm">
            <span className="text-editorial-muted">2025 – Jul 2026</span>
            <span className="px-2 py-0.5 bg-gray-100 text-editorial-secondary text-xs font-medium rounded">
              System Analyst &amp; Web Developer
            </span>
          </div>
        </div>

        {/* Project Summary Grounded in Latest CV */}
        <p className="text-editorial-secondary text-lg leading-relaxed mb-12">
          An end-to-end student admission web platform developed with Laravel and MySQL through 3 Agile sprints. Translated stakeholder needs into 17 functional requirements, 6 non-functional requirements, and 3 user roles; designed formal system documentation (SRS, SDD, use case, activity diagram, ERD, and product backlog); built online registration, document &amp; payment-proof verification, admin dashboard, data export, and activity logs; validated through UAT (46/46 Alpha scenarios passed, 11/11 Beta tasks completed, 4.6/5 average user evaluation).
        </p>

        {/* Asymmetrical Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {/* Large Left Image */}
          <div className="md:col-span-3 aspect-[4/3] bg-gray-50 border border-editorial-border/80 rounded-lg overflow-hidden">
            <Image
              src="/images/psb/homepage-screenshot.png"
              alt="Homepage screenshot of the SPMB PAUD Al-Quran Az-Zahra application."
              width={1200}
              height={900}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Stacked Right Images */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="aspect-[4/3] bg-gray-50 border border-editorial-border/80 rounded-lg flex items-center justify-center p-4 text-center">
              <p className="text-xs text-editorial-muted">Admin Dashboard &amp; Verification (Screenshot pending)</p>
            </div>
            <div className="aspect-[4/3] bg-gray-50 border border-editorial-border/80 rounded-lg flex items-center justify-center p-4 text-center">
              <p className="text-xs text-editorial-muted">Parent Registration Flow (Screenshot pending)</p>
            </div>
          </div>
        </div>

        {/* Link to Case Study */}
        <div className="text-center">
          <Link href="/work/spmb-azzahra" className="text-sm font-medium text-editorial-accent hover:underline">
            Read full case study →
          </Link>
        </div>
      </div>
    </section>
  );
}
