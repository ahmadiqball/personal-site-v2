import { LayoutContainer } from '@/components/layout/layout-container';

/* "Selected works" — a compact archive of the featured projects as hover-lit
   rows (roman index · arch thumb · title + tagline · meta). CMS-backed via
   `profile.featuredPortfolio`. */

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii'];
const GRADIENTS = [
  'linear-gradient(160deg,#3A4D3F,#5A7A60)',
  'linear-gradient(160deg,#5A2A4F,#3A1D38)',
  'linear-gradient(160deg,#2A4A6A,#1A3550)',
  'linear-gradient(160deg,#1A4A3A,#2A6850)',
];

function yearShort(project: any): string {
  const date = project?.endDate ?? project?.startDate;
  if (!date) {
    return '';
  }
  return `'${String(new Date(date).getFullYear()).slice(2)}`;
}

function ArchThumb({ gradient, img }: { gradient: string; img?: string }) {
  return (
    <span className="relative block h-[52px] w-[52px] shrink-0">
      <span className="arch-mask absolute inset-0 overflow-hidden" style={{ background: gradient }}>
        { img && <img alt="" className="h-full w-full object-cover" src={img} /> }
      </span>
      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M 0 100 L 0 22 Q 0 0 50 0 Q 100 0 100 22 L 100 100" fill="none" stroke="#C9A961" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
      </svg>
    </span>
  );
}

export function HomeSelectedWorks({ projects }: { projects?: any[] }) {
  const rows = (projects ?? []).slice(0, 4);

  return (
    <section aria-labelledby="work-heading" className="border-b border-line-08">
      <LayoutContainer className="py-14">
        <div className="mb-9 flex items-start justify-between gap-6">
          <div>
            <div className="mb-2.5 flex items-center gap-2.5">
              <span className="font-medieval text-sm text-candleflame">⌬ Station II</span>
              <span className="font-caveat text-base text-stone-400">— summit log</span>
            </div>
            <h2 className="font-cinzel text-h2 font-medium uppercase leading-[1.1] text-vellum" id="work-heading">
              Selected works,
              <br />
              2021 — 2026
            </h2>
          </div>

          {/* summit profile ornament */}
          <svg aria-hidden="true" className="hidden h-20 w-[180px] shrink-0 sm:block" viewBox="0 0 200 90">
            <line opacity="0.5" stroke="#C9A961" strokeWidth="0.5" x1="0" x2="200" y1="80" y2="80" />
            <path d="M 0 80 L 30 70 L 50 56 L 70 38 L 90 22 L 110 8 L 130 28 L 150 18 L 170 36 L 200 50" fill="none" stroke="#EDEAE3" strokeWidth="1" />
            <path d="M 0 80 L 30 70 L 50 56 L 70 38 L 90 22 L 110 8 L 130 28 L 150 18 L 170 36 L 200 50 L 200 80 Z" fill="#C9A961" opacity="0.08" />
            <circle cx="110" cy="8" fill="#C9A961" r="2.5" />
            <circle cx="150" cy="18" fill="#C9A961" r="2" />
          </svg>
        </div>

        <ul>
          { rows.map((p, i) => {
            const href = p?.slug?.current ? `/portfolio/${p.slug.current}` : '/portfolio';
            const stackName = p?.stacks?.[0]?.name?.toLowerCase();
            const meta = [yearShort(p), stackName].filter(Boolean).join(' · ');

            return (
              <li key={p?._id ?? i}>
                <a
                  className="group grid grid-cols-[24px_52px_1fr_auto] items-center gap-4 border-t border-line-10 py-5 text-inherit no-underline transition-colors duration-med ease-ease last:border-b hover:bg-[rgba(201,169,97,0.04)]"
                  href={href}
                >
                  <span className="font-mono text-[11px] text-stone-600 transition-colors duration-med ease-ease group-hover:text-candleflame">{ ROMAN[i] }.</span>

                  <ArchThumb gradient={GRADIENTS[i % GRADIENTS.length]} img={p?.images?.[0]?.asset?.url} />

                  <span className="min-w-0">
                    <span className="block truncate font-cinzel text-[22px] font-medium uppercase tracking-[0.03em] text-vellum">{ p?.projectName }</span>
                    { p?.tagline && (
                      <span className="mt-0.5 block truncate font-sans text-sm italic text-stone-400 transition-colors duration-med ease-ease group-hover:text-stone-200">{ p.tagline }</span>
                    ) }
                  </span>

                  <span className="whitespace-nowrap text-right font-mono text-[10px] text-stone-600 transition-colors duration-med ease-ease group-hover:text-candleflame">
                    { meta }
                    <span className="ml-1 inline-block opacity-0 transition-all duration-med ease-ease group-hover:translate-x-1 group-hover:opacity-100">→</span>
                  </span>
                </a>
              </li>
            );
          }) }
        </ul>

        <div className="mt-[18px] flex items-center justify-between">
          <a className="font-mono text-[11px] tracking-[0.1em] text-candleflame no-underline transition-colors duration-fast ease-ease hover:text-vellum" href="/portfolio">→ open the full archive</a>
          <span className="font-caveat text-sm text-stone-400">more peaks not shown ↗</span>
        </div>
      </LayoutContainer>
    </section>
  );
}
