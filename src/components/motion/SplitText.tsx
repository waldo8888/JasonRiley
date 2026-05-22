"use client";

import { useEffect, useRef, type ElementType, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  /** Split by word (default) or character. */
  by?: "word" | "char";
  /** Element to render the wrapper as. */
  as?: ElementType;
  /** Class names for the wrapper. */
  className?: string;
  /** Delay before the run starts, in ms. */
  delay?: number;
  /** Per-token stagger in ms. */
  stagger?: number;
  /** Per-token duration in ms. */
  duration?: number;
  /** Fire immediately on mount instead of waiting for intersection. */
  immediate?: boolean;
  /** Inline style. */
  style?: CSSProperties;
}

const EASE = "cubic-bezier(0.2, 0.7, 0.2, 1)";

/**
 * Reveal text word-by-word (or char-by-char) using the Web Animations API.
 *
 * Progressive enhancement: tokens render in their FINAL visible state by
 * default. JS animates them by playing the keyframes from a "hidden"
 * starting frame back to the final visible state. If JS can't run, the
 * tab is backgrounded, or the user prefers reduced motion, the text is
 * still visible — nothing breaks.
 */
export default function SplitText({
  text,
  by = "word",
  as: As = "h1",
  className,
  delay = 0,
  stagger = 60,
  duration = 700,
  immediate = false,
  style,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tokens = Array.from(el.querySelectorAll<HTMLElement>(".jr-tok"));
    if (!tokens.length) return;

    const play = () => {
      tokens.forEach((t, i) => {
        t.animate(
          [
            { opacity: 0, transform: "translate3d(0, 28px, 0)" },
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration,
            delay: delay + i * stagger,
            fill: "backwards",
            easing: EASE,
          }
        );
      });
    };

    if (immediate) {
      requestAnimationFrame(play);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      play();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            play();
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, stagger, duration, immediate]);

  const tokens = by === "word" ? text.split(/(\s+)/) : Array.from(text);

  return (
    <As
      ref={ref as React.Ref<unknown>}
      className={cn(className)}
      style={style}
      aria-label={text}
    >
      {tokens.map((tok, i) =>
        /^\s+$/.test(tok) ? (
          <span key={i} aria-hidden="true">{tok}</span>
        ) : (
          <span
            key={i}
            className="jr-tok"
            aria-hidden="true"
            style={{ display: "inline-block" }}
          >
            {tok}
          </span>
        )
      )}
    </As>
  );
}
