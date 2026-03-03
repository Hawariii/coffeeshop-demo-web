import Image from "next/image";

interface GalleryItem {
  title: string;
  image: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  return (
    <section id="gallery" data-reveal className="reveal py-16">
      <h2 className="font-display text-4xl text-[color:var(--coffee-ink)]">Coffee Moments</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-[color:var(--coffee-warm)]">
            <div className="relative h-56 transition duration-500 group-hover:scale-110">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(42,26,18,0.52),_transparent_55%)] opacity-0 transition group-hover:opacity-100" />
            <p className="absolute bottom-4 left-4 rounded-full bg-[color:var(--coffee-cream)]/90 px-3 py-1 text-sm font-semibold text-[color:var(--coffee-ink)]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
