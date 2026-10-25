"use client";

import { useSyncExternalStore } from "react";
import { getDailyQuote } from "@/lib/quote-utils";
import QuoteActions from "./QuoteActions";

const subscribe = () => () => {};
// Local calendar date as a string: a stable snapshot that only changes with the date.
const getDateKey = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
};
const getServerDateKey = () => "";

export default function QuoteOfTheDay() {
  // The date is only known in the browser; the server renders a placeholder of the same size.
  const dateKey = useSyncExternalStore(subscribe, getDateKey, getServerDateKey);
  const quote = dateKey ? getDailyQuote(new Date()) : null;

  return (
    <section aria-labelledby="qotd-heading" className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-violet/20 blur-3xl"
      />
      <div className="relative">
        <h2 id="qotd-heading" className="text-sm font-semibold uppercase tracking-widest text-coral">
          Quote of the Day
        </h2>
        <div className="mt-5 min-h-32">
          {quote ? (
            <figure>
              <blockquote className="max-w-3xl font-serif text-2xl leading-relaxed [overflow-wrap:anywhere] sm:text-4xl sm:leading-snug">
                “{quote.text}”
              </blockquote>
              <figcaption className="mt-5 text-base text-muted">— {quote.author}</figcaption>
            </figure>
          ) : (
            <div aria-hidden className="space-y-3">
              <div className="h-8 w-full max-w-2xl animate-pulse rounded-lg bg-glass-strong" />
              <div className="h-8 w-2/3 animate-pulse rounded-lg bg-glass-strong" />
            </div>
          )}
        </div>
        {quote && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-violet/15 px-3 py-1 text-xs font-medium text-violet">
              {quote.category}
            </span>
            <QuoteActions quote={quote} />
          </div>
        )}
      </div>
    </section>
  );
}
