import { quotes } from "@/data/quotes";
import { CATEGORIES, type Category, type Quote } from "@/types/quote";

const quotesById = new Map(quotes.map((quote) => [quote.id, quote]));

export const categories: readonly Category[] = CATEGORIES.filter((category) =>
  quotes.some((quote) => quote.category === category),
);

export function getQuoteById(id: string | null | undefined): Quote | undefined {
  return id ? quotesById.get(id) : undefined;
}

export function isKnownQuoteId(id: unknown): id is string {
  return typeof id === "string" && quotesById.has(id);
}

export function filterQuotes(
  list: readonly Quote[],
  query: string,
  category: Category | "All",
): Quote[] {
  const needle = query.trim().toLowerCase();
  return list.filter((quote) => {
    if (category !== "All" && quote.category !== category) return false;
    if (!needle) return true;
    return (
      quote.text.toLowerCase().includes(needle) ||
      quote.author.toLowerCase().includes(needle) ||
      quote.category.toLowerCase().includes(needle)
    );
  });
}

const MS_PER_DAY = 86_400_000;

/** Same quote for the whole local calendar day, derived only from the date. */
export function getDailyQuote(date: Date): Quote {
  const dayNumber = Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / MS_PER_DAY,
  );
  return quotes[((dayNumber % quotes.length) + quotes.length) % quotes.length];
}

export function formatQuoteText(text: string, author?: string): string {
  const trimmedAuthor = author?.trim();
  return trimmedAuthor ? `${text.trim()}\n\n— ${trimmedAuthor}` : text.trim();
}
