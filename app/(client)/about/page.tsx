import type { Metadata } from 'next';

import { HomeCelestialInstrument } from '@/components/home/home-celestial-instrument';
import { HomeFooter } from '@/components/home/home-footer';
import { LayoutBreadcrumb } from '@/components/layout/layout-breadcrumb';
import { LayoutContainer } from '@/components/layout/layout-container';
import { getProfileData, getResumeData } from '@/sanity/get-data';

export const metadata: Metadata = {
  description: 'The person behind the work — a frontend engineer in Bandung.',
  title: 'About · Ahmad Iqbal',
};

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

// Editable framing copy (the design's voice; not derived from the CMS).
const PRINCIPLES = [
  { title: 'Slow is smooth', body: 'I would rather ship one honest state than five half-built ones. Careful now is fast later — the corners you cut always come back to find you.' },
  { title: 'Test on real people', body: 'A design is a hypothesis until someone who is not you tries to use it. I put work in front of the people it is for, early, and listen more than I explain.' },
  { title: 'Mind the unseen parts', body: 'Loading, empty, and error states are where interfaces tell the truth. I spend the careful hours there — on the parts nobody screenshots.' },
  { title: 'Interfaces are contracts', body: 'A button that lies erodes trust for good. I treat every affordance as a promise to the person on the other end, and try hard to keep it.' },
];

function yearRange(start?: string, end?: string): string {
  const s = start ? new Date(start).getFullYear() : undefined;
  const e = end ? new Date(end).getFullYear() : undefined;
  if (!end && s) {
    return `${s} → NOW`;
  }
  if (s && e && s !== e) {
    return `${s} — ${e}`;
  }
  return String(e ?? s ?? '');
}

