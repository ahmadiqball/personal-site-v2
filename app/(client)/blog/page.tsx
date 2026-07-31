import type { Metadata } from 'next';

import { HomeFooter } from '@/components/home/home-footer';
import { LayoutBreadcrumb } from '@/components/layout/layout-breadcrumb';
import { LayoutContainer } from '@/components/layout/layout-container';
import { WritingArchive } from '@/components/writing/writing-archive';
import { getBlogDataList } from '@/sanity/get-data';

export const metadata: Metadata = {
  description: 'Technical notes and essays on frontend, backend, algorithms and the craft.',
  title: 'Writing · Ahmad Iqbal',
};

export default async function Blog(): Promise<JSX.Element> {
  const posts: any[] = await getBlogDataList();

  const years = posts.map((p) => (p?.publishedAt ? new Date(p.publishedAt).getFullYear() : 0)).filter(Boolean);
  const since = years.length ? Math.min(...years) : 2024;
  const topics = new Set(posts.map((p) => p?.type).filter(Boolean));

  return (
    <>
      <LayoutBreadcrumb items={[{ href: '/', label: 'index' }, { label: 'writing' }]} />

      {/* page head */}
      <LayoutContainer className="py-10">
        <div className="mb-2 font-mono text-[9px] tracking-[0.22em] text-stone-600">— THE CODEX · ALL ENTRIES</div>

        <div className="mb-3 flex items-center gap-2.5">
          <span className="font-medieval text-sm text-candleflame">⌬ Station III</span>
          <span className="font-caveat text-base text-stone-400">— the codex</span>
        </div>

        <h1 className="font-cinzel text-h1 font-semibold uppercase leading-[1] text-vellum">
          Notes from <span className="italic">the codex</span>
          <span className="text-candleflame">.</span>
        </h1>

        <p className="mt-5 max-w-[60ch] font-sans text-lede text-stone-200">
          Technical notes and essays on frontend, backend, algorithms, and the craft of building software —
          whichever language the idea arrived in.
        </p>

        <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-t border-line-08 pt-5">
          <Stat label="Entries" sub="notes" value={ posts.length } />
          <Stat label="Topics" sub="areas" value={ topics.size } />
          <Stat label="Since" sub="first entry" value={ since } />
        </div>
      </LayoutContainer>

      {/* archive */}
      <LayoutContainer className="py-8">
        <WritingArchive posts={posts} />
      </LayoutContainer>

      <HomeFooter />
    </>
  );
}

function Stat({ label, sub, value }: { label: string; sub: string; value: number | string }) {
  return (
    <div>
      <div className="mb-1 font-mono text-[9px] tracking-[0.18em] text-stone-600">— { label.toUpperCase() }</div>
      <div className="font-cinzel text-2xl font-medium text-vellum">{ value } <span className="font-mono text-[9px] tracking-[0.12em] text-stone-400">{ sub.toUpperCase() }</span></div>
    </div>
  );
}
