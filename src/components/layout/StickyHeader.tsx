"use client";

import { useState, useEffect, useRef } from 'react';
import ProtectedCanvasImage from "@/components/profile/ProtectedCanvasImage";
import Link from 'next/link';

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const introElement = document.querySelector('#intro');
    if (!introElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        rootMargin: "-100px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(introElement);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="bg-white/80 border-b border-black/5">
        <div className="max-w-[860px] mx-auto px-6 sm:px-8">
            <div className="flex items-center justify-between h-[60px]">
                <Link href="/" className="flex items-center gap-3 group">
                    <ProtectedCanvasImage
                        src="/images/profile/fahmi-profile-web.webp"
                        alt="Fahmi Muhammad Al Hafizh"
                        size={32}
                        shape="circle"
                        objectPosition={{ x: 50, y: 15 }}
                    />
                     <span className="font-serif text-sm font-medium group-hover:text-editorial-accent">Fahmi M. Al Hafizh</span>
                </Link>
                <div className="flex items-center gap-2">
                    <a
                        href="#work"
                        className="px-4 py-1.5 text-editorial-text hover:text-black transition-colors font-medium text-sm"
                    >
                        View Work
                    </a>
                    <a
                        href="mailto:work.fahmialhafizh@gmail.com"
                        className="px-4 py-1.5 bg-editorial-text text-editorial-bg hover:bg-black/80 transition-colors font-medium text-sm rounded-lg"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}
