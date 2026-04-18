"use client";

import { useEffect, useRef } from "react";
import { Locale } from "@/core/i18n/config";
import { useI18nStore } from "@/shared/hooks/useI18nStore";

export function I18nStoreInitializer({
  translationsMap,
}: {
  translationsMap: Partial<Record<Locale, string>>;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      useI18nStore.setState({ translationsMap });
      initialized.current = true;
    }
  }, [translationsMap]);

  // Optional: Reset on unmount if needed, but for single-nav apps 
  // we usually just let it persist until the next page initializes.
  return null;
}
