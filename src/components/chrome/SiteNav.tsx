"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-30 bg-paper",
        "border-t-2 border-t-ink-900 border-b border-b-ink-900"
      )}
    >
      <div className="container-page flex items-center justify-between gap-6 py-3.5">
        <Link
          href="/"
          className={cn(
            "font-display text-[26px] md:text-[28px] uppercase",
            "tracking-[-0.01em] leading-none text-ink-900 no-underline"
          )}
        >
          Jason&nbsp;Riley
        </Link>

        {/* Desktop links — sentence case to match design (buttons override
            the inherited uppercase in the reference rendering). */}
        <div className="hidden md:flex gap-7 font-mono text-[13px] tracking-[0.04em]">
          {navLinks.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={cn(
                "py-1 border-b-2 border-b-transparent transition-colors duration-150 normal-case",
                isActive(l.href)
                  ? "text-ink-900 border-b-ink-900"
                  : "text-ink-700 hover:text-ink-900"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className={cn(
              "hidden sm:inline-flex items-center gap-2 px-4 py-2.5",
              "bg-gold-400 text-ink-900 border border-ink-900 rounded-[2px]",
              "font-headline font-semibold uppercase text-[12px] tracking-[0.10em]",
              "hover:bg-gold-500 transition-colors duration-150"
            )}
          >
            Buy the Book ↗
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "md:hidden relative inline-flex items-center justify-center",
              "w-11 h-11 border border-ink-900 rounded-[2px] bg-paper",
              "transition-colors duration-150 hover:bg-paper-bright active:bg-chalk"
            )}
          >
            <span aria-hidden="true" className="relative block w-5 h-[14px]">
              <span
                className={cn(
                  "absolute left-0 right-0 h-[2px] bg-ink-900",
                  "transition-all duration-200 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0 rotate-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-ink-900",
                  "transition-opacity duration-150",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 right-0 h-[2px] bg-ink-900",
                  "transition-all duration-200 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0 rotate-0"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav-drawer" className="md:hidden border-t border-ink-900 bg-paper">
          <div className="container-page py-4 flex flex-col gap-3 font-mono text-[15px] tracking-[0.04em]">
            {navLinks.map((l) => (
              <Link
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-1 border-b border-b-transparent normal-case",
                  isActive(l.href) ? "text-ink-900 border-b-ink-900" : "text-ink-700"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 bg-gold-400 text-ink-900 border border-ink-900 rounded-[2px] font-headline font-semibold uppercase text-[12px] tracking-[0.10em] w-fit"
            >
              Buy the Book ↗
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
