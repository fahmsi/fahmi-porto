"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  title,
  children,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 sm:p-8 flex flex-col justify-between items-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl flex justify-between items-center text-white mb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="lightbox-title" className="font-serif text-lg font-normal text-slate-100">
          {title}
        </h3>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 text-white transition-colors focus:ring-2 focus:ring-white"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div
        className="max-w-5xl max-h-[80vh] w-full bg-white rounded-lg p-6 overflow-auto border border-white/20 shadow-2xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>

      <p className="text-xs text-slate-400 mt-4">Press ESC or click outside to close</p>
    </div>
  );
}
