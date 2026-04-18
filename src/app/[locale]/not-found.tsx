import Link from "next/link";

export default function LocalizedNotFound() {
  return (
    <main className="container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="relative mb-8">
        <h1 className="text-9xl font-black text-muted/20 select-none">404</h1>
        <p className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
           Page Not Found
        </p>
      </div>
      
      <p className="text-muted-foreground max-w-md mb-12 text-lg">
        The page you are looking for doesn't exist or has been moved to a different language section.
      </p>

      <Link
        href="/"
        className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
      >
        Return to Homepage
      </Link>
    </main>
  );
}
