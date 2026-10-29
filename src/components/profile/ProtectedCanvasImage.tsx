"use client";

import { useEffect, useRef, useState, useMemo, CSSProperties } from "react";

type ProtectedCanvasImageProps = {
  src: string;
  alt: string;
  size: number;
  className?: string;
  objectPosition?: {
    x: number;
    y: number;
  };
  shape?: "circle" | "rounded";
  priority?: boolean;
};

// Module-level image cache to prevent duplicate network requests
const imageCache = new Map<string, Promise<HTMLImageElement>>();
const loggedErrors = new Set<string>();

function loadImage(src: string): Promise<HTMLImageElement> {
  let promise = imageCache.get(src);
  if (!promise) {
    promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
    imageCache.set(src, promise);
  }
  return promise;
}

export default function ProtectedCanvasImage({
  src,
  alt,
  size,
  className = "",
  objectPosition = { x: 50, y: 50 },
  shape = "circle",
}: ProtectedCanvasImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dpr, setDpr] = useState(1);

  // Set device pixel ratio on mount
  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio || 1, 2));
  }, []);

  const posX = objectPosition.x;
  const posY = objectPosition.y;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = size * dpr;
    const h = size * dpr;

    // Set internal canvas dimensions
    canvas.width = w;
    canvas.height = h;

    let active = true;

    // Standalone fallback drawer matching the editorial design system
    const drawFallback = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.beginPath();
      
      if (shape === "circle") {
        ctx.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2);
      } else if (shape === "rounded" && ctx.roundRect) {
        ctx.roundRect(0, 0, w, h, w * 0.1);
      } else {
        ctx.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2);
      }
      
      ctx.fillStyle = "#315BE8"; // Brand Editorial Blue
      ctx.fill();

      // Draw off-white FM initials
      ctx.fillStyle = "#FAFAF8";
      ctx.font = `bold ${Math.round(w * 0.35)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("FM", w / 2, h / 2);
      ctx.restore();
    };

    drawFallback();

    loadImage(src)
      .then((img) => {
        if (!active) return;

        const imgAspect = img.width / img.height;
        const canvasAspect = w / h;

        let drawWidth = w;
        let drawHeight = h;
        let offsetX = 0;
        let offsetY = 0;

        // Cover-style crop calculation matching CSS object-fit: cover
        if (imgAspect > canvasAspect) {
          drawWidth = h * imgAspect;
          offsetX = (w - drawWidth) * (posX / 100);
        } else {
          drawHeight = w / imgAspect;
          offsetY = (h - drawHeight) * (posY / 100);
        }

        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.beginPath();

        if (shape === "circle") {
          ctx.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2);
        } else if (shape === "rounded" && ctx.roundRect) {
          ctx.roundRect(0, 0, w, h, w * 0.1);
        } else {
          ctx.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2);
        }
        
        ctx.clip();
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        ctx.restore();
      })
      .catch((err) => {
        if (!active) return;
        
        // Log development warning only once per URL to avoid console clutter
        if (!loggedErrors.has(src)) {
          loggedErrors.add(src);
          console.warn(`[ProtectedCanvasImage] Failed to load source: ${src}`, err);
        }
        
        drawFallback();
      });

    return () => {
      active = false;
    };
  }, [src, size, dpr, shape, posX, posY]);

  // Visual dimension styling
  const style: CSSProperties = useMemo(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
      userSelect: "none",
      WebkitUserSelect: "none",
      WebkitTouchCallout: "none",
      display: "block",
    }),
    [size]
  );

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      style={style}
      className={className}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
    >
      {alt}
    </canvas>
  );
}
