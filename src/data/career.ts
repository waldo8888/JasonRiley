/** Career table data — Riley's season-by-season ledger. */

export type CareerRow = {
  season: string;
  team: string;
  pos: string;
  notes: string;
};

export const careerRows: CareerRow[] = [
  { season: "Pre",  team: "UBC Thunderbirds",   pos: "OL #76", notes: "College years out west. Where I learned to play the position." },
  { season: "1983", team: "Hamilton Tiger-Cats", pos: "OG #58", notes: "Rookie year. Backup most of the year, two starts." },
  { season: "1984", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "First full season as starter." },
  { season: "1985", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Eastern Final loss. The one that stings." },
  { season: "1986", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Grey Cup champion. The whole season felt inevitable." },
  { season: "1987", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "East All-Star." },
  { season: "1988", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "East All-Star." },
  { season: "1989", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "CFL All-Canadian." },
  { season: "1990", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "East All-Star." },
  { season: "1991", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Knee. Played through." },
  { season: "1992", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Knee, the other one." },
  { season: "1993", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Last year up front. The walk-off." },
];

export const columns = [
  {
    tag: "Coaching Column",
    title: "Why I won't teach a kid to cut block",
    body:
      "There's a place for it. A high-school camp isn't that place. Here's how I'd teach the same leverage with someone's ACL intact.",
    meta: "6 min read",
    href: "#",
  },
  {
    tag: "From the Book",
    title: "The chapter I almost left out",
    body:
      "A locker-room story about Pinball, a rookie kicker, and the thing offensive linemen never admit out loud.",
    meta: "9 min read",
    href: "#",
  },
  {
    tag: "Alumni Board",
    title: "What the CFL owes the men who built it",
    body:
      "Pensions, brain-health support, a real pathway home. The work the alumni board is doing — and what's next.",
    meta: "5 min read",
    href: "#",
  },
];

export const photoStrip = [
  {
    src: "/images/photos/riley-ubc-tbirds-76.png",
    alt: "UBC T-Birds № 76",
    caption: "College, late '70s",
  },
  {
    src: "/images/photos/riley-ticats-interview.png",
    alt: "Locker room interview",
    caption: "Tiger-Cats, late '80s",
  },
  {
    src: "/images/photos/riley-mcmaster-oline-team.png",
    alt: "McMaster O-line",
    caption: "Ron Joyce Stadium",
  },
  {
    src: "/images/photos/riley-mcmaster-dome.png",
    alt: "Indoor field, McMaster",
    caption: "Off-season clinic",
  },
];

export const speakingTiles = [
  {
    title: "Keynote",
    body:
      "A 35–50 min talk built around chapters from the book and one or two stories the book didn't fit.",
  },
  {
    title: "Clinic",
    body:
      "Half-day O-line clinic — film room, walk-through, eight or nine drills. Works K-12 or college.",
  },
  {
    title: "Event",
    body: "Book signing, alumni night, scholarship gala. Quiet and grateful.",
  },
  {
    title: "Media",
    body: "Podcast, panel, ribbon-cutting. Pre-game radio is the favourite.",
  },
];

export const recentAppearances = [
  "2025 · McMaster Marauders — fall camp clinic",
  "2025 · CFL Alumni Gala, Toronto — keynote",
  "2024 · Steeltown Sports Book Festival",
  "2024 · Stelco Community Day — speaker",
];
