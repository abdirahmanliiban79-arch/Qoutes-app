"use client";

import { Search, X } from "lucide-react";
import type { FormEvent } from "react";

interface QuoteSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
}

export default function QuoteSearch({ value, onChange, onSubmit }: QuoteSearchProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <form role="search" onSubmit={handleSubmit} className="relative w-full">
      <label htmlFor="quote-search" className="sr-only">
        Search quotes by text, author, or category
      </label>
      <input
        id="quote-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") onChange("");
        }}
        placeholder="Search by quote, author, or category"
        autoComplete="off"
        className="glass h-14 w-full rounded-2xl pl-12 pr-12 text-base text-ink placeholder:text-muted [&::-webkit-search-cancel-button]:hidden"
      />
      <Search aria-hidden className="pointer-events-none absolute z-10 left-4 top-1/2 size-5 -translate-y-1/2 text-muted" />
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors hover:bg-glass-strong hover:text-ink"
        >
          <X aria-hidden className="size-5" />
        </button>
      )}
    </form>
  );
}
