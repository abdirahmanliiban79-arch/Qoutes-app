"use client";

import { Compass, Heart, PenSquare, Quote } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/hooks/useFavorites";

const links = [
  { href: "/", label: "Discover", icon: Compass },
  { href: "/create", label: "Create", icon: PenSquare },
  { href: "/favorites", label: "Favorites", icon: Heart },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { ids } = useFavorites();

  return (
    <header className="sticky top-0 z-40 border-b border-glass-border bg-background/70 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 rounded-lg font-semibold tracking-tight">
          <span className="flex size-9 items-center justify-center rounded-xl bg-violet/20 text-violet">
            <Quote aria-hidden className="size-5" />
          </span>
          <span className="text-lg">QuoteSpace</span>
        </Link>

        <ul className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  aria-label={label}
                  className={`relative flex h-10 items-center gap-2 rounded-full px-3 text-sm font-medium transition-colors sm:px-4 ${
                    active ? "bg-glass-strong text-ink" : "text-muted hover:bg-glass hover:text-ink"
                  }`}
                >
                  <Icon aria-hidden className="size-[18px]" />
                  <span className="hidden sm:inline">{label}</span>
                  {href === "/favorites" && ids.length > 0 && (
                    <span className="min-w-5 rounded-full bg-coral px-1.5 text-center text-xs font-semibold leading-5 text-slate-950">
                      {ids.length}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
