import Image from "next/image";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  image: string;
}

interface MenuSectionProps {
  items: MenuItem[];
}

export function MenuSection({ items }: MenuSectionProps) {
  return (
    <section id="menu" data-reveal className="reveal py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--coffee-soft)]">
            Signature Menu
          </p>
          <h2 className="font-display text-4xl text-[color:var(--coffee-ink)]">Pilihan favorit pelanggan</h2>
        </div>
        <a href="#contact" className="text-sm font-bold text-[color:var(--coffee-accent)] hover:underline">
          Request full menu
        </a>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.name}
            className="interactive-card rounded-3xl border border-[color:var(--coffee-warm)] bg-[color:var(--coffee-cream)]/85 p-6"
          >
            <div className="relative mb-4 h-44 overflow-hidden rounded-2xl">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl text-[color:var(--coffee-ink)]">{item.name}</h3>
                <p className="mt-2 text-[color:var(--coffee-soft)]">{item.desc}</p>
              </div>
              <p className="font-display text-2xl text-[color:var(--coffee-accent)]">{item.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
