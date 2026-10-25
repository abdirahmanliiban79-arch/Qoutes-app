import type { Metadata } from "next";
import { Suspense } from "react";
import CreatorLoader from "@/components/creator/CreatorLoader";

export const metadata: Metadata = { title: "Create a quote card" };

export default function CreatePage() {
  return (
    <div className="space-y-8 pt-6">
      <header>
        <h1 className="font-serif text-4xl font-semibold tracking-tight">Create a quote card</h1>
        <p className="mt-3 max-w-xl text-muted">
          Start from any quote or write your own, style it, and download it as a PNG.
        </p>
      </header>
      <Suspense fallback={<div aria-hidden className="glass h-96 animate-pulse rounded-3xl" />}>
        <CreatorLoader />
      </Suspense>
    </div>
  );
}
