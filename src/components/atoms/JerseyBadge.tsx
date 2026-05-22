import { cn } from "@/lib/utils";

interface JerseyBadgeProps {
  number?: number | string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-10 h-10 text-[22px]",
  md: "w-14 h-14 text-[32px]",
  lg: "w-20 h-20 text-[46px]",
};

export default function JerseyBadge({
  number = 58,
  className,
  size = "md",
}: JerseyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        "bg-ink-900 text-gold-400 font-display leading-none",
        sizes[size],
        className
      )}
    >
      {number}
    </span>
  );
}
