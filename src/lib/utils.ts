import clsx, { type ClassValue } from "clsx";

/** Conditional class joiner — Tailwind-friendly. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
