/** Centralised site-wide content for the JR personal site. */

export type NavLink = { id: string; label: string; href: string };

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "book", label: "The Book", href: "/book" },
  { id: "camp", label: "Camp", href: "/camp" },
  { id: "about", label: "About", href: "/about" },
  { id: "coaching", label: "Coaching", href: "/coaching" },
];

export const banner = {
  text: "Up-Front Lineman Camp '26 · Registration is open",
  ctaLabel: "Take me there",
  ctaHref: "/camp",
};

export const footerColumns: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "The Work",
    items: [
      { label: "Taming Mad Dog", href: "/book" },
      { label: "Up-Front Camp", href: "/camp" },
      { label: "Speaking", href: "/coaching" },
      { label: "Alumni Board", href: "/coaching#alumni" },
    ],
  },
  {
    title: "The Story",
    items: [
      { label: "Career", href: "/about" },
      { label: "Press", href: "/about#press" },
      { label: "Photo Archive", href: "/about#archive" },
      { label: "Columns", href: "/#columns" },
    ],
  },
  {
    title: "Reach Out",
    items: [
      { label: "Booking", href: "/coaching#book" },
      { label: "Camp Inquiry", href: "/camp" },
      { label: "Media", href: "/coaching#media" },
      { label: "Newsletter", href: "#newsletter" },
    ],
  },
];

export const footerTagline = "Coach · Champion · Author · № 58";
export const footerBlurb =
  "Eleven seasons up front for the Hamilton Tiger-Cats. One Grey Cup. Now coaching the next ones who play the position nobody clips.";
