import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/features/article/api/article.api";
import { Locale } from "@/core/i18n/config";
import { LanguageSwitcher } from "@/shared/components/LanguageSwitcher";
import { I18nStoreInitializer } from "@/shared/components/I18nStoreInitializer";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

// SEO Optimized metadata with localized alternate links
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const { data: article } = await getArticleBySlug(slug, locale);

  if (!article) return { title: "Article Not Found" };

  const alternateLanguages: Record<string, string> = {};
  Object.entries(article.translations).forEach(([loc, translationSlug]) => {
    alternateLanguages[loc as Locale] = `/${loc}/news/${translationSlug}`;
  });

  return {
    title: article.title,
    description: article.content.substring(0, 160),
    alternates: {
      canonical: `/${locale}/news/${slug}`,
      languages: alternateLanguages,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const { data: article, error } = await getArticleBySlug(slug, locale);

  if (error || !article) {
    notFound();
  }

  return (
    <>
      <I18nStoreInitializer translationsMap={article.translations} />

      <main className="container mx-auto p-8 max-w-3xl min-h-screen">
        <header className="mb-12 flex justify-between items-center bg-card p-6 rounded-2xl shadow-sm border animate-in fade-in duration-500">
          <div className="flex flex-col">
             <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Regional Edition</span>
             <h2 className="text-sm font-medium text-muted-foreground">Select Language</h2>
          </div>
          <LanguageSwitcher />
        </header>

        <article className="p-10 bg-card text-card-foreground border rounded-3xl shadow-xl mt-8 animate-in slide-in-from-bottom-2 fade-in duration-300">
          <div className="flex gap-2 items-center mb-6">
             <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">Breaking News</span>
             <time className="text-xs text-muted-foreground">{article.publishedAt}</time>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
            {article.title}
          </h1>
          
          <p className="text-muted-foreground mb-10 text-sm font-medium uppercase tracking-wider flex items-center gap-2">
            <span className="w-8 h-[2px] bg-primary/30" />
            {article.author}
          </p>
          
          <div className="text-xl leading-relaxed text-foreground/90 font-medium selection:bg-primary selection:text-primary-foreground">
            {article.content}
          </div>
        </article>
      </main>
    </>
  );
}