export default async function About(): Promise<JSX.Element> {
  const [profile, resume] = await Promise.all([getProfileData(), getResumeData()]);

  const location = profile?.location ?? 'Bandung, ID';
  const email = profile?.socials?.email ?? 'mailto:ahmadiqbalshinichi@gmail.com';
  const github = profile?.socials?.github;
  const linkedin = profile?.socials?.linkedin;
  const bio = profile?.description
    ?? 'I trained as an aerospace engineer, moved into software mid-degree, and have been shipping for real users ever since — most recently for a Dutch consultancy, from home in Bandung.';

  const works = [...(resume?.works ?? [])].sort(
    (a, b) => new Date(b?.endDate ?? Date.now()).getTime() - new Date(a?.endDate ?? Date.now()).getTime(),
  );
  const current = works[0];

  // Timeline from real education + work history, oldest first.
  const journey = [
    ...(resume?.educations ?? []).map((e: any) => ({
      start: e?.startDate,
      end: e?.endDate,
      name: e?.school ?? e?.title,
      desc: [e?.title, e?.major].filter(Boolean).join(' — '),
    })),
    ...(resume?.works ?? []).map((w: any) => ({
      start: w?.startDate,
      end: w?.endDate,
      name: w?.company ?? w?.position,
      desc: w?.position,
    })),
  ]
    .filter((item) => item.start)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  return (
    <>
      <LayoutBreadcrumb items={[{ href: '/', label: 'index' }, { label: 'about' }]} />

      {/* hero */}
      <section aria-label="The portrait" className="border-b border-line-08">
        <LayoutContainer className="grid items-center gap-8 py-10 min-[981px]:grid-cols-[5fr_7fr] min-[981px]:gap-12">
          <div className="order-2 min-[981px]:order-1">
            <HomeCelestialInstrument portraitUrl={profile?.portrait?.asset?.url} />
          </div>

          <div className="order-1 min-[981px]:order-2">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="font-medieval text-sm text-candleflame">⌬ About</span>
                <span className="font-caveat text-base text-stone-400">— the person behind the work</span>
              </div>
              <div className="text-right font-mono text-[10px] tracking-[0.2em] text-stone-600">
                { location.toUpperCase() }
                <br />
                <span className="text-candleflame">FRONTEND ENGINEER</span>
              </div>
            </div>

            <h1 className="mt-4 font-cinzel text-[clamp(32px,4.4vw,52px)] font-semibold uppercase leading-[1.02] text-vellum">
              Careful software,
              <br />
              from a quiet city
              <span className="text-candleflame">.</span>
            </h1>

            <div className="mt-6 max-w-[52ch] space-y-3.5 font-sans text-[16px] leading-[1.7] text-stone-200">
              <p>{ bio }</p>
              <p>The work I am proudest of is quiet: a button that tells the truth, a loading state that reassures, a form someone fills in without thinking about it. I treat an interface like a wing — a contract between the geometry and the person on the other end.</p>
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* journey */}
      { journey.length > 0 && (
        <section aria-labelledby="journey-heading" className="border-b border-line-08">
          <LayoutContainer className="py-14">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="font-medieval text-[13px] text-candleflame">⌬ Station VII.i</span>
                  <span className="font-caveat text-[15px] text-stone-400">— stations of the journey</span>
                </div>
                <h2 className="font-cinzel text-h2 font-medium uppercase leading-[1.1] text-vellum" id="journey-heading">The path so far</h2>
              </div>
              <span className="hidden shrink-0 font-mono text-[9px] tracking-[0.15em] text-stone-600 sm:block">[ { journey.length } STATIONS ]</span>
            </div>

            <ul>
              { journey.map((item, i) => (
                <li className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-t border-line-10 py-5 sm:grid-cols-[110px_36px_1fr]" key={i}>
                  <span className="order-1 font-mono text-[11px] tracking-[0.05em] text-candleflame sm:order-none">{ yearRange(item.start, item.end) }</span>
                  <span className="order-3 hidden font-cinzel text-lg text-stone-600 sm:order-none sm:block">{ ROMAN[i] ?? i + 1 }</span>
                  <div className="order-4 col-span-2 sm:order-none sm:col-span-1">
                    <div className="font-cinzel text-[18px] font-medium uppercase tracking-[0.02em] text-vellum">{ item.name }</div>
                    { item.desc && <div className="mt-0.5 font-sans text-[14px] italic text-stone-400">{ item.desc }</div> }
                  </div>
                </li>
              )) }
            </ul>
          </LayoutContainer>
        </section>
      ) }

      {/* currently */}
      <section className="border-b border-line-08">
        <LayoutContainer className="py-14">
          <div className="mb-8 flex items-center gap-2.5">
            <span className="font-medieval text-[13px] text-candleflame">⌬ Station VII.ii</span>
            <span className="font-caveat text-[15px] text-stone-400">— where things stand</span>
          </div>
          <div className="grid gap-px bg-[rgba(237,234,227,0.1)] sm:grid-cols-3">
            <NowPlate k="Currently" v={current ? `${current.position}${current.company ? ` · ${current.company}` : ''}` : 'Frontend Engineer'} />
            <NowPlate k="Based in" v={location} />
            <NowPlate k="Open to" v={profile?.status ?? 'new work · Q3 2026'} />
          </div>
        </LayoutContainer>
      </section>

      {/* how I work */}
      <section className="border-b border-line-08">
        <LayoutContainer className="py-14">
          <div className="mb-8 flex items-center gap-2.5">
            <span className="font-medieval text-[13px] text-candleflame">⌬ Station VII.iii</span>
            <span className="font-caveat text-[15px] text-stone-400">— the working creed</span>
          </div>
          <div className="grid gap-px border-[0.5px] border-line-10 bg-[rgba(237,234,227,0.1)] min-[1100px]:grid-cols-2">
            { PRINCIPLES.map((p, i) => (
              <div className="flex flex-col gap-3 bg-ink-night p-8" key={p.title}>
                <div className="font-mono text-[10px] tracking-[0.2em] text-candleflame">— { String(i + 1).padStart(2, '0') }</div>
                <h3 className="font-cinzel text-xl font-medium uppercase tracking-[0.03em] text-vellum">{ p.title }</h3>
                <p className="font-sans text-[15px] leading-[1.65] text-stone-200">{ p.body }</p>
              </div>
            )) }
          </div>
        </LayoutContainer>
      </section>

      {/* contact */}
      <section className="border-b border-line-08">
        <LayoutContainer className="py-20 text-center">
          <div className="font-caveat text-lg text-stone-400">— have something worth building?</div>
          <a className="mt-3 block font-cinzel text-[clamp(32px,5vw,56px)] font-semibold uppercase leading-none text-vellum transition-colors duration-med ease-ease hover:text-candleflame" href={email}>
            Send a letter <span className="text-candleflame">↗</span>
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.1em] text-stone-600">
            { github && <a className="transition-colors duration-fast ease-ease hover:text-vellum" href={github} rel="noreferrer" target="_blank">github ↗</a> }
            { linkedin && <a className="transition-colors duration-fast ease-ease hover:text-vellum" href={linkedin} rel="noreferrer" target="_blank">linkedin ↗</a> }
            <a className="text-candleflame transition-colors duration-fast ease-ease hover:text-vellum" href={email}>email ↗</a>
          </div>
        </LayoutContainer>
      </section>

      <HomeFooter />
    </>
  );
}

function NowPlate({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-ink-night px-6 py-7">
      <div className="mb-2 font-mono text-[9px] tracking-[0.2em] text-stone-600">— { k.toUpperCase() }</div>
      <div className="font-cinzel text-[19px] font-medium uppercase leading-tight tracking-[0.02em] text-vellum">{ v }</div>
    </div>
  );
}
