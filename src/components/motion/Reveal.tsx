"use client";

import { useEffect, useRef, type ReactNode, type ElementType, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Kind = "fade-up" | "clip-down" | "clip-up" | "slide-x" | "rule-wipe";

interface RevealProps {
  children?: ReactNode;
  /** Animation flavor — fade-up by default. */
  kind?: Kind;
  /** Delay in ms before the animation starts after intersecting. */
  delay?: number;
  /** Duration override in ms. */
  duration?: number;
  /** Fire on mount (skip intersection observer). */
  immediate?: boolean;
  /** Element to render as. */
  as?: ElementType;
  /** ClassName passthrough. */
  className?: string;
  /** Style passthrough. */
  style?: CSSProperties;
}

const EASE = "cubic-bezier(0.2, 0.7, 0.2, 1)";

const FRAMES: Record<Kind, { from: Keyframe; to: Keyframe; defaultDuration: number }> = {
  "fade-up": {
    from: { opacity: 0, transform: "translate3d(0, 16px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    defaultDuration: 600,
  },
  "clip-down": {
    from: { clipPath: "inset(0 0 100% 0)" },
    to: { clipPath: "inset(0 0 0% 0)" },
    defaultDuration: 950,
  },
  "clip-up": {
    from: { clipPath: "inset(100% 0 0 0)" },
    to: { clipPath: "inset(0% 0 0 0)" },
    defaultDuration: 950,
  },
  "slide-x": {
    from: { opacity: 0, transform: "translate3d(-24px, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    defaultDuration: 700,
  },
  "rule-wipe": {
    from: { transform: "scaleX(0)" },
    to: { transform: "scaleX(1)" },
    defaultDuration: 650,
  },
};

/**
 * Scroll-driven (or immediate) entrance reveal using the Web Animations API.
 *
 * Progressive enhancement: the element is rendered in its final (visible)
 * state by default. When mounted in a visible tab with motion enabled, we
 * play a brief animation that starts from the "hidden" keyframe and lands
 * back at the visible state. If JS can't run, the tab is backgrounded, or
 * the user prefers reduced motion, the final state is already on screen —
 * no broken hidden content.
 */
export default function Reveal({
  children,
  kind = "fade-up",
  delay = 0,
  duration,
  immediate = false,
  as: As = "div",
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof document !== "undefined" && document.visibilityState === "hidden") {
      // Tab is backgrounded — animations are frozen by the browser anyway.
      return;
    }
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const { from, to, defaultDuration } = FRAMES[kind];
    const dur = duration ?? defaultDuration;

    const play = () => {
      const anim = el.animate([from, to], {
        duration: dur,
        delay,
        fill: "forwards",
        easing: EASE,
      });
      anim.onfinish = () => {
        // Animation has reached the final state already; nothing to do.
      };
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [kind, delay, duration, immediate]);

  return (
    <As ref={ref as React.Ref<unknown>} className={cn(className)} style={style}>
      {children}
    </As>
  );
}
