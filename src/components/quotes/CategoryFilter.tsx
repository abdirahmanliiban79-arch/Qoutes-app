import { categories } from "@/lib/quote-utils";
import type { Category } from "@/types/quote";

interface CategoryFilterProps {
  active: Category | "All";
  onChange: (category: Category | "All") => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
      {(["All", ...categories] as const).map((category) => {
        const selected = category === active;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(category)}
            className={`h-9 rounded-full border px-4 text-sm font-medium transition-colors ${
              selected
                ? "border-violet bg-violet text-slate-950"
                : "border-glass-border bg-glass text-muted hover:bg-glass-strong hover:text-ink"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
