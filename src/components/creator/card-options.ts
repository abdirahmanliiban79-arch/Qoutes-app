export const MAX_QUOTE_LENGTH = 280;
export const MAX_AUTHOR_LENGTH = 60;

export const BACKGROUNDS = {
  midnight: {
    label: "Midnight",
    css: "linear-gradient(145deg, #0b1020 0%, #1b1640 60%, #2a1f5c 100%)",
    accent: "#c4b5fd",
    defaultText: "light",
  },
  lavender: {
    label: "Lavender",
    css: "linear-gradient(145deg, #8b6cf6 0%, #6d4fe0 50%, #4c35b8 100%)",
    accent: "#ffd9d2",
    defaultText: "light",
  },
  sunset: {
    label: "Sunset",
    css: "linear-gradient(145deg, #f97362 0%, #d63f78 55%, #6b34a8 100%)",
    accent: "#ffeec2",
    defaultText: "light",
  },
  ocean: {
    label: "Ocean",
    css: "linear-gradient(145deg, #0e7490 0%, #0b4f7a 55%, #0a2a55 100%)",
    accent: "#a5f3fc",
    defaultText: "light",
  },
  minimal: {
    label: "Minimal Light",
    css: "linear-gradient(145deg, #fbfbfd 0%, #ececf4 100%)",
    accent: "#6d4fe0",
    defaultText: "dark",
  },
} as const;

export type BackgroundId = keyof typeof BACKGROUNDS;
export type TextTone = "light" | "dark" | "accent";

export const TEXT_COLORS = { light: "#f8f7ff", dark: "#14122b" } as const;

export const FONTS = {
  serif: { label: "Serif", family: "var(--font-playfair), Georgia, serif", scale: 1 },
  sans: { label: "Sans", family: "var(--font-geist-sans), system-ui, sans-serif", scale: 0.92 },
  script: { label: "Script", family: "var(--font-caveat), cursive", scale: 1.25 },
} as const;

export type FontId = keyof typeof FONTS;
export type Alignment = "left" | "center" | "right";

/** Native card sizes in CSS px; exports render at 2x (1080px wide). */
export const FORMATS = {
  square: { label: "Square", width: 540, height: 540 },
  portrait: { label: "Portrait", width: 540, height: 675 },
} as const;

export type FormatId = keyof typeof FORMATS;

export interface CardSettings {
  text: string;
  author: string;
  background: BackgroundId;
  tone: TextTone;
  font: FontId;
  align: Alignment;
  format: FormatId;
}

export function resolveTextColor(background: BackgroundId, tone: TextTone): string {
  return tone === "accent" ? BACKGROUNDS[background].accent : TEXT_COLORS[tone];
}

/** Shrinks type as the quote grows so long text never clips. */
export function baseFontSize(textLength: number): number {
  if (textLength <= 50) return 46;
  if (textLength <= 100) return 38;
  if (textLength <= 160) return 31;
  if (textLength <= 220) return 26;
  return 22;
}
