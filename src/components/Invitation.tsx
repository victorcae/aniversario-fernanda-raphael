"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Invitation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-paper-50 border-t border-ink-600/10"
    >
      <div className="max-w-xl mx-auto text-center space-y-8">

        {/* Bow decoration (sprite from ducks.png) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex justify-center"
        >
          <img
            src="/images/icons/bow.png"
            alt=""
            className="w-full h-auto"
            style={{ maxWidth: "280px" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-typewriter tracking-[0.28em] text-[13px] md:text-[15px] text-ink-600 uppercase"
        >
          com muito amor · convidamos você
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0)" } : {}}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="font-script text-6xl md:text-8xl text-ink-600 leading-tight"
        >
          Uma década<br />de amor
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-16 h-px bg-ink-600/40 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-serif italic text-xl md:text-2xl text-ink-800 leading-loose"
        >
          Foram dez anos de aventuras, sonhos divididos e memórias que
          guardamos no coração. Queremos celebrar essa data tão especial
          com quem fez parte dessa história — você.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-serif italic text-2xl text-ink-700 pt-2"
        >
          "Que sorte a nossa é poder viver a vida ao lado de vocês."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="font-script text-5xl md:text-6xl text-ink-600 pt-2"
        >
          Fernanda <span className="font-display font-semibold not-italic text-2xl align-middle">&</span> Raphael
        </motion.p>

      </div>
    </section>
  );
}
