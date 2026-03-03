export function Footer() {
  return (
    <footer className="border-t border-[color:var(--coffee-warm)]/60 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-sm text-[color:var(--coffee-soft)]">
        <p>© {new Date().getFullYear()} HawariiDev. All rights reserved.</p>
        <p>Freshly brewed in Bogor.</p>
      </div>
    </footer>
  );
}
