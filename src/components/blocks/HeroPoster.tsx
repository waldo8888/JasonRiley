"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/atoms/Button";

/**
 * Full-bleed athlete hero.
 *
 * The reference direction is image-led: cinematic portrait, oversized name
 * typography, sparse meta, and just enough supporting copy to make the next
 * action obvious.
 */
export default function HeroPoster() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
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
      if (imageRef.current) {
        tl.to(imageRef.current, { scale: 1.05, y: -24, ease: "none" }, 0);
      }
      if (textRef.current) {
        tl.to(textRef.current, { opacity: 0.18, y: -56, ease: "none" }, 0);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative -mt-16 overflow-hidden bg-ink-900 text-chalk grain-ink min-h-[calc(100svh-96px)] md:min-h-[calc(100svh-32px)]"
    >
      <div ref={imageRef} className="absolute inset-0" style={{ willChange: "transform" }}>
        <Image
          src="/images/photos/jason-riley-hero-headshot-desktop.png"
          alt="Jason Riley wearing a Hamilton Tiger-Cats alumni cap"
          fill
          priority
          sizes="(min-width: 768px) 100vw, 0px"
          className="hidden object-cover object-center duotone md:block"
        />
        <Image
          src="/images/photos/jason-riley-hero-headshot.png"
          alt="Jason Riley wearing a Hamilton Tiger-Cats alumni cap"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 0px"
          className="object-cover object-[40%_38%] duotone md:hidden"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,14,16,0.96)_0%,rgba(14,14,16,0.84)_34%,rgba(14,14,16,0.28)_67%,rgba(14,14,16,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(14,14,16,0.96)_0%,rgba(14,14,16,0.24)_34%,rgba(14,14,16,0.18)_68%,rgba(14,14,16,0.70)_100%)]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-22px] bottom-[-86px] hidden font-display text-[280px] leading-none text-chalk/[0.055] md:block lg:text-[390px] xl:text-[460px]"
      >
        58
      </div>

      <div className="relative z-10 container-page flex min-h-[calc(100svh-96px)] flex-col justify-between gap-8 pb-6 pt-[7.5rem] md:min-h-[calc(100svh-32px)] md:pb-8 md:pt-[8.25rem]">
        <div>
          <Reveal kind="fade-up" immediate duration={500}>
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-chalk/60">
              <span className="whitespace-nowrap">Official site</span>
              <span className="whitespace-nowrap">Hamilton Tiger-Cats</span>
              <span className="hidden whitespace-nowrap sm:inline">
                Grey Cup champion
              </span>
            </div>
          </Reveal>
          <Reveal
            kind="rule-wipe"
            immediate
            delay={120}
            duration={650}
            as="div"
            className="mt-3 h-px origin-left bg-gold-400"
          >
            {""}
          </Reveal>
        </div>

        <div
          ref={textRef}
          className="grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_260px] lg:grid-cols-[minmax(0,1fr)_320px]"
        >
          <div className="max-w-[760px]">
            <Reveal kind="fade-up" immediate delay={160} duration={520}>
              <p className="mb-3 font-mono text-[11px] uppercase leading-none tracking-[0.18em] text-gold-400 md:text-[12px]">
                Coach / Champion / Author / No. 58
              </p>
            </Reveal>

            <SplitText
              text="Jason"
              as="h1"
              immediate
              delay={240}
              className="m-0 font-display text-[78px] uppercase leading-[0.82] tracking-normal text-chalk sm:text-[104px] md:text-[148px] lg:text-[190px] xl:text-[220px]"
            />
            <SplitText
              text="Riley"
              as="span"
              immediate
              delay={460}
              className="block font-display text-[78px] uppercase leading-[0.82] tracking-normal text-gold-400 sm:text-[104px] md:text-[148px] lg:text-[190px] xl:text-[220px]"
            />

            <Reveal kind="fade-up" immediate delay={820} duration={550}>
              <p className="mt-5 max-w-[590px] font-serif text-[18px] italic leading-[1.38] text-chalk/84 md:text-[22px]">
                Eleven seasons up front. One Grey Cup. Now coaching the next
                generation of linemen, carrying the Ticats standard, and telling
                the rest of the story in <em>Taming Mad Dog</em>.
              </p>
            </Reveal>

            <Reveal kind="fade-up" immediate delay={1010} duration={500}>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button kind="inverse" href="/book">
                  Read the Book ↗
                </Button>
                <Link
                  href="/camp"
                  className="inline-flex items-center gap-2.5 rounded-[2px] border border-chalk bg-ink-900/20 px-6 py-3.5 font-headline text-[14px] font-semibold uppercase tracking-[0.10em] text-chalk backdrop-blur-sm transition-colors duration-150 hover:bg-chalk/10"
                >
                  Up-Front Camp &apos;26
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal
            kind="fade-up"
            immediate
            delay={940}
            duration={600}
            className="hidden self-end border-l border-chalk/26 pl-6 lg:block lg:translate-y-28 xl:translate-y-32"
          >
            <dl className="grid gap-5">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-chalk/48">
                  Seasons
                </dt>
                <dd className="mt-1 font-display text-[58px] leading-none text-chalk">
                  11
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-chalk/48">
                  Club
                </dt>
                <dd className="mt-1 font-headline text-[22px] uppercase leading-[1.05] text-chalk">
                  Hamilton<br />Tiger-Cats
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-chalk/48">
                  Ring
                </dt>
                <dd className="mt-1 font-display text-[58px] leading-none text-gold-400">
                  1986
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal
            kind="rule-wipe"
            immediate
            delay={1180}
            duration={650}
            as="div"
            className="mb-2.5 h-px bg-chalk/25"
          >
            {""}
          </Reveal>
          <Reveal
            kind="fade-up"
            immediate
            delay={1320}
            duration={450}
            className="hidden md:block"
          >
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-chalk/60 md:text-[11px]">
              <span className="whitespace-nowrap">Offensive guard</span>
              <span className="whitespace-nowrap">McMaster O-line coach</span>
              <span className="hidden whitespace-nowrap sm:inline">
                Up-Front Lineman Camp
              </span>
            </div>
          </Reveal>
          <div className="hidden items-center gap-3 absolute right-0 -top-9 font-mono text-[10px] uppercase tracking-[0.32em] text-chalk/45 md:flex">
            <span>Scroll</span>
            <span className="block h-px w-12 bg-chalk/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
