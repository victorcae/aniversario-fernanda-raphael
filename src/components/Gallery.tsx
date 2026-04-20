"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  EmpireStateCard,
  BrooklynBridgeCard,
  CentralParkCard,
  TaxiCard,
  StatueOfLibertyCard
} from "./illustrations/Landmarks";
import { WatercolorFrame } from "./illustrations/WatercolorFrame";

const cards = [
  { Component: EmpireStateCard, label: "Empire State", caption: "o coração de Manhattan" },
  { Component: BrooklynBridgeCard, label: "Brooklyn Bridge", caption: "caminhos que se cruzam" },
  { Component: CentralParkCard, label: "Central Park", caption: "oásis em meio à cidade" },
  { Component: StatueOfLibertyCard, label: "Lady Liberty", caption: "a guardiã do porto" },
  { Component: TaxiCard, label: "Yellow Cab", caption: "o ritmo das ruas" }
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 px-6 bg-cream-50 paper-texture overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-smallcaps tracking-[0.4em] text-xs text-olive-700 mb-4">
            o cenário da nossa celebração
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-olive-800 tracking-wide">
            New York <span className="font-script text-olive-600 italic">em aquarela</span>
          </h2>
          <div className="mt-6 w-16 h-px bg-olive-600/50 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {cards.map(({ Component, label, caption }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 * i }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative aspect-[3/4] cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden bg-white/50 backdrop-blur-sm">
                <WatercolorFrame className="absolute inset-0 w-full h-full" />
                <div className="relative w-full h-full flex items-center justify-center p-4 transition-transform duration-[1200ms] group-hover:scale-110">
                  <Component className="w-full h-full" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-cream-50 via-cream-50/80 to-transparent">
                  <p className="font-smallcaps tracking-[0.2em] text-[10px] text-olive-700 mb-1">
                    {label}
                  </p>
                  <p className="font-serif italic text-xs md:text-sm text-olive-800">
                    {caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
