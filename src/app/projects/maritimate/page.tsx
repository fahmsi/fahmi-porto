import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EditorialContainer from "@/components/layout/EditorialContainer";
import TableOfContents, { TOCItem } from "@/components/case-study/TableOfContents";
import MobileSectionNavigator from "@/components/case-study/MobileSectionNavigator";
import MaritimateGallery from "@/components/case-study/MaritimateGallery";
import {
  ArrowLeft,
  Anchor,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Layers,
  BarChart3,
  Calendar,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Maritimate — Improving Price Transparency in Indonesia's Fisheries Supply Chain | Fahmi Muhammad Al Hafizh",
  description:
    "A comprehensive UI/UX case study for Maritimate: improving fish price transparency in Indonesia's fisheries supply chain through user research with 5 fish suppliers, persona, 5-stage customer journey mapping, information architecture, Figma prototyping, and usability testing (SUS 78, SEQ/NES 60–80%).",
  openGraph: {
    title: "Maritimate — Improving Price Transparency in Fisheries UI/UX Case Study",
    description:
      "A mobile application concept designed to address fish price uncertainty and information asymmetry between suppliers and distributors in Indonesia.",
    images: [
      {
        url: "/images/brand-identity-maritimate/gallery/brand-value-1.webp",
        width: 1200,
        height: 630,
        alt: "Maritimate UI/UX Case Study Preview",
      },
    ],
  },
};

const tocItems: TOCItem[] = [
  { id: "overview", label: "1. Project Overview" },
  { id: "problem", label: "2. Problem Identification" },
  { id: "research", label: "3. User Research" },
  { id: "persona", label: "4. User Persona" },
  { id: "journey", label: "5. User Journey Mapping" },
  { id: "ideation", label: "6. Ideation & Strategy" },
  { id: "information-architecture", label: "7. Information Architecture" },
  { id: "design-process", label: "8. Design & Brand System" },
  { id: "usability-testing", label: "9. Usability Testing" },
  { id: "reflection", label: "10. Reflection & Next Steps" },
];

