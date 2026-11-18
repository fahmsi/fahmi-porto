"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

interface GalleryItem {
  id: string;
  title: string;
  category: "Mockup" | "Design System" | "Branding";
  src: string;
  aspect: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "mockup-overview",
    title: "Mobile App Interface & High-Fidelity Flow",
    category: "Mockup",
    src: "/images/brand-identity-maritimate/gallery/mockup.webp",
    aspect: "aspect-[16/10]",
    caption:
      "Figure 8.1 — High-fidelity mobile screen composition showing the Home feed, real-time price tracker, and port directory.",
  },
  {
    id: "mockup-screens",
    title: "Feature Walkthrough & Interaction Mockups",
    category: "Mockup",
    src: "/images/brand-identity-maritimate/gallery/mockup-4.webp",
    aspect: "aspect-[16/10]",
    caption:
      "Figure 8.2 — Detailed view of the price recommendation flow, PPN detail sheet, and regional comparison cards.",
  },
  {
    id: "mockup-device",
    title: "Multi-Angle Product Presentation",
    category: "Mockup",
    src: "/images/brand-identity-maritimate/gallery/mockup-1.webp",
    aspect: "aspect-[16/10]",
    caption:
      "Figure 8.3 — Isometric multi-device product showcase designed for presentation and portfolio review.",
  },
  {
    id: "brand-value",
    title: "Brand Value & Product Strategy",
    category: "Branding",
    src: "/images/brand-identity-maritimate/gallery/brand-value-1.webp",
    aspect: "aspect-[16/10]",
    caption:
      "Figure 8.4 — Core brand positioning: improving price transparency and supporting fair commercial negotiations for coastal fish suppliers.",
  },
  {
    id: "color-system",
    title: "Maritime Color Palette & Token Hierarchy",
    category: "Design System",
    src: "/images/brand-identity-maritimate/gallery/color-1.webp",
    aspect: "aspect-[16/10]",
    caption:
      "Figure 8.5 — Oceanic Navy (#001F3F), Action Blue (#315BE8), and crisp neutral surface tokens.",
  },
  {
    id: "typography-system",
    title: "Typography Hierarchy & Scale",
    category: "Design System",
    src: "/images/brand-identity-maritimate/gallery/typography-2.webp",
    aspect: "aspect-[16/10]",
    caption:
      "Figure 8.6 — High-contrast tabular numerals and scalable heading typography engineered for quick scanning.",
  },
  {
    id: "logo-concept",
    title: "Brand Mark & Logo Construction",
    category: "Branding",
    src: "/images/brand-identity-maritimate/gallery/logo-2.webp",
    aspect: "aspect-[16/10]",
    caption:
      "Figure 8.7 — Logo iconography combining maritime wave geometries with digital connectivity motifs.",
  },
  {
    id: "graphic-elements",
    title: "Visual Assets & Iconographic Language",
    category: "Design System",
    src: "/images/brand-identity-maritimate/gallery/graphic-elements-2.webp",
    aspect: "aspect-[16/10]",
    caption:
      "Figure 8.8 — Graphical badges, port markers, and UI icon accents supporting the editorial aesthetic.",
  },
];

export default function MaritimateGallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<"All" | "Mockup" | "Design System" | "Branding">("All");

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="space-y-6">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        {(["All", "Mockup", "Design System", "Branding"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-full font-medium transition-colors ${
              filter === cat
                ? "bg-editorial-text text-editorial-bg shadow-xs"
                : "bg-white border border-editorial-border text-editorial-secondary hover:text-editorial-text hover:border-editorial-text/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Primary Spotlight */}
      {filteredItems.length > 0 && (
        <div className="p-4 sm:p-5 bg-white border border-editorial-border rounded-xl shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-editorial-border/60">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-editorial-accent font-semibold">
                {filteredItems[0].category} Spotlight
              </span>
              <h4 className="font-serif text-base sm:text-lg font-semibold text-editorial-text">
                {filteredItems[0].title}
              </h4>
            </div>
            <button
              onClick={() => setActiveItem(filteredItems[0])}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-editorial-accent hover:bg-blue-50 rounded border border-blue-100 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full View</span>
            </button>
          </div>

          <div
            onClick={() => setActiveItem(filteredItems[0])}
            className="group relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-editorial-border/80 bg-[#001F3F]/90 cursor-pointer"
          >
            <Image
              src={filteredItems[0].src}
              alt={filteredItems[0].title}
              fill
              className="object-cover group-hover:scale-[1.01] transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-black/70 backdrop-blur text-white text-xs rounded transition-opacity flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Click to Expand</span>
              </span>
            </div>
          </div>
          <p className="text-xs text-editorial-muted italic text-center">
            {filteredItems[0].caption}
          </p>
        </div>
      )}

      {/* Secondary Artifact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredItems.slice(1).map((item) => (
          <div
            key={item.id}
            className="p-3.5 bg-white border border-editorial-border rounded-lg shadow-2xs space-y-2 hover:border-editorial-accent/60 transition-colors"
          >
            <div className="flex items-center justify-between text-xs pb-1.5 border-b border-editorial-border/60">
              <span className="font-medium text-editorial-text truncate max-w-[200px]">
                {item.title}
              </span>
              <button
                onClick={() => setActiveItem(item)}
                className="text-editorial-accent hover:underline flex items-center gap-1 text-[11px] font-mono shrink-0"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Expand</span>
              </button>
            </div>

            <div
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[16/10] w-full rounded overflow-hidden border border-editorial-border bg-gray-50 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
            </div>

            <p className="text-[11px] text-editorial-muted line-clamp-1 italic">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={Boolean(activeItem)}
        onClose={() => setActiveItem(null)}
        title={activeItem?.title || "Design Artifact"}
      >
        {activeItem && (
          <div className="space-y-4 w-full flex flex-col items-center">
            <div className="relative w-full max-h-[70vh] aspect-[16/10] max-w-4xl rounded overflow-hidden bg-black/5">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <p className="text-xs text-editorial-secondary italic text-center max-w-2xl">
              {activeItem.caption}
            </p>
          </div>
        )}
      </ImageLightbox>
    </div>
  );
}
