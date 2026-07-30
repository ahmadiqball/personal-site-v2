import type { Metadata } from 'next';

import { CoreStatCell } from '@/components/core/core-stat-cell';
import { HomeFooter } from '@/components/home/home-footer';
import { LayoutBreadcrumb } from '@/components/layout/layout-breadcrumb';
import { LayoutContainer } from '@/components/layout/layout-container';
import { WorkArchive } from '@/components/work/work-archive';
import { getProjectsData } from '@/sanity/get-data';

export const metadata: Metadata = {
  description: 'The full archive of interfaces I have built and shipped.',
  title: 'Work · Ahmad Iqbal',
};

function projectYear(p: any): number {
  const date = p?.endDate ?? p?.startDate;
  return date ? new Date(date).getFullYear() : 0;
}

export default async function Portfolio(): Promise<JSX.Element> {
  const projects: any[] = await getProjectsData();

  // Real stats from the data.
  const years = projects.map(projectYear).filter(Boolean);
  const since = years.length ? Math.min(...years) : 2021;
  const latest = years.length ? Math.max(...years) : new Date().getFullYear();

  // Most-used stacks across all projects.
  const counts = new Map<string, number>();
  for (const p of projects) {
    for (const s of p?.stacks ?? []) {
      if (s?.name) {
        counts.set(s.name, (counts.get(s.name) ?? 0) + 1);
      }
    }
  }
  const mostUsed = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);

  return (
    <>
      <LayoutBreadcrumb items={[{ href: '/', label: 'index' }, { label: 'work' }]} />

      {/* page head */}
      <LayoutContainer className="grid gap-8 py-12 min-[981px]:grid-cols-[1.4fr_1fr] min-[981px]:gap-12">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="font-medieval text-sm text-candleflame">⌬ Station II</span>
            <span className="font-caveat text-base text-stone-400">— the full summit log</span>
          </div>

          <h1 className="font-cinzel text-h1 font-semibold uppercase leading-[0.98] text-vellum">
            The Archive
            <span className="text-candleflame">.</span>
          </h1>

          <p className="mt-5 max-w-[52ch] font-sans text-lede text-stone-200">
            Selected expeditions, <em className="not-italic text-candleflame">{ since } — { latest }</em>. Each plate is an
            interface I built and shipped — sorted here by year and stack. Open any peak to read its field notes,
            the gear list, and the route I took to get up it.
          </p>
        </div>

        <div className="min-[981px]:pt-2">
          <div className="grid grid-cols-1 gap-px bg-[rgba(237,234,227,0.10)] sm:grid-cols-3">
            <CoreStatCell gold label="Shipped" sub="projects" value={ projects.length } />
            <CoreStatCell label="Stacks" sub="distinct" value={ counts.size } />
            <CoreStatCell label="Since" sub={ `${since} — ${latest}` } value={ since } />
          </div>

          { mostUsed.length > 0 && (
            <div className="mt-5">
              <div className="mb-2 font-mono text-[9px] tracking-[0.18em] text-stone-600">— MOST USED · PROJECTS EACH</div>
              { mostUsed.map(([name, n]) => (
                <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-line-08 py-1.5" key={name}>
                  <span className="font-sans text-[13px] text-stone-200">{ name }</span>
                  <span className="font-mono text-[11px] text-candleflame">{ n }</span>
                </div>
              )) }
            </div>
          ) }
        </div>
      </LayoutContainer>

      <WorkArchive projects={projects} />

      <HomeFooter />
    </>
  );
}
