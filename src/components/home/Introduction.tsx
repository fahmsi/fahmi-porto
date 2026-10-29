"use client";
import { MapPin } from "lucide-react";
import ProtectedCanvasImage from "../profile/ProtectedCanvasImage";

export default function Introduction() {
  return (
    <section id="intro" className="px-6 sm:px-8 pt-24 pb-16">
      <div className="max-w-article mx-auto space-y-5">
        <ProtectedCanvasImage
          src="/images/profile/fahmi-profile-web.webp"
          alt="Fahmi Muhammad Al Hafizh"
          size={40}
          shape="circle"
          objectPosition={{ x: 50, y: 15 }}
        />

        <div className="space-y-3">
          <h1 className="font-serif text-2xl sm:text-3xl text-editorial-text font-normal tracking-tight">
            I’m Fahmi — Information Systems, UI/UX Design &amp; Product Analysis.
          </h1>

          <p className="text-base sm:text-lg text-editorial-secondary leading-relaxed">
            Information Systems graduate (GPA 3.74/4.00) from STT Terpadu Nurul Fikri focused on System Analysis, UI/UX Design, and Product &amp; Business Analysis. Experienced in analyzing user requirements, system documentation, website development, Agile workflows, and software testing.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-editorial-muted pt-2">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sukmajaya, Depok, Indonesia</span>
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-editorial-border" />
            <span>S1 Sistem Informasi (IPK 3,74) · STT-NF</span>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="px-4 py-2 bg-editorial-text text-editorial-bg hover:bg-black/80 transition-colors font-medium text-sm rounded-lg shadow-sm"
          >
            View Work
          </a>
          <a
            href="mailto:work.fahmialhafizh@gmail.com"
            className="px-4 py-2 bg-white border border-editorial-border text-editorial-text hover:border-black/80 transition-colors font-medium text-sm rounded-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
