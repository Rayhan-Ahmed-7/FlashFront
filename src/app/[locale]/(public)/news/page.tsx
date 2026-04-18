import { getDictionary, Locale } from "@/core/i18n/config";
import Link from "next/link";

export default async function NewsListingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const featuredArticles = [
    {
      title: locale === 'ar' ? "استكشاف الفضاء في عام 2026" : "Space Exploration in 2026",
      slug: locale === 'ar' ? "تقنية-الفضاء-2026" : "space-tech-2026",
      description: locale === 'ar' ? "نظرة على مستقبل المهمات القمرية." : "A look into the future of lunar missions.",
    }
  ];

  return (
    <main className="container mx-auto px-6 py-12 min-h-screen">
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">
          {locale === 'ar' ? 'أحدث الأخبار' : 'Latest News'}
        </h1>
        <p className="text-muted-foreground mt-2">
          {locale === 'ar' ? 'البقاء على اطلاع مع فلاش' : 'Stay informed with Flash.'}
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {featuredArticles.map((article) => (
          <Link 
            key={article.slug}
            href={`/${locale}/news/${article.slug}`}
            className="group block space-y-4 p-6 bg-card border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="aspect-video bg-muted rounded-2xl mb-4 overflow-hidden">
               <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-primary font-bold">News Thumbnail</span>
               </div>
            </div>
            <h2 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
              {article.title}
            </h2>
            <p className="text-muted-foreground line-clamp-2">
              {article.description}
            </p>
            <div className="pt-4 flex items-center text-primary font-semibold text-sm">
               {locale === 'ar' ? 'اقرأ أكثر' : 'Read More'}
               <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
