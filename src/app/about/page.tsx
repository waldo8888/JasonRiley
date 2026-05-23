import Image from "next/image";
import Overline from "@/components/atoms/Overline";
import Rule from "@/components/atoms/Rule";
import Section from "@/components/atoms/Section";
import SectionHead from "@/components/atoms/SectionHead";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import { careerRows } from "@/data/career";

export const metadata = {
  title: "About — Jason Riley",
  description:
    "The long way around. UBC to Hamilton. Eleven seasons. McMaster. The book. The board.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Section noBorder>
        <Reveal>
          <Overline>About</Overline>
        </Reveal>
        <h1 className="font-display uppercase leading-[0.95] tracking-[-0.02em] m-0 mt-2 text-[clamp(56px,11vw,120px)]">
          <SplitText
            text="The Long Way"
            as="span"
            className="block"
          />
          <SplitText
            text="Around."
            as="span"
            className="block"
            delay={350}
          />
        </h1>
        <Rule kind="double" />

        <div className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-14 mt-8">
          <Reveal>
            <div className="relative w-full aspect-[3/4] border border-ink-900 bg-ink-900 overflow-hidden">
              <Image
                src="/images/photos/riley-mcmaster-sideline.png"
                alt="Jason Riley on the McMaster sideline"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover object-[center_20%]"
              />
            </div>
            <Overline className="mt-3">Sideline · McMaster Marauders</Overline>
          </Reveal>

          <Reveal delay={50}>
            <div className="font-serif text-[18px] leading-[1.7] space-y-4">
              <p className="m-0">
                I came out of UBC and was drafted seventh overall by Winnipeg
                in 1983. The CFL road moved through Winnipeg and Saskatchewan
                before Hamilton became home in 1984.
              </p>
              <p className="m-0">
                The Tiger-Cats years ran through 1993, most of them at
                offensive guard, jersey № 58. The Grey Cup was 1986, which is
                the year people remember. CFL All-Star came in 1989, with four
                East All-Star seasons along the way.
              </p>
              <p className="m-0">
                Since then I&apos;ve taught, coached offensive linemen, worked with
                young athletes, and stayed active with the Hamilton and CFL
                alumni communities. I serve on the CFL Alumni Association Board
                of Directors, where former players and the next generation stay
                connected.
              </p>
              <p className="m-0">
                The book came out in 2023. It&apos;s called{" "}
                <em>Taming Mad Dog</em>. It&apos;s about football from the trenches,
                bullying prevention, resilience, mental health, and the long
                walk between the player and the man.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Cinematic banner — chapter break between the bio and the career table */}
      <section
        aria-label="Portrait of Jason Riley"
        className="relative w-full bg-ink-900 grain-ink overflow-hidden"
      >
        <Reveal kind="clip-down" duration={1100}>
          <div className="relative w-full aspect-[21/9] md:aspect-[21/8] max-h-[78svh]">
            <Image
              src="/images/photos/riley-portrait-cinematic.png"
              alt="Studio portrait of Jason Riley in a Hamilton Tiger-Cats Alumni cap"
              fill
              sizes="100vw"
              className="object-cover object-[center_30%] duotone"
              priority={false}
            />
            {/* Subtle bottom gradient so the caption reads cleanly on any photo */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 container-page pb-6 md:pb-10">
              <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.20em] uppercase text-chalk/70">
                <span>Studio portrait · Hamilton, Ontario</span>
                <span className="text-chalk/55">№ 58 · Tiger-Cats Alumni</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Section variant="ink-50">
        <SectionHead overline="The Career" title="Season by Season" />
        <Reveal>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-mono text-[14px] min-w-[640px]">
              <thead>
                <tr>
                  {["Season", "Team", "Pos", "Notes"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3.5 text-[11px] tracking-[0.20em] uppercase text-fg-3 border-b-2 border-ink-900 bg-paper"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {careerRows.map((r) => (
                  <tr key={r.season} className="hover:bg-paper-bright transition-colors">
                    <td className="px-4 py-3.5 border-b border-[#D7CFB8] font-display text-[22px] tracking-[-0.01em]">
                      {r.season}
                    </td>
                    <td className="px-4 py-3.5 border-b border-[#D7CFB8]">{r.team}</td>
                    <td className="px-4 py-3.5 border-b border-[#D7CFB8]">{r.pos}</td>
                    <td className="px-4 py-3.5 border-b border-[#D7CFB8] font-serif text-[15px] text-fg-2">
                      {r.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
