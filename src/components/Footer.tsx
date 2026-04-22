import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-paper-100 border-t border-ink-600/10">
      <div className="max-w-lg mx-auto text-center space-y-6">

        {/* NY Skyline */}
        <img
          src="/images/icons/skyline-ducks.png"
          alt=""
          className="mx-auto block mb-4 opacity-80"
          style={{ maxWidth: "460px", width: "100%", height: "auto" }}
        />

        <p className="font-script text-6xl md:text-7xl text-ink-600">
          Fê <span className="font-display font-semibold not-italic text-3xl align-middle">&</span> Ph
        </p>

        <div className="w-12 h-px bg-ink-600/35 mx-auto" />

        <p className="font-typewriter tracking-[0.28em] text-[13px] text-ink-700 uppercase">
          29 · agosto · 2026 · new york
        </p>

        <p className="font-serif italic text-base text-ink-700/60 max-w-sm mx-auto">
          Obrigada por fazer parte da nossa história ♡
        </p>

        <div className="pt-4">
          <Link
            href="/admin"
            className="font-typewriter tracking-[0.28em] text-[9px] text-ink-600/40 hover:text-ink-600/70 transition-colors uppercase"
          >
            · área dos anfitriões ·
          </Link>
        </div>

      </div>
    </footer>
  );
}
