import Overline from "@/components/atoms/Overline";
import Reveal from "@/components/motion/Reveal";
import { columns } from "@/data/career";

export default function ColumnBlock() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {columns.map((c, i) => (
        <Reveal
          as="article"
          key={c.title}
          delay={i * 90}
          duration={600}
          className="bg-paper-bright border border-[#D7CFB8] border-t-[3px] border-t-ink-900 p-6 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <Overline>{c.tag}</Overline>
          <h4 className="font-headline font-semibold text-[22px] sm:text-[24px] leading-[1.15] uppercase mt-2 mb-2">
            {c.title}
          </h4>
          <p className="font-serif text-[15px] leading-[1.55] text-fg-2 m-0">
            {c.body}
          </p>
          <a
            href={c.href}
            className="inline-flex items-center gap-1 mt-3.5 font-mono text-[11px] tracking-[0.18em] uppercase text-maroon-500 hover:text-maroon-700 border-b border-maroon-500 hover:border-maroon-700 pb-0.5 no-underline"
          >
            {c.meta} →
          </a>
        </Reveal>
      ))}
    </div>
  );
}
