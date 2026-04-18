import { create } from "zustand";
import { Locale } from "@/core/i18n/config";

interface I18nState {
  translationsMap: Partial<Record<Locale, string>>;
  setTranslationsMap: (map: Partial<Record<Locale, string>>) => void;
  resetTranslationsMap: () => void;
}

export const useI18nStore = create<I18nState>((set) => ({
  translationsMap: {},
  setTranslationsMap: (map) => set({ translationsMap: map }),
  resetTranslationsMap: () => set({ translationsMap: {} }),
}));
