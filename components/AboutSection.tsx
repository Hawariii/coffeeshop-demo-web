export function AboutSection() {
  return (
    <section id="about" data-reveal className="reveal grid gap-10 py-16 md:grid-cols-2 md:items-center">
      <div className="interactive-card rounded-3xl border border-[color:var(--coffee-warm)] bg-[color:var(--coffee-latte)] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--coffee-soft)]">About Us</p>
        <h2 className="mt-4 font-display text-4xl text-[color:var(--coffee-ink)]">Ruang santai dengan rasa kopi yang presisi</h2>
        <p className="mt-4 leading-relaxed text-[color:var(--coffee-soft)]">
          Kami memilih biji dari roastery lokal terbaik, roasting profile yang konsisten, dan proses brewing detail.
          Setiap cup dirancang untuk bikin kamu betah lebih lama.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="interactive-card rounded-3xl bg-[color:var(--coffee-ink)] p-6 text-[color:var(--coffee-cream)]">
          <h3 className="font-display text-2xl">Single Origin Beans</h3>
          <p className="mt-2 text-sm text-[color:var(--coffee-latte)]">Rotasi origin Ethiopia, Toraja, dan Colombia.</p>
        </div>
        <div className="interactive-card rounded-3xl bg-[color:var(--coffee-cream)] p-6">
          <h3 className="font-display text-2xl text-[color:var(--coffee-ink)]">Fast Service Flow</h3>
          <p className="mt-2 text-sm text-[color:var(--coffee-soft)]">Rata-rata pesanan selesai dalam 6 menit.</p>
        </div>
      </div>
    </section>
  );
}
