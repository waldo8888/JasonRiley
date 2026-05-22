"use client";

import StatCounter from "@/components/motion/StatCounter";
import Reveal from "@/components/motion/Reveal";

const cells = [
  { num: 11, prefix: "", suffix: "", lbl: "Seasons · 1983–93", gold: false },
  { num: "'86", lbl: "Grey Cup Champion", gold: true },
  { num: "'89", lbl: "CFL All-Canadian", gold: false },
  { num: "№ 58", lbl: "Offensive Guard · Ti-Cats", gold: false },
] as const;

export default function StatGrid() {
  return (
    <Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-b-2 border-ink-900">
        {cells.map((c, i) => (
          <div
            key={i}
            className={
              "px-5 sm:px-[22px] py-6 border-r border-[#D7CFB8] last:border-r-0 " +
              (i % 2 === 1 ? "" : "border-b md:border-b-0 ") +
              ((i === 2 || i === 3) ? "md:border-b-0 " : "") +
              "border-b border-[#D7CFB8] md:border-b-0"
            }
          >
            <div
              className={
                "font-display text-[56px] sm:text-[72px] md:text-[88px] leading-none tracking-[-0.01em] " +
                (c.gold ? "text-gold-700" : "text-ink-900")
              }
            >
              <StatCounter to={c.num as number | string} />
            </div>
            <div className="mt-1.5 font-mono text-[11px] tracking-[0.20em] uppercase text-fg-3">
              {c.lbl}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
