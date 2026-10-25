"use client";

import { useEffect, useRef, useState, type Ref } from "react";
import {
  BACKGROUNDS,
  FONTS,
  FORMATS,
  baseFontSize,
  resolveTextColor,
  type CardSettings,
} from "./card-options";

interface QuoteCardPreviewProps {
  settings: CardSettings;
  /** Points at the unscaled card element, which is what gets exported. */
  cardRef: Ref<HTMLDivElement>;
}

export default function QuoteCardPreview({ settings, cardRef }: QuoteCardPreviewProps) {
  const { text, author, background, tone, font, align, format } = settings;
  const { width, height } = FORMATS[format];
  const containerRef = useRef<HTMLDivElement>(null);
  const [availableWidth, setAvailableWidth] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(([entry]) => setAvailableWidth(entry.contentRect.width));
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const scale = availableWidth === null ? 1 : Math.min(1, availableWidth / width);
  const color = resolveTextColor(background, tone);
  const trimmed = text.trim();
  const fontDef = FONTS[font];
  const fontSize = Math.round(baseFontSize(trimmed.length) * fontDef.scale);
  const accent = BACKGROUNDS[background].accent;

  return (
    <div ref={containerRef} className="w-full">
      <div
        className="mx-auto overflow-hidden rounded-2xl shadow-2xl shadow-black/50"
        style={{
          width: width * scale,
          height: height * scale,
          visibility: availableWidth === null ? "hidden" : "visible",
        }}
      >
        <div
          ref={cardRef}
          role="img"
          aria-label={trimmed ? `Quote card: ${trimmed}${author.trim() ? ` — ${author.trim()}` : ""}` : "Quote card preview"}
          style={{
            width,
            height,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            background: BACKGROUNDS[background].css,
            color,
            fontFamily: fontDef.family,
            textAlign: align,
            display: "flex",
            flexDirection: "column",
            padding: 48,
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{ fontFamily: "Georgia, serif", fontSize: 96, lineHeight: 0.8, height: 44, color: accent }}
          >
            “
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", minHeight: 0 }}>
            <p
              style={{
                margin: 0,
                width: "100%",
                fontSize,
                lineHeight: 1.4,
                fontWeight: font === "script" ? 600 : 500,
                overflowWrap: "anywhere",
                whiteSpace: "pre-wrap",
                opacity: trimmed ? 1 : 0.45,
              }}
            >
              {trimmed || "Your words go here"}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 16,
              flexDirection: align === "right" ? "row-reverse" : "row",
              marginTop: 24,
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: 0,
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                fontSize: 18,
                fontWeight: 600,
                overflowWrap: "anywhere",
                textAlign: align,
              }}
            >
              {author.trim() && <span style={{ color: accent }}>— {author.trim()}</span>}
            </div>
            <div
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: 0.6,
                whiteSpace: "nowrap",
              }}
            >
              QuoteSpace
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
