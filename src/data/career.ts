/** Career table data — Riley's season-by-season ledger. */

export type CareerRow = {
  season: string;
  team: string;
  pos: string;
  notes: string;
};

export const careerRows: CareerRow[] = [
  { season: "Pre",  team: "UBC Thunderbirds",   pos: "DL #76", notes: "Vanier Cup champion. CIAU All-Canadian in 1981 and 1982." },
  { season: "1983", team: "Winnipeg / Saskatchewan", pos: "OL", notes: "Drafted seventh overall by Winnipeg. The pro road started out west." },
  { season: "1984", team: "Saskatchewan / Hamilton", pos: "OG #58", notes: "Arrived in Hamilton and began the Tiger-Cats chapter." },
  { season: "1985", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Eastern Final loss. The one that stings." },
  { season: "1986", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Grey Cup champion. CFL East All-Star." },
  { season: "1987", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Charlotte Simmons Humanitarian Award." },
  { season: "1988", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "East All-Star." },
  { season: "1989", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "CFL All-Star and East All-Star." },
  { season: "1990", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Veteran year in the middle of the Hamilton run." },
  { season: "1991", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Knee. Played through." },
  { season: "1992", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "East All-Star." },
  { season: "1993", team: "Hamilton Tiger-Cats", pos: "OG",     notes: "Last year up front. The walk-off." },
];

export const columns = [
  {
    tag: "Speaking Topic",
    title: "Youth Empowerment & Anti-Bullying",
    body:
      "A practical session for teachers, coaches, recreation leaders, and staff who work with young people.",
    meta: "Book Jason",
    href: "/coaching#book",
  },
  {
    tag: "Podcast",
    title: "Ticats Today · Book Launch",
    body:
      "Jason on the Ticats Today podcast the day Taming Mad Dog dropped — the path from the trenches to the page, with a Hamilton lens.",
    meta: "Listen · Sept 14, 2023",
    href: "https://www.ivoox.com/en/ticats-today-september-14th-2023-audios-mp3_rf_116044026_1.html",
  },
  {
    tag: "From the Book",
    title: "Taming Mad Dog",
    body:
      "A memoir about football from the trenches, bullying prevention, mental health, family, and purpose.",
    meta: "Order Paperback",
    href: "https://www.lulu.com/shop/jason-riley/taming-mad-dog/paperback/product-v625mk.html",
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
    title: "Anti-Bullying",
    body:
      "Youth empowerment, resilience, and the adult responsibility to notice what kids are carrying.",
  },
  {
    title: "Physical Literacy",
    body:
      "Movement, confidence, nature, play, and sport as practical tools for healthier young people.",
  },
  {
    title: "Team Culture",
    body: "Lessons from UBC, the CFL, classrooms, and offensive-line rooms about trust and accountability.",
  },
  {
    title: "Book Talk",
    body: "A personal talk built around Taming Mad Dog, football, family, mental health, and purpose.",
  },
];

export const recentAppearances = [
  "2026 · Can We Talk? — bullying and resilience",
  "2025 · Ontario Physical Literacy Summit — Youth Empowerment & Anti-Bullying",
  "2023 · Ticats Today — Taming Mad Dog launch",
];
