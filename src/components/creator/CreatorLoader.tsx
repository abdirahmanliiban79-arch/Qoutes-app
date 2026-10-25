"use client";

import { useSearchParams } from "next/navigation";
import { getQuoteById } from "@/lib/quote-utils";
import QuoteCardEditor from "./QuoteCardEditor";

/** Reads `?quote=<id>`; unknown or missing ids fall back to a blank editor. */
export default function CreatorLoader() {
  const quote = getQuoteById(useSearchParams().get("quote"));
  return <QuoteCardEditor key={quote?.id ?? "blank"} initialQuote={quote} />;
}
