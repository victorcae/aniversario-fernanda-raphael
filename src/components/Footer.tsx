import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-olive-800 text-cream-50">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="font-script text-5xl md:text-6xl">
          F <span className="font-serif italic text-3xl">&</span> R
        </p>

        <div className="w-16 h-px bg-cream-100/40 mx-auto" />

        <p className="font-smallcaps tracking-[0.3em] text-[11px] text-cream-100/70">
          29 · agosto · 2026 · new york
        </p>

        <p className="font-body italic text-sm text-cream-100/60 max-w-md mx-auto pt-4">
          Obrigada por fazer parte da nossa história ♡
        </p>

        <div className="pt-8">
          <Link
            href="/admin"
            className="font-smallcaps tracking-[0.3em] text-[10px] text-cream-100/50 hover:text-cream-50 transition-colors"
          >
            · área dos anfitriões ·
          </Link>
        </div>
      </div>
    </footer>
  );
}
