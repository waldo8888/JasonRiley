import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface OverlineProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  inverse?: boolean;
}

export default function Overline({
  children,
  className,
  inverse,
  ...props
}: OverlineProps) {
  return (
    <div
      {...props}
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
