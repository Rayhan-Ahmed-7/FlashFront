export default function SearchPage() {
  return (
    <main className="container mx-auto px-6 py-24 min-h-screen">
      <section className="max-w-3xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-black tracking-tight">Search News</h1>
          <p className="text-muted-foreground text-lg">Find the stories that matter to you across all regions.</p>
        </header>

        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search for topics, authors, or keywords..."
            className="w-full px-8 py-6 text-xl bg-card border-2 border-border rounded-3xl shadow-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all">
            Search
          </button>
        </div>

        <div className="grid gap-4">
           <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Trending Searches</h3>
           <div className="flex flex-wrap gap-2">
              {['Space Exploration', 'Climate Change', 'Tech 2026', 'Health & AI'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border hover:bg-muted cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
