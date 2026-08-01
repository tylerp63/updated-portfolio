"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let lenis: Lenis | undefined;
    let cancelled = false;

    (async () => {
      const LenisCtor = (await import("lenis")).default;
      if (cancelled) return;
      lenis = new LenisCtor();
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
