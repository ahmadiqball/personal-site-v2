import { LayoutContainer } from '@/components/layout/layout-container';

/* Site footer: gold line-art ornaments (ice axe, carabiner), a faint watermark,
   a mountain-ridge divider and the meta strip. Mostly static ornament. */

export function HomeFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line-08 pb-6 pt-14 print:hidden">
      <LayoutContainer className="relative">
        {/* ice axe (left) */}
        <svg aria-hidden="true" className="absolute left-0 top-2 hidden h-[130px] w-9 opacity-40 sm:block" viewBox="0 0 60 200">
          <g fill="none" stroke="#C9A961" strokeWidth="1">
            <line x1="30" x2="30" y1="40" y2="190" />
            <path d="M 30 40 L 6 30 L 12 22 L 30 30 Z" />
            <path d="M 30 40 L 50 50 L 46 58 L 30 50 Z" />
          </g>
          <circle cx="30" cy="190" fill="#C9A961" opacity="0.6" r="2" />
        </svg>

        {/* carabiner (right) */}
        <svg aria-hidden="true" className="absolute right-0 top-2 hidden h-[70px] w-[50px] opacity-35 sm:block" viewBox="0 0 60 80">
          <g fill="none" stroke="#C9A961" strokeWidth="1.2">
            <path d="M 12 10 Q 12 4 30 4 Q 48 4 48 10 L 48 60 Q 48 72 30 72 Q 12 72 12 60 Z" />
            <line strokeWidth="0.8" x1="20" x2="20" y1="6" y2="68" />
          </g>
        </svg>

        {/* watermark */}
        <div className="whitespace-nowrap text-center font-medieval text-[clamp(56px,9vw,90px)] leading-[0.9] tracking-[-0.02em] text-[rgba(201,169,97,0.07)]">
          — en plein cosmos
        </div>

        {/* ridge divider */}
        <div className="my-[18px] flex items-center justify-center gap-3">
          <span className="h-px max-w-[200px] flex-1 bg-[repeating-linear-gradient(90deg,#6B6760_0_3px,transparent_3px_8px)]" />
          <svg aria-hidden="true" className="h-5 w-[30px]" viewBox="0 0 30 20">
            <path d="M 2 18 L 10 6 L 16 14 L 22 4 L 28 18 Z" fill="none" stroke="#C9A961" strokeWidth="0.7" />
            <circle cx="22" cy="4" fill="#C9A961" r="1" />
          </svg>
          <span className="h-px max-w-[200px] flex-1 bg-[repeating-linear-gradient(90deg,#6B6760_0_3px,transparent_3px_8px)]" />
        </div>

        {/* meta strip */}
        <div className="flex flex-col gap-4 pt-3.5 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <div className="font-mono text-[10px] tracking-[0.05em] text-stone-600">© ahmad iqbal yahya · mmxxvi · bandung</div>
            <div className="mt-1 font-caveat text-sm text-stone-400">— with care, from 768m</div>
          </div>
          <div className="sm:text-right">
            <div className="font-mono text-[10px] tracking-[0.05em] text-stone-600">built by hand · v1.0</div>
            <a className="mt-1 inline-block font-mono text-[9px] tracking-[0.1em] text-candleflame no-underline transition-colors duration-fast ease-ease hover:text-vellum" href="#">colophon ↗</a>
          </div>
        </div>
      </LayoutContainer>
    </footer>
  );
}
