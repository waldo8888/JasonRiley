import Image from "next/image";
import Overline from "@/components/atoms/Overline";
import Rule from "@/components/atoms/Rule";
import Section from "@/components/atoms/Section";
import Button from "@/components/atoms/Button";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Up-Front Lineman Camp '26 — Hamilton, Ontario",
  description:
    "Three days. Five drills. No skill-position guys. We teach you how to win at the line of scrimmage.",
  alternates: {
    canonical: "/camp",
  },
};

export default function CampPage() {
  return (
    <>
      {/* Camp hero — full ink, chalkboard motif */}
      <section className="bg-ink-900 text-chalk py-16 md:py-24 grain-ink relative overflow-hidden">
        <div className="container-page">
          <Reveal>
            <Overline inverse>Summer Program · 2026</Overline>
          </Reveal>
          <SplitText
            text="Up-Front"
            as="h1"
            className="font-display uppercase leading-[0.92] m-0 mt-2 text-[clamp(64px,15vw,200px)]"
            stagger={0.05}
            y={28}
          />
          <SplitText
            text="Lineman Camp"
            as="div"
            className="font-display uppercase leading-[0.92] m-0 text-[clamp(56px,13vw,180px)] text-gold-400"
            stagger={0.05}
            delay={300}
            y={28}
          />
          <Reveal delay={700}>
            <p className="font-serif italic text-[20px] md:text-[24px] leading-[1.4] max-w-[640px] mt-6">
              Three days. Five drills. No skill-position guys. We teach you
              how to win at the line of scrimmage — and how to walk away
              from the game with your knees and your wits.
            </p>
            <Rule kind="inverse" />
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              <Stat label="Dates">July 14–16, 2026</Stat>
              <Stat label="Location">Hamilton, Ontario</Stat>
              <Stat label="Ages">14–18</Stat>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button kind="gold" href="#register">
                Register Now ↗
              </Button>
              <Button kind="ghost" href="/" className="text-chalk border-chalk hover:text-gold-400 hover:border-gold-400">
                ← Back to Jason Riley
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Curriculum overview */}
      <Section variant="ink-50">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div>
            <Overline>The curriculum</Overline>
            <h2 className="font-display uppercase leading-[1] m-0 mt-2 text-[clamp(40px,7vw,64px)]">
              Five drills.
              <br />
              Three days.
            </h2>
            <p className="font-serif text-[17px] leading-[1.6] text-fg-2 mt-4 max-w-[480px]">
              No glamour. No skill positions. Just leverage, footwork,
              hand fight, and a film room where we watch the same six
              reps until you can call the technique without looking up.
            </p>
          </div>
          <Reveal>
            <ul className="list-none p-0 m-0 grid gap-3">
              {[
                ["Stance & Get-off", "The half-inch that makes or breaks every pull."],
                ["Pass Set Fundamentals", "Kick-slide, jump-set, vertical set — the three you'll see in college."],
                ["Run-Block Tracks", "Drive, reach, scoop, down. With and without combos."],
                ["Hand Fight", "Strike windows, club-rip, swim — how to win the second contact."],
                ["Film Room", "Two hours per day. Yours. Then the room's."],
              ].map(([title, body], i) => (
                <li
                  key={title}
                  className="bg-paper-bright border border-[#D7CFB8] border-l-[3px] border-l-gold-400 p-5"
                >
                  <div className="font-headline font-semibold text-[18px] uppercase tracking-[0.05em]">
                    {String(i + 1).padStart(2, "0")} · {title}
                  </div>
                  <p className="font-serif text-[14px] leading-[1.55] text-fg-2 m-0 mt-1.5">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Playbook hero panel */}
      <Section variant="ink">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <Overline inverse>From the chalkboard</Overline>
            <h2 className="font-display uppercase leading-[1] m-0 mt-2 text-[clamp(40px,7vw,64px)] text-chalk">
              Power Right.
              <br />
              <span className="text-gold-400">Read the front.</span>
            </h2>
            <p className="font-serif italic text-chalk/82 text-[17px] leading-[1.6] mt-4 max-w-[480px]">
              The first play we install. Eight ways to run it. We&apos;ll work
              through them all by Friday afternoon.
            </p>
          </div>
          <div className="relative aspect-[16/10] w-full border border-chalk/18 bg-ink-800">
            <Image
              src="/images/brand/playbook-power-right.svg"
              alt="Playbook diagram — power right"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      {/* Register stub */}
      <Section id="register">
        <div className="container-text mx-auto text-center">
          <Overline>Register</Overline>
          <h2 className="font-display uppercase leading-[0.95] m-0 mt-2 text-[clamp(40px,7vw,64px)]">
            Spots are limited.
          </h2>
          <p className="font-serif text-[17px] leading-[1.6] text-fg-2 mt-3">
            The full registration flow lives in the sibling Up-Front Camp
            kit. For the pitch demo, this page anchors the camp inside
            Jason&apos;s personal site and points to the camp&apos;s own home.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button kind="gold">Open registration ↗</Button>
            <Button kind="ghost" href="/">
              ← Back home
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-gold-400 pl-4">
      <div className="font-mono text-[11px] tracking-[0.20em] uppercase text-chalk/55">
        {label}
      </div>
      <div className="font-display text-[28px] md:text-[36px] mt-1 leading-none text-chalk">
        {children}
      </div>
    </div>
  );
}
