"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { EVENT_DATE } from "@/lib/utils";

export function Countdown() {
  const { days, hours, minutes, seconds, isPast } = useCountdown(EVENT_DATE);

  if (isPast) {
    return (
      <p className="font-script text-4xl text-ink-600 text-center">
        O grande dia chegou ♡
      </p>
    );
  }

  const units = [
    { label: "dias", value: days },
    { label: "horas", value: hours },
    { label: "minutos", value: minutes },
    { label: "segundos", value: seconds }
  ];

  return (
    <div className="flex items-center justify-center gap-6 md:gap-12">
      {units.map(({ label, value }, i) => (
        <div key={label} className="relative flex flex-col items-center">
          <div className="relative w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={value}
                initial={{ opacity: 0, y: -8, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                transition={{ duration: 0.45 }}
                className="font-display font-semibold text-5xl md:text-6xl text-ink-700"
              >
                {String(value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="mt-1 font-typewriter tracking-[0.24em] text-[13px] md:text-sm text-ink-600 uppercase">
            {label}
          </span>
          {i < units.length - 1 && (
            <span className="absolute -right-3 md:-right-6 top-4 md:top-7 font-display text-2xl md:text-3xl text-ink-600/40">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
