import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import Overline from "./Overline";

interface SectionHeadProps {
  overline?: string;
  title: string;
  action?: ReactNode;
  className?: string;
}

export default function SectionHead({
  overline,
  title,
  action,
  className,
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        "flex justify-between items-baseline gap-6 mb-8 flex-wrap",
        className
      )}
    >
      <div>
        {overline && <Overline>{overline}</Overline>}
        <h2
          className={cn(
            "font-display uppercase leading-none m-0",
            "text-[clamp(40px,7vw,64px)] tracking-[-0.01em] mt-1.5"
          )}
        >
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
