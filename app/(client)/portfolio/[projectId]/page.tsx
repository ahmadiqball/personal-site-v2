import type { PortableTextComponents } from '@portabletext/react';
import type { Metadata } from 'next';

import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

import { CoreRivetedPlate } from '@/components/core/core-riveted-plate';
import { HomeFooter } from '@/components/home/home-footer';
import { LayoutBreadcrumb } from '@/components/layout/layout-breadcrumb';
import { LayoutContainer } from '@/components/layout/layout-container';
import { WorkCarousel } from '@/components/work/work-carousel';
import { getSingleProjectData } from '@/sanity/get-data';

const essayComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-5 font-sans text-[15px] leading-[1.7] text-stone-200">{ children }</p>,
  },
  marks: {
    em: ({ children }) => <em className="italic text-candleflame">{ children }</em>,
    strong: ({ children }) => <strong className="font-bold text-vellum">{ children }</strong>,
    link: ({ children, value }) => (
      <a className="border-b border-current text-candleflame transition-colors duration-fast ease-ease hover:text-vellum" href={value?.href} rel="noreferrer" target="_blank">
        { children }
      </a>
    ),
  },
};

function yearLabel(project: any): string {
  const start = project?.startDate ? new Date(project.startDate).getFullYear() : undefined;
  const end = project?.endDate ? new Date(project.endDate).getFullYear() : undefined;
  if (start && end && start !== end) {
    return `${start}–${end}`;
  }
  return String(end ?? start ?? '');
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const project = await getSingleProjectData(params.projectId);
  return { title: project ? `${project.projectName} · Work` : 'Work' };
}

export default async function ProjectDetail({ params }: any): Promise<JSX.Element> {
  const project = await getSingleProjectData(params.projectId);

  if (!project) {
    notFound();
  }

  const year = yearLabel(project);
  const stackLabel = (project.stacks ?? []).map((s: any) => s?.name).filter(Boolean).join(' · ');
  const impact: { label: string; value: string }[] = project.impact ?? [];
  const impactSummary = impact.slice(0, 2).map((x) => `${x.value} ${x.label}`).join(' · ');
  const slides = (project.images ?? []).map((img: any) => ({ alt: project.projectName, url: img?.asset?.url })).filter((s: any) => s.url);

  return (
    <>
      <LayoutBreadcrumb items={[{ href: '/', label: 'index' }, { href: '/portfolio', label: 'work' }, { label: project.projectName }]} />

      {/* page head */}
      <LayoutContainer className="py-10">
        <div className="mb-3 flex items-center gap-2.5">
          <span className="font-medieval text-sm text-candleflame">⌬ Station II.i</span>
          <span className="font-caveat text-base text-stone-400">— { project.type?.toLowerCase() ?? 'project' }, { year }</span>
        </div>

        <h1 className="font-cinzel text-h1 font-semibold uppercase leading-[0.98] text-vellum">
          { project.projectName }
          <span className="text-candleflame">.</span>
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] text-stone-400">
          { year && <span><span className="text-stone-600">— YEAR</span> { year }</span> }
          { project.role && <><span className="text-stone-600">·</span><span><span className="text-stone-600">— ROLE</span> { project.role }</span></> }
          { stackLabel && <><span className="text-stone-600">·</span><span><span className="text-stone-600">— STACK</span> { stackLabel }</span></> }
          { impactSummary && <><span className="text-stone-600">·</span><span><span className="text-stone-600">— IMPACT</span> <span className="text-candleflame">{ impactSummary }</span></span></> }
        </div>
      </LayoutContainer>

      {/* header carousel */}
      { slides.length > 0 && (
        <LayoutContainer className="pb-4">
          <WorkCarousel slides={slides} title={project.projectName} />
        </LayoutContainer>
      ) }

      {/* body: sidebar + essay */}
      <LayoutContainer className="grid gap-10 py-12 min-[981px]:grid-cols-[4fr_8fr] min-[981px]:gap-12">
        <aside className="min-[981px]:sticky min-[981px]:top-20 min-[981px]:self-start">
          <div className="flex flex-col gap-[22px]">
            <CoreRivetedPlate eyebrow="DOSSIER">
              <dl className="space-y-2.5 text-[12px]">
                <Row k="Year" v={year} mono />
                { project.role && <Row k="Role" v={project.role} /> }
                { stackLabel && <Row k="Stack" v={stackLabel} /> }
                { project.webUrl && <Row k="Live" v={<a className="text-candleflame hover:text-vellum" href={project.webUrl} rel="noreferrer" target="_blank">{ new URL(project.webUrl).hostname } ↗</a>} /> }
                <Row k="Repo" v={project.repoUrl ? <a className="text-candleflame hover:text-vellum" href={project.repoUrl} rel="noreferrer" target="_blank">repository ↗</a> : <span className="text-stone-400">— private</span>} mono />
                <Row k="Status" v={<span className="text-candleflame">SHIPPED</span>} mono />
              </dl>
            </CoreRivetedPlate>

            { impact.length > 0 && (
              <div className="border-[0.5px] border-line-08 bg-ink-deep p-6">
                <div className="mb-4 font-mono text-[9px] tracking-[0.22em] text-candleflame">— IMPACT</div>
                <div className="grid grid-cols-2 gap-px border-[0.5px] border-line-08 bg-[rgba(237,234,227,0.08)]">
                  { impact.map((cell, i) => (
                    <div className="bg-ink-deep p-4" key={i}>
                      <div className="font-cinzel text-[26px] font-medium leading-none tracking-[0.02em] text-candleflame">{ cell.value }</div>
                      <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-stone-400">{ cell.label }</div>
                    </div>
                  )) }
                </div>
              </div>
            ) }

            { project.features?.length > 0 && (
              <div className="border-t border-line-10 pt-[18px]">
                <div className="mb-3 font-mono text-[9px] tracking-[0.22em] text-candleflame">— KEY FEATURES</div>
                <ul className="flex flex-col gap-2.5">
                  { project.features.map((feat: string, i: number) => (
                    <li className="flex gap-2 font-sans text-[14px] leading-[1.4] text-stone-200" key={i}>
                      <span className="mt-1 shrink-0 text-[8px] text-candleflame">▲</span>
                      { feat }
                    </li>
                  )) }
                </ul>
              </div>
            ) }
          </div>
        </aside>

        <div className="max-w-[64ch]">
          { project.description
            ? <PortableText components={essayComponents} value={project.description} />
            : <p className="font-sans text-[15px] italic leading-[1.7] text-stone-400">{ project.tagline }</p> }

          <div className="mt-10 flex items-center justify-between border-t border-line-08 pt-6">
            <a className="font-mono text-[11px] tracking-[0.1em] text-candleflame no-underline transition-colors duration-fast ease-ease hover:text-vellum" href="/portfolio">← the archive</a>
            <span className="font-medieval text-lg text-stone-600">⌬</span>
          </div>
        </div>
      </LayoutContainer>

      <HomeFooter />
    </>
  );
}

function Row({ k, mono = false, v }: { k: string; mono?: boolean; v: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="font-sans text-stone-600">{ k }</dt>
      <dd className={`text-right text-stone-200 ${mono ? 'font-mono' : 'font-sans'}`}>{ v }</dd>
    </div>
  );
}
