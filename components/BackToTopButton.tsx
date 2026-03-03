interface BackToTopButtonProps {
  show: boolean;
}

export function BackToTopButton({ show }: BackToTopButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 rounded-full bg-[color:var(--coffee-ink)] px-4 py-3 text-sm font-semibold text-[color:var(--coffee-cream)] shadow-lg transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Back to top"
    >
      Top ↑
    </button>
  );
}
