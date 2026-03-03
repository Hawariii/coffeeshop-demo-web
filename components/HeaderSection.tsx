interface HeaderSectionProps {
  isScrolled: boolean;
  mobileOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
}

export function HeaderSection({
  isScrolled,
  mobileOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: HeaderSectionProps) {
  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition-all duration-300 ${
        isScrolled
          ? "border-[color:var(--coffee-warm)]/70 bg-[color:var(--coffee-cream)]/95 shadow-[0_10px_30px_-20px_rgba(42,26,18,0.7)]"
          : "border-white/40 bg-[color:var(--coffee-cream)]/85"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-2xl tracking-tight text-[color:var(--coffee-ink)]">
          Caffe Demo
        </a>

        <button
          type="button"
          onClick={onToggleMobileMenu}
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
          <a href="#menu" onClick={onCloseMobileMenu} className="rounded-lg px-3 py-2 hover:bg-[color:var(--coffee-latte)]">
            Menu
          </a>
          <a href="#about" onClick={onCloseMobileMenu} className="rounded-lg px-3 py-2 hover:bg-[color:var(--coffee-latte)]">
            Tentang
          </a>
          <a href="#gallery" onClick={onCloseMobileMenu} className="rounded-lg px-3 py-2 hover:bg-[color:var(--coffee-latte)]">
            Galeri
          </a>
          <a
            href="#testimonials"
            onClick={onCloseMobileMenu}
            className="rounded-lg px-3 py-2 hover:bg-[color:var(--coffee-latte)]"
          >
            Review
          </a>
          <a
            href="#contact"
            onClick={onCloseMobileMenu}
            className="rounded-lg bg-[color:var(--coffee-ink)] px-3 py-2 text-[color:var(--coffee-cream)]"
          >
            Book Table
          </a>
        </div>
      </nav>
    </header>
  );
}
