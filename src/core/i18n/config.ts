export const defaultLocale = 'en';
export const locales = ['en', 'ar', 'fr', 'de'] as const;

export type Locale = typeof locales[number];

// A basic dictionary loader based on standard Next.js internationalization patterns
const dictionaries = {
  en: () => import('./locales/en.json').then((module) => module.default),
  ar: () => import('./locales/ar.json').then((module) => module.default),
  fr: () => import('./locales/fr.json').then((module) => module.default),
  de: () => import('./locales/de.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries[defaultLocale]();
};
