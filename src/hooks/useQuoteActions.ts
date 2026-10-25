"use client";

import { useCallback } from "react";
import { useToast } from "@/components/ui/Toast";
import { formatQuoteText } from "@/lib/quote-utils";

interface QuoteContent {
  text: string;
  author?: string;
}

export function useQuoteActions() {
  const toast = useToast();

  const copyQuote = useCallback(
    async ({ text, author }: QuoteContent): Promise<boolean> => {
      try {
        if (!navigator.clipboard) throw new Error("Clipboard unavailable");
        await navigator.clipboard.writeText(formatQuoteText(text, author));
        toast.success("Quote copied to clipboard");
        return true;
      } catch {
        toast.error("Couldn't copy the quote. Your browser may be blocking clipboard access.");
        return false;
      }
    },
    [toast],
  );

  const shareQuote = useCallback(
    async (content: QuoteContent) => {
      const text = formatQuoteText(content.text, content.author);
      if (typeof navigator.share !== "function") {
        await copyQuote(content);
        return;
      }
      try {
        await navigator.share({ title: "QuoteSpace", text });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        await copyQuote(content);
      }
    },
    [copyQuote],
  );

  return { copyQuote, shareQuote };
}
