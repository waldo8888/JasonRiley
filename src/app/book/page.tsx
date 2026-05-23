import Link from "next/link";
import Statline from "@/components/atoms/Statline";
import Overline from "@/components/atoms/Overline";
import Rule from "@/components/atoms/Rule";
import Button from "@/components/atoms/Button";
import SectionHead from "@/components/atoms/SectionHead";
import Section from "@/components/atoms/Section";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Taming Mad Dog — A Football Memoir · Jason Riley",
  description:
    "By Jason Riley. A football memoir about the trenches, bullying prevention, mental health, resilience, and purpose.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return (
    <>
      {/* Book hero — maroon poster with chalkboard texture */}
      <section
        className="relative bg-maroon-500 text-chalk py-16 md:py-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(0,0,0,0.18), transparent 40%)," +
            "repeating-linear-gradient(135deg, transparent 0 26px, rgba(0,0,0,0.04) 26px 27px)",
        }}
      >
        <div className="container-page">
          <Reveal>
            <Statline
              inverse
              items={["A Football Memoir", "310 pp · Paperback", "ISBN 9781738031108"]}
            />
          </Reveal>
          <Rule kind="gold" className="my-2.5" />
          <SplitText
            text="Taming"
            as="h1"
            className="font-display uppercase leading-[0.92] m-0 text-[clamp(64px,14vw,180px)]"
            stagger={0.06}
            y={28}
          />
          <SplitText
            text="the Mad Dog"
            as="div"
            className="font-serif italic font-medium leading-[0.95] mt-1 text-[clamp(48px,11vw,140px)] text-chalk/85"
            stagger={0.04}
            delay={300}
            y={24}
          />
          <Reveal delay={600}>
            <p className="font-serif italic text-[20px] md:text-[22px] leading-[1.4] max-w-[560px] mt-4">
              By Jason Riley. A story from football&apos;s trenches into the
              deeper work of resilience, bullying prevention, mental health,
              spiritual growth, and purpose.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Button
                kind="inverse"
                href="https://www.lulu.com/shop/jason-riley/taming-mad-dog/paperback/product-v625mk.html"
                target="_blank"
                rel="noreferrer"
              >
                Buy Paperback ↗
              </Button>
              <Link
                href="#inside"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent text-chalk border border-chalk rounded-[2px] font-headline font-semibold uppercase text-[14px] tracking-[0.10em] hover:bg-chalk/10 transition-colors"
              >
                What It Covers
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Excerpt section */}
      <Section container="text">
        <Reveal>
          <Overline>From the Prologue · Page 3</Overline>
          <h2 className="font-display uppercase leading-[1.1] tracking-[-0.01em] m-0 mt-2 text-[clamp(36px,5.5vw,56px)]">
            The Hit That Didn&apos;t Happen
          </h2>
          <Rule kind="ink" />
          <div
            className="text-[19px] font-serif leading-[1.7]"
            style={{
              ["--drop-color" as never]: "var(--color-maroon-500)",
            }}
          >
            <p className="m-0 mb-4 first-of-type:first-letter:font-display first-of-type:first-letter:text-[84px] first-of-type:first-letter:leading-[0.85] first-of-type:first-letter:float-left first-of-type:first-letter:pr-2.5 first-of-type:first-letter:pt-1 first-of-type:first-letter:text-maroon-500">
              Hamilton, third quarter, snow already in the air the way it gets
              in late November when the season&apos;s about to swallow itself.
              Grover comes off the edge full speed — and what happens in the
              next half-second is the rest of my career.
            </p>
            <p className="m-0 mb-4">
              I get my hands inside. I drop my hips. The guy outweighs me by
              twenty pounds and he&apos;s mad about something I have nothing to
              do with. I&apos;m twenty-three years old and I don&apos;t know yet that
              this is the moment I become a left tackle for a living.
            </p>
            <p className="m-0 mb-4">
              Mad Dog wasn&apos;t a nickname. It was a warning label. Taming him
              took longer than my career did, and the chapters that follow
              are mostly about that — the man, not the player, and the long
              walk between the two of them.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-7">
            <Button>Read chapter one →</Button>
            <Button kind="ghost" href="/">
              ← Back home
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Praise grid */}
      <Section variant="ink-50" id="inside">
        <SectionHead overline="Inside the Book" title="What It Covers" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              q: "Raw-bones football from the trenches, written for both new fans and people who already understand line play.",
              a: "Football",
            },
            {
              q: "Bullying prevention, inclusiveness, resilience, mental health, and spiritual growth are central themes.",
              a: "Youth",
            },
            {
              q: "The journey moves from childhood to championships, teaching, coaching, family, and community service.",
              a: "Purpose",
            },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <blockquote className="m-0 bg-paper-bright border border-[#D7CFB8] border-t-[3px] border-t-gold-400 p-6 h-full">
                <p className="font-serif italic text-[17px] leading-[1.5] m-0">
                  {p.q}
                </p>
                <div className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-fg-3">
                  — {p.a}
                </div>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
