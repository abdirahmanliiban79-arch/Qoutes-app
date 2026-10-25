"use client";

import { ArrowRight, PenSquare, SearchX } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import Button, { buttonStyles } from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import { quotes } from "@/data/quotes";
import { filterQuotes } from "@/lib/quote-utils";
import type { Category } from "@/types/quote";
import CategoryFilter from "./CategoryFilter";
import QuoteGrid from "./QuoteGrid";
import QuoteOfTheDay from "./QuoteOfTheDay";
import QuoteSearch from "./QuoteSearch";

export default function DiscoverExperience() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const collectionRef = useRef<HTMLElement>(null);

  const results = filterQuotes(quotes, query, category);
  const filtering = query.trim() !== "" || category !== "All";

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <div className="space-y-12">
      <section aria-labelledby="hero-heading" className="mx-auto max-w-3xl pt-6 text-center sm:pt-12">
        <h1
          id="hero-heading"
          className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-6xl"
        >
          Discover words that <span className="text-violet">move you</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Browse timeless quotes, save the ones you love, and turn them into beautiful cards to share.
        </p>
        <div className="mt-8">
          <QuoteSearch
            value={query}
            onChange={setQuery}
            onSubmit={() => collectionRef.current?.scrollIntoView({ behavior: "smooth" })}
          />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#collection" className={buttonStyles("primary", "lg")}>
            Explore quotes
            <ArrowRight aria-hidden className="size-5" />
          </a>
          <Link href="/create" className={buttonStyles("secondary", "lg")}>
            <PenSquare aria-hidden className="size-5" />
            Create a quote card
          </Link>
        </div>
      </section>

      <QuoteOfTheDay />

      <section ref={collectionRef} id="collection" aria-labelledby="collection-heading" className="space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2 id="collection-heading" className="text-2xl font-semibold">
              Quote collection
            </h2>
            <p aria-live="polite" className="text-sm text-muted">
              {results.length} {results.length === 1 ? "quote" : "quotes"}
              {filtering && " found"}
            </p>
          </div>
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        {results.length > 0 ? (
          <QuoteGrid quotes={results} />
        ) : (
          <EmptyState
            icon={SearchX}
            title="No quotes found"
            description="Nothing matches your search and category. Try different words, or clear your filters to see everything."
            action={<Button onClick={clearFilters}>Clear search and filters</Button>}
          />
        )}
      </section>
    </div>
  );
}
