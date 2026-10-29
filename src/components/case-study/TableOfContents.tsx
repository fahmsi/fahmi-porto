"use client";

import { useEffect, useState } from "react";

export interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Table of Contents"
      className="hidden lg:block sticky top-28 w-56 pr-6 max-h-[calc(100vh-140px)] overflow-y-auto text-xs space-y-2 select-none"
    >
      <p className="font-mono text-[11px] uppercase tracking-wider text-editorial-muted mb-3 font-semibold">
        On this page
      </p>
      <ul className="space-y-1.5 border-l border-editorial-border/80 pl-3">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block py-1 leading-snug transition-colors ${
                  isActive
                    ? "text-editorial-accent font-semibold -ml-[13px] pl-3 border-l-2 border-editorial-accent"
                    : "text-editorial-secondary hover:text-editorial-text"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
