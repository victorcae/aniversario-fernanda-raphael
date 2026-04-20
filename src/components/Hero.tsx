"use client";

import { motion } from "framer-motion";
import { NYSkyline } from "./illustrations/NYSkyline";
import { Countdown } from "./Countdown";
import { WatercolorBlob } from "./illustrations/WatercolorFrame";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-watercolor-sky paper-texture">
      {/* Ambient watercolor blobs */}
      <WatercolorBlob className="absolute -top-20 -left-20 w-[500px] h-[500px]" color="#B8C8D8" />
      <WatercolorBlob className="absolute top-10 right-0 w-[400px] h-[400px]" color="#E8DCC8" />
      <WatercolorBlob className="absolute bottom-40 left-10 w-[350px] h-[350px]" color="#D9C7A8" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
              width: `${5 + (i % 5) * 3}px`,
              height: `${5 + (i % 5) * 3}px`,
              background:
                i % 4 === 0 ? "#8A9A5F" : i % 4 === 1 ? "#B8C8D8" : i % 4 === 2 ? "#D9C7A8" : "#94ADC2",
              borderRadius: "50%",
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${10 + (i % 5) * 2.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-48">
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-smallcaps tracking-[0.4em] text-xs md:text-sm text-olive-700/80 mb-8"
        >
          Save our Date
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-serif text-olive-700 text-center leading-none"
        >
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-wide"
          >
            SAVE
            <span className="inline-block mx-4 md:mx-6 font-script text-4xl md:text-5xl lg:text-6xl text-olive-600 italic align-middle">
              our
            </span>
            DATE
          </motion.span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="mt-10 mb-8 w-32 h-px bg-olive-600/50 origin-center"
        />

        {/* Subtitle with message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="max-w-2xl text-center space-y-3"
        >
          <p className="font-smallcaps tracking-[0.25em] text-sm md:text-base text-olive-700">
            Para comemorarmos juntos nosso
          </p>
          <p className="font-smallcaps tracking-[0.25em] text-base md:text-lg text-olive-800">
            Aniversário de 10 anos de casados
          </p>
          <p className="font-smallcaps tracking-[0.25em] text-xs md:text-sm text-olive-700 pt-2">
            — 29 de agosto · New York —
          </p>
        </motion.div>

        {/* Names in script */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
          className="mt-12 md:mt-16"
        >
          <h2 className="font-script text-olive-700 text-center text-6xl md:text-8xl lg:text-9xl leading-none">
            <span className="inline-block">Fernanda</span>
            <span className="inline-block mx-2 md:mx-4 font-serif italic text-5xl md:text-7xl">
              &
            </span>
            <span className="inline-block">Raphael</span>
          </h2>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.2 }}
          className="mt-16 md:mt-20 max-w-xl text-center font-smallcaps tracking-[0.2em] text-xs md:text-sm text-olive-700 italic"
        >
          Que sorte a nossa é poder viver a vida ao lado de vocês
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.8 }}
          className="mt-16 md:mt-20"
        >
          <Countdown />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-smallcaps tracking-[0.3em] text-[10px] text-olive-700">
              descubra
            </span>
            <div className="w-px h-8 bg-olive-700/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* Skyline at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-0"
      >
        <NYSkyline className="w-full h-[45vh] md:h-[50vh]" />
      </motion.div>
    </section>
  );
}
