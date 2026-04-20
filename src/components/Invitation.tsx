"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { OliveBranch } from "./illustrations/BotanicalAccents";

export function Invitation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 px-6 bg-cream-50 paper-texture overflow-hidden"
    >
      <OliveBranch className="absolute top-10 left-0 w-80 opacity-30" />
      <OliveBranch className="absolute bottom-10 right-0 w-80 opacity-30 rotate-180" />

      <div className="max-w-3xl mx-auto text-center space-y-10 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-smallcaps tracking-[0.4em] text-xs text-olive-700"
        >
          com muito amor · convidamos você
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-24 h-px bg-olive-600/40 mx-auto"
        />

        <motion.h2
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-script text-5xl md:text-7xl text-olive-700 leading-relaxed"
        >
          Uma década
          <br />
          de amor
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-body text-lg md:text-xl text-olive-800 leading-loose italic max-w-2xl mx-auto"
        >
          Foram dez anos de aventuras, sonhos divididos e memórias que
          guardamos no coração. Queremos celebrar essa data tão especial
          com quem fez parte dessa história — você.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-serif italic text-xl md:text-2xl text-olive-700 pt-6"
        >
          "Que sorte a nossa é poder viver a vida ao lado de vocês."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="pt-8"
        >
          <p className="font-script text-4xl md:text-5xl text-olive-700">
            Fernanda <span className="font-serif italic text-2xl md:text-3xl">&</span> Raphael
          </p>
        </motion.div>
      </div>
    </section>
  );
}
