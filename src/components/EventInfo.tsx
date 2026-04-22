"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { label: "Quando", value: "29 de agosto", sub: "sábado · 2026" },
  { label: "Onde", value: "New York", sub: "local em breve" }
];

export function EventInfo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="informacoes"
      className="relative py-28 md:py-36 px-6 bg-paper-100 border-t border-ink-600/10"
    >
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-typewriter tracking-[0.28em] text-[13px] md:text-[15px] text-ink-600 uppercase">
            detalhes do encontro
          </p>
          <div className="mt-4 w-16 h-px bg-ink-600/40 mx-auto" />
        </motion.div>

        {/* NY skyline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-16"
        >
          <img
            src="/images/icons/skyline-ducks.png"
            alt="Skyline de New York"
            className="w-full max-w-2xl block mx-auto h-auto"
          />
        </motion.div>

        {/* Info cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
          {items.map(({ label, value, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5 + i * 0.1 }}
              className="text-center border border-ink-600/20 p-6 md:p-8 bg-paper-50"
            >
              <p className="font-typewriter tracking-[0.22em] text-[12px] md:text-[13px] text-ink-600 uppercase mb-3">
                {label}
              </p>
              <p className="font-display font-semibold text-xl md:text-2xl text-ink-700 leading-tight">
                {value}
              </p>
              <p className="mt-2 font-serif italic text-base text-ink-600/70">
                {sub}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 text-center font-serif italic text-lg text-ink-700/80 max-w-lg mx-auto"
        >
          Mais informações serão compartilhadas em breve. Confirme sua
          presença abaixo para que possamos preparar tudo com carinho.
        </motion.p>

      </div>
    </section>
  );
}
