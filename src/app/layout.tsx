import type { Metadata } from "next";
import { Caveat, Geist, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "QuoteSpace — Discover meaningful words",
    template: "%s · QuoteSpace",
  },
  description:
    "Discover inspirational quotes, save your favorites, and turn any quote into a beautiful downloadable card.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} ${caveat.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-lg bg-violet px-4 py-2 font-medium text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <ToastProvider>
          <Navbar />
          <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-6 sm:px-6">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
