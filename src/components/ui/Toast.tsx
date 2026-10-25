"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type ToastKind = "success" | "error";

interface ToastState {
  id: number;
  message: string;
  kind: ToastKind;
}

interface ToastApi {
  success: (message: string) => void;
  error: (message: string) => void;
}

const ToastContext = createContext<ToastApi | null>(null);

export function useToast(): ToastApi {
  const api = useContext(ToastContext);
  if (!api) throw new Error("useToast must be used inside <ToastProvider>");
  return api;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState | null>(null);
  const nextId = useRef(0);

  const show = useCallback((kind: ToastKind, message: string) => {
    setToast({ id: nextId.current++, kind, message });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), toast.kind === "error" ? 5000 : 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  const api = useMemo<ToastApi>(
    () => ({
      success: (message) => show("success", message),
      error: (message) => show("error", message),
    }),
    [show],
  );

  const Icon = toast?.kind === "error" ? AlertCircle : CheckCircle2;

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4"
      >
        {toast && (
          <div
            key={toast.id}
            className="toast-in glass pointer-events-auto flex max-w-md items-center gap-3 rounded-2xl bg-slate-900/85 px-4 py-3 text-sm text-ink"
          >
            <Icon
              aria-hidden
              className={`size-5 shrink-0 ${toast.kind === "error" ? "text-coral" : "text-violet"}`}
            />
            <span>{toast.message}</span>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}
