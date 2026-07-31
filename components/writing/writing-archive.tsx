'use client';

import { useMemo, useState } from 'react';

/* The writing archive: a topic-filtered, year-banded list of notes with a
   featured "start here" card. CMS-backed via the blog list. */

const WAVES = [
  'M 0 8 Q 8 2 16 8 Q 24 14 32 8 Q 40 2 48 8 T 70 8',
  'M 0 8 Q 10 4 20 8 T 40 8 T 60 8 T 70 8',
  'M 0 8 Q 6 1 12 8 T 24 8 Q 32 14 40 8 T 70 8',
];

function readTime(char?: number): number {
  return Math.max(1, Math.round((char ?? 0) / 1000));
}

function monthYear(date?: string): string {
  return date ? new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase() : '';
}

function yearOf(date?: string): number {
  return date ? new Date(date).getFullYear() : 0;
}

function href(post: any): string {
  return post?.slug?.current ? `/blog/${post.slug.current}` : '/blog';
}

function WritingRow({ post }: { post: any }) {
  const title: string = post?.title ?? '';

  return (
    <li>
      <a
        className="group flex flex-col gap-1.5 border-t border-line-10 py-[18px] no-underline transition-[padding] duration-med ease-ease hover:pl-3 sm:grid sm:grid-cols-[1fr_70px_auto] sm:items-baseline sm:gap-4"
        href={href(post)}
      >
        <span className="flex min-w-0 items-baseline gap-3">
          <span className="font-medieval text-3xl leading-[0.8] text-candleflame transition-transform duration-med ease-ease group-hover:-translate-x-0.5 sm:text-[34px]">{ title.charAt(0) }</span>
          <span className="min-w-0">
            <span className="block font-sans text-lg italic leading-[1.3] text-vellum sm:text-xl">{ title.slice(1) }</span>
            { post?.deck && <span className="mt-0.5 block truncate font-caveat text-[13px] text-stone-400">— { post.deck }</span> }
          </span>
        </span>

        <svg aria-hidden="true" className="hidden h-4 w-[70px] self-center sm:block" viewBox="0 0 70 16">
          <path d={WAVES[(post?._id?.length ?? 0) % WAVES.length]} fill="none" opacity="0.6" stroke="#C9A961" strokeWidth="0.6" />
        </svg>

        <span className="flex items-center gap-2 pl-9 font-mono text-[9px] tracking-[0.1em] text-stone-600 sm:flex-col sm:items-end sm:gap-1 sm:pl-0">
          <span className="border border-gold-line px-1.5 py-0.5 uppercase text-candleflame">{ post?.type ?? 'note' }</span>
          <span>{ readTime(post?.char) } MIN · { monthYear(post?.publishedAt) }</span>
        </span>
      </a>
    </li>
  );
}

function YearWheel() {
  return (
    <svg aria-hidden="true" className="h-[90px] w-[90px] shrink-0" viewBox="0 0 110 110">
      <circle cx="55" cy="55" fill="none" r="48" stroke="#C9A961" strokeWidth="0.7" />
      <circle cx="55" cy="55" fill="none" opacity="0.5" r="40" stroke="#C9A961" strokeWidth="0.3" />
      { Array.from({ length: 12 }, (_, i) => (
        <line key={i} stroke="#C9A961" strokeWidth="0.3" transform={`rotate(${i * 30} 55 55)`} x1="55" x2="55" y1="7" y2="14" />
      )) }
      <g className="animate-breathe" style={{ transformOrigin: 'center' }}>
        <line stroke="#C9A961" strokeWidth="1.5" x1="55" x2="55" y1="55" y2="20" />
        <circle cx="55" cy="20" fill="#C9A961" r="2" />
      </g>
      <circle cx="55" cy="55" fill="#C9A961" r="3" />
      <circle cx="55" cy="55" fill="#08070C" r="1" />
    </svg>
  );
}

