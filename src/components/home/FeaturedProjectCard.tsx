import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Users } from "lucide-react";

export default function FeaturedProjectCard() {
  return (
    <section id="work" className="py-16 sm:py-24 border-b border-editorial-border/60">
      <div className="max-w-layout mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-editorial-accent font-semibold">
              Featured Case Study
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-editorial-text mt-1">
              SPMB PAUD Al-Quran Azzahra Depok
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-editorial-muted px-2.5 py-1 rounded bg-editorial-border/30">
            01 / 02
          </span>
        </div>

        {/* Visual Composition — Editorial UI Screenshots Composite */}
        <div className="mb-12 rounded-xl bg-white border border-editorial-border p-4 sm:p-8 shadow-sm space-y-6">
          <div className="aspect-[16/9] w-full rounded-lg bg-[#F8F9FA] border border-editorial-border overflow-hidden relative group">
            {/* Crisp Editorial System UI Mockup */}
            <div className="w-full h-full flex flex-col">
              {/* Fake Browser Top Bar */}
              <div className="h-9 bg-[#F1F3F5] border-b border-editorial-border px-4 flex items-center justify-between text-xs text-editorial-muted">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-editorial-secondary truncate max-w-[200px] sm:max-w-none">
                    https://paudazzahradepok.site
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                  Live System
                </span>
              </div>

              {/* Simulated Homepage UI Preview */}
              <div className="flex-1 bg-white p-6 overflow-hidden flex flex-col justify-between">
                {/* Simulated Header */}
                <div className="flex justify-between items-center pb-4 border-b border-editorial-border/40">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-editorial-accent flex items-center justify-center text-white text-xs font-bold font-serif">
                      AZ
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-editorial-text">
                      PAUD Al-Quran Az-Zahra Depok
                    </span>
                  </div>
                  <div className="hidden sm:flex gap-4 text-xs text-editorial-secondary font-medium">
                    <span>Beranda</span>
                    <span>Informasi PSB</span>
                    <span>Gelombang</span>
                    <span className="text-editorial-accent font-semibold">Masuk / Daftar</span>
                  </div>
                </div>

                {/* Simulated Hero Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-auto items-center py-4">
                  <div className="md:col-span-7 space-y-3">
                    <span className="inline-block px-2.5 py-1 bg-blue-50 text-editorial-accent text-[11px] font-semibold rounded">
                      Penerimaan Siswa Baru TA 2026/2027
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-editorial-text leading-tight">
                      Pendaftaran Siswa Baru Terstruktur & Transparan
                    </h3>
                    <p className="text-xs sm:text-sm text-editorial-secondary line-clamp-2">
                      Sistem penerimaan siswa baru online SPS PAUD Al-Quran Az-Zahra Depok memudahkan orang tua dalam pendaftaran, unggah berkas, hingga pemantauan status.
                    </p>
                    <div className="flex items-center gap-3 pt-1">
                      <div className="px-3 py-1.5 bg-editorial-accent text-white text-xs font-medium rounded shadow-sm">
                        Daftar Akun Orang Tua
                      </div>
                      <div className="px-3 py-1.5 border border-editorial-border text-editorial-text text-xs font-medium rounded">
                        Lihat Gelombang
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:col-span-5">
                    <div className="bg-[#F8F9FA] border border-editorial-border p-4 rounded-lg space-y-3">
                      <div className="flex items-center justify-between text-xs font-semibold text-editorial-text">
                        <span>Gelombang 1 — Reguler</span>
                        <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">Buka</span>
                      </div>
                      <div className="w-full bg-editorial-border h-2 rounded-full overflow-hidden">
                        <div className="bg-editorial-accent h-full w-2/3" />
                      </div>
                      <div className="flex justify-between text-[11px] text-editorial-muted">
                        <span>Kuota: 20 Siswa</span>
                        <span>Sisa: 7 Kursi</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-3 border-t border-editorial-border/40 flex justify-between items-center text-[11px] text-editorial-muted">
                  <span>© SPS PAUD Al-Quran Az-Zahra Depok</span>
                  <span>Evaluasi Beta Testing: 4.6 / 5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Supporting Flow Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#FAFAF8] border border-editorial-border rounded-lg p-4 flex gap-4 items-center">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-editorial-accent shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-editorial-text">Alur Pendaftaran Orang Tua</p>
                <p className="text-[12px] text-editorial-secondary leading-snug">
                  Daftar akun → Data anak → Unggah berkas (KK & Akta) → Pilih gelombang → Bukti bayar → Kartu Pendaftaran.
                </p>
              </div>
            </div>

            <div className="bg-[#FAFAF8] border border-editorial-border rounded-lg p-4 flex gap-4 items-center">
              <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-editorial-text">Alur Verifikasi Admin & Super Admin</p>
                <p className="text-[12px] text-editorial-secondary leading-snug">
                  Dashboard statistik → Verifikasi berkas & bukti bayar → Kelola gelombang → Rekap data → Activity log.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Description & Editorial Content */}
        <div className="max-w-article space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl text-editorial-text font-semibold leading-tight">
            From Paper Forms to a Structured Online Admission Flow
          </h3>

          <p className="text-base sm:text-lg text-editorial-secondary leading-relaxed">
            The school managed new student admissions through paper forms, physical document submission, and manual communication. I analyzed the existing workflow, translated stakeholder needs into system requirements, designed the system structure, developed the web application through three Agile sprints, and evaluated it with school and parent representatives.
          </p>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-editorial-border text-xs sm:text-sm">
            <div>
              <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                Role
              </span>
              <span className="font-medium text-editorial-text block">
                System Analyst, UI/UX & Web Developer
              </span>
            </div>
            <div>
              <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                Timeline
              </span>
              <span className="font-medium text-editorial-text block">
                2025 – July 2026
              </span>
            </div>
            <div>
              <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                Institution
              </span>
              <span className="font-medium text-editorial-text block">
                SPS PAUD Al-Quran Azzahra Depok
              </span>
            </div>
            <div>
              <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                Technology
              </span>
              <span className="font-medium text-editorial-text block">
                Laravel, MySQL, Blade, JS
              </span>
            </div>
          </div>

          {/* Key Result Highlights */}
          <div className="space-y-3 pt-2">
            <p className="text-xs uppercase tracking-wider text-editorial-accent font-semibold">
              Verified Project Outcomes
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded bg-white border border-editorial-border space-y-1">
                <span className="font-serif text-xl font-bold text-editorial-text block">17</span>
                <span className="text-editorial-secondary block">Functional Requirements</span>
              </div>
              <div className="p-3 rounded bg-white border border-editorial-border space-y-1">
                <span className="font-serif text-xl font-bold text-editorial-text block">3 Sprints</span>
                <span className="text-editorial-secondary block">Agile Backlog Delivery</span>
              </div>
              <div className="p-3 rounded bg-white border border-editorial-border space-y-1">
                <span className="font-serif text-xl font-bold text-editorial-text block">46 / 46</span>
                <span className="text-editorial-secondary block">Alpha Scenarios Passed</span>
              </div>
              <div className="p-3 rounded bg-white border border-editorial-border space-y-1">
                <span className="font-serif text-xl font-bold text-editorial-text block">4.6 / 5.0</span>
                <span className="text-editorial-secondary block">Initial User Evaluation</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/work/spmb-azzahra"
              className="inline-flex items-center gap-2 px-6 py-3 bg-editorial-text text-editorial-bg font-medium text-sm rounded hover:bg-editorial-accent transition-colors shadow-sm"
            >
              <span>Read Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://paudazzahradepok.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-editorial-border text-editorial-text font-medium text-sm rounded hover:border-editorial-accent hover:text-editorial-accent transition-colors"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4 opacity-75" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
