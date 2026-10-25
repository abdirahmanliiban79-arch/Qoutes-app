"use client";

import { AlignCenter, AlignLeft, AlignRight, type LucideIcon } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import type { Quote } from "@/types/quote";
import {
  BACKGROUNDS,
  FONTS,
  FORMATS,
  MAX_AUTHOR_LENGTH,
  MAX_QUOTE_LENGTH,
  resolveTextColor,
  type Alignment,
  type BackgroundId,
  type CardSettings,
  type FontId,
  type FormatId,
  type TextTone,
} from "./card-options";
import ExportActions from "./ExportActions";
import QuoteCardPreview from "./QuoteCardPreview";

const ALIGNMENTS: { id: Alignment; label: string; icon: LucideIcon }[] = [
  { id: "left", label: "Align left", icon: AlignLeft },
  { id: "center", label: "Align center", icon: AlignCenter },
  { id: "right", label: "Align right", icon: AlignRight },
];

const TONES: { id: TextTone; label: string }[] = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "accent", label: "Accent" },
];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div role="group" aria-label={label} className="space-y-2">
      <p className="text-sm font-medium text-muted">{label}</p>
      {children}
    </div>
  );
}

function optionClass(selected: boolean) {
  return `inline-flex h-10 items-center justify-center gap-2 rounded-xl border px-3 text-sm font-medium transition-colors ${
    selected
      ? "border-violet bg-violet/20 text-ink"
      : "border-glass-border bg-glass text-muted hover:bg-glass-strong hover:text-ink"
  }`;
}

const inputClass =
  "w-full rounded-xl border border-glass-border bg-black/20 px-4 py-3 text-ink placeholder:text-muted";

export default function QuoteCardEditor({ initialQuote }: { initialQuote?: Quote }) {
  const [settings, setSettings] = useState<CardSettings>({
    text: initialQuote?.text ?? "",
    author: initialQuote?.author ?? "",
    background: "midnight",
    tone: "light",
    font: "serif",
    align: "center",
    format: "square",
  });
  const cardRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof CardSettings>(key: K, value: CardSettings[K]) =>
    setSettings((current) => ({ ...current, [key]: value }));

  const chooseBackground = (background: BackgroundId) =>
    setSettings((current) => ({
      ...current,
      background,
      // Keep text readable: pick the preset's natural text tone unless accent is chosen.
      tone: current.tone === "accent" ? "accent" : BACKGROUNDS[background].defaultText,
    }));

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
      <div className="glass space-y-6 rounded-3xl p-5 sm:p-6">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <label htmlFor="quote-text" className="text-sm font-medium text-muted">
              Quote
            </label>
            <span className="text-xs text-muted" aria-live="polite">
              {settings.text.length}/{MAX_QUOTE_LENGTH}
            </span>
          </div>
          <textarea
            id="quote-text"
            value={settings.text}
            maxLength={MAX_QUOTE_LENGTH}
            rows={4}
            placeholder="Write your own quote…"
            onChange={(event) => update("text", event.target.value)}
            className={`${inputClass} resize-y`}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="quote-author" className="text-sm font-medium text-muted">
            Author <span className="font-normal">(optional)</span>
          </label>
          <input
            id="quote-author"
            type="text"
            value={settings.author}
            maxLength={MAX_AUTHOR_LENGTH}
            placeholder="Who said it?"
            onChange={(event) => update("author", event.target.value)}
            className={inputClass}
          />
        </div>

        <Field label="Background">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(BACKGROUNDS) as BackgroundId[]).map((id) => (
              <button
                key={id}
                type="button"
                aria-pressed={settings.background === id}
                onClick={() => chooseBackground(id)}
                className={`${optionClass(settings.background === id)} pl-2`}
              >
                <span
                  aria-hidden
                  className="size-6 rounded-full border border-white/20"
                  style={{ background: BACKGROUNDS[id].css }}
                />
                {BACKGROUNDS[id].label}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Text color">
          <div className="flex flex-wrap gap-2">
            {TONES.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-pressed={settings.tone === id}
                onClick={() => update("tone", id)}
                className={`${optionClass(settings.tone === id)} pl-2`}
              >
                <span
                  aria-hidden
                  className="size-6 rounded-full border border-white/30"
                  style={{ background: resolveTextColor(settings.background, id) }}
                />
                {label}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Font">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(FONTS) as FontId[]).map((id) => (
              <button
                key={id}
                type="button"
                aria-pressed={settings.font === id}
                onClick={() => update("font", id)}
                className={optionClass(settings.font === id)}
                style={{ fontFamily: FONTS[id].family, fontSize: `${FONTS[id].scale > 1 ? 1.15 : 0.95}rem` }}
              >
                {FONTS[id].label}
              </button>
            ))}
          </div>
        </Field>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-4">
          <Field label="Alignment">
            <div className="flex gap-2">
              {ALIGNMENTS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  aria-label={label}
                  title={label}
                  aria-pressed={settings.align === id}
                  onClick={() => update("align", id)}
                  className={`${optionClass(settings.align === id)} w-10 px-0`}
                >
                  <Icon aria-hidden className="size-[18px]" />
                </button>
              ))}
            </div>
          </Field>

          <Field label="Format">
            <div className="flex gap-2">
              {(Object.keys(FORMATS) as FormatId[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={settings.format === id}
                  onClick={() => update("format", id)}
                  className={optionClass(settings.format === id)}
                >
                  {FORMATS[id].label}
                </button>
              ))}
            </div>
          </Field>
        </div>
      </div>

      <div className="min-w-0 space-y-6 lg:sticky lg:top-24">
        <QuoteCardPreview settings={settings} cardRef={cardRef} />
        <ExportActions cardRef={cardRef} text={settings.text} author={settings.author} />
      </div>
    </div>
  );
}
