"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface SectionWipeProps {
  /** Color of the wipe panel. */
  color?: "ink" | "maroon" | "paper";
  /** Label shown faintly during the wipe. */
  label?: string;
  /** Children that scroll-up over the wipe. Usually a footer-tease. */
  children?: ReactNode;
}

/**
 * Pinned scroll-driven wipe between two sections.
 *
 * As you scroll into this block:
 *   1. The block pins for ~80vh of scroll.
 *   2. A coloured panel sweeps in from below, filling the screen.
 *   3. Once fully covered, the pin releases and the next section reveals.
 *
 * Drop between two sections that change palette (paper → ink → maroon)
 * to read as a deliberate scene cut rather than a hard rule.
 */
export default function SectionWipe({
  color = "ink",
  label,
  children,
}: SectionWipeProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = sectionRef.current;
    const panel = panelRef.current;
    if (!section || !panel) return;

    const ctx = gsap.context(() => {
      // Pin the section and scrub the clip-path from "hidden below" to "covered".
      gsap.fromTo(
        panel,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: 0.6,
          },
        }
      );

      if (labelRef.current) {
        gsap.fromTo(
          labelRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 0.9,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "top top",
              scrub: 0.4,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const colorClasses =
    color === "ink"
      ? "bg-ink-900 text-chalk grain-ink"
      : color === "maroon"
        ? "bg-maroon-500 text-chalk"
        : "bg-paper text-fg-1";

  return (
    <div ref={sectionRef} className="relative h-[60vh]" aria-hidden="true">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          ref={panelRef}
          className={cn("absolute inset-0 flex items-end", colorClasses)}
          style={{ clipPath: "inset(100% 0 0 0)" }}
        >
          <div className="container-page pb-16 md:pb-24">
            {label && (
              <div
                ref={labelRef}
                className="font-mono text-[11px] tracking-[0.20em] uppercase text-chalk/55 mb-3"
              >
                {label}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
