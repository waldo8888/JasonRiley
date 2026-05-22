"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Chapter {
  id: string;
  label: string;
}

interface ChapterIndicatorProps {
  chapters: Chapter[];
}

/**
 * Fixed mono-caps label on the right edge of the viewport that swaps
 * to the currently-visible chapter as the user scrolls. Each chapter
 * id is the DOM id of the section it indicates.
 *
 * Honors `prefers-reduced-motion` by hiding entirely.
 */
export default function ChapterIndicator({ chapters }: ChapterIndicatorProps) {
  const [current, setCurrent] = useState(chapters[0]?.id ?? "");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = chapters
      .map((c) => document.getElementById(c.id))
      .filter((e): e is HTMLElement => Boolean(e));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry whose top is closest to (but past) the top of the viewport.
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          // Choose the one whose top is highest above viewport bottom — i.e. the topmost in-view section
          const sorted = visible.sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );
          setCurrent(sorted[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    els.forEach((el) => io.observe(el));

    // Show indicator only after scrolling past hero.
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.4);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [chapters]);

  const label = chapters.find((c) => c.id === current)?.label ?? chapters[0]?.label;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-20",
        "transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className={cn(
          "writing-mode-vertical font-mono text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-ink-900/70",
          "px-2 py-3 border-l border-ink-900/20"
        )}
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
