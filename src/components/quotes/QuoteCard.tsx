import type { Quote } from "@/types/quote";
import QuoteActions from "./QuoteActions";

export default function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <article className="glass flex flex-col justify-between gap-6 rounded-3xl p-6">
      <figure>
        <blockquote className="font-serif text-xl leading-relaxed text-ink [overflow-wrap:anywhere]">
          “{quote.text}”
        </blockquote>
        <figcaption className="mt-4 text-sm text-muted">— {quote.author}</figcaption>
      </figure>
      <div className="flex items-center justify-between gap-2 border-t border-glass-border pt-4">
        <span className="rounded-full bg-violet/15 px-3 py-1 text-xs font-medium text-violet">
          {quote.category}
        </span>
        <QuoteActions quote={quote} />
      </div>
    </article>
  );
}
