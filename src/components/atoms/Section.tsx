import { type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Variant of background. */
  variant?: "paper" | "ink-50" | "ink" | "maroon";
  /** Suppress the bottom border (some sections sit flush with the next). */
  noBorder?: boolean;
  /** Width container — page (1240) or text (720). */
  container?: "page" | "text" | "full";
  /** Reduced top padding. */
  flushTop?: boolean;
  id?: string;
  style?: CSSProperties;
}

const variants = {
  paper: "bg-paper text-fg-1",
  "ink-50": "bg-ink-50 text-fg-1",
  ink: "bg-ink-900 text-chalk grain-ink",
  maroon: "bg-maroon-500 text-chalk",
};

/** Standard almanac section with vertical padding and hairline bottom rule. */
export default function Section({
  children,
  className,
  variant = "paper",
  noBorder,
  container = "page",
  flushTop,
  id,
  style,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        variants[variant],
        flushTop ? "pt-0 pb-16 md:pb-20" : "py-16 md:py-20",
        !noBorder && "border-b border-[#D7CFB8]",
        className
      )}
      style={style}
    >
      {container === "full" ? (
        children
      ) : (
        <div className={container === "text" ? "container-text" : "container-page"}>
          {children}
        </div>
      )}
    </section>
  );
}
