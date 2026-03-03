import Image from "next/image";

export function Hero() {
  return (
    <section data-reveal className="reveal grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
      <div>
        <p className="mb-4 inline-flex rounded-full border border-[color:var(--coffee-warm)] bg-[color:var(--coffee-latte)]/70 px-4 py-1 text-sm font-semibold text-[color:var(--coffee-soft)]">
          Specialty Coffee • Fresh Pastry • Cozy Space
        </p>
        <h1 className="font-display text-5xl leading-tight text-[color:var(--coffee-ink)] md:text-6xl">
          Brewed For Focus, Built For Comfort.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--coffee-soft)]">
          Coffee shop modern untuk kerja, ngobrol, atau recharge. Biji kopi pilihan, interior hangat, dan pelayanan
          cepat setiap hari.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="btn-shine rounded-full bg-[color:var(--coffee-ink)] px-6 py-3 font-semibold text-[color:var(--coffee-cream)] transition hover:bg-[color:var(--coffee-accent)]"
          >
            Reservasi Sekarang
          </a>
          <a
            href="#menu"
            className="rounded-full border border-[color:var(--coffee-warm)] px-6 py-3 font-semibold text-[color:var(--coffee-ink)] transition hover:bg-[color:var(--coffee-latte)]"
          >
            Lihat Menu
          </a>
        </div>
        <div className="mt-10 grid max-w-lg grid-cols-3 gap-5 text-sm">
          <div>
            <p className="font-display text-3xl text-[color:var(--coffee-ink)]">4.9</p>
            <p className="text-[color:var(--coffee-soft)]">Rating pelanggan</p>
          </div>
          <div>
            <p className="font-display text-3xl text-[color:var(--coffee-ink)]">32K+</p>
            <p className="text-[color:var(--coffee-soft)]">Cups served</p>
          </div>
          <div>
            <p className="font-display text-3xl text-[color:var(--coffee-ink)]">7</p>
            <p className="text-[color:var(--coffee-soft)]">Days open</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-5 top-10 h-24 w-24 rounded-full bg-[color:var(--coffee-accent)]/20 blur-lg" />
        <div className="interactive-card rounded-[2rem] border border-[color:var(--coffee-warm)]/50 bg-[linear-gradient(145deg,_#f5e6d8,_#dcc0a5)] p-8 shadow-[0_24px_64px_-24px_rgba(40,24,15,0.5)]">
          <div className="relative mb-5 h-52 overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
              alt="Barista pouring latte art"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--coffee-soft)]">
            Today&apos;s Highlight
          </p>
          <h2 className="mt-3 font-display text-4xl text-[color:var(--coffee-ink)]">Smoked Maple Latte</h2>
          <p className="mt-4 text-[color:var(--coffee-soft)]">
            Infused maple syrup, smoked cinnamon, dan double espresso. Balanced sweet and bold.
          </p>
          <div className="mt-6 rounded-2xl border border-[color:var(--coffee-warm)] bg-[color:var(--coffee-cream)]/80 p-4">
            <p className="text-sm text-[color:var(--coffee-soft)]">Only this week</p>
            <p className="font-display text-3xl text-[color:var(--coffee-ink)]">Rp47.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
