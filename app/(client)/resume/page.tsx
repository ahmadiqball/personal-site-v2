import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { CoreArchCard } from '@/components/core/core-arch-card';
import { HomeFooter } from '@/components/home/home-footer';
import { LayoutBreadcrumb } from '@/components/layout/layout-breadcrumb';
import { LayoutContainer } from '@/components/layout/layout-container';
import { ResumePrintButton } from '@/components/resume/resume-print-button';
import { ResumeToc } from '@/components/resume/resume-toc';
import { getProjectsData, getResumeData } from '@/sanity/get-data';
import { getFormattedDates } from '@/utils/date-formatter';

export const metadata: Metadata = {
  description: 'Curriculum vitæ — frontend engineer, Bandung.',
  title: 'CV · Ahmad Iqbal',
};

function SectionHeader({ counter, num, sub, title }: { counter?: string; num: string; sub: string; title: string }) {
  return (
    <header className="mb-6 flex items-end justify-between gap-4 border-b border-line-08 pb-4">
      <div>
        <div className="mb-2 flex items-center gap-2.5">
          <span className="font-medieval text-[13px] text-candleflame">⌬ Station IV{ num }</span>
          <span className="font-caveat text-[15px] text-stone-400">— { sub }</span>
        </div>
        <h2 className="font-cinzel text-[26px] font-medium uppercase tracking-[0.02em] text-vellum">{ title }</h2>
      </div>
      { counter && <span className="hidden shrink-0 font-mono text-[9px] tracking-[0.15em] text-stone-600 sm:block">{ counter }</span> }
    </header>
  );
}

function Tag({ children, gold = false }: { children: ReactNode; gold?: boolean }) {
  return (
    <span className={`inline-block border px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] ${gold ? 'border-gold-line text-candleflame' : 'border-line-10 text-stone-400'}`}>
      { children }
    </span>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-5 font-sans text-[14px] leading-[1.5] text-stone-200 before:absolute before:left-0 before:top-1.5 before:text-[8px] before:text-candleflame before:content-['▲']">
      { children }
    </li>
  );
}

function CvEntry({ bullets, company, meta, place, role, tags }: {
  bullets: ReactNode;
  company?: string;
  meta?: string;
  place?: string;
  role: string;
  tags?: string[];
}) {
  return (
    <li className="border-t border-line-10 py-6 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="font-sans">
          <span className="font-cinzel text-[17px] font-medium uppercase tracking-[0.02em] text-vellum">{ role }</span>
          { company && <span className="text-stone-400"> · { company }</span> }
        </div>
        <div className="shrink-0 font-mono text-[10px] tracking-[0.08em] text-stone-600 sm:text-right">
          { meta && <div className="text-candleflame">{ meta }</div> }
          { place && <div className="text-stone-400">{ place }</div> }
        </div>
      </div>

      <ul className="mt-3 flex flex-col gap-2">{ bullets }</ul>

      { tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          { tags.map((t, i) => <Tag gold={i < 3} key={t}>{ t }</Tag>) }
        </div>
      ) }
    </li>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-ink-night px-4 py-3">
      <div className="mb-1 font-mono text-[9px] tracking-[0.18em] text-stone-600">— { k.toUpperCase() }</div>
      <div className="font-sans text-[13px] text-stone-200">{ v }</div>
    </div>
  );
}

