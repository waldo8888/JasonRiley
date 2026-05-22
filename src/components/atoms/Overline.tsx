import { type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface OverlineProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  inverse?: boolean;
}

export default function Overline({ children, className, style, inverse }: OverlineProps) {
  return (
    <div
      style={style}
      className={cn(
        "font-mono text-[11px] tracking-[0.20em] uppercase",
        inverse ? "text-chalk/55" : "text-fg-3",
        className
      )}
    >
      {children}
    </div>
  );
}
