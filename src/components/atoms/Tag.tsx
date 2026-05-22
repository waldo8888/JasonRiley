import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Kind = "default" | "solid" | "gold" | "maroon";

interface TagProps {
  children: ReactNode;
  kind?: Kind;
  className?: string;
}

const variants: Record<Kind, string> = {
  default: "",
  solid: "bg-ink-900 text-chalk border-ink-900",
  gold: "bg-gold-400 text-ink-900 border-ink-900",
  maroon: "bg-maroon-500 text-chalk border-maroon-500",
};

export default function Tag({ children, kind = "default", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-[5px] border rounded-[2px]",
        "font-mono text-[11px] tracking-[0.18em] uppercase",
        variants[kind],
        kind === "default" && "border-current",
        className
      )}
    >
      {children}
    </span>
  );
}
