import Image from "next/image";

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

interface TestimonialsProps {
  items: TestimonialItem[];
}

export function Testimonials({ items }: TestimonialsProps) {
  return (
    <section id="testimonials" data-reveal className="reveal py-16">
      <h2 className="font-display text-4xl text-[color:var(--coffee-ink)]">What They Say</h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <blockquote
            key={item.name}
            className="interactive-card rounded-3xl border border-[color:var(--coffee-warm)] bg-[color:var(--coffee-cream)] p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[color:var(--coffee-warm)]">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-display text-xl text-[color:var(--coffee-ink)]">{item.name}</p>
                <p className="text-sm text-[color:var(--coffee-soft)]">{item.role}</p>
              </div>
            </div>
            <p className="leading-relaxed text-[color:var(--coffee-soft)]">&ldquo;{item.quote}&rdquo;</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
