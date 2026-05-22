"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Statline from "@/components/atoms/Statline";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/atoms/Button";

/**
 * Full-viewport hero poster.
 *
 * Layout: ink-900 surface, exactly 100svh tall. Content distributes
 * top → middle → bottom inside the viewport so the bottom statline
 * never gets clipped:
 *   – Top: mono statline + gold rule
 *   – Middle (flex-1): JASON / RILEY · sub-line · CTAs · JOGO photo
 *   – Bottom: chalk rule + bottom statline + scroll cue
 *
 * Scroll choreography:
 *   – Hero scrub-pins ~70vh; photo scales 1.0 → 1.08, text fades + lifts
 *   – Word-by-word entrance on title, gold rule wipe, photo clip-down
 */
export default function HeroPoster() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=70%",
          scrub: 0.8,
        },
      });
      if (photoRef.current) {
        tl.to(photoRef.current, { scale: 1.08, y: -30, ease: "none" }, 0);
      }
      if (textRef.current) {
        tl.to(textRef.current, { opacity: 0.15, y: -60, ease: "none" }, 0);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative bg-ink-900 text-chalk overflow-hidden grain-ink h-[calc(100svh-7rem)] min-h-[640px] flex flex-col"
    >
      {/* TOP — statline + gold rule */}
      <div className="container-page pt-6 md:pt-8">
        <Reveal kind="fade-up" immediate duration={500}>
          <Statline
            items={["Est. 1983 — Hamilton, Ont.", "№ 58 / Offensive Guard"]}
            inverse
          />
        </Reveal>
        <Reveal
          kind="rule-wipe"
          immediate
          delay={120}
          duration={650}
          as="div"
          className="h-px bg-gold-400 mt-2.5 origin-left"
        >
          {""}
        </Reveal>
      </div>

      {/* MIDDLE — title + photo */}
      <div
        ref={textRef}
        className="container-page flex-1 grid md:grid-cols-[1fr_min(38vw,400px)] gap-8 md:gap-14 items-center py-4 md:py-6"
      >
        <div className="self-center">
          <SplitText
            text="Jason"
            as="h1"
            immediate
            delay={180}
            className="font-display uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(64px,12vw,168px)] m-0 text-chalk"
          />
          <SplitText
            text="Riley"
            as="span"
            immediate
            delay={420}
            className="block font-display uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(64px,12vw,168px)] text-gold-400"
          />

          <Reveal kind="fade-up" immediate delay={900} duration={550}>
            <p className="font-serif italic text-[18px] md:text-[21px] leading-[1.4] text-chalk/82 max-w-[560px] mt-5">
              Eleven seasons up front. One Grey Cup. Now I coach the kids who
              play the position nobody clips — and tell the rest of the story
              in <em>Taming Mad Dog</em>.
            </p>
          </Reveal>

          <Reveal kind="fade-up" immediate delay={1080} duration={500}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button kind="inverse" href="/book">
                Read the Book ↗
              </Button>
              <Link
                href="/camp"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent text-chalk border border-chalk rounded-[2px] font-headline font-semibold uppercase text-[14px] tracking-[0.10em] hover:bg-chalk/10 transition-colors duration-150"
              >
                Up-Front Camp '26
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Photo — pinned right column, scale on scroll */}
        <Reveal
          as="figure"
          kind="clip-down"
          immediate
          delay={420}
          duration={1100}
          className="m-0 hidden md:block justify-self-end w-full self-stretch max-h-[min(70vh,520px)]"
        >
          <div
            ref={photoRef}
            className="bg-ink-800 border border-chalk/18 relative overflow-hidden h-full min-h-[300px]"
            style={{ willChange: "transform" }}
          >
            <Image
              src="/images/photos/riley-jogo-card-58.png"
              alt="Jason Riley, № 58, Hamilton Tiger-Cats"
              fill
              priority
              sizes="(max-width: 1024px) 50vw, 400px"
              className="object-cover object-[center_22%] duotone"
            />
          </div>
          <figcaption className="bg-ink-900 border-t border-chalk/18 px-3 py-2 font-mono text-[10px] tracking-[0.16em] uppercase text-chalk/55 truncate">
            № 58 · Hamilton Tiger-Cats · JOGO trading card
          </figcaption>
        </Reveal>
      </div>

      {/* BOTTOM — bottom statline + scroll cue */}
      <div className="container-page pb-5 md:pb-8 relative">
        <Reveal
          kind="rule-wipe"
          immediate
          delay={1240}
          duration={650}
          as="div"
          className="h-px bg-chalk/25 mb-2.5"
        >
          {""}
        </Reveal>
        <Reveal kind="fade-up" immediate delay={1400} duration={450}>
          <Statline
            items={["Coach · Champion · Author", "Grey Cup — 1986"]}
            inverse
          />
        </Reveal>
        {/* Scroll cue (desktop only) */}
        <div className="hidden md:flex items-center gap-3 absolute right-8 -top-9 font-mono text-[10px] tracking-[0.32em] uppercase text-chalk/45">
          <span>Scroll</span>
          <span className="block h-px w-12 bg-chalk/30" />
        </div>
      </div>

      {/* MOBILE photo — appears just under the middle stack, replaces the desktop right column */}
      <Reveal
        as="figure"
        kind="clip-down"
        immediate
        delay={420}
        duration={900}
        className="md:hidden m-0 container-page mt-2 mb-4"
      >
        <div className="relative aspect-[4/5] bg-ink-800 border border-chalk/18 overflow-hidden">
          <Image
            src="/images/photos/riley-jogo-card-58.png"
            alt="Jason Riley, № 58, Hamilton Tiger-Cats"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%] duotone"
          />
        </div>
        <figcaption className="bg-ink-900 border-t border-chalk/18 px-3 py-2 font-mono text-[10px] tracking-[0.16em] uppercase text-chalk/55 truncate">
          № 58 · Hamilton Tiger-Cats · JOGO trading card
        </figcaption>
      </Reveal>
    </section>
  );
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
