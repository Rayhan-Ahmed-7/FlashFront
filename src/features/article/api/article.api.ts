import { Article, ArticleResponse } from "../types/article.types";
import { Locale } from "@/core/i18n/config";

// Mock data simulating a Relation-based database (Option B)
// Each language version has its own unique slug
const mockArticles: Article[] = [
  {
    id: "1",
    slug: "space-tech-2026",
    locale: "en",
    title: "Space Exploration in 2026",
    author: "James Web",
    content: "2026 is set to be a breakthrough year for lunar missions and private spaceflight.",
    publishedAt: "2026-04-18",
    translations: {
      en: "space-tech-2026",
      ar: "تقنية-الفضاء-2026",
      fr: "techno-spatiale-2026",
      de: "raumfahrt-2026"
    }
  },
  {
    id: "1",
    slug: "تقنية-الفضاء-2026",
    locale: "ar",
    title: "استكشاف الفضاء في عام 2026",
    author: "جيمس ويب",
    content: "من المقرر أن يكون عام 2026 عاماً حاسماً للمهمات القمرية ورحلات الفضاء الخاصة.",
    publishedAt: "2026-04-18",
    translations: {
      en: "space-tech-2026",
      ar: "تقنية-الفضاء-2026",
      fr: "techno-spatiale-2026",
      de: "raumfahrt-2026"
    }
  },
  {
    id: "1",
    slug: "techno-spatiale-2026",
    locale: "fr",
    title: "L'exploration spatiale en 2026",
    author: "James Web",
    content: "2026 s'annonce comme une année charnière pour les missions lunaires.",
    publishedAt: "2026-04-18",
    translations: {
      en: "space-tech-2026",
      ar: "تقنية-الفضاء-2026",
      fr: "techno-spatiale-2026",
      de: "raumfahrt-2026"
    }
  }
];

export async function getArticleBySlug(slug: string, locale: Locale): Promise<ArticleResponse> {
  // Simulate realistic production network latency (reduced from 800ms for LCP optimization)
  await new Promise((resolve) => setTimeout(resolve, 150));

  const decodedSlug = decodeURIComponent(slug);
  const article = mockArticles.find(
    (a) => a.slug === decodedSlug && a.locale === locale
  );

  if (!article) {
    return { data: null, error: "Article not found" };
  }

  return { data: article };
}
