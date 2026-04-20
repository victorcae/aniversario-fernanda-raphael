"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarHeart, MapPin, Clock, Sparkles } from "lucide-react";
import { WatercolorBlob } from "./illustrations/WatercolorFrame";

const items = [
  {
    icon: CalendarHeart,
    label: "Quando",
    value: "29 de agosto",
    sub: "sábado · 2026"
  },
  {
    icon: MapPin,
    label: "Onde",
    value: "New York",
    sub: "local em breve"
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Em breve",
    sub: "aguarde novidades"
  },
  {
    icon: Sparkles,
    label: "Dress code",
    value: "Em breve",
    sub: "detalhes a caminho"
  }
];

export function EventInfo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="informacoes"
      className="relative py-28 md:py-40 px-6 bg-watercolor-sky paper-texture overflow-hidden"
    >
      <WatercolorBlob className="absolute top-10 right-10 w-96 h-96" color="#E8DCC8" />
      <WatercolorBlob className="absolute bottom-10 left-10 w-96 h-96" color="#B8C8D8" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-smallcaps tracking-[0.4em] text-xs text-olive-700 mb-4">
            detalhes do encontro
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-olive-800 tracking-wide">
            O grande dia
          </h2>
          <div className="mt-6 w-16 h-px bg-olive-600/50 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, label, value, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="relative bg-cream-50/70 backdrop-blur-sm border border-olive-600/15 p-8 text-center transition-all duration-500 group-hover:border-olive-600/40 group-hover:bg-cream-50/90 h-full">
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-olive-400/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon
                      className="relative w-8 h-8 text-olive-700"
                      strokeWidth={1.2}
                    />
                  </div>
                </div>
                <p className="font-smallcaps tracking-[0.3em] text-[11px] text-olive-700 mb-3">
                  {label}
                </p>
                <p className="font-serif text-2xl md:text-3xl font-light text-olive-800 leading-tight">
                  {value}
                </p>
                <p className="mt-2 font-body italic text-sm text-olive-700/70">
                  {sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center font-body italic text-olive-700/80 max-w-xl mx-auto"
        >
          Mais informações serão compartilhadas em breve. Confirme sua
          presença abaixo para que possamos preparar tudo com carinho.
        </motion.p>
      </div>
    </section>
  );
}
