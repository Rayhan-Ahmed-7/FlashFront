import { Locale } from "@/core/i18n/config";

export interface Article {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  author: string;
  content: string;
  publishedAt: string;
  // Option B requirement: Translation mapping for SEO translated slugs
  translations: Partial<Record<Locale, string>>;
}

export interface ArticleResponse {
  data: Article | null;
  error?: string;
}
