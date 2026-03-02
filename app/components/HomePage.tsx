"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const menuItems = [
  {
    name: "Caramel Latte",
    desc: "Espresso, steamed milk, caramel drizzle",
    price: "Rp42.000",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cold Brew Citrus",
    desc: "18-hour brew, orange peel, cane syrup",
    price: "Rp38.000",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mocha Noir",
    desc: "Dark chocolate, double shot espresso, foam",
    price: "Rp45.000",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vanilla Oat Flat White",
    desc: "Single origin espresso, oat milk, vanilla bean",
    price: "Rp40.000",
    image:
      "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?auto=format&fit=crop&w=900&q=80",
  },
];

const testimonials = [
  {
    name: "Nadia Putri",
    role: "UI Designer",
    quote:
      "Tempatnya warm, kopinya konsisten enak, dan staff-nya ngerti detail rasa. Cocok buat kerja lama.",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rendy Satria",
    role: "Startup Founder",
    quote:
      "Meeting client jadi lebih nyaman di sini. Signature latte-nya jadi andalan setiap minggu.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Alma Savitri",
    role: "Content Creator",
    quote:
      "Visual interior dan plating minumannya standout. Foto-foto jadi bagus tanpa effort berlebih.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];

const galleryItems = [
  {
    title: "Beans Bar",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Brew Station",
    image:
      "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pastry Corner",
    image:
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Evening Vibes",
    image:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
  },
];

const faqs = [
  {
    q: "Apakah tersedia reservasi meja?",
    a: "Ya. Reservasi bisa lewat WhatsApp, maksimal H-1, terutama untuk jam ramai di sore hari.",
  },
  {
    q: "Ada pilihan non-dairy dan non-coffee?",
    a: "Ada. Kami menyediakan oat milk, almond milk, serta beberapa minuman non-kopi dan teh artisan.",
  },
  {
    q: "Bisa untuk acara private kecil?",
    a: "Bisa untuk gathering 20-40 orang. Hubungi tim kami untuk paket event dan kebutuhan catering.",
  },
];

export function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 480);
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -32px 0px" },
    );

    revealEls.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(209,141,84,0.22),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(83,53,28,0.2),_transparent_42%)]" />
      <div className="float-orb pointer-events-none absolute -left-16 top-24 -z-10 h-48 w-48 rounded-full bg-[color:var(--coffee-accent)]/20 blur-2xl" />

      <header
        className={`sticky top-0 z-50 border-b backdrop-blur transition-all duration-300 ${
          isScrolled
            ? "border-[color:var(--coffee-warm)]/70 bg-[color:var(--coffee-cream)]/95 shadow-[0_10px_30px_-20px_rgba(42,26,18,0.7)]"
            : "border-white/40 bg-[color:var(--coffee-cream)]/85"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-2xl tracking-tight text-[color:var(--coffee-ink)]">
            Ember & Bean
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center rounded-full border border-[color:var(--coffee-warm)] px-3 py-2 text-sm font-semibold text-[color:var(--coffee-soft)] md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-[color:var(--coffee-soft)] md:flex">
            <a href="#menu" className="hover:text-[color:var(--coffee-accent)]">
              Menu
            </a>
            <a href="#about" className="hover:text-[color:var(--coffee-accent)]">
              Tentang
            </a>
            <a href="#gallery" className="hover:text-[color:var(--coffee-accent)]">
              Galeri
            </a>
            <a href="#testimonials" className="hover:text-[color:var(--coffee-accent)]">
              Review
            </a>
            <a
              href="#contact"
              className="rounded-full bg-[color:var(--coffee-ink)] px-4 py-2 text-[color:var(--coffee-cream)] transition hover:bg-[color:var(--coffee-accent)]"
            >
              Book Table
            </a>
          </nav>
        </div>

        <nav
          className={`mx-6 mb-4 overflow-hidden rounded-2xl border border-[color:var(--coffee-warm)] bg-[color:var(--coffee-cream)] p-3 text-sm font-semibold text-[color:var(--coffee-soft)] transition-all duration-300 md:hidden ${
            mobileOpen ? "max-h-64 opacity-100" : "max-h-0 border-transparent p-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            <a href="#menu" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-[color:var(--coffee-latte)]">
              Menu
            </a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-[color:var(--coffee-latte)]">
              Tentang
            </a>
            <a href="#gallery" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-[color:var(--coffee-latte)]">
              Galeri
            </a>
            <a href="#testimonials" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-[color:var(--coffee-latte)]">
              Review
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="rounded-lg bg-[color:var(--coffee-ink)] px-3 py-2 text-[color:var(--coffee-cream)]">
              Book Table
            </a>
          </div>
        </nav>
      </header>

      <main id="home" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <section data-reveal className="reveal grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[color:var(--coffee-warm)] bg-[color:var(--coffee-latte)]/70 px-4 py-1 text-sm font-semibold text-[color:var(--coffee-soft)]">
              Specialty Coffee • Fresh Pastry • Cozy Space
            </p>
            <h1 className="font-display text-5xl leading-tight text-[color:var(--coffee-ink)] md:text-6xl">
              Brewed For Focus, Built For Comfort.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--coffee-soft)]">
              Coffee shop modern untuk kerja, ngobrol, atau recharge. Biji kopi pilihan, interior hangat, dan
              pelayanan cepat setiap hari.
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
            {menuItems.map((item) => (
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

        <section id="about" data-reveal className="reveal grid gap-10 py-16 md:grid-cols-2 md:items-center">
          <div className="interactive-card rounded-3xl border border-[color:var(--coffee-warm)] bg-[color:var(--coffee-latte)] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--coffee-soft)]">
              About Us
            </p>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--coffee-ink)]">
              Ruang santai dengan rasa kopi yang presisi
            </h2>
            <p className="mt-4 leading-relaxed text-[color:var(--coffee-soft)]">
              Kami memilih biji dari roastery lokal terbaik, roasting profile yang konsisten, dan proses brewing
              detail. Setiap cup dirancang untuk bikin kamu betah lebih lama.
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

        <section id="gallery" data-reveal className="reveal py-16">
          <h2 className="font-display text-4xl text-[color:var(--coffee-ink)]">Coffee Moments</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-[color:var(--coffee-warm)]"
              >
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

        <section id="testimonials" data-reveal className="reveal py-16">
          <h2 className="font-display text-4xl text-[color:var(--coffee-ink)]">What They Say</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
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

        <section data-reveal className="reveal grid gap-8 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-[color:var(--coffee-ink)]">FAQ</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
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
      </main>

      <footer className="border-t border-[color:var(--coffee-warm)]/60 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-sm text-[color:var(--coffee-soft)]">
          <p>© {new Date().getFullYear()} Ember & Bean. All rights reserved.</p>
          <p>Freshly brewed in Jakarta.</p>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 rounded-full bg-[color:var(--coffee-ink)] px-4 py-3 text-sm font-semibold text-[color:var(--coffee-cream)] shadow-lg transition-all duration-300 ${
          showTopButton ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-label="Back to top"
      >
        Top ↑
      </button>
    </div>
  );
}
