"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { EVENT_DATE } from "@/lib/utils";

export function Countdown() {
  const { days, hours, minutes, seconds, isPast } = useCountdown(EVENT_DATE);

  if (isPast) {
    return (
      <p className="font-script text-3xl text-olive-700">
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
    <div className="flex items-center gap-8 md:gap-14">
      {units.map(({ label, value }, i) => (
        <div key={label} className="relative flex flex-col items-center">
          <div className="relative w-20 md:w-28 h-20 md:h-28 flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={value}
                initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                transition={{ duration: 0.5 }}
                className="font-serif text-5xl md:text-6xl font-light text-olive-800"
              >
                {String(value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="mt-1 font-smallcaps tracking-[0.2em] text-xs md:text-sm text-olive-700">
            {label}
          </span>
          {i < units.length - 1 && (
            <span className="absolute -right-4 md:-right-7 top-6 md:top-9 font-serif text-3xl md:text-4xl text-olive-600/40">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
