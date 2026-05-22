import Image from "next/image";
import Link from "next/link";
import Overline from "@/components/atoms/Overline";
import Button from "@/components/atoms/Button";
import Reveal from "@/components/motion/Reveal";

export default function CampCallout() {
  return (
    <div className="bg-ink-900 text-chalk px-6 sm:px-10 md:px-12 py-12 md:py-14 grid md:grid-cols-2 gap-10 md:gap-12 items-center grain-ink">
      <Reveal kind="fade-up" duration={650}>
        <Overline inverse>Summer Program · Hamilton, Ont.</Overline>
        <h3 className="font-display uppercase leading-[0.95] m-0 mt-2 text-[clamp(48px,9vw,76px)] text-chalk">
          Up-Front
          <br />
          <span className="text-gold-400">Lineman</span> Camp
        </h3>
        <p className="font-serif italic text-[18px] md:text-[19px] leading-[1.4] text-chalk/80 mt-3.5 max-w-[460px]">
          Three days. Five drills. No skill-position guys. We teach you how to
          win at the line of scrimmage — and how to walk away from the game
          with your knees and your wits.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button kind="gold" href="/camp">
            Register · Camp &apos;26
          </Button>
          <Link
            href="/camp#staff"
            className="inline-flex items-center gap-2 py-2 border-b-2 border-chalk text-chalk font-headline font-semibold uppercase text-[14px] tracking-[0.10em] hover:text-gold-400 hover:border-gold-400 transition-colors"
          >
            Coaching staff
          </Link>
        </div>
      </Reveal>

      <Reveal kind="slide-x" delay={100} duration={750}>
        <div className="relative aspect-[16/10] w-full border border-chalk/18">
          <Image
            src="/images/brand/playbook-power-right.svg"
            alt="Playbook diagram — power right"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
        <div className="flex justify-between mt-2.5 font-mono text-[11px] tracking-[0.20em] uppercase text-chalk/55">
          <span>July 14–16, 2026</span>
          <span>Ages 14–18</span>
        </div>
      </Reveal>
    </div>
  );
}
