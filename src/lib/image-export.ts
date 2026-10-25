import { toBlob } from "html-to-image";

export const EXPORT_FILENAME = "quotespace-quote.png";

const isSafari =
  typeof navigator !== "undefined" &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

/** Renders the card element (at its native, unscaled size) to a 2x PNG blob. */
export async function renderCardToPng(node: HTMLElement): Promise<Blob> {
  const options = {
    pixelRatio: 2,
    cacheBust: false,
    // The preview is scaled with a CSS transform; export at native size.
    style: { transform: "none", margin: "0" },
  };
  await document.fonts.ready;
  // Safari can return a blank image on the first render before assets are decoded.
  if (isSafari) await toBlob(node, options);
  const blob = await toBlob(node, options);
  if (!blob) throw new Error("The image could not be generated.");
  return blob;
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
