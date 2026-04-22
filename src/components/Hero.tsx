"use client";

import { motion } from "framer-motion";

/*
  Hero layout — mirrors the "2.png" reference composition.
  Everything is absolutely positioned inside a portrait card whose
  aspect-ratio matches frame.png (520×672). Coordinates are in % so the
  layout scales cleanly with card width.
*/
export function Hero() {
  return (
    <section className="relative min-h-screen bg-paper-50 flex flex-col items-center justify-start py-10 md:py-14 px-4">

      {/* Portrait invitation card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[92%] max-w-[960px]"
        style={{ aspectRatio: "680 / 720" }}
      >
        {/* Frame — fills container exactly, no distortion */}
        <img
          src="/images/icons/frame.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        />

        {/* Save our Date! — top-left, tilted, inside inner frame */}
        <motion.h1
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute font-script text-ink-600 leading-[0.95] origin-top-left"
          style={{
            left: "15%",
            top: "9%",
            transform: "rotate(-8deg)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Save our<br />
          <span className="inline-block pl-5">Date!</span>
        </motion.h1>

        {/* Disco-taxi — top-right, fully inside frame */}
        <motion.img
          src="/images/icons/disco-taxi.png"
          alt=""
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute select-none"
          style={{ right: "15%", top: "3%", width: "17%" }}
        />

        {/* Sparkler — left side */}
        <motion.img
          src="/images/icons/sparkler.png"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute select-none"
          style={{ left: "14%", top: "25%", width: "9%" }}
        />

        {/* Sparkle (small) — near cake top */}
        <motion.img
          src="/images/icons/sparkle-1.png"
          alt=""
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute select-none"
          style={{ left: "30%", top: "21%", width: "6%" }}
        />

        {/* Left candle-with-bow pair */}
        <motion.img
          src="/images/icons/candle-bow.png"
          alt=""
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="absolute select-none"
          style={{ left: "14%", top: "33%", width: "12%" }}
        />
        <motion.img
          src="/images/icons/candle-bow.png"
          alt=""
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="absolute select-none"
          style={{ left: "26%", top: "35%", width: "12%" }}
        />

        {/* Cake — center */}
        <motion.img
          src="/images/icons/cake.png"
          alt=""
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.7 }}
          className="absolute select-none"
          style={{ left: "35%", top: "13%", width: "31%" }}
        />

        {/* Right: candelabra */}
        <motion.img
          src="/images/icons/candelabra.png"
          alt=""
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute select-none"
          style={{ left: "65%", top: "33%", width: "10%" }}
        />
        {/* Right: candle with bow */}
        <motion.img
          src="/images/icons/candle-bow.png"
          alt=""
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="absolute select-none"
          style={{ left: "74%", top: "35%", width: "10%" }}
        />

        {/* Apple + Orange — scattered below cake */}
        <motion.img
          src="/images/icons/apple.png"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute select-none"
          style={{ left: "31%", top: "57%", width: "6%" }}
        />
        <motion.img
          src="/images/icons/orange.png"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="absolute select-none"
          style={{ left: "62%", top: "58%", width: "6%" }}
        />

        {/* Fê & Ph */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute text-center left-0 right-0"
          style={{ top: "64%" }}
        >
          <h2
            className="font-script text-ink-600 leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 5.5rem)" }}
          >
            Fê <span className="font-display font-semibold not-italic mx-1" style={{ fontSize: "0.55em" }}>&</span> Ph
          </h2>
        </motion.div>

        {/* Invite text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="absolute text-center left-0 right-0 font-typewriter tracking-[0.14em] text-ink-700 uppercase leading-relaxed px-[14%]"
          style={{ top: "73%", fontSize: "clamp(10px, 1.8vw, 14px)" }}
        >
          convidam você para a celebração
          <br />
          dos seus 10 anos de casados
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="absolute text-center left-0 right-0 font-display font-bold text-ink-700 tracking-[0.14em]"
          style={{ top: "80%", fontSize: "clamp(1.3rem, 4vw, 2.1rem)" }}
        >
          29 . 08 . 2026
        </motion.p>

        {/* Formal invitation — inside bottom border */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="absolute text-center left-0 right-0 font-script text-ink-600"
          style={{ top: "86%", fontSize: "clamp(1.2rem, 3.2vw, 1.8rem)" }}
        >
          formal invitation to follow
        </motion.p>

      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="mt-16 flex flex-col items-center gap-2"
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
