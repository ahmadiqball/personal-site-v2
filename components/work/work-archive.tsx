'use client';

import { useMemo, useState } from 'react';

import { LayoutContainer } from '@/components/layout/layout-container';

/* The Work archive: a client-side filter/sort rail over a prominence-sized bento
   grid of arch-masked project cards. Sorting/filtering is visual only (no fetch).
   CMS-backed via `getProjectsData`. */

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

const GRADIENTS = [
  'linear-gradient(160deg,#1F3340,#2D5F4A 50%,#3D7A4E)',
  'linear-gradient(160deg,#2A1F3C,#4A2A4F 50%,#6A3A4F)',
  'linear-gradient(160deg,#1A2F45,#2A4A6A 50%,#3A6A8A)',
  'linear-gradient(160deg,#1A3A2A,#2A5A40 50%,#3A7A50)',
  'linear-gradient(160deg,#3A2A1A,#6A3A2A 50%,#9A5A3A)',
  'linear-gradient(160deg,#25252F,#3A3A4F 50%,#55556F)',
];

// Auto-size pattern when a project has no explicit `prominence`.
const PATTERN = ['xl', 'tall', 'tall', 'wide', 'md', 'md', 'wide', 'md', 'sm', 'md', 'sm', 'sm'];

const SIZE: Record<string, string> = {
  xl: 'col-span-2 row-span-2 min-[760px]:col-span-4 min-[760px]:row-span-2 min-[1100px]:col-span-4',
  l: 'col-span-2 row-span-2 min-[760px]:col-span-4 min-[760px]:row-span-2 min-[1100px]:col-span-3',
  tall: 'col-span-2 row-span-2 min-[760px]:col-span-2 min-[760px]:row-span-2 min-[1100px]:col-span-2',
  wide: 'col-span-2 row-span-1 min-[760px]:col-span-4 min-[1100px]:col-span-3',
  md: 'col-span-2 row-span-1 min-[760px]:col-span-2 min-[1100px]:col-span-2',
  sm: 'col-span-2 row-span-1 min-[760px]:col-span-2 min-[1100px]:col-span-2',
};

const TITLE_SIZE: Record<string, string> = {
  xl: 'text-[26px] min-[760px]:text-[32px] min-[1100px]:text-[38px]',
  l: 'text-[24px] min-[1100px]:text-[30px]',
  tall: 'text-[22px] min-[1100px]:text-[24px]',
  wide: 'text-[20px] min-[1100px]:text-[22px]',
  md: 'text-[20px]',
  sm: 'text-[20px]',
};

function stackNames(p: any): string[] {
  return (p?.stacks ?? []).map((s: any) => s?.name).filter(Boolean);
}

function categoryOf(p: any): string {
  const lower = stackNames(p).map((n) => n.toLowerCase());
  if (lower.some((n) => n.includes('vue') || n.includes('nuxt'))) {
    return 'vue';
  }
  if (lower.some((n) => n.includes('react') || n.includes('next'))) {
    return 'react';
  }
  if (lower.some((n) => n.includes('svelte'))) {
    return 'svelte';
  }
  if (lower.some((n) => n === 'go')) {
    return 'go';
  }
  return 'other';
}

function projectYear(p: any): number {
  const date = p?.endDate ?? p?.startDate;
  return date ? new Date(date).getFullYear() : 0;
}

const FILTER_LABELS: Record<string, string> = {
  vue: 'vue / nuxt',
  react: 'react / next',
  svelte: 'svelte',
  go: 'go',
  other: 'other',
};

const SORTS: { key: string; label: string }[] = [
  { key: 'year', label: 'by year' },
  { key: 'name', label: 'by name' },
  { key: 'stack', label: 'by stack' },
];

function BentoCard({ card }: { card: any }) {
  const prom = card.prominence;

  return (
    <a
      className={`group relative block overflow-hidden bg-ink-deep text-inherit no-underline transition-transform duration-med ease-ease hover:-translate-y-[3px] ${SIZE[prom]}`}
      href={card.href}
    >
      <div className="arch-mask absolute inset-0 overflow-hidden" style={{ background: card.gradient }}>
        { card.img && <img alt="" className="h-full w-full object-cover" src={card.img} /> }
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,transparent 40%,rgba(8,7,12,0.94) 100%)' }} />
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path className="transition-[stroke-opacity] duration-med ease-ease [stroke-opacity:0.6] group-hover:[stroke-opacity:1]" d="M 0 100 L 0 22 Q 0 0 50 0 Q 100 0 100 22 L 100 100" fill="none" stroke="#C9A961" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="absolute left-4 top-3.5 font-mono text-[9px] tracking-[0.18em] text-candleflame">{ card.roman } ·</div>

      <div className="absolute right-4 top-3.5 text-right font-mono text-[9px] leading-relaxed tracking-[0.1em] text-vellum">
        <div>{ card.year || '' }</div>
        <div className="text-stone-400">{ card.stackLabel }</div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 min-[760px]:p-5">
        <div className={`font-cinzel font-medium uppercase leading-[1.05] tracking-[0.02em] text-vellum ${TITLE_SIZE[prom]}`}>{ card.title }</div>
        { card.desc && prom !== 'sm' && (
          <div className="mt-1.5 line-clamp-3 max-w-[42ch] font-sans text-[13px] leading-[1.4] text-stone-200 min-[1100px]:text-[15px]">{ card.desc }</div>
        ) }
      </div>

      <span className="absolute bottom-4 right-4 font-mono text-[9px] tracking-[0.2em] text-candleflame opacity-0 transition-opacity duration-med ease-ease group-hover:opacity-100">enter →</span>
    </a>
  );
}

