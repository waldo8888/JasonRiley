"use client";

import { useEffect, useRef, type ReactNode, type ElementType, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  /** How far the element travels in px from -y to +y across the scroll window. */
  y?: number;
  /** How far the element travels in px on the X axis. */
  x?: number;
  /** Optional scale at scroll-end (e.g. 1.08 for a slow zoom). */
  scale?: number;
  /** Class names. */
  className?: string;
  /** Element to render as. */
  as?: ElementType;
  /** Style passthrough. */
  style?: CSSProperties;
}

/**
 * Scroll-linked parallax via GSAP ScrollTrigger.
 * Slides the element by `y`/`x` and optionally scales it as the parent
 * passes through the viewport. Subtle by default — use small offsets
 * (40-80px) so the effect adds depth without going noisy.
 */
export default function Parallax({
  children,
  y = 60,
  x = 0,
  scale,
  className,
  as: As = "div",
  style,
}: ParallaxProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const from: gsap.TweenVars = { y: -y, x: x ? -x : 0 };
    const to: gsap.TweenVars = { y, x };
    if (scale !== undefined) {
      from.scale = 1;
      to.scale = scale;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [y, x, scale]);

  return (
    <As
      ref={ref as React.Ref<unknown>}
      className={cn(className)}
      style={{ willChange: "transform", ...style }}
    >
      {children}
    </As>
  );
}
