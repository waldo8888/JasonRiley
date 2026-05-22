import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Kind = "primary" | "secondary" | "gold" | "ghost" | "inverse";
type Size = "md" | "sm";

interface CommonProps {
  kind?: Kind;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const base =
  "inline-flex items-center gap-2.5 px-[26px] py-[14px] " +
  "font-headline font-semibold uppercase " +
  "text-[14px] tracking-[0.10em] " +
  "border rounded-[2px] cursor-pointer no-underline " +
  "transition-[background-color,transform,color,border-color] duration-150 ease-[cubic-bezier(0.2,0.7,0.2,1)] " +
  "active:translate-y-[1px] " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2";

const variants: Record<Kind, string> = {
  primary:
    "bg-ink-900 text-chalk border-ink-900 hover:bg-ink-800",
  secondary:
    "bg-transparent text-ink-900 border-ink-900 hover:bg-gold-50",
  gold:
    "bg-gold-400 text-ink-900 border-ink-900 hover:bg-gold-500",
  ghost:
    "bg-transparent text-ink-900 border-transparent " +
    "rounded-none px-0 py-2 border-b-2 border-b-ink-900 " +
    "hover:text-maroon-500 hover:border-b-maroon-500",
  inverse:
    "bg-gold-400 text-ink-900 border-gold-400 hover:bg-gold-500",
};

const sizes: Record<Size, string> = {
  md: "",
  sm: "px-4 py-2.5 text-[12px]",
};

export default function Button(props: ButtonProps | AnchorProps) {
  const { kind = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[kind], sizes[size], className);

  if ("href" in rest && rest.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
