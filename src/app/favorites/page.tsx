import type { Metadata } from "next";
import FavoritesList from "@/components/quotes/FavoritesList";

export const metadata: Metadata = { title: "Favorites" };

export default function FavoritesPage() {
  return (
    <div className="space-y-8 pt-6">
      <header>
        <h1 className="font-serif text-4xl font-semibold tracking-tight">Your favorites</h1>
        <p className="mt-3 max-w-xl text-muted">
          Quotes you&apos;ve saved. They live in this browser only and aren&apos;t synced to other devices.
        </p>
      </header>
      <FavoritesList />
    </div>
  );
}
