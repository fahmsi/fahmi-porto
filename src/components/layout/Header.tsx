"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Mail } from "lucide-react";

import ProtectedCanvasImage from "../profile/ProtectedCanvasImage";
export default function Header() {
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith("/work/");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#FAFAF8]/95 backdrop-blur-md border-b border-editorial-border/60 transition-all duration-300 ease-in-out transform ${
        isScrolled
          ? "translate-y-0 opacity-100 pointer-events-auto shadow-sm"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-layout mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-editorial-text hover:text-editorial-accent transition-colors font-medium text-base tracking-tight"
          aria-label="Fahmi Muhammad Al Hafizh Home"
        >
          <ProtectedCanvasImage
            src="/images/profile/fahmi-profile-web.webp"
            alt="Fahmi Muhammad Al Hafizh"
            size={32}
            shape="circle"
            objectPosition={{ x: 50, y: 15 }}
            className="w-8 h-8 rounded border border-editorial-border shrink-0"
          />
          <span className="font-serif text-lg font-bold sm:hidden">Fahmi.</span>
          <span className="hidden sm:inline font-serif font-bold text-lg">
            Fahmi
          </span>
        </Link>

        {/* Dynamic navigation links */}
        <nav className="flex items-center gap-6 sm:gap-8 text-sm tracking-wide text-editorial-secondary">
          {isCaseStudy ? (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-editorial-text transition-colors font-medium py-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          ) : (
            <a
              href="#work"
              className="hover:text-editorial-text transition-colors font-medium py-1"
            >
              Work
            </a>
          )}

          <a
            href="mailto:work.fahmialhafizh@gmail.com"
            className="inline-flex items-center gap-1.5 text-editorial-text hover:text-editorial-accent transition-colors font-medium py-1"
          >
            <Mail className="w-4 h-4 text-editorial-accent" />
            <span>Email</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
