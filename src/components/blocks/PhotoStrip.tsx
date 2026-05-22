import Image from "next/image";
import { photoStrip } from "@/data/career";
import Overline from "@/components/atoms/Overline";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";

export default function PhotoStrip() {
  return (
    <div>
      <Overline className="mb-3.5">Then — and now</Overline>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {photoStrip.map((p, i) => (
          <Parallax
            as="figure"
            key={p.src}
            y={i % 2 === 0 ? 40 : 70}
            className="m-0"
          >
            <Reveal kind="clip-down" delay={i * 90} duration={750}>
              <div className="relative aspect-[4/5] bg-ink-900 border border-[#D7CFB8] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-[center_25%] duotone"
                />
              </div>
            </Reveal>
            <figcaption className="mt-2 font-mono text-[11px] tracking-[0.16em] uppercase text-fg-3 flex justify-between gap-2">
              <span className="truncate">{p.alt}</span>
              <span className="opacity-70 hidden sm:inline">{p.caption}</span>
            </figcaption>
          </Parallax>
        ))}
      </div>
    </div>
  );
}