export default function MaritimateCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-editorial-bg text-editorial-text selection:bg-editorial-accent/15">
      <Header />

      <main className="flex-1 pb-16">
        {/* Case Study Header & Hero Metadata */}
        <section className="pt-12 sm:pt-16 pb-12 border-b border-editorial-border/60">
          <EditorialContainer size="layout">
            <div className="max-w-article mx-auto space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-editorial-secondary hover:text-editorial-text transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold flex items-center gap-2">
                  <Anchor className="w-3.5 h-3.5" />
                  <span>UI/UX Case Study · Maritime Technology &amp; Fisheries Supply Chain</span>
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-editorial-text leading-[1.15]">
                  Maritimate — Improving Price Transparency in Indonesia&apos;s Fisheries Supply Chain
                </h1>
                <p className="text-base sm:text-xl text-editorial-secondary leading-relaxed font-normal pt-1">
                  A mobile application concept designed to address fish price uncertainty and information asymmetry between coastal fish suppliers (<em>pemasok ikan</em>) and regional distributors.
                </p>
              </div>

              {/* Comprehensive Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-editorial-border text-xs sm:text-sm">
                <div>
                  <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                    Role
                  </span>
                  <span className="font-medium text-editorial-text block">
                    UI/UX Designer
                  </span>
                </div>
                <div>
                  <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                    Program &amp; Track
                  </span>
                  <span className="font-medium text-editorial-text block">
                    MSIB Batch 7 · Ocean Track
                  </span>
                </div>
                <div>
                  <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                    Timeline
                  </span>
                  <span className="font-medium text-editorial-text block">
                    Oct – Dec 2024
                  </span>
                </div>
                <div>
                  <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                    Evaluation &amp; Platform
                  </span>
                  <span className="font-medium text-editorial-text block">
                    Score: 88/100 · Mobile Concept
                  </span>
                </div>
              </div>

              {/* High-level Project Outcome Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 bg-white border border-editorial-border rounded-lg shadow-2xs">
                  <span className="font-serif text-2xl font-bold text-editorial-text block">SUS 78</span>
                  <span className="text-[12px] text-editorial-secondary block mt-0.5">
                    &ldquo;Good&rdquo; Usability Rating
                  </span>
                </div>
                <div className="p-3.5 bg-white border border-editorial-border rounded-lg shadow-2xs">
                  <span className="font-serif text-2xl font-bold text-editorial-accent block">80%</span>
                  <span className="text-[12px] text-editorial-secondary block mt-0.5">
                    Price Recommendation (NES)
                  </span>
                </div>
                <div className="p-3.5 bg-white border border-editorial-border rounded-lg shadow-2xs">
                  <span className="font-serif text-2xl font-bold text-editorial-text block">80%</span>
                  <span className="text-[12px] text-editorial-secondary block mt-0.5">
                    PPN Port Info (NES)
                  </span>
                </div>
                <div className="p-3.5 bg-white border border-editorial-border rounded-lg shadow-2xs">
                  <span className="font-serif text-2xl font-bold text-amber-600 block">60%</span>
                  <span className="text-[12px] text-editorial-secondary block mt-0.5">
                    Price Search (NES)
                  </span>
                </div>
              </div>
            </div>
          </EditorialContainer>
        </section>

        {/* Mobile TOC Section Navigator */}
        <MobileSectionNavigator items={tocItems} />

        {/* Main Article & Table of Contents Layout */}
        <EditorialContainer size="layout" className="pt-8">
          <div className="flex gap-12 items-start relative">
            {/* Desktop Sticky Table of Contents Sidebar */}
            <TableOfContents items={tocItems} />

            {/* Article Content Column */}
            <article className="flex-1 max-w-article mx-auto space-y-16 text-editorial-text text-base sm:text-[17.5px] leading-[1.7]">
              
              {/* SECTION 1: Project Overview */}
              <section id="overview" className="scroll-mt-28 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  1. Project Overview
                </h2>
                <p>
                  Indonesia boasts one of the world&apos;s most expansive maritime territories, yet coastal fishing economies face persistent operational challenges: severe daily fish price volatility, information asymmetry between regional landing ports and inland markets, lack of verified daily benchmark data, and reliance on unorganized chat groups.
                </p>
                <p>
                  <strong>Maritimate</strong> is a mobile application concept designed to improve fish price transparency and reduce information asymmetry for coastal fish suppliers (<em>pemasok ikan</em>), regional distributors, and market traders across Indonesia.
                </p>

                <div className="p-5 bg-blue-50/60 border border-blue-200/80 rounded-lg text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2 font-mono text-editorial-accent font-bold uppercase tracking-wider">
                    <Compass className="w-4 h-4" />
                    <span>Project Vision &amp; Scope</span>
                  </div>
                  <p className="text-editorial-secondary leading-relaxed">
                    The platform focuses on democratizing daily price benchmarks from <em>Pelabuhan Perikanan Nusantara</em> (PPN) across Indonesia, providing an ideal selling price calculator to help suppliers negotiate fair margins with distributors, and cataloging vital port facilities and commodity histories.
                  </p>
                  <p className="text-[11.5px] text-editorial-muted italic pt-1 border-t border-blue-200/50">
                    <strong>Project Context:</strong> Developed as a concept prototype during MSIB Batch 7 (awarded a final evaluation score of 88/100). It is a research-driven design prototype, not a deployed commercial software product.
                  </p>
                </div>

                <div className="p-4 bg-white border border-editorial-border rounded-lg text-xs sm:text-sm space-y-1.5">
                  <span className="font-mono uppercase font-bold text-editorial-accent tracking-wider block">
                    My Role &amp; Key Contributions
                  </span>
                  <p className="text-editorial-secondary leading-relaxed">
                    As the <strong>UI/UX Designer</strong> on this project, I was responsible for the complete user-centered design lifecycle: desk research on fisheries distribution, conducting in-depth qualitative interviews with 5 active suppliers and traders, creating the primary user persona and 5-stage customer journey map, structuring the flat information architecture and user flows, building the Figma design system with Auto Layout and component variants, and executing moderated remote usability testing with industry practitioners.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 text-xs">
                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                    <span className="font-bold text-editorial-text block flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-editorial-accent" />
                      <span>POV: Fish Supplier</span>
                    </span>
                    <span className="text-editorial-secondary">
                      Designed around the supplier&apos;s daily operational workflow at coastal fish auctions (<em>pelelangan</em>).
                    </span>
                  </div>
                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                    <span className="font-bold text-editorial-text block flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-editorial-accent" />
                      <span>Benchmark Data</span>
                    </span>
                    <span className="text-editorial-secondary">
                      Leverages verified government PPN (Pelabuhan Perikanan Nusantara) market price feeds and historical catch records.
                    </span>
                  </div>
                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                    <span className="font-bold text-editorial-text block flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-editorial-accent" />
                      <span>Frictionless Access</span>
                    </span>
                    <span className="text-editorial-secondary">
                      Direct price browsing without mandatory upfront sign-in walls or verification barriers.
                    </span>
                  </div>
                </div>
              </section>

              {/* SECTION 2: Problem Identification */}
              <section id="problem" className="scroll-mt-28 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  2. Problem Identification &amp; Problem Owner
                </h2>
                <p>
                  To define the product direction, the team explored the fisheries distribution chain. We documented five systemic challenges from initial desk research and brainstorming, and subsequently validated specific operational pain points through direct field interviews.
                </p>

                {/* 5 Initial Brainstorming Problems */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-semibold text-editorial-text">
                      Five Systemic Problems (Initial Brainstorming &amp; Desk Research)
                    </h3>
                    <span className="text-[11px] font-mono text-editorial-muted">Identified in PRD</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                      <div className="flex items-center gap-2 font-bold text-editorial-text">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px]">1</span>
                        <span>Tidak Meratanya Harga Ikan</span>
                      </div>
                      <p className="text-editorial-secondary pl-7 leading-relaxed">
                        Daily fish prices fluctuate unpredictably between landing ports and regional markets without an authoritative benchmark.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                      <div className="flex items-center gap-2 font-bold text-editorial-text">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px]">2</span>
                        <span>Penyebaran Ikan Tidak Merata</span>
                      </div>
                      <p className="text-editorial-secondary pl-7 leading-relaxed">
                        Catch oversupply at coastal landing centers coincides with shortages in inland cities due to fragmented regional distribution.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                      <div className="flex items-center gap-2 font-bold text-editorial-text">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px]">3</span>
                        <span>Persaingan Harga Tidak Stabil</span>
                      </div>
                      <p className="text-editorial-secondary pl-7 leading-relaxed">
                        Unregulated bidding and aggressive price undercutting among intermediate merchants depress primary seller margins.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                      <div className="flex items-center gap-2 font-bold text-editorial-text">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px]">4</span>
                        <span>Minimnya Penggunaan Teknologi</span>
                      </div>
                      <p className="text-editorial-secondary pl-7 leading-relaxed">
                        Fishery actors rely on manual paper ledgers and informal chat groups, prone to communication gaps, lost notes, and discrepancies.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1 sm:col-span-2 lg:col-span-1">
                      <div className="flex items-center gap-2 font-bold text-editorial-text">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px]">5</span>
                        <span>Kebijakan Belum Merata</span>
                      </div>
                      <p className="text-editorial-secondary pl-7 leading-relaxed">
                        Inconsistent regional port policies, price regulation, and administrative oversight across different maritime zones.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Brainstorming vs Validated Findings Note */}
                <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-lg text-xs space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-amber-900">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    <span>Distinction: Initial Assumptions vs. Field-Validated Findings</span>
                  </div>
                  <p className="text-editorial-secondary leading-relaxed">
                    While the 5 points above represented macroeconomic structural issues identified during brainstorming, direct interviews with suppliers revealed that their acute, day-to-day operational pain points centered on <strong>daily price unpredictability</strong>, <strong>shipping dependency without status visibility</strong>, <strong>fish condition degradation in transit</strong>, and <strong>deferred payment default risks</strong>.
                  </p>
                </div>

                {/* Supply Chain Flow Diagram */}
                <div className="p-5 bg-white border border-editorial-border rounded-lg space-y-4">
                  <h3 className="font-serif text-base font-semibold text-editorial-text">
                    Supply Chain Context &amp; Why Suppliers (Pemasok) Are the Focal Point
                  </h3>
                  <p className="text-xs text-editorial-secondary leading-relaxed">
                    The distribution hierarchy in Indonesian marine fisheries spans five interconnected actors:
                  </p>
                  
                  <div className="py-2 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
                    <div className="px-3 py-1.5 bg-[#FAFAF8] border border-editorial-border rounded text-editorial-secondary">
                      1. Nelayan (Catchers)
                    </div>
                    <ChevronRight className="w-4 h-4 text-editorial-muted" />
                    <div className="px-3 py-1.5 bg-blue-50 border-2 border-editorial-accent rounded text-editorial-accent font-bold">
                      2. Pemasok Ikan (Focal Point)
                    </div>
                    <ChevronRight className="w-4 h-4 text-editorial-muted" />
                    <div className="px-3 py-1.5 bg-[#FAFAF8] border border-editorial-border rounded text-editorial-secondary">
                      3. Distributor Ikan
                    </div>
                    <ChevronRight className="w-4 h-4 text-editorial-muted" />
                    <div className="px-3 py-1.5 bg-[#FAFAF8] border border-editorial-border rounded text-editorial-secondary">
                      4. Pedagang Ikan (Retailers)
                    </div>
                    <ChevronRight className="w-4 h-4 text-editorial-muted" />
                    <div className="px-3 py-1.5 bg-[#FAFAF8] border border-editorial-border rounded text-editorial-secondary">
                      5. Konsumen Akhir
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-3 bg-[#FAFAF8] rounded border border-editorial-border space-y-1">
                      <strong className="text-editorial-text block">Role Definitions Across Chain:</strong>
                      <ul className="text-editorial-secondary space-y-1 list-disc pl-4 text-[11.5px]">
                        <li><strong>Nelayan:</strong> Primary fishers who harvest marine catches and sell at port auctions (TPI).</li>
                        <li><strong>Pemasok Ikan:</strong> Capital-bearing intermediaries who purchase bulk auction catches, pack with ice, and ship to outer cities.</li>
                        <li><strong>Distributor Ikan:</strong> Wholesalers who buy bulk shipments to supply urban wet markets and supermarkets.</li>
                        <li><strong>Pedagang Ikan:</strong> Market vendors who sell portioned catches to consumers and restaurants.</li>
                        <li><strong>Konsumen Akhir:</strong> End retail buyers and households.</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-blue-50/40 rounded border border-blue-200/60 space-y-1">
                      <strong className="text-editorial-text block">Operational Vulnerabilities Borne by Suppliers:</strong>
                      <p className="text-editorial-secondary text-[11.5px] leading-relaxed">
                        Suppliers purchase fish from auction landings using upfront capital, coordinate packaging, and arrange transportation to outer cities. Field interviews revealed that suppliers are vulnerable to significant losses when fish condition deteriorates during transit (particularly if fish are packed in a fed / <em>&ldquo;kenyang&rdquo;</em> state) or when buyers default or delay payment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* The 5 Strategic Solution Pillars */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif text-base font-semibold text-editorial-text">
                    Five Solution Pillars (Strategic Design Foundations)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-xs">
                    <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                      <span className="font-bold text-editorial-accent block">1. Pemberdayaan</span>
                      <p className="text-editorial-secondary text-[11.5px]">Empowering suppliers with transparent market data to negotiate fair prices.</p>
                    </div>
                    <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                      <span className="font-bold text-editorial-accent block">2. Efisiensi</span>
                      <p className="text-editorial-secondary text-[11.5px]">Transparent logistics with shipment milestone status tracking.</p>
                    </div>
                    <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                      <span className="font-bold text-editorial-accent block">3. Transparansi</span>
                      <p className="text-editorial-secondary text-[11.5px]">Real-time port pricing across Indonesian regional PPN ports.</p>
                    </div>
                    <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                      <span className="font-bold text-editorial-accent block">4. Komunikasi</span>
                      <p className="text-editorial-secondary text-[11.5px]">Streamlined, documented communication between suppliers and distributors.</p>
                    </div>
                    <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                      <span className="font-bold text-editorial-accent block">5. Kestabilan</span>
                      <p className="text-editorial-secondary text-[11.5px]">Fostering balanced, predictable commercial exchanges between trading partners.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 3: User Research */}
              <section id="research" className="scroll-mt-28 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  3. User Research &amp; Field Insights
                </h2>
                <p>
                  To uncover real operational habits rather than hypothetical needs, I executed a research plan combining <strong>desk research</strong> on maritime digitization and <strong>in-depth qualitative interviews</strong> with 5 industry practitioners (fish suppliers and merchants).
                </p>

                {/* Research Timeline */}
                <div className="p-5 bg-white border border-editorial-border rounded-lg space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-editorial-accent font-bold">
                    <Calendar className="w-4 h-4" />
                    <span>Research Plan Execution Timeline</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-[#FAFAF8] rounded border border-editorial-border">
                      <span className="font-bold text-editorial-text block">28–29 Oct 2024</span>
                      <span className="text-editorial-secondary">Desk Research on supply uncertainty, logistics tracking, and price volatility.</span>
                    </div>
                    <div className="p-3 bg-[#FAFAF8] rounded border border-editorial-border">
                      <span className="font-bold text-editorial-text block">30 Oct 2024</span>
                      <span className="text-editorial-secondary">Research preparation, participant criteria, and interview guide structuring.</span>
                    </div>
                    <div className="p-3 bg-[#FAFAF8] rounded border border-editorial-border">
                      <span className="font-bold text-editorial-text block">1–2 Nov 2024</span>
                      <span className="text-editorial-secondary">In-depth qualitative interviews with 5 fish suppliers and regional traders.</span>
                    </div>
                  </div>
                </div>

                {/* 6 Core Findings */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base font-semibold text-editorial-text">
                    Six Key Findings from User Interviews
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                      <span className="font-bold text-editorial-text block">1. Volatile Daily Prices</span>
                      <p className="text-editorial-secondary">
                        Fish prices shift every single day without a clear forecasting model, making it difficult to set consistent profit margins.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                      <span className="font-bold text-editorial-text block">2. Third-Party Shipping Dependency</span>
                      <p className="text-editorial-secondary">
                        Suppliers lack control once trucks leave the port. Vehicle breakdowns or route delays lead to spoiled shipments and direct losses.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                      <span className="font-bold text-editorial-text block">3. Fish Condition Vulnerability</span>
                      <p className="text-editorial-secondary">
                        Fish transported in a full/fed state (<em>kondisi &ldquo;kenyang&rdquo;</em>) deteriorate rapidly without optimal ice ratios and real-time transit visibility.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                      <span className="font-bold text-editorial-text block">4. Deferred Payment Default Risks</span>
                      <p className="text-editorial-secondary">
                        Market retailers frequently delay payments or dispute prices after delivery, leaving suppliers with cash flow bottlenecks.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                      <span className="font-bold text-editorial-text block">5. High WhatsApp Reliance</span>
                      <p className="text-editorial-secondary">
                        All participants rely on WhatsApp for daily operations, utilizing chat threads for price inquiries, order confirmation, and distribution coordination due to its ubiquity and flexibility.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                      <span className="font-bold text-editorial-text block">6. Critical Real-Time Need</span>
                      <p className="text-editorial-secondary">
                        Participants emphasized that daily price updates and stock availability are crucial across roles to make timely commercial decisions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FAFAF8] border-l-4 border-editorial-accent rounded-r-lg text-xs sm:text-sm text-editorial-secondary italic">
                  <strong>Key Takeaway:</strong> Target users are experienced commercial operators who actively run businesses on smartphones using WhatsApp. They are not digital beginners; thus, interfaces should prioritize speed, glanceable typography, and familiar chat/feed interaction patterns over complex administrative forms.
                </div>
              </section>

              {/* SECTION 4: User Persona */}
              <section id="persona" className="scroll-mt-28 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  4. User Persona — Pak Saripudin
                </h2>
                <p>
                  Synthesizing findings from the 5 interviewees, I created the primary user persona representing coastal suppliers operating at port auctions.
                </p>

                {/* Persona Profile Card */}
                <div className="p-6 bg-white border border-editorial-border rounded-xl shadow-xs space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-editorial-border/60 gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-editorial-accent font-serif font-bold text-lg">
                        PS
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-editorial-text">
                          Pak Saripudin
                        </h3>
                        <p className="text-xs text-editorial-secondary font-mono">
                          Pemasok Ikan (Fish Supplier) · Aceh, Indonesia
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-1 bg-gray-100 text-editorial-secondary rounded">Usia: 41 Tahun</span>
                      <span className="px-2.5 py-1 bg-gray-100 text-editorial-secondary rounded">Pendidikan: SMA</span>
                      <span className="px-2.5 py-1 bg-gray-100 text-editorial-secondary rounded">Status: Menikah</span>
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded border border-emerald-200 font-semibold">15+ Th Pengalaman Industri</span>
                    </div>
                  </div>

                  <blockquote className="p-3.5 bg-blue-50/50 border-l-2 border-editorial-accent text-xs sm:text-sm text-editorial-text italic">
                    &ldquo;Sebagai seorang pemasok, saya perlu mengetahui harga ikan yang sedang ada di pasaran sehingga saya bisa menawarkan harga yang ideal kepada distributor agar tidak timbul kerugian di antara kedua pihak.&rdquo;
                  </blockquote>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-2 p-4 bg-[#FAFAF8] rounded border border-editorial-border">
                      <span className="font-mono uppercase font-bold text-editorial-accent tracking-wider block">
                        Goals &amp; Motivations
                      </span>
                      <ul className="space-y-1.5 text-editorial-secondary">
                        <li className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-editorial-accent shrink-0 mt-0.5" />
                          <span>Menjaga kestabilan dan keadilan harga jual dari lelang hingga pengiriman.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-editorial-accent shrink-0 mt-0.5" />
                          <span>Memastikan kesegaran ikan sampai di tangan distributor tepat waktu.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-editorial-accent shrink-0 mt-0.5" />
                          <span>Membangun relasi kemitraan yang transparan dan pembayaran lancar.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2 p-4 bg-[#FAFAF8] rounded border border-editorial-border">
                      <span className="font-mono uppercase font-bold text-red-600 tracking-wider block">
                        Pain Points &amp; Frustrations
                      </span>
                      <ul className="space-y-1.5 text-editorial-secondary">
                        <li className="flex items-start gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <span>Harga ikan berubah setiap hari tanpa acuan resmi yang jelas antar pelabuhan.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <span>Biaya tak terduga (es batu, bongkar muat, sewa ekspedisi) menekan margin keuntungan.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <span>Ketiadaan visibilitas status pengiriman setelah ikan meninggalkan pelabuhan.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <span>Keterlambatan atau penundaan pembayaran dari pihak pembeli/distributor.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-editorial-border rounded text-xs space-y-1.5">
                    <span className="font-bold text-editorial-text block font-mono text-[11px] uppercase tracking-wider text-editorial-accent">
                      Needs &amp; System Expectations:
                    </span>
                    <p className="text-editorial-secondary leading-relaxed">
                      Referensi harga pasar harian real-time dari pelabuhan resmi (PPN), kalkulator penentuan harga jual ideal berbasis variabel operasional dan margin keuntungan, pelacakan tahapan status pengiriman yang mudah dipantau, serta sistem pengingat penagihan pembayaran.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 5: User Journey Mapping */}
              <section id="journey" className="scroll-mt-28 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  5. User Journey Mapping
                </h2>
                <p>
                  I mapped Saripudin&apos;s end-to-end journey for the core scenario: <em>&ldquo;Pak Saripudin Mengelola Pesanan Ikan dari Distributor&rdquo;</em>, uncovering acute emotional pain points and clear digital intervention points across 5 distinct stages.
                </p>

                {/* 5-Stage Journey Map Table/Cards */}
                <div className="space-y-3 my-4">
                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 border-b pb-2">
                      <span className="font-bold text-editorial-text">Stage 1: Awareness &amp; Market Discovery</span>
                      <span className="font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px] border border-amber-200">
                        Emotion: Ragu &amp; Bingung (Hesitant)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-editorial-secondary">
                      <div>
                        <strong className="text-editorial-text block">Activity:</strong>
                        <span>Mengecek harga pasar di grup WhatsApp pedagang (&ldquo;Harga pasar naik atau turun?&rdquo;).</span>
                      </div>
                      <div>
                        <strong className="text-red-600 block">Pain Point:</strong>
                        <span>Informasi bias, rumor harga sepihak, sulit mendapat harga stabil &amp; real-time.</span>
                      </div>
                      <div>
                        <strong className="text-editorial-accent block">Design Opportunity:</strong>
                        <span>Fitur akses harga pasar terkini per PPN + notifikasi fluktuasi harga.</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 border-b pb-2">
                      <span className="font-bold text-editorial-text">Stage 2: Price Determination &amp; Order Processing</span>
                      <span className="font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded text-[11px] border border-rose-200">
                        Emotion: Gelisah &amp; Stres (Anxious)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-editorial-secondary">
                      <div>
                        <strong className="text-editorial-text block">Activity:</strong>
                        <span>Menghitung ongkos es dan muat, menentukan harga jual, konfirmasi ke distributor.</span>
                      </div>
                      <div>
                        <strong className="text-red-600 block">Pain Point:</strong>
                        <span>Harga cepat berubah, sulit meyakinkan distributor bahwa harga yang dipatok adil.</span>
                      </div>
                      <div>
                        <strong className="text-editorial-accent block">Design Opportunity:</strong>
                        <span>Kalkulator &ldquo;Rekomendasi Harga Jual Ideal&rdquo; dengan transparansi variabel biaya.</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 border-b pb-2">
                      <span className="font-bold text-editorial-text">Stage 3: Order Fulfillment &amp; Shipping</span>
                      <span className="font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px] border border-amber-200">
                        Emotion: Khawatir (Worried about spoilage)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-editorial-secondary">
                      <div>
                        <strong className="text-editorial-text block">Activity:</strong>
                        <span>Menyiapkan ikan, packing es batu, memuat ke truk ekspedisi, konfirmasi jadwal jalan.</span>
                      </div>
                      <div>
                        <strong className="text-red-600 block">Pain Point:</strong>
                        <span>Tidak ada tracking memadai; jika truk mogok, ikan rusak sebelum tiba di kota tujuan.</span>
                      </div>
                      <div>
                        <strong className="text-editorial-accent block">Design Opportunity:</strong>
                        <span>Status tahapan pengiriman terintegrasi (Dikemas, Berjalan, Tiba).</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 border-b pb-2">
                      <span className="font-bold text-editorial-text">Stage 4: Post Delivery &amp; Payment Collection</span>
                      <span className="font-mono text-red-700 bg-red-50 px-2 py-0.5 rounded text-[11px] border border-red-200">
                        Emotion: Stres jika pembayaran tertunda
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-editorial-secondary">
                      <div>
                        <strong className="text-editorial-text block">Activity:</strong>
                        <span>Menagih bukti penerimaan, mengirim rincian nota, menunggu transfer dana.</span>
                      </div>
                      <div>
                        <strong className="text-red-600 block">Pain Point:</strong>
                        <span>Distributor slow response, pembayaran ditunda berhari-hari tanpa kepastian.</span>
                      </div>
                      <div>
                        <strong className="text-editorial-accent block">Design Opportunity:</strong>
                        <span>Pengingat jatuh tempo pembayaran dan status pelunasan transaksi terpusat.</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 border-b pb-2">
                      <span className="font-bold text-editorial-text">Stage 5: Review &amp; Evaluation / Planning</span>
                      <span className="font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[11px] border border-emerald-200">
                        Emotion: Reflektif &amp; Termotivasi
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-editorial-secondary">
                      <div>
                        <strong className="text-editorial-text block">Activity:</strong>
                        <span>Menghitung laba/rugi mingguan, mengevaluasi distributor mana yang paling amanah.</span>
                      </div>
                      <div>
                        <strong className="text-red-600 block">Pain Point:</strong>
                        <span>Catatan manual tercecer di kertas nota, sulit membandingkan tren historis bulanan.</span>
                      </div>
                      <div>
                        <strong className="text-editorial-accent block">Design Opportunity:</strong>
                        <span>Ringkasan histori transaksi dan tren harga komoditas per pelabuhan.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 6: Ideation & Strategy */}
              <section id="ideation" className="scroll-mt-28 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  6. Ideation, Feature Voting &amp; Strategy
                </h2>
                <p>
                  During the ideation phase, the team brainstormed multiple feature candidates and conducted an internal dot-voting exercise to balance design feasibility within the MSIB program timeframe against direct impact on the fish supplier&apos;s daily operational decisions.
                </p>

                {/* Brainstorming Voting Results */}
                <div className="p-5 bg-white border border-editorial-border rounded-lg space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b pb-2">
                    <h3 className="font-serif text-base font-semibold text-editorial-text">
                      Brainstorming Feature Prioritization (Team Voting Results)
                    </h3>
                    <span className="text-[11px] font-mono text-editorial-muted">Internal Team Sprint Scope</span>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 bg-blue-50/60 border border-blue-200/80 rounded">
                      <span className="font-bold text-editorial-text">1. View market prices with cited port references</span>
                      <span className="font-mono text-editorial-accent font-bold">6 votes (Highest Priority)</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-blue-50/60 border border-blue-200/80 rounded">
                      <span className="font-bold text-editorial-text">2. Smart price recommendation engine (fish type, kg, target PPN, margin)</span>
                      <span className="font-mono text-editorial-accent font-bold">2 votes, 1 star</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-[#FAFAF8] border border-editorial-border rounded">
                      <span className="font-medium text-editorial-secondary">3. Daily &amp; weekly expense reports (highlighting significant costs)</span>
                      <span className="font-mono text-editorial-muted">2 votes</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-[#FAFAF8] border border-editorial-border rounded">
                      <span className="font-medium text-editorial-secondary">4. Sales reports for performance monitoring</span>
                      <span className="font-mono text-editorial-muted">1 vote</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-[#FAFAF8] border border-editorial-border rounded">
                      <span className="font-medium text-editorial-secondary">5. Operational cost calculator (ice, shipping, handling)</span>
                      <span className="font-mono text-editorial-muted">1 vote</span>
                    </div>
                  </div>

                  <p className="text-[11.5px] text-editorial-muted italic pt-1 border-t border-editorial-border/60">
                    <strong>Clarification on Voting:</strong> This voting represents internal team prioritization during ideation to balance scope feasibility within the MSIB timeline, <em>not</em> user adoption or survey metrics. Additional concepts logged for future iterations included payment overdue reminders and fish condition tracking.
                  </p>
                </div>

                {/* Jobs to be Done (JTBD) */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base font-semibold text-editorial-text">
                    Jobs to Be Done (JTBD) Framework
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs">
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1.5">
                      <span className="font-mono uppercase font-bold text-editorial-accent tracking-wider block">
                        JTBD 01
                      </span>
                      <strong className="text-editorial-text block">Akses Harga Pasar Real-Time</strong>
                      <p className="text-editorial-secondary leading-snug">
                        Melihat harga pasar ikan harian dari berbagai Pelabuhan Perikanan Nusantara (PPN) di seluruh Indonesia sebagai referensi resmi sebelum penawaran lelang.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1.5">
                      <span className="font-mono uppercase font-bold text-editorial-accent tracking-wider block">
                        JTBD 02
                      </span>
                      <strong className="text-editorial-text block">Rekomendasi Harga Jual Ideal</strong>
                      <p className="text-editorial-secondary leading-snug">
                        Menghitung harga penawaran yang sehat dengan memasukkan jenis komoditas, volume (kg), target daerah jual (PPN), dan estimasi biaya operasional.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1.5">
                      <span className="font-mono uppercase font-bold text-editorial-accent tracking-wider block">
                        JTBD 03
                      </span>
                      <strong className="text-editorial-text block">Eksplorasi Profil &amp; Data PPN</strong>
                      <p className="text-editorial-secondary leading-snug">
                        Mengecek profil pelabuhan, fasilitas, komoditas unggulan lokal, dan riwayat volume produksi sebelum mendistribusikan muatan antar daerah.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tone of Voice */}
                <div className="p-4 bg-white border border-editorial-border rounded-lg text-xs space-y-2">
                  <span className="font-bold text-editorial-text block font-mono text-[11px] uppercase tracking-wider text-editorial-accent">
                    Content Strategy: Professional &amp; Simple
                  </span>
                  <p className="text-editorial-secondary leading-relaxed">
                    Target users (fish suppliers) are experienced maritime business operators making high-value financial decisions under tight morning schedules. Microcopy avoids marketing slogans, empty buzzwords, and decorative jargon in favor of clear, direct, and unambiguous labels with high tabular legibility.
                  </p>
                </div>
              </section>

              {/* SECTION 7: Information Architecture & User Flow */}
              <section id="information-architecture" className="scroll-mt-28 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  7. Information Architecture &amp; User Flow
                </h2>
                <p>
                  The information architecture is intentionally flat. To prevent cognitive fatigue during early morning auctions, the core functions are surfaced immediately on the Home screen.
                </p>

                {/* Sitemap Visual Tree */}
                <div className="p-5 bg-white border border-editorial-border rounded-lg space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-editorial-accent font-bold">
                    <Layers className="w-4 h-4" />
                    <span>Maritimate Application Sitemap</span>
                  </div>
                  
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-blue-50/70 border border-blue-200 rounded font-mono font-bold text-editorial-text flex items-center justify-between">
                      <span>Beranda (Home Screen)</span>
                      <span className="text-editorial-accent text-[11px] font-normal">Frictionless guest entry (No mandatory login)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-2 sm:pl-4 border-l-2 border-editorial-border">
                      <div className="p-3 bg-[#FAFAF8] border border-editorial-border rounded space-y-1">
                        <strong className="text-editorial-accent font-mono text-[11px] uppercase block">Module 01</strong>
                        <span className="font-bold text-editorial-text block">Cek Harga Ikan</span>
                        <p className="text-editorial-secondary text-[11px]">
                          Pencarian komoditas, filter berbasis PPN, carousel stabilitas harga, data harga historis.
                        </p>
                      </div>

                      <div className="p-3 bg-[#FAFAF8] border border-editorial-border rounded space-y-1">
                        <strong className="text-editorial-accent font-mono text-[11px] uppercase block">Module 02</strong>
                        <span className="font-bold text-editorial-text block">Rekomendasi Harga</span>
                        <p className="text-editorial-secondary text-[11px]">
                          Formulir input (nama ikan, jumlah kg, PPN tujuan, margin) → Hasil kalkulasi harga ideal.
                        </p>
                      </div>

                      <div className="p-3 bg-[#FAFAF8] border border-editorial-border rounded space-y-1">
                        <strong className="text-editorial-accent font-mono text-[11px] uppercase block">Module 03</strong>
                        <span className="font-bold text-editorial-text block">Informasi PPN</span>
                        <p className="text-editorial-secondary text-[11px]">
                          Katalog pelabuhan nusantara, detail fasilitas, peta sebaran, dan harga komoditas lokal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Step-by-Step User Flows */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif text-base font-semibold text-editorial-text">
                    Core User Flows (Screen Sequencing)
                  </h3>
                  
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-3 bg-white border border-editorial-border rounded-lg space-y-1">
                      <div className="flex items-center gap-2 text-editorial-text font-bold">
                        <span className="w-4 h-4 rounded-full bg-blue-100 text-editorial-accent flex items-center justify-center text-[10px]">A</span>
                        <span>Alur Rekomendasi Harga Ideal:</span>
                      </div>
                      <p className="text-editorial-secondary pl-6 leading-relaxed">
                        Beranda → Pilih Menu Rekomendasi → Cari / Pilih Nama Ikan → Input Jumlah (kg) → Pilih Daerah Jual (PPN) → Tap &ldquo;Cek Harga Ideal&rdquo; → Hasil Rekomendasi Harga &amp; Detail Variabel.
                      </p>
                    </div>

                    <div className="p-3 bg-white border border-editorial-border rounded-lg space-y-1">
                      <div className="flex items-center gap-2 text-editorial-text font-bold">
                        <span className="w-4 h-4 rounded-full bg-blue-100 text-editorial-accent flex items-center justify-center text-[10px]">B</span>
                        <span>Alur Cek Harga Pasar Terkini:</span>
                      </div>
                      <p className="text-editorial-secondary pl-6 leading-relaxed">
                        Beranda → Cek Harga Ikan → Pilih Opsi &ldquo;Lihat Semua&rdquo; atau Card Komoditas → Terapkan Filter PPN → Tinjau Grafik Historis &amp; Perbandingan Wilayah → Selesai.
                      </p>
                    </div>

                    <div className="p-3 bg-white border border-editorial-border rounded-lg space-y-1">
                      <div className="flex items-center gap-2 text-editorial-text font-bold">
                        <span className="w-4 h-4 rounded-full bg-blue-100 text-editorial-accent flex items-center justify-center text-[10px]">C</span>
                        <span>Alur Eksplorasi Pelabuhan (PPN):</span>
                      </div>
                      <p className="text-editorial-secondary pl-6 leading-relaxed">
                        Beranda → Section Pelabuhan Perikanan Nusantara → &ldquo;Lihat Selengkapnya&rdquo; → Pilih Lokasi PPN (e.g. Lampulo Aceh, Nizam Zachman) → Tinjau Komoditas Unggulan &amp; Profil Pelabuhan.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 8: Design Process & Brand System */}
              <section id="design-process" className="scroll-mt-28 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  8. Design Process &amp; Brand Identity
                </h2>
                <p>
                  As the UI/UX Designer, I built the mobile application concept in Figma utilizing <strong>Auto Layout</strong>, interactive component variants, and a rigorous visual identity tailored to the maritime environment.
                </p>

                {/* Design Principles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs my-4">
                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                    <span className="font-mono uppercase font-bold text-editorial-accent tracking-wider block">
                      Color Palette
                    </span>
                    <strong className="text-editorial-text block">Maritime Navy &amp; Clear Blue</strong>
                    <p className="text-editorial-secondary">
                      Deep navy (<code className="font-mono text-[11px]">#001F3F</code>) anchors trust and authority, balanced with ocean blue (<code className="font-mono text-[11px]">#315BE8</code>) for primary actions.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                    <span className="font-mono uppercase font-bold text-editorial-accent tracking-wider block">
                      Typography
                    </span>
                    <strong className="text-editorial-text block">High-Contrast Numerals</strong>
                    <p className="text-editorial-secondary">
                      Clear tabular figures and prominent price sizes to ensure legibility in brightly lit outdoor ports and dim auction warehouses.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1">
                    <span className="font-mono uppercase font-bold text-editorial-accent tracking-wider block">
                      Component Tokens
                    </span>
                    <strong className="text-editorial-text block">Figma Reusable System</strong>
                    <p className="text-editorial-secondary">
                      Standardized card components, bottom sheet selectors, and status tags built with responsive Auto Layout padding.
                    </p>
                  </div>
                </div>

                {/* Interactive Design Gallery with Lightbox */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base font-semibold text-editorial-text flex items-center justify-between">
                    <span>Design Artifacts &amp; Mobile UI Gallery</span>
                    <span className="text-xs text-editorial-muted font-normal">Click any preview to expand</span>
                  </h3>
                  
                  <MaritimateGallery />
                </div>
              </section>

              {/* SECTION 9: Usability Testing */}
              <section id="usability-testing" className="scroll-mt-28 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  9. Usability Testing &amp; Validation
                </h2>
                <p>
                  To validate the design solutions against real user mental models, I conducted <strong>Moderated Remote Usability Testing</strong> via Google Meet / Zoom with targeted fish suppliers and merchants.
                </p>

                {/* Testing Methodology Banner */}
                <div className="p-4 bg-white border border-editorial-border rounded-lg text-xs space-y-1.5">
                  <span className="font-mono uppercase tracking-wider text-editorial-accent font-bold block">
                    Evaluation Protocol &amp; Metrics
                  </span>
                  <p className="text-editorial-secondary leading-relaxed">
                    Testing evaluated three structured task scenarios. Key quantitative and qualitative metrics captured: <strong>Time on Task</strong>, <strong>Task Success Rate</strong>, <strong>Error Rate</strong>, <strong>Single Ease Question (SEQ)</strong>, <strong>System Usability Scale (SUS)</strong>, and <strong>Verbal Feedback</strong>.
                  </p>
                </div>

                {/* Quantitative Usability Dashboard */}
                <div className="my-6 p-6 bg-white border border-editorial-border rounded-xl shadow-xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-2">
                    <div>
                      <span className="text-xs font-mono uppercase text-editorial-muted">Overall Usability Benchmark</span>
                      <h3 className="font-serif text-2xl font-semibold text-editorial-text">
                        System Usability Scale (SUS) Score
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="font-serif text-4xl font-bold text-editorial-accent">78</span>
                        <span className="text-xs text-editorial-muted font-mono"> / 100</span>
                      </div>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200">
                        &ldquo;Good&rdquo; Rating
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-editorial-secondary leading-relaxed">
                    A SUS score of 78 places Maritimate comfortably above the recognized global usability average of 68, verifying that respondents found the application intuitive and simple to navigate.
                  </p>

                  {/* Net Easy Score (NES) Progress Breakdown */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b pb-2">
                      <span className="font-mono uppercase text-xs font-bold text-editorial-text block tracking-wider">
                        Hasil SEQ (Single Ease Question) / NES Score per Feature:
                      </span>
                      <span className="text-[11px] font-mono text-editorial-muted">Source: Final Project PRD Table</span>
                    </div>

                    {/* Feature 1 */}
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-center font-medium">
                        <span className="text-editorial-text">1. Rekomendasi Harga Jual Ideal</span>
                        <span className="font-mono font-bold text-editorial-accent">80% NES (Sangat Mudah Digunakan, Optimal)</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-editorial-accent rounded-full" style={{ width: "80%" }} />
                      </div>
                      <span className="text-[11px] text-editorial-muted">Qualitative feedback: All respondents rated this feature easy and its process straightforward; the direct price display was appreciated.</span>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-center font-medium">
                        <span className="text-editorial-text">2. Informasi Pelabuhan Perikanan Nusantara (PPN)</span>
                        <span className="font-mono font-bold text-editorial-accent">80% NES (Sangat Mudah Digunakan, Optimal)</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-editorial-accent rounded-full" style={{ width: "80%" }} />
                      </div>
                      <span className="text-[11px] text-editorial-muted">Qualitative feedback: All respondents considered this feature very useful and informative; buttons and navigation were easy to understand.</span>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-center font-medium">
                        <span className="text-editorial-text">3. Cek Harga Ikan Pasar Harian</span>
                        <span className="font-mono font-bold text-amber-700">60% NES (Cukup Intuitif, Ada Ruang Penyempurnaan)</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: "60%" }} />
                      </div>
                      <span className="text-[11px] text-editorial-muted">Qualitative feedback: 4 out of 5 respondents chose &ldquo;Lihat Semua&rdquo;; some felt card information lacked relevance to the searched location. Recommendation: add PPN-based filters and refine card content.</span>
                    </div>

                    <p className="text-[11px] text-editorial-muted italic pt-1">
                      *Note on Terminology: The original evaluation report records these task results under the heading &ldquo;Hasil SEQ (Single Ease Question)&rdquo; with the column header &ldquo;NES Score&rdquo;. In the source document, both Rekomendasi Harga (80%) and PPN (80%) receive the qualitative interpretation &ldquo;Sangat mudah digunakan, optimal&rdquo;, while Cek Harga Ikan (60%) is interpreted as &ldquo;Cukup intuitif, ada ruang penyempurnaan&rdquo;.
                    </p>
                  </div>
                </div>

                {/* Qualitative Insights & Post-Testing Recommendations */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base font-semibold text-editorial-text">
                    Key Qualitative Findings &amp; Design Iterations
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1.5">
                      <span className="font-bold text-editorial-text block">Cek Harga Navigation (60% NES)</span>
                      <p className="text-editorial-secondary">
                        <strong>Observed:</strong> 4 out of 5 respondents chose &ldquo;Lihat Semua&rdquo;; some felt card information lacked relevance to the searched location.
                      </p>
                      <p className="text-editorial-accent text-[11.5px] font-medium pt-1">
                        → Recommendation: Add PPN-based filters and refine card content. Interpretation: &ldquo;Cukup intuitif, ada ruang penyempurnaan&rdquo; (Source PRD).
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1.5">
                      <span className="font-bold text-editorial-text block">Rekomendasi Calculation (80% NES)</span>
                      <p className="text-editorial-secondary">
                        <strong>Observed:</strong> All respondents evaluated this feature as easy and its process simple, appreciating the immediate presentation of recommended prices.
                      </p>
                      <p className="text-emerald-800 text-[11.5px] font-medium pt-1">
                        → Interpretation: &ldquo;Sangat mudah digunakan, optimal&rdquo; (Source PRD).
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-editorial-border rounded-lg space-y-1.5">
                      <span className="font-bold text-editorial-text block">PPN Directory Utility (80% NES)</span>
                      <p className="text-editorial-secondary">
                        <strong>Observed:</strong> All respondents considered this feature very useful and informative; buttons and navigation were clear and easy to understand.
                      </p>
                      <p className="text-emerald-800 text-[11.5px] font-medium pt-1">
                        → Interpretation: &ldquo;Sangat mudah digunakan, optimal&rdquo; (Source PRD).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 10: Reflection & Next Steps */}
              <section id="reflection" className="scroll-mt-28 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  10. Reflection &amp; Product Roadmap
                </h2>
                <div className="p-6 rounded-lg bg-white border border-editorial-border space-y-4 text-sm sm:text-base italic leading-relaxed text-editorial-text">
                  <p>
                    &ldquo;Designing Maritimate taught me that in traditional industries like maritime commerce, aesthetic refinement means little if the interface contradicts existing field habits. Fishery actors do not need complex enterprise software; they need glanceable, high-contrast daily numbers they can trust at 5:00 AM in a bustling fish auction.&rdquo;
                  </p>
                  <p>
                    &ldquo;Usability testing provided invaluable humility: seeing 80% ease on price recommendation validated our core thesis, while the 60% score on price browsing directly proved that market price without immediate geographical context creates friction for busy suppliers.&rdquo;
                  </p>
                  <p className="text-xs font-normal not-italic text-editorial-secondary pt-2 border-t border-editorial-border/60">
                    <strong>Project Nature &amp; Scope Boundary:</strong> Maritimate was developed and evaluated as an academic mobile concept prototype during MSIB Batch 7 (achieving a score of 88/100). It demonstrates research-grounded design thinking and user-centric problem solving rather than a deployed commercial production service.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="font-serif text-base font-semibold text-editorial-text">
                    Product Roadmap (Features Identified in Source PRD)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 bg-white border border-editorial-border rounded-lg space-y-1">
                      <strong className="text-editorial-text block font-mono text-[11px] uppercase tracking-wider text-editorial-accent">
                        1. Price-Change Alerts &amp; Notifications
                      </strong>
                      <p className="text-editorial-secondary leading-relaxed">
                        Push notifications alerting suppliers when port prices swing significantly or when sudden harvest gluts affect landing markets.
                      </p>
                    </div>

                    <div className="p-3.5 bg-white border border-editorial-border rounded-lg space-y-1">
                      <strong className="text-editorial-text block font-mono text-[11px] uppercase tracking-wider text-editorial-accent">
                        2. Integrated Delivery Status Tracking
                      </strong>
                      <p className="text-editorial-secondary leading-relaxed">
                        Milestone status progression (<em>Dikemas, Berjalan, Tiba</em>) to give suppliers visibility during inter-city overland transit.
                      </p>
                    </div>

                    <div className="p-3.5 bg-white border border-editorial-border rounded-lg space-y-1">
                      <strong className="text-editorial-text block font-mono text-[11px] uppercase tracking-wider text-editorial-accent">
                        3. Payment Reminders &amp; Status Tracking
                      </strong>
                      <p className="text-editorial-secondary leading-relaxed">
                        Payment due date alerts and central invoice status indicators to mitigate deferred payment bottlenecks and default risks.
                      </p>
                    </div>

                    <div className="p-3.5 bg-white border border-editorial-border rounded-lg space-y-1">
                      <strong className="text-editorial-text block font-mono text-[11px] uppercase tracking-wider text-editorial-accent">
                        4. Daily &amp; Weekly Expense Reports
                      </strong>
                      <p className="text-editorial-secondary leading-relaxed">
                        Logging variable operational costs (ice blocks, auction fees, freight charges) to track true net profit margins.
                      </p>
                    </div>

                    <div className="p-3.5 bg-white border border-editorial-border rounded-lg space-y-1 sm:col-span-2">
                      <strong className="text-editorial-text block font-mono text-[11px] uppercase tracking-wider text-editorial-accent">
                        5. Fish Condition Monitoring in Transit
                      </strong>
                      <p className="text-editorial-secondary leading-relaxed">
                        Operational guidelines and checklist monitoring to prevent rapid deterioration of fish caught in a fed (<em>&ldquo;kenyang&rdquo;</em>) state during extended transport.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back to Home & Other Case Study Links */}
                <div className="pt-8 border-t border-editorial-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-editorial-secondary hover:text-editorial-text transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Return to Homepage</span>
                  </Link>

                  <Link
                    href="/work/spmb-azzahra"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-editorial-text text-editorial-bg text-xs font-medium rounded hover:bg-editorial-accent transition-colors shadow-2xs"
                  >
                    <span>Next Case Study: SPMB Az-Zahra (Laravel &amp; System Analysis)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </section>

            </article>
          </div>
        </EditorialContainer>
      </main>

      <Footer />
    </div>
  );
}
