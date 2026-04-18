"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales } from "@/core/i18n/config";
import { useI18nStore } from "@/shared/hooks/useI18nStore";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const { translationsMap } = useI18nStore();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    
    // Check if we have a translated slug for this locale in our store
    const translatedSlug = translationsMap[locale as keyof typeof translationsMap];
    
    if (translatedSlug) {
      // If we are in /[locale]/news/[slug], replace segments[3] with translatedSlug
      if (segments[2] === 'news' && segments[3]) {
        segments[3] = translatedSlug;
      }
    }

    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-4">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathName(locale)}
          className="px-3 py-1 border rounded-md hover:bg-accent hover:text-accent-foreground uppercase transition-all duration-200"
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
