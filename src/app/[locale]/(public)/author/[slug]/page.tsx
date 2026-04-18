export default async function AuthorPage({ 
  params 
}: { 
  params: Promise<{ slug: string, locale: string }> 
}) {
  const { slug } = await params;
  
  return (
    <main className="container mx-auto px-6 py-24 min-h-screen">
      <header className="flex flex-col md:flex-row items-center gap-10 mb-20 p-12 bg-card border rounded-[3rem] shadow-sm">
        <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center text-4xl shadow-inner">
           👤
        </div>
        <div className="space-y-4 text-center md:text-left flex-1">
          <div className="space-y-1">
            <h1 className="text-4xl font-black tracking-tight capitalize">{slug.replace(/-/g, ' ')}</h1>
            <p className="text-primary font-bold text-sm uppercase tracking-widest">Senior Correspondent</p>
          </div>
          <p className="text-muted-foreground text-lg max-w-xl">
            Passionate about in-depth reporting and investigative journalism in the fields of technology and social change.
          </p>
        </div>
        <div className="flex gap-4">
           {['🐦', '🔗'].map(icon => (
             <button key={icon} className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center hover:bg-muted transition-colors border shadow-sm text-xl">{icon}</button>
           ))}
        </div>
      </header>

      <section className="space-y-8">
        <h2 className="text-3xl font-black">Published Stories</h2>
        <div className="text-center py-20 border-2 border-dashed border-muted rounded-[2rem] text-muted-foreground">
           No stories published under this profile yet.
        </div>
      </section>
    </main>
  );
}
