"use client";

import { Copy, Download, Loader2, Share2 } from "lucide-react";
import { useState, useSyncExternalStore, type RefObject } from "react";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { useQuoteActions } from "@/hooks/useQuoteActions";
import { EXPORT_FILENAME, downloadBlob, renderCardToPng } from "@/lib/image-export";

interface ExportActionsProps {
  cardRef: RefObject<HTMLDivElement | null>;
  text: string;
  author: string;
}

const subscribe = () => () => {};
const canNativeShare = () => typeof navigator.share === "function";

export default function ExportActions({ cardRef, text, author }: ExportActionsProps) {
  const [busy, setBusy] = useState<"download" | "share" | null>(null);
  const toast = useToast();
  const { copyQuote } = useQuoteActions();
  const shareSupported = useSyncExternalStore(subscribe, canNativeShare, () => false);
  const empty = text.trim() === "";

  const renderCard = async (): Promise<Blob | null> => {
    if (!cardRef.current) return null;
    try {
      return await renderCardToPng(cardRef.current);
    } catch {
      toast.error("Couldn't generate the image. Please try again.");
      return null;
    }
  };

  const handleDownload = async () => {
    if (busy) return;
    setBusy("download");
    const blob = await renderCard();
    if (blob) {
      downloadBlob(blob, EXPORT_FILENAME);
      toast.success("Image downloaded");
    }
    setBusy(null);
  };

  const handleShare = async () => {
    if (busy) return;
    setBusy("share");
    const blob = await renderCard();
    if (blob) {
      const file = new File([blob], EXPORT_FILENAME, { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file], text: author.trim() ? `${text.trim()} — ${author.trim()}` : text.trim() });
        } catch (error) {
          if (!(error instanceof DOMException && error.name === "AbortError")) {
            toast.error("Sharing failed. You can download the image instead.");
          }
        }
      } else {
        downloadBlob(blob, EXPORT_FILENAME);
        toast.error("This browser can't share images, so the PNG was downloaded instead.");
      }
    }
    setBusy(null);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary" size="lg" onClick={handleDownload} disabled={empty || busy !== null}>
        {busy === "download" ? <Loader2 aria-hidden className="size-5 animate-spin" /> : <Download aria-hidden className="size-5" />}
        {busy === "download" ? "Preparing image…" : "Download PNG"}
      </Button>
      {shareSupported && (
        <Button size="lg" onClick={handleShare} disabled={empty || busy !== null}>
          {busy === "share" ? <Loader2 aria-hidden className="size-5 animate-spin" /> : <Share2 aria-hidden className="size-5" />}
          {busy === "share" ? "Preparing…" : "Share"}
        </Button>
      )}
      <Button size="lg" onClick={() => copyQuote({ text, author })} disabled={empty}>
        <Copy aria-hidden className="size-5" />
        Copy text
      </Button>
    </div>
  );
}
