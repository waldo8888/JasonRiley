import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Anton, Oswald, Newsreader, DM_Mono } from "next/font/google";
import JsonLd from "@/components/analytics/JsonLd";
import SmoothScroll from "@/components/motion/SmoothScroll";
import SiteNav from "@/components/chrome/SiteNav";
import SiteFooter from "@/components/chrome/SiteFooter";
import Banner from "@/components/chrome/Banner";
import { siteJsonLd, siteUrl } from "@/data/schema";
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
  metadataBase: new URL(siteUrl),
  title: "Jason Riley — Speaker · Coach · Champion · Author",
  description:
    "Former Hamilton Tiger-Cat, 1986 Grey Cup champion, author of Taming Mad Dog, and speaker on youth empowerment, anti-bullying, resilience, physical literacy, and team culture.",
  icons: {
    icon: "/images/brand/logo-mark.svg",
  },
  openGraph: {
    title: "Jason Riley — Speaker · Coach · Champion · Author",
    description:
      "Former Hamilton Tiger-Cat, 1986 Grey Cup champion, author, coach, and speaker on youth empowerment, anti-bullying, resilience, physical literacy, and team culture.",
    url: "/",
    siteName: "Jason Riley",
    images: [
      {
        url: "/images/photos/jason-riley-hero-headshot-desktop.png",
        alt: "Jason Riley wearing a Hamilton Tiger-Cats alumni cap",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Riley — Speaker · Coach · Champion · Author",
    description:
      "Former Hamilton Tiger-Cat, 1986 Grey Cup champion, author, coach, and speaker on youth empowerment, anti-bullying, resilience, physical literacy, and team culture.",
    images: ["/images/photos/jason-riley-hero-headshot-desktop.png"],
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
        <JsonLd id="site-schema" data={siteJsonLd} />
        <SmoothScroll />
        <Banner />
        <SiteNav />
        {children}
        <SiteFooter />
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
