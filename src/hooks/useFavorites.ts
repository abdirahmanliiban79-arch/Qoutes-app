"use client";

import { useCallback, useSyncExternalStore } from "react";
import { isKnownQuoteId } from "@/lib/quote-utils";
import { FAVORITES_KEY, readJSON, writeJSON } from "@/lib/storage";

const EMPTY: readonly string[] = [];

let cache: readonly string[] | null = null;
const listeners = new Set<() => void>();

function loadIds(): readonly string[] {
  const stored = readJSON(FAVORITES_KEY);
  if (!Array.isArray(stored)) return EMPTY;
  return [...new Set(stored.filter(isKnownQuoteId))];
}

function getSnapshot(): readonly string[] {
  cache ??= loadIds();
  return cache;
}

function getServerSnapshot(): readonly string[] {
  return EMPTY;
}

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === FAVORITES_KEY) {
      cache = null;
      emit();
    }
  };
  listeners.add(listener);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

const subscribeReady = () => () => {};

export function useFavorites() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // False during server render and hydration, so UI can avoid flashing empty states.
  const ready = useSyncExternalStore(subscribeReady, () => true, () => false);

  const isFavorite = useCallback((id: string) => ids.includes(id), [ids]);

  const toggleFavorite = useCallback((id: string): boolean => {
    if (!isKnownQuoteId(id)) return false;
    const current = getSnapshot();
    const adding = !current.includes(id);
    cache = adding ? [...current, id] : current.filter((item) => item !== id);
    writeJSON(FAVORITES_KEY, cache);
    emit();
    return adding;
  }, []);

  return { ids, ready, isFavorite, toggleFavorite };
}
