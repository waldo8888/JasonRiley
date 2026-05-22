"use client";

import { useState } from "react";
import Link from "next/link";
import { banner } from "@/data/site";

export default function Banner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="bg-gold-400 text-ink-900 border-b border-ink-900">
      <div className="container-page flex items-center justify-between gap-4 py-3.5 font-mono text-[12px] tracking-[0.18em]">
        <span className="uppercase">{banner.text}</span>
        <span className="flex items-center gap-4">
          <Link
            href={banner.ctaHref}
            className="underline underline-offset-[3px] hover:opacity-80 normal-case"
          >
            {banner.ctaLabel} ↗
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Dismiss"
            className="opacity-70 hover:opacity-100 underline underline-offset-[3px] normal-case"
          >
            Close ×
          </button>
        </span>
      </div>
    </div>
  );
}
