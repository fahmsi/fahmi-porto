"use client";

import { useState } from "react";
import { ChevronDown, List } from "lucide-react";
import { TOCItem } from "./TableOfContents";

interface MobileSectionNavigatorProps {
  items: TOCItem[];
}

export default function MobileSectionNavigator({ items }: MobileSectionNavigatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("Jump to Section");

  return (
    <div className="lg:hidden sticky top-16 z-30 w-full bg-[#FAFAF8]/95 backdrop-blur border-b border-editorial-border py-2 px-4 mb-8">
      <div className="max-w-article mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-2 px-3 bg-white border border-editorial-border rounded text-xs font-medium text-editorial-text shadow-sm"
          aria-expanded={isOpen}
          aria-label="Toggle Table of Contents Navigator"
        >
          <span className="flex items-center gap-2 truncate">
            <List className="w-3.5 h-3.5 text-editorial-accent" />
            <span>{selectedLabel}</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-editorial-muted transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="mt-2 py-2 bg-white border border-editorial-border rounded shadow-lg max-h-60 overflow-y-auto text-xs space-y-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setSelectedLabel(item.label);
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-editorial-secondary hover:text-editorial-accent hover:bg-blue-50/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
