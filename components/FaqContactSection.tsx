interface FaqItem {
  q: string;
  a: string;
}

interface FaqContactSectionProps {
  items: FaqItem[];
}

export function FaqContactSection({ items }: FaqContactSectionProps) {
  return (
    <section data-reveal className="reveal grid gap-8 py-16 md:grid-cols-2">
      <div>
        <h2 className="font-display text-4xl text-[color:var(--coffee-ink)]">FAQ</h2>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[color:var(--coffee-warm)] bg-[color:var(--coffee-cream)] p-5 open:shadow-lg"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[color:var(--coffee-ink)]">
                {item.q}
                <span className="text-xl transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--coffee-soft)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div
        id="contact"
        className="interactive-card rounded-3xl border border-[color:var(--coffee-warm)] bg-[linear-gradient(160deg,_#2d1b11,_#4b2f1d)] p-8 text-[color:var(--coffee-cream)]"
      >
        <h2 className="font-display text-4xl">Book Your Spot</h2>
        <p className="mt-4 text-[color:var(--coffee-latte)]">
          Jl. Senja No. 21, Jakarta Selatan
          <br />
          Senin - Minggu: 07.00 - 22.00
        </p>
        <div className="mt-8 space-y-3">
          <a
            href="https://wa.me/628111111111"
            className="btn-shine block rounded-full bg-[color:var(--coffee-cream)] px-5 py-3 text-center font-semibold text-[color:var(--coffee-ink)] transition hover:bg-[color:var(--coffee-latte)]"
          >
            WhatsApp Reservation
          </a>
          <a
            href="mailto:hello@emberandbean.id"
            className="block rounded-full border border-[color:var(--coffee-latte)] px-5 py-3 text-center font-semibold text-[color:var(--coffee-cream)] transition hover:bg-white/10"
          >
            hello@emberandbean.id
          </a>
        </div>
      </div>
    </section>
  );
}
