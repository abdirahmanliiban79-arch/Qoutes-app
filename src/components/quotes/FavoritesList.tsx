"use client";

import { Compass, Heart } from "lucide-react";
import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import { useFavorites } from "@/hooks/useFavorites";
import { getQuoteById } from "@/lib/quote-utils";
import type { Quote } from "@/types/quote";
import QuoteGrid from "./QuoteGrid";

export default function FavoritesList() {
  const { ids, ready } = useFavorites();

  if (!ready) {
    return <div aria-hidden className="glass h-48 animate-pulse rounded-3xl" />;
  }

  const favorites = ids.map(getQuoteById).filter((quote): quote is Quote => quote !== undefined);

  if (favorites.length === 0) {
    return (
      <EmptyState
        icon={Heart}
        title="No favorites yet"
        description="Tap the heart on any quote to save it here. Favorites are kept only in this browser on this device."
        action={
          <Link href="/" className={buttonStyles("primary")}>
            <Compass aria-hidden className="size-4" />
            Discover quotes
          </Link>
        }
      />
    );
  }

  return <QuoteGrid quotes={favorites} />;
}
