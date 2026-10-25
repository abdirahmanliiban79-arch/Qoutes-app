"use client";

import { Heart } from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import { useToast } from "@/components/ui/Toast";
import { useFavorites } from "@/hooks/useFavorites";

export default function FavoriteButton({ quoteId }: { quoteId: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const toast = useToast();
  const favorite = isFavorite(quoteId);

  return (
    <IconButton
      label={favorite ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={favorite}
      onClick={() => {
        const added = toggleFavorite(quoteId);
        toast.success(added ? "Saved to favorites" : "Removed from favorites");
      }}
    >
      <Heart aria-hidden className={`size-[18px] ${favorite ? "fill-current" : ""}`} />
    </IconButton>
  );
}
