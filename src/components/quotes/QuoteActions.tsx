"use client";

import { Copy, ImageIcon, Share2 } from "lucide-react";
import IconButton, { IconLink } from "@/components/ui/IconButton";
import { useQuoteActions } from "@/hooks/useQuoteActions";
import type { Quote } from "@/types/quote";
import FavoriteButton from "./FavoriteButton";

export default function QuoteActions({ quote }: { quote: Quote }) {
  const { copyQuote, shareQuote } = useQuoteActions();

  return (
    <div className="flex items-center gap-0.5">
      <FavoriteButton quoteId={quote.id} />
      <IconButton label="Copy quote" onClick={() => copyQuote(quote)}>
        <Copy aria-hidden className="size-[18px]" />
      </IconButton>
      <IconButton label="Share quote" onClick={() => shareQuote(quote)}>
        <Share2 aria-hidden className="size-[18px]" />
      </IconButton>
      <IconLink label="Create quote card" href={`/create?quote=${quote.id}`}>
        <ImageIcon aria-hidden className="size-[18px]" />
      </IconLink>
    </div>
  );
}
