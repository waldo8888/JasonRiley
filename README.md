# Jason Riley — Personal Site

Personal-brand and speaking website for **Jason "Mad Dog" Riley** — former CFL offensive guard (Hamilton Tiger-Cats, № 58), 1986 Grey Cup champion, McMaster O-line coach, founder of the Up-Front Lineman Camp, author of *Taming Mad Dog* (2023).

This is the pitch-demo build — a full multi-page site with cinematic scroll choreography, aimed at winning the engagement.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 · App Router · Turbopack |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Type | Anton / Oswald / Newsreader / DM Mono via `next/font/google` |
| Smooth scroll | Lenis |
| Animation | Framer Motion (scroll-driven reveals, SplitText, StatCounter, SectionWipe) |
| Images | `next/image` |

## Design system

The visual language is ported from the **Jason Riley Design System** bundle (handoff from Claude Design — see chat transcript & README in the bundle for full context):

- **Tokens** → `src/app/globals.css` (`@theme` block)
- **Atoms** → `src/components/atoms/` (Button, Tag, JerseyBadge, Statline, Rule, Overline, SectionHead, Section)
- **Chrome** → `src/components/chrome/` (Banner, SiteNav, SiteFooter)
- **Blocks** → `src/components/blocks/` (HeroPoster, StatGrid, PhotoStrip, BookCallout, CampCallout, ColumnBlock, BookingForm)
- **Motion** → `src/components/motion/` (SmoothScroll, Reveal, SplitText, StatCounter, SectionWipe)
- **Data** → `src/data/` (site nav, career table, columns, photo strip, speaking tiles)
- **Assets** → `public/images/` (photos and brand SVGs copied from the design bundle)

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero poster, stats, then-and-now strip, book callout, camp callout, columns |
| `/book` | *Taming Mad Dog* — maroon poster hero, prologue excerpt, praise grid |
| `/about` | Long-form bio + season-by-season career table |
| `/coaching` | Speaking tiles, recent appearances, booking form |
| `/camp` | Up-Front Lineman Camp landing + curriculum |

## Design language (in one paragraph)

Old-school CFL almanac × coach's playbook × memoir warmth. Tiger gold accent on sideline-ink anchors; warm paper cream as the default surface; McMaster maroon reserved for the book and memoir touchpoints. Anton condensed display for jersey-poster headlines, Oswald for subheads, Newsreader serif for memoir-length reading, DM Mono for stat lines and overlines. Hard edges (≤4px radius). Hairline rules everywhere. Motion budget 120–320ms, ease-out only — no bouncy easing. The brand reads in chalk and ink.

## Confirmed facts (locked across all surfaces)

- Jersey **№ 58**
- Position **Offensive Guard**
- College **UBC Thunderbirds № 76**
- Hamilton Tiger-Cats, 11 seasons (1983–93)
- 1986 Grey Cup champion · 1989 CFL All-Canadian

## Run

```bash
npm install --legacy-peer-deps   # gsap/react peer-dep workaround
npm run dev                      # http://localhost:3000 (3001 if 3000 busy)
```

## Status

- ✅ All five routes compile and serve
- ✅ Real photos wired (JOGO #58, UBC #76, McMaster sideline/dome/O-line, locker-room interview, real *Taming Mad Dog* cover)
- ⏳ Real client photos & domain: still needed before launch
- ⏳ Booking form is UI-only — backend not wired
- ⏳ Camp page is a teaser within the personal site; the full Up-Front kit from the design bundle is a sibling deliverable, not yet ported
