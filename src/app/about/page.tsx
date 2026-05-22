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
                I came out of UBC and was drafted by Hamilton in 1983. Eleven
                seasons in pads after that — all of them with the Tiger-Cats,
                most of them at offensive guard, jersey № 58.
              </p>
              <p className="m-0">
                The Grey Cup was 1986, which is the year people remember.
                CFL All-Canadian came in 1989. The body let me know it was
                time in '93 and I didn't argue.
              </p>
              <p className="m-0">
                Since then I've been coaching offensive linemen — first at
                clinics around southern Ontario, now at McMaster University.
                I run the <strong>Up-Front Lineman Camp</strong> every
                summer for high-school players, and I chair the CFL Alumni
                Association board, which is where most of the work that
                matters to me happens now.
              </p>
              <p className="m-0">
                The book came out in 2023. It's called{" "}
                <em>Taming Mad Dog</em>. It's about the position, the man,
                and the long walk between the two of them.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

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