export function WritingArchive({ posts }: { posts?: any[] }) {
  const [topic, setTopic] = useState('all');

  const sorted = useMemo(
    () => [...(posts ?? [])].sort((a, b) => yearOf(b?.publishedAt) - yearOf(a?.publishedAt) || (b?.publishedAt ?? '').localeCompare(a?.publishedAt ?? '')),
    [posts],
  );

  const featured = useMemo(() => sorted.find((p) => p?.featured) ?? sorted[0], [sorted]);
  const rest = useMemo(() => sorted.filter((p) => p !== featured), [sorted, featured]);

  const topics = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of rest) {
      if (p?.type) {
        counts.set(p.type, (counts.get(p.type) ?? 0) + 1);
      }
    }
    return [...counts.entries()];
  }, [rest]);

  const visible = topic === 'all' ? rest : rest.filter((p) => p?.type === topic);

  const byYear = useMemo(() => {
    const map = new Map<number, any[]>();
    for (const p of visible) {
      const y = yearOf(p?.publishedAt);
      map.set(y, [...(map.get(y) ?? []), p]);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [visible]);

  const yearCounts = useMemo(() => {
    const map = new Map<number, number>();
    for (const p of rest) {
      const y = yearOf(p?.publishedAt);
      map.set(y, (map.get(y) ?? 0) + 1);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [rest]);

  const chipClass = (active: boolean) => `rounded-full border px-2.5 py-1 font-mono text-[10px] lowercase tracking-[0.05em] transition-colors duration-fast ease-ease ${active ? 'border-candleflame text-candleflame' : 'border-line-10 text-stone-400 hover:border-candleflame hover:text-vellum'}`;

  return (
    <div className="grid gap-10 min-[981px]:grid-cols-[3fr_9fr] min-[981px]:gap-12">
      {/* sidebar */}
      <aside className="flex flex-col gap-8 min-[981px]:sticky min-[981px]:top-20 min-[981px]:self-start">
        <div>
          <div className="mb-3 font-mono text-[9px] tracking-[0.18em] text-stone-600">— FILTER BY TOPIC</div>
          <div className="flex flex-wrap gap-1.5">
            <button className={chipClass(topic === 'all')} onClick={() => setTopic('all')} type="button">
              all <span className="text-stone-600">· { rest.length }</span>
            </button>
            { topics.map(([name, n]) => (
              <button className={chipClass(topic === name)} key={name} onClick={() => setTopic(name)} type="button">
                { name.toLowerCase() } <span className="text-stone-600">· { n }</span>
              </button>
            )) }
          </div>
        </div>

        { yearCounts.length > 0 && (
          <div>
            <div className="mb-3 font-mono text-[9px] tracking-[0.18em] text-stone-600">— BY YEAR</div>
            <div className="flex items-center gap-4">
              <YearWheel />
              <div className="flex-1">
                { yearCounts.map(([y, n]) => (
                  <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-line-08 py-1.5 font-mono text-[11px]" key={y}>
                    <span className="text-vellum">{ y }</span>
                    <span className="text-stone-600">{ n } { n === 1 ? 'entry' : 'entries' }</span>
                  </div>
                )) }
              </div>
            </div>
          </div>
        ) }
      </aside>

      {/* main column */}
      <div className="min-w-0">
        {/* featured */}
        { featured && (
          <article className="mb-12 grid overflow-hidden border-[0.5px] border-line-12 bg-ink-deep min-[681px]:grid-cols-[1.05fr_1fr]">
            <a aria-label={`Featured: ${featured.title}`} className="relative block min-h-[220px] bg-[linear-gradient(160deg,#1A2F45,#2A4A6A_55%,#3A6A8A)]" href={href(featured)}>
              <div className="arch-mask absolute inset-0 overflow-hidden">
                { featured.mainImage?.asset?.url && <img alt="" className="h-full w-full object-cover" src={featured.mainImage.asset.url} /> }
              </div>
              <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M 0 100 L 0 22 Q 0 0 50 0 Q 100 0 100 22 L 100 100" fill="none" opacity="0.6" stroke="#C9A961" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
              </svg>
            </a>

            <div className="flex flex-col justify-center gap-3 p-8">
              <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.2em]">
                <span className="text-candleflame">★ START HERE</span>
                <span className="text-stone-600">{ (featured.type ?? '').toUpperCase() }</span>
              </div>
              <h2 className="font-cinzel text-[27px] font-medium uppercase leading-[1.06] tracking-[0.02em] text-vellum">{ featured.title }</h2>
              { featured.deck && <p className="max-w-[46ch] font-sans text-[15px] leading-[1.6] text-stone-200">{ featured.deck }</p> }
              <a className="mt-0.5 font-mono text-[11px] tracking-[0.1em] text-candleflame no-underline transition-colors duration-fast ease-ease hover:text-vellum" href={href(featured)}>read the note →</a>
              <div className="font-mono text-[9px] tracking-[0.15em] text-stone-600">{ readTime(featured.char) } MIN · { monthYear(featured.publishedAt) }</div>
            </div>
          </article>
        ) }

        {/* year bands */}
        { byYear.map(([year, list]) => (
          <div key={year}>
            <div className="mb-2 mt-9 flex items-baseline gap-3 first:mt-0">
              <span className="font-cinzel text-2xl font-medium text-vellum">{ year }</span>
              <span className="font-mono text-[9px] tracking-[0.15em] text-stone-600">— { list.length } { list.length === 1 ? 'ENTRY' : 'ENTRIES' }</span>
            </div>
            <ul>
              { list.map((post) => <WritingRow key={post._id} post={post} />) }
            </ul>
          </div>
        )) }

        { visible.length === 0 && (
          <p className="py-16 text-center font-caveat text-lg text-stone-400">— nothing filed under this topic yet</p>
        ) }
      </div>
    </div>
  );
}
