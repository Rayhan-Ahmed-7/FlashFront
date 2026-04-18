export default async function TopicPage({ 
  params 
}: { 
  params: Promise<{ topic: string, locale: string }> 
}) {
  const { topic } = await params;
  
  return (
    <main className="container mx-auto px-6 py-24 min-h-screen">
      <header className="mb-16 space-y-4">
        <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest">
           Topic
        </div>
        <h1 className="text-6xl font-black tracking-tight capitalize">{topic.replace(/-/g, ' ')}</h1>
        <p className="text-muted-foreground text-xl max-w-2xl">
          Deep dives and specialized reporting on {topic.replace(/-/g, ' ')} from around the globe.
        </p>
      </header>
      
      <div className="text-center py-24 bg-card border-2 border-dashed border-muted rounded-[3rem] space-y-4">
        <h3 className="text-2xl font-bold">More coverage coming soon</h3>
        <p className="text-muted-foreground">Our editors are compiling the latest stories for this topic.</p>
      </div>
    </main>
  );
}
