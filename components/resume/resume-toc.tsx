'use client';

import { useEffect, useState } from 'react';

/* Sticky table of contents for the CV with IntersectionObserver scroll-spy —
   the entry for the section currently in view brightens to vellum. */
interface TocItem {
  id: string;
  label: string;
  num: string;
}

export function ResumeToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observed = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );

    observed.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="min-[981px]:sticky min-[981px]:top-20 min-[981px]:self-start print:hidden">
      <div className="mb-4 flex items-center gap-2.5 font-mono text-[9px] tracking-[0.18em] text-stone-600">
        <span className="font-medieval text-[13px] text-candleflame">⌬</span>
        <span>CONTENTS · { items.length } ENTRIES</span>
      </div>

      <ul className="flex flex-col gap-0.5">
        { items.map((item) => {
          const on = active === item.id;
          return (
            <li key={item.id}>
              <a
                className={`grid grid-cols-[36px_1fr] py-1.5 font-mono text-[12px] no-underline transition-colors duration-fast ease-ease ${on ? 'text-vellum' : 'text-stone-400 hover:text-vellum'}`}
                href={`#${item.id}`}
              >
                <span className={`text-[11px] ${on ? 'text-candleflame' : 'text-stone-600'}`}>{ item.num }</span>
                <span>{ item.label }</span>
              </a>
            </li>
          );
        }) }
      </ul>

      <div className="mt-6 font-caveat text-[15px] leading-snug text-stone-400">
        ~ a quiet document.
        <br />
        scroll the right column, or click any chapter.
        <span className="mt-2 block font-mono text-[9px] tracking-[0.15em] text-stone-600">— 06°54′S · 107°36′E · 768M</span>
      </div>
    </aside>
  );
}
