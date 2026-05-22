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
 * Layout: ink-900 surface, full 100vh. Big condensed "JASON / RILEY"
 * filling the left, JOGO trading-card portrait pinned to the right
 * extending floor-to-ceiling. Mono statlines top + bottom.
 *
 * Scroll choreography:
 *   – Lenis smooth scroll under everything.
 *   – Hero pins for ~80vh; photo scales 1.0 → 1.08 while text fades
 *     out and lifts. Acts as a cinematic "leaving the chapter" cue.
 *   – Word-by-word entrance on the title, gold rule wipe, photo
 *     clip-down — all via WAAPI on mount.
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
      // Pin + scrub: as you scroll through the hero, photo zooms slightly
      // and text fades out + lifts. The pin holds the composition.
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
      className="relative bg-ink-900 text-chalk overflow-hidden grain-ink min-h-[100svh] flex items-end"
    >
      <div className="container-page relative pt-24 pb-12 md:pt-28 md:pb-16 w-full">
        <div className="grid md:grid-cols-[1fr_min(40vw,420px)] gap-10 md:gap-16 items-end">
          {/* LEFT — words */}
          <div ref={textRef}>
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
              className="h-px bg-gold-400 mt-2.5 mb-4 origin-left"
            >
              {""}
            </Reveal>

            <SplitText
              text="Jason"
              as="h1"
              immediate
              delay={180}
              className="font-display uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(80px,15vw,220px)] m-0 text-chalk"
            />
            <SplitText
              text="Riley"
              as="span"
              immediate
              delay={420}
              className="block font-display uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(80px,15vw,220px)] text-gold-400"
            />

            <Reveal kind="fade-up" immediate delay={900} duration={550}>
              <p className="font-serif italic text-[20px] md:text-[24px] leading-[1.4] text-chalk/82 max-w-[640px] mt-6">
                Eleven seasons up front. One Grey Cup. Now I coach the kids
                who play the position nobody clips — and tell the rest of
                the story in <em>Taming Mad Dog</em>.
              </p>
            </Reveal>

            <Reveal kind="fade-up" immediate delay={1080} duration={500}>
              <div className="mt-8 flex flex-wrap gap-3">
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

            <Reveal
              kind="rule-wipe"
              immediate
              delay={1240}
              duration={650}
              as="div"
              className="h-px bg-chalk/25 mt-12 mb-3"
            >
              {""}
            </Reveal>
            <Reveal kind="fade-up" immediate delay={1400} duration={450}>
              <Statline
                items={["Coach · Champion · Author", "Grey Cup — 1986"]}
                inverse
              />
            </Reveal>
          </div>

          {/* RIGHT — large floor-to-ceiling photo with letterbox wipe */}
          <Reveal
            as="figure"
            kind="clip-down"
            immediate
            delay={420}
            duration={1100}
            className="m-0 hidden md:block justify-self-end w-full self-stretch"
          >
            <div
              ref={photoRef}
              className="bg-ink-800 border border-chalk/18 aspect-[3/4] relative overflow-hidden"
              style={{ willChange: "transform" }}
            >
              <Image
                src="/images/photos/riley-jogo-card-58.png"
                alt="Jason Riley, № 58, Hamilton Tiger-Cats"
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 420px"
                className="object-cover object-[center_20%] duotone"
              />
            </div>
            <figcaption className="bg-ink-900 border-t border-chalk/18 px-3 py-2 font-mono text-[10px] tracking-[0.16em] uppercase text-chalk/55 truncate">
              № 58 · Hamilton Tiger-Cats · JOGO trading card
            </figcaption>
          </Reveal>
        </div>

        {/* MOBILE photo — stacked, no pin */}
        <Reveal
          as="figure"
          kind="clip-down"
          immediate
          delay={420}
          duration={900}
          className="md:hidden mt-10 m-0"
        >
          <div className="relative aspect-[3/4] bg-ink-800 border border-chalk/18 overflow-hidden">
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

        {/* Scroll cue */}
        <div className="hidden md:flex items-center gap-3 absolute left-8 bottom-6 font-mono text-[10px] tracking-[0.32em] uppercase text-chalk/45">
          <span className="block h-px w-12 bg-chalk/30" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}

// Register ScrollTrigger plugin on the client side (no-op on the server).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