export default async function Resume(): Promise<JSX.Element> {
  const [resume, projects] = await Promise.all([getResumeData(), getProjectsData()]);

  // Most-recent-first; an open-ended role (no endDate) counts as present.
  const works: any[] = [...(resume?.works ?? [])].sort(
    (a, b) => new Date(b?.endDate ?? Date.now()).getTime() - new Date(a?.endDate ?? Date.now()).getTime(),
  );
  const educations: any[] = resume?.educations ?? [];
  const stackGroups: any[] = resume?.stacks ?? [];
  const selected = [...(projects ?? [])]
    .sort((a, b) => new Date(b?.endDate ?? b?.startDate ?? 0).getTime() - new Date(a?.endDate ?? a?.startDate ?? 0).getTime())
    .slice(0, 4);

  const focus = stackGroups[0]?.stack?.map((s: any) => s?.name).filter(Boolean).slice(0, 4).join(' · ');
  const current = works[0] ? `${works[0].position}${works[0].company ? ` at ${works[0].company}` : ''}` : undefined;

  const toc = [
    { id: 'summary', label: 'summary', num: '—' },
    works.length > 0 && { id: 'experience', label: 'experience', num: 'i.' },
    educations.length > 0 && { id: 'education', label: 'education', num: 'ii.' },
    stackGroups.length > 0 && { id: 'stack', label: 'tech stack', num: 'iii.' },
    selected.length > 0 && { id: 'works', label: 'selected works', num: 'iv.' },
  ].filter(Boolean) as { id: string; label: string; num: string }[];

  return (
    <>
      <LayoutBreadcrumb items={[{ href: '/', label: 'index' }, { label: 'cv' }]} />

      {/* header */}
      <LayoutContainer className="py-10">
        <div className="mb-3 flex items-center gap-2.5">
          <span className="font-medieval text-sm text-candleflame">⌬ Station IV</span>
          <span className="font-caveat text-base text-stone-400">— field log.</span>
        </div>

        <h1 className="font-cinzel text-h1 font-semibold uppercase leading-[0.98] text-vellum">
          Curriculum Vit&aelig;
          <span className="text-candleflame">.</span>
        </h1>

        { resume?.position && (
          <p className="mt-5 max-w-[60ch] font-sans text-lede text-stone-200">{ resume.position }</p>
        ) }

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line-08 pt-4 font-mono text-[10px] tracking-[0.05em] text-stone-600">
          <span>— { resume?.fullname ?? 'Ahmad Iqbal Yahya' }</span>
          <span className="text-stone-600">·</span>
          <span>ENGLISH</span>
          <span className="text-stone-600">·</span>
          <ResumePrintButton />
        </div>
      </LayoutContainer>

      {/* layout */}
      <LayoutContainer className="grid gap-10 py-8 min-[981px]:grid-cols-[4fr_8fr] min-[981px]:gap-12">
        <ResumeToc items={toc} />

        <div className="cv-print flex min-w-0 flex-col gap-14">
          {/* summary */}
          <section className="scroll-mt-24" id="summary">
            <SectionHeader counter="— READ THIS FIRST" num="" sub="in brief" title="Summary" />
            <p className="font-sans text-[16px] leading-[1.7] text-stone-200">
              { resume?.summary ?? 'Frontend engineer shipping production web apps for real users — turning ambiguous briefs into interfaces that ship and hold up under load.' }
            </p>
            <div className="mt-6 grid gap-px bg-[rgba(237,234,227,0.08)] sm:grid-cols-2">
              { focus && <Fact k="Focus" v={focus} /> }
              { current && <Fact k="Currently" v={current} /> }
              { resume?.position && <Fact k="Role" v={resume.position} /> }
              { works.length > 0 && <Fact k="Since" v={Math.min(...works.map((w) => new Date(w?.startDate ?? Date.now()).getFullYear())).toString()} /> }
            </div>
          </section>

          {/* experience */}
          { works.length > 0 && (
            <section className="scroll-mt-24" id="experience">
              <SectionHeader counter={`[ ${works.length} ROLES ]`} num=".i" sub="stations on the climb" title="Experience" />
              <ul>
                { works.map((w, i) => (
                  <CvEntry
                    bullets={(w.description ?? []).map((b: string, j: number) => <Bullet key={j}>{ b }</Bullet>)}
                    company={w.company}
                    key={i}
                    meta={getFormattedDates(w.startDate, w.endDate)}
                    place={[w.location, w.type].filter(Boolean).join(' · ').toUpperCase()}
                    role={w.position}
                    tags={(w.stacks ?? []).map((s: any) => s?.name).filter(Boolean)}
                  />
                )) }
              </ul>
            </section>
          ) }

          {/* education */}
          { educations.length > 0 && (
            <section className="scroll-mt-24" id="education">
              <SectionHeader counter={`[ ${educations.length} ]`} num=".ii" sub="the long apprenticeship" title="Education" />
              <ul>
                { educations.map((e, i) => (
                  <CvEntry
                    bullets={<Bullet>{ e.description?.[0]?.children?.map((c: any) => c?.text).join('') || e.major || '' }</Bullet>}
                    company={e.school}
                    key={i}
                    meta={getFormattedDates(e.startDate, e.endDate)}
                    place={e.location?.toUpperCase()}
                    role={[e.title, e.major].filter(Boolean).join(', ')}
                  />
                )) }
              </ul>
            </section>
          ) }

          {/* tech stack */}
          { stackGroups.length > 0 && (
            <section className="scroll-mt-24" id="stack">
              <SectionHeader counter="— PROFICIENT · DAILY · CARED-FOR" num=".iii" sub="the tools at hand" title="Tech stack" />
              <div className="grid gap-6 sm:grid-cols-2">
                { stackGroups.map((group, i) => (
                  <div key={i}>
                    <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.05em] text-vellum">{ group.category }</div>
                    <div className="flex flex-wrap gap-1.5">
                      { (group.stack ?? []).map((s: any, j: number) => <Tag gold={j < 4} key={j}>{ s?.name }</Tag>) }
                    </div>
                  </div>
                )) }
              </div>
            </section>
          ) }

          {/* selected works */}
          { selected.length > 0 && (
            <section className="scroll-mt-24" id="works">
              <SectionHeader counter="— A FEW HIGHLIGHTS" num=".iv" sub="peaks worth the climb" title="Selected works" />
              <div className="grid gap-4 sm:grid-cols-2">
                { selected.map((p, i) => (
                  <CoreArchCard
                    cta="read the notes →"
                    desc={p.tagline}
                    href={p?.slug?.current ? `/portfolio/${p.slug.current}` : '/portfolio'}
                    img={p?.images?.[0]?.asset?.url}
                    index={String(i + 1).padStart(2, '0')}
                    key={p._id}
                    title={p.projectName}
                    year={p?.endDate ? new Date(p.endDate).getFullYear() : ''}
                  />
                )) }
              </div>
            </section>
          ) }
        </div>
      </LayoutContainer>

      <HomeFooter />
    </>
  );
}
