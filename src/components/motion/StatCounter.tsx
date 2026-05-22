"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  /** Final value. Number → counts up; string → renders as-is. */
  to: number | string;
  prefix?: string;
  suffix?: string;
  /** Duration in ms. */
  duration?: number;
  className?: string;
  /** If true, doesn't animate — just renders the final string. */
  static?: boolean;
}

/**
 * Scoreboard-style count-up driven by IntersectionObserver.
 *
 * Progressive enhancement: the final value is rendered as the initial
 * state. When the element scrolls into view in a visible tab with motion
 * enabled, we briefly reset to 0 and tick back up. If JS can't run, the
 * tab is hidden, or the user prefers reduced motion, the final value is
 * already on screen — no "1" instead of "11" surprises.
 */
export default function StatCounter({
  to,
  prefix = "",
  suffix = "",
  duration = 900,
  className,
  static: isStatic = false,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Initial state: render the final value.
  const [val, setVal] = useState<string>(String(to));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Never animate strings, or when the user opts out.
    if (typeof to !== "number" || isStatic) return;
    if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;

    // If the tab becomes hidden mid-count, snap to the final value so the
    // user doesn't return to a stuck partial number.
    const onVis = () => {
      if (document.visibilityState === "hidden") {
        cancelled = true;
        setVal(String(to));
      }
    };
    document.addEventListener("visibilitychange", onVis);

    const play = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(String(Math.round(eased * (to as number))));
        if (p < 1) requestAnimationFrame(tick);
      };
      // Reset to 0, then animate up.
      setVal("0");
      requestAnimationFrame(() => requestAnimationFrame(tick));
    };

    if (typeof IntersectionObserver === "undefined") {
      play();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            play();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [to, duration, isStatic]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}
