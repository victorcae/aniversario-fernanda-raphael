"use client";

import { useLenisScroll } from "@/hooks/useLenisScroll";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useLenisScroll();
  return <>{children}</>;
}
