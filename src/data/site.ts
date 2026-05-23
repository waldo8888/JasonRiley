/** Centralised site-wide content for the JR personal site. */

export type NavLink = { id: string; label: string; href: string };

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "book", label: "The Book", href: "/book" },
  { id: "camp", label: "Camp", href: "/camp" },
  { id: "about", label: "About", href: "/about" },
  { id: "booking", label: "Booking", href: "/booking" },
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
      { label: "Speaking", href: "/booking" },
      { label: "CFLAA Board", href: "https://www.cflaa.ca/board-of-directors/" },
    ],
  },
  {
    title: "The Story",
    items: [
      { label: "Career", href: "/about" },
      { label: "Recent", href: "/booking#recent" },
      { label: "Book", href: "/book" },
      { label: "Speaking Topics", href: "/#columns" },
    ],
  },
  {
    title: "Reach Out",
    items: [
      { label: "Booking", href: "/booking#book" },
      { label: "Camp Inquiry", href: "/camp" },
      { label: "Media", href: "/booking#recent" },
      { label: "Book Event", href: "/booking#book" },
    ],
  },
];

export const footerTagline = "Coach · Champion · Author · № 58";
export const footerBlurb =
  "An 11-year CFL career, a 1986 Grey Cup with Hamilton, and a lifetime teaching, speaking, coaching, and serving the football community.";
