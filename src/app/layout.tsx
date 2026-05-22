import type { Metadata } from "next";
import { Anton, Oswald, Newsreader, DM_Mono } from "next/font/google";
import SmoothScroll from "@/components/motion/SmoothScroll";
import SiteNav from "@/components/chrome/SiteNav";
import SiteFooter from "@/components/chrome/SiteFooter";
import Banner from "@/components/chrome/Banner";
import "./globals.css";

// Condensed display — Anton ships only at 400.
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

// Oswald for headlines / subheads.
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

// Newsreader — the memoir serif.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

// DM Mono — labels, stat lines, dates.
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jason Riley — Coach · Champion · Author · № 58",
  description:
    "Eleven seasons up front. One Grey Cup. Now I coach the kids who play the position nobody clips — and tell the rest of the story in Taming Mad Dog.",
  openGraph: {
    title: "Jason Riley — Coach · Champion · Author",
    description:
      "Eleven seasons up front. One Grey Cup. Now coaching, writing, and telling the rest of the story.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} ${newsreader.variable} ${dmMono.variable}`}
    >
      <body>
        <SmoothScroll />
        <Banner />
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
