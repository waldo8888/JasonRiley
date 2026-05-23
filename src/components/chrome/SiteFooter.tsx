import Link from "next/link";
import { footerColumns, footerTagline, footerBlurb } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="bg-ink-900 text-chalk pt-14 pb-8 grain-ink">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-[44px] sm:text-[48px] uppercase leading-none tracking-[-0.01em]">
              Jason
              <br />
              Riley
            </div>
            <div className="mt-2.5 font-mono text-[11px] tracking-[0.20em] uppercase text-chalk/55">
              {footerTagline}
            </div>
            <p className="mt-4 max-w-[360px] font-serif italic text-[15px] leading-[1.55] text-chalk/78">
              {footerBlurb}
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h5 className="font-headline font-semibold text-[14px] tracking-[0.12em] uppercase text-gold-400 m-0 mb-3.5">
                {col.title}
              </h5>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-serif text-[15px] text-chalk hover:text-gold-400 no-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-4 border-t border-chalk/18 flex flex-wrap justify-between gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-chalk/55">
          <span>© Jason Riley · Hamilton, Ontario</span>
          <span className="flex items-center gap-1.5">
            Made with{" "}
            <span aria-hidden="true" className="text-base leading-none">❤️</span>
            <span className="sr-only">love</span>
            <a
              href="https://zailaai.com"
              target="_blank"
              rel="noreferrer"
              className="text-gold-400 hover:text-gold-300 no-underline tracking-[0.18em]"
            >
              Zaila AI Designs
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
