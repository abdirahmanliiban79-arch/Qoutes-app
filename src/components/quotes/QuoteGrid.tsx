import type { Quote } from "@/types/quote";
import QuoteCard from "./QuoteCard";

export default function QuoteGrid({ quotes }: { quotes: readonly Quote[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {quotes.map((quote) => (
        <li key={quote.id} className="flex">
          <div className="flex w-full flex-col [&>article]:flex-1">
            <QuoteCard quote={quote} />
          </div>
        </li>
      ))}
    </ul>
  );
}
