"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-paper-50 flex flex-col items-center justify-start pt-0 pb-10 md:pb-14 px-3 md:px-4 min-h-screen">

      {/* ════════════════════════════════
          MOBILE LAYOUT  (hidden on md+)
          ════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden relative w-full"
        style={{ height: "min(80vh, 680px)", minHeight: "520px" }}
      >
        {/* Frame fills the fixed-height card */}
        <img
          src="/images/icons/frame.png"
          alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{ objectFit: "fill" }}
        />

        {/* Save our Date! */}
        <motion.h1
          initial={{ opacity: 0, x: -8, rotate: -18 }}
          animate={{ opacity: 1, x: 0, rotate: -18 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute font-script text-ink-600 leading-[0.95] origin-top-left"
          style={{ left: "21%", top: "18%", fontSize: "clamp(1.9rem, 8.5vw, 3.2rem)" }}
        >
          Save our<br />
          <span className="inline-block pl-3">Date!</span>
        </motion.h1>

        {/* Disco-taxi */}
        <motion.img src="/images/icons/disco-taxi.png" alt=""
          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute select-none"
          style={{ right: "14%", top: "8%", width: "19%" }}
        />

        {/* Sparkler */}
        <motion.img src="/images/icons/sparkler.png" alt=""
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute select-none"
          style={{ left: "8%", top: "22%", width: "7%" }}
        />

        {/* Cake */}
        <motion.img src="/images/icons/cake.png" alt=""
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.7 }}
          className="absolute select-none"
          style={{ left: "36%", top: "29%", width: "28%" }}
        />

        {/* Left candles */}
        <motion.img src="/images/icons/candle-bow.png" alt=""
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="absolute select-none"
          style={{ left: "16%", top: "42%", width: "10%" }}
        />
        <motion.img src="/images/icons/candle-bow.png" alt=""
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="absolute select-none"
          style={{ left: "26%", top: "47%", width: "10%" }}
        />

        {/* Candelabra + right candle */}
        <motion.img src="/images/icons/candelabra.png" alt=""
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute select-none"
          style={{ left: "65%", top: "47%", width: "9%" }}
        />
        <motion.img src="/images/icons/candle-bow.png" alt=""
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute select-none"
          style={{ left: "76%", top: "42%", width: "9%" }}
        />

        {/* Apple + Orange */}
        <motion.img src="/images/icons/apple.png" alt=""
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="absolute select-none"
          style={{ left: "38%", top: "57%", width: "4.5%" }}
        />
        <motion.img src="/images/icons/orange.png" alt=""
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="absolute select-none"
          style={{ left: "55%", top: "57%", width: "4.5%" }}
        />

        {/* Fê & Ph */}
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute text-center left-0 right-0"
          style={{ top: "62%" }}
        >
          <h2 className="font-script text-ink-600 leading-none"
              style={{ fontSize: "clamp(2.6rem, 11vw, 4.5rem)" }}>
            Fê <span className="font-display font-semibold not-italic mx-1" style={{ fontSize: "0.55em" }}>&</span> Ph
          </h2>
        </motion.div>

        {/* Invite text */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute text-center left-0 right-0 font-typewriter tracking-[0.1em] text-ink-700 uppercase leading-relaxed px-[12%]"
          style={{ top: "72%", fontSize: "clamp(9px, 2.5vw, 12px)" }}
        >
          convidam você para a celebração<br />dos seus 10 anos de casados
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute text-center left-0 right-0 font-display font-bold text-ink-700 tracking-[0.1em]"
          style={{ top: "80%", fontSize: "clamp(1.1rem, 5vw, 2rem)" }}
        >
          29 . 08 . 2026
        </motion.p>

        {/* Formal */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="absolute text-center left-0 right-0 font-script text-ink-600"
          style={{ top: "87%", fontSize: "clamp(0.9rem, 4vw, 1.5rem)" }}
        >
          formal invitation to follow
        </motion.p>

      </motion.div>


      {/* ════════════════════════════════
          DESKTOP LAYOUT  (hidden on mobile)
          ════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block relative w-full max-w-[1080px]"
        style={{ aspectRatio: "680 / 720" }}
      >
        <img
          src="/images/icons/frame.png"
          alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        />

        <motion.h1
          initial={{ opacity: 0, x: -12, rotate: -18 }}
          animate={{ opacity: 1, x: 0, rotate: -18 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute font-script text-ink-600 leading-[0.95] origin-top-left"
          style={{ left: "16%", top: "17%", fontSize: "clamp(3.2rem, 8vw, 5rem)" }}
        >
          Save our<br />
          <span className="inline-block pl-5">Date!</span>
        </motion.h1>

        <motion.img src="/images/icons/disco-taxi.png" alt=""
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute select-none"
          style={{ right: "15%", top: "9%", width: "17%" }}
        />

        <motion.img src="/images/icons/sparkler.png" alt=""
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute select-none"
          style={{ left: "14%", top: "25%", width: "9%" }}
        />

        <motion.img src="/images/icons/sparkle-1.png" alt=""
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute select-none"
          style={{ left: "55%", top: "11%", width: "6%" }}
        />

        <motion.img src="/images/icons/candle-bow.png" alt=""
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="absolute select-none"
          style={{ left: "14%", top: "39%", width: "12%" }}
        />
        <motion.img src="/images/icons/candle-bow.png" alt=""
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="absolute select-none"
          style={{ left: "24%", top: "44%", width: "12%" }}
        />

        <motion.img src="/images/icons/cake.png" alt=""
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.7 }}
          className="absolute select-none"
          style={{ left: "36%", top: "16%", width: "27%" }}
        />

        <motion.img src="/images/icons/candelabra.png" alt=""
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute select-none"
          style={{ left: "65%", top: "44%", width: "10%" }}
        />
        <motion.img src="/images/icons/candle-bow.png" alt=""
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="absolute select-none"
          style={{ left: "77%", top: "39%", width: "10%" }}
        />

        <motion.img src="/images/icons/apple.png" alt=""
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute select-none"
          style={{ left: "38%", top: "58%", width: "4.5%" }}
        />
        <motion.img src="/images/icons/orange.png" alt=""
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="absolute select-none"
          style={{ left: "55%", top: "58%", width: "4.5%" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute text-center left-0 right-0"
          style={{ top: "65%" }}
        >
          <h2
            className="font-script text-ink-600 leading-none"
            style={{ fontSize: "clamp(2.4rem, 8vw, 7rem)" }}
          >
            Fê <span className="font-display font-semibold not-italic mx-1" style={{ fontSize: "0.55em" }}>&</span> Ph
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="absolute text-center left-0 right-0 font-typewriter tracking-[0.14em] text-ink-700 uppercase leading-relaxed px-[14%]"
          style={{ top: "74%", fontSize: "clamp(12px, 2.2vw, 17px)" }}
        >
          convidam você para a celebração<br />
          dos seus 10 anos de casados
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="absolute text-center left-0 right-0 font-display font-bold text-ink-700 tracking-[0.14em]"
          style={{ top: "80%", fontSize: "clamp(1.3rem, 4vw, 2.1rem)" }}
        >
          29 . 08 . 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="absolute text-center left-0 right-0 font-script text-ink-600"
          style={{ top: "86%", fontSize: "clamp(1.2rem, 3.2vw, 1.8rem)" }}
        >
          formal invitation to follow
        </motion.p>

      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="mt-12 md:mt-16 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-typewriter tracking-[0.28em] text-[13px] text-ink-600/70 uppercase">
            descubra mais
          </span>
          <div className="w-px h-10 bg-ink-600/50" />
        </motion.div>
      </motion.div>

    </section>
  );
}
