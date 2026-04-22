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
      >
        {/* Frame — stretches to match content height */}
        <img
          src="/images/icons/frame.png"
          alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{ objectFit: "fill" }}
        />

        {/* Disco-taxi — absolute top-right */}
        <motion.img
          src="/images/icons/disco-taxi.png" alt=""
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute select-none"
          style={{ right: "11%", top: "3%", width: "20%" }}
        />

        {/* Sparkler — absolute left */}
        <motion.img
          src="/images/icons/sparkler.png" alt=""
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute select-none"
          style={{ left: "7%", top: "20%", width: "8%" }}
        />

        {/* Content column — padded to stay inside frame borders */}
        <div className="relative z-10 flex flex-col items-center px-[12%] pt-[8%] pb-[12%]">

          {/* Save our Date! */}
          <motion.div
            initial={{ opacity: 0, rotate: -18 }}
            animate={{ opacity: 1, rotate: -18 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="self-start ml-[2%] mb-4 origin-top-left"
            style={{ transformOrigin: "top left" }}
          >
            <h1
              className="font-script text-ink-600 leading-[0.95]"
              style={{ fontSize: "clamp(1.9rem, 9vw, 3rem)" }}
            >
              Save our<br />
              <span className="inline-block pl-3">Date!</span>
            </h1>
          </motion.div>

          {/* Cake */}
          <motion.img
            src="/images/icons/cake.png" alt=""
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.7 }}
            className="w-[58%] h-auto"
          />

          {/* Candles row — symmetric, below cake */}
          <div className="flex items-end justify-between w-full mt-1 mb-2 px-[2%]">
            {/* Left group */}
            <div className="flex items-end gap-[3%]">
              <motion.img src="/images/icons/candle-bow.png" alt=""
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="w-[30px] h-auto"
              />
              <motion.img src="/images/icons/candle-bow.png" alt=""
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.95 }}
                className="w-[34px] h-auto"
              />
            </div>
            {/* Apple + orange in center */}
            <div className="flex items-end gap-3">
              <motion.img src="/images/icons/apple.png" alt=""
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="w-[16px] h-auto"
              />
              <motion.img src="/images/icons/orange.png" alt=""
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.15 }}
                className="w-[16px] h-auto"
              />
            </div>
            {/* Right group */}
            <div className="flex items-end gap-[3%]">
              <motion.img src="/images/icons/candelabra.png" alt=""
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="w-[28px] h-auto"
              />
              <motion.img src="/images/icons/candle-bow.png" alt=""
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="w-[30px] h-auto"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-10 h-px bg-ink-600/40 my-3" />

          {/* Fê & Ph */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="font-script text-ink-600 leading-none text-center mb-3"
            style={{ fontSize: "clamp(3rem, 14vw, 5rem)" }}
          >
            Fê{" "}
            <span className="font-display font-semibold not-italic" style={{ fontSize: "0.55em" }}>&</span>
            {" "}Ph
          </motion.h2>

          {/* Invite text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="font-typewriter tracking-[0.1em] text-ink-700 uppercase text-center leading-relaxed mb-3"
            style={{ fontSize: "clamp(9px, 2.8vw, 12px)" }}
          >
            convidam você para a celebração<br />
            dos seus 10 anos de casados
          </motion.p>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="font-display font-bold text-ink-700 tracking-[0.1em] text-center mb-3"
            style={{ fontSize: "clamp(1.3rem, 6vw, 2.2rem)" }}
          >
            29 . 08 . 2026
          </motion.p>

          {/* Formal */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="font-script text-ink-600 text-center"
            style={{ fontSize: "clamp(1.1rem, 5vw, 1.8rem)" }}
          >
            formal invitation to follow
          </motion.p>

        </div>
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
