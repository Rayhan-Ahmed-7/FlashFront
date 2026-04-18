import { getDictionary, Locale } from "@/core/i18n/config";
import Link from "next/link";
import { LanguageSwitcher } from "@/shared/components/LanguageSwitcher";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="mb-12">
        <LanguageSwitcher />
      </div>

      <section className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <h1 className="text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Flash News
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {dict.article.content.substring(0, 100)}...
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <Link
            href={`/${locale}/news/space-tech-2026`}
            className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Read Breaking news
          </Link>
          <Link
            href={`/${locale}/news/page`}
            className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-2xl border hover:bg-muted transition-all duration-200"
          >
            Browse All News
          </Link>
        </div>
      </section>

      {/* Hero Gradients */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>
    </main>
  );
}
