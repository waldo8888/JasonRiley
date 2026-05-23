import Overline from "@/components/atoms/Overline";
import Rule from "@/components/atoms/Rule";
import Section from "@/components/atoms/Section";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import BookingForm from "@/components/blocks/BookingForm";
import { speakingTiles, recentAppearances } from "@/data/career";

export const metadata = {
  title: "Speaking · Coaching · Clinics — Jason Riley",
  description:
    "Bring Jason Riley in for youth empowerment, anti-bullying, resilience, physical literacy, team culture, and football clinics.",
};

export default function CoachingPage() {
  return (
    <Section noBorder>
      <Reveal>
        <Overline>Speaking · Coaching · Clinics</Overline>
      </Reveal>
      <h1 className="font-display uppercase leading-[0.95] tracking-[-0.02em] m-0 mt-2 text-[clamp(56px,11vw,120px)]">
        <SplitText text="Bring me" as="span" className="block" />
        <SplitText text="in." as="span" className="block" delay={300} />
      </h1>
      <Reveal delay={200}>
        <p className="font-serif italic text-[20px] md:text-[22px] leading-[1.4] text-fg-2 max-w-[620px] m-0 mt-3">
          Schools, sport organizations, coach clinics, alumni rooms, book
          events, and community programs. The work is youth empowerment,
          anti-bullying, resilience, physical literacy, team culture, and the
          stories that connect football to real life.
        </p>
      </Reveal>
      <Rule kind="ink" />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mt-6">
        <div>
          <div className="grid sm:grid-cols-2 gap-4">
            {speakingTiles.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className="bg-paper-bright border border-[#D7CFB8] border-l-[3px] border-l-gold-400 p-5 h-full">
                  <div className="font-headline font-semibold text-[18px] uppercase tracking-[0.05em]">
                    {t.title}
                  </div>
                  <p className="font-serif text-[14px] leading-[1.5] text-fg-2 m-0 mt-2">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Rule />
          <Overline id="recent">Recent</Overline>
          <ul className="list-none p-0 m-0 mt-2 font-mono text-[13px] leading-[1.9] text-ink-700">
            {recentAppearances.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div id="book">
          <BookingForm />
        </div>
      </div>
    </Section>
  );
}
