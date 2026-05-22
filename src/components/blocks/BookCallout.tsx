import Image from "next/image";
import Overline from "@/components/atoms/Overline";
import Button from "@/components/atoms/Button";
import Rule from "@/components/atoms/Rule";
import Statline from "@/components/atoms/Statline";
import Reveal from "@/components/motion/Reveal";

export default function BookCallout() {
  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
      <Reveal
        kind="slide-x"
        duration={700}
        className="relative aspect-[2/3] w-full max-w-[280px] mx-auto md:mx-0"
        style={{ boxShadow: "var(--shadow-poster)" }}
      >
        <Image
          src="/images/photos/book-taming-mad-dog-cover.jpg"
          alt="Taming Mad Dog cover"
          fill
          sizes="280px"
          className="object-cover"
        />
      </Reveal>

      <Reveal kind="fade-up" delay={120} duration={650}>
        <Overline>A Football Memoir · 2023 · With Steve Milton</Overline>
        <h3 className="font-display uppercase leading-[0.95] m-0 mt-2 text-[clamp(48px,8vw,72px)]">
          Taming
          <br />
          Mad Dog
        </h3>
        <p className="font-serif italic text-[20px] md:text-[22px] leading-[1.4] text-fg-2 my-4 max-w-[520px]">
          “Mad Dog wasn&apos;t a nickname. It was a warning label. Taming him took
          longer than my career did.”
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/book">Read the chapter</Button>
          <Button kind="secondary" href="#order">
            Order — $32 CAD
          </Button>
        </div>
        <Rule className="mt-6 mb-2" />
        <Statline
          items={[
            "320 pages · Hardcover",
            "ECW Press",
            "Foreword: Pinball Clemons",
          ]}
        />
      </Reveal>
    </div>
  );
}
