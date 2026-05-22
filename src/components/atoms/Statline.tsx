import { cn } from "@/lib/utils";

interface StatlineProps {
  items: string[];
  inverse?: boolean;
  className?: string;
}

/**
 * A mono-cap meta row — used at the top/bottom of hero sections,
 * underneath book hero, etc. White-on-ink when `inverse`.
 */
export default function Statline({ items, inverse = false, className }: StatlineProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-between gap-x-6 gap-y-2",
        "font-mono text-[11px] tracking-[0.18em] uppercase",
        inverse ? "text-chalk/60" : "text-fg-3",
        className
      )}
    >
      {items.map((item, i) => (
        <span key={i} className="whitespace-nowrap">
          {item}
        </span>
      ))}
    </div>
  );
}