export function WorkArchive({ projects }: { projects?: any[] }) {
  const [sort, setSort] = useState('year');
  const [filter, setFilter] = useState('all');

  const cards = useMemo(() => {
    const list = (projects ?? []).map((p: any, i: number) => ({
      _id: p?._id ?? i,
      explicitProminence: p?.prominence as string | undefined,
      title: p?.projectName ?? 'Untitled',
      desc: p?.tagline,
      href: p?.slug?.current ? `/portfolio/${p.slug.current}` : '/portfolio',
      year: projectYear(p),
      stackLabel: stackNames(p).slice(0, 3).map((n) => n.toLowerCase()).join(' · '),
      category: categoryOf(p),
      img: p?.images?.[0]?.asset?.url as string | undefined,
      // assigned below by default (year) rank so the bento reads correctly
      roman: '',
      prominence: 'md',
      gradient: GRADIENTS[0],
    }));

    // Rank by year desc to assign stable index/size/gradient (independent of the
    // live sort), so the most recent project is the featured xl card.
    [...list]
      .sort((a, b) => b.year - a.year)
      .forEach((card, rank) => {
        card.roman = ROMAN[rank] ?? String(rank + 1);
        card.prominence = card.explicitProminence ?? PATTERN[rank % PATTERN.length];
        card.gradient = GRADIENTS[rank % GRADIENTS.length];
      });

    return list;
  }, [projects]);

  const categories = useMemo(() => {
    const set = new Set(cards.map((c) => c.category));
    return ['vue', 'react', 'svelte', 'go', 'other'].filter((c) => set.has(c));
  }, [cards]);

  const visible = useMemo(() => {
    const filtered = filter === 'all' ? cards : cards.filter((c) => c.category === filter);
    return [...filtered].sort((a, b) => {
      if (sort === 'name') {
        return a.title.localeCompare(b.title);
      }
      if (sort === 'stack') {
        return a.category.localeCompare(b.category) || b.year - a.year;
      }
      return b.year - a.year;
    });
  }, [cards, filter, sort]);

  return (
    <>
      {/* filter / sort rail */}
      <div className="border-y border-line-08">
        <LayoutContainer className="flex flex-wrap items-center gap-x-8 gap-y-3 py-3.5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.18em] text-stone-600">— SORT</span>
            { SORTS.map((s) => (
              <button
                className={`font-mono text-[11px] tracking-[0.05em] transition-colors duration-fast ease-ease ${sort === s.key ? 'text-candleflame' : 'text-stone-600 hover:text-vellum'}`}
                key={s.key}
                onClick={() => setSort(s.key)}
                type="button"
              >
                { s.label }
              </button>
            )) }
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.18em] text-stone-600">— FILTER</span>
            <button
              className={`font-mono text-[11px] tracking-[0.05em] transition-colors duration-fast ease-ease ${filter === 'all' ? 'text-candleflame' : 'text-stone-600 hover:text-vellum'}`}
              onClick={() => setFilter('all')}
              type="button"
            >
              all
            </button>
            { categories.map((c) => (
              <button
                className={`font-mono text-[11px] tracking-[0.05em] transition-colors duration-fast ease-ease ${filter === c ? 'text-candleflame' : 'text-stone-600 hover:text-vellum'}`}
                key={c}
                onClick={() => setFilter(c)}
                type="button"
              >
                { FILTER_LABELS[c] }
              </button>
            )) }
          </div>

          <div className="ml-auto font-mono text-[10px] tracking-[0.1em] text-stone-600">
            showing <span className="text-candleflame">{ visible.length }</span> / { cards.length }
          </div>
        </LayoutContainer>
      </div>

      {/* bento grid */}
      <LayoutContainer className="py-10">
        <div className="grid grid-flow-row-dense auto-rows-[200px] grid-cols-2 gap-3.5 min-[760px]:auto-rows-[180px] min-[760px]:grid-cols-4 min-[760px]:gap-4 min-[1100px]:auto-rows-[170px] min-[1100px]:grid-cols-6">
          { visible.map((card) => <BentoCard card={card} key={card._id} />) }
        </div>
      </LayoutContainer>
    </>
  );
}
