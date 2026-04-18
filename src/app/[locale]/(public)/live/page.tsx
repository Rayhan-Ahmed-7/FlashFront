export default function LivePage() {
  return (
    <main className="container mx-auto px-6 py-24 min-h-screen">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
             </span>
             <span className="text-sm font-bold uppercase tracking-widest text-red-500">Live Updates</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight">Breaking Coverage</h1>
        </div>
        <div className="flex bg-muted p-1 rounded-2xl">
          <button className="px-6 py-2 bg-card rounded-xl shadow-sm text-sm font-bold">Latest</button>
          <button className="px-6 py-2 text-sm font-medium">Timeline</button>
        </div>
      </header>
      
      <div className="grid gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-6 p-8 bg-card border rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
             <div className="hidden md:flex flex-col items-center gap-2 text-muted-foreground w-12 text-sm font-bold">
                <span>{12 - i}:00</span>
                <div className="flex-1 w-[2px] bg-muted/50" />
             </div>
             <div className="space-y-3">
                <h3 className="text-2xl font-bold">Headline for Live News Update #{i}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real-time reporting on development events. This section will eventually pull from a live stream or secondary news API.
                </p>
                <div className="flex items-center gap-4 pt-2">
                   <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-[10px]">👤</div>
                   <span className="text-xs font-bold text-muted-foreground">Updated by Editor</span>
                </div>
             </div>
          </div>
        ))}
      </div>
    </main>
  );
}
