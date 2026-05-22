import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Kind = "hairline" | "ink" | "gold" | "double" | "inverse";

interface RuleProps {
  kind?: Kind;
  className?: string;
  style?: CSSProperties;
}

const variants: Record<Kind, string> = {
  hairline: "border-t border-t-[#D7CFB8]",
  ink: "border-t-2 border-t-ink-900",
  gold: "border-t border-t-gold-400",
  double: "border-t-[3px] border-t-ink-900 border-double",
  inverse: "border-t border-t-chalk/25",
};

/** Almanac-style horizontal rule. */
export default function Rule({ kind = "hairline", className, style }: RuleProps) {
  return <hr className={cn("border-0 my-6", variants[kind], className)} style={style} />;
}
