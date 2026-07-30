import { LayoutContainer } from '@/components/layout/layout-container';

import { HomeCelestialInstrument } from './home-celestial-instrument';

/* Homepage hero: Cinzel headline, bio, status pill, stack line and a mono link
   row on the left; the celestial instrument on the right. CMS-backed via the
   `profile` document, with faithful fallbacks so it renders before the new
   Sanity fields are populated. */

// Faint topographic contour texture behind the copy column (~5%).
const TOPO = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 500 800\' preserveAspectRatio=\'xMidYMid slice\'><g stroke=\'%23C9A961\' stroke-width=\'0.5\' fill=\'none\'><path d=\'M -50 200 Q 150 170 350 195 T 600 200\'/><path d=\'M -50 240 Q 170 215 360 235 T 600 245\'/><path d=\'M -50 290 Q 180 265 380 280 T 600 285\'/><path d=\'M -50 350 Q 200 320 400 340 T 600 350\'/><path d=\'M -50 420 Q 220 395 420 410 T 600 420\'/><path d=\'M -50 500 Q 240 475 440 495 T 600 510\'/><path d=\'M -50 590 Q 260 560 460 580 T 600 600\'/></g></svg>")';

const FALLBACK_STACK = ['Vue', 'Nuxt', 'React', 'Next', 'Svelte', 'TypeScript', 'Go'];

export function HomeBanner({ profile }: { profile?: any }): JSX.Element {
  const headline = profile?.headline ?? 'Builder of small worlds';
  const bio = profile?.description
    ?? 'Frontend engineer from Bandung. I build interfaces the way some people summit mountains — slowly, with care for the parts no one will see.';
  const status = profile?.status ?? 'open to work · q3 2026';
  const stackNames: Array<string> = profile?.stacks?.length
    ? profile.stacks.map((s: any) => s?.name).filter(Boolean)
    : FALLBACK_STACK;

  const github = profile?.socials?.github ?? 'https://github.com/ahmadiqball';
  const linkedin = profile?.socials?.linkedin ?? 'https://www.linkedin.com/in/ahmadiqball';
  const email = profile?.socials?.email ?? 'mailto:ahmadiqbalshinichi@gmail.com';
  const portraitUrl = profile?.portrait?.asset?.url ?? '/assets/astrolabe/portrait-plate.png';

  return (
    <section aria-label="Introduction" className="relative border-b border-line-08">
      {/* topographic texture behind the copy column */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[56%] opacity-[0.05] min-[981px]:block"
        style={{ backgroundImage: TOPO, backgroundSize: 'cover' }}
      />

      <LayoutContainer className="grid items-center gap-6 py-10 min-[981px]:min-h-[640px] min-[981px]:grid-cols-[1.06fr_0.94fr]">
        {/* ---- copy column ---- */}
        <div className="relative z-[3] max-w-[600px]">
          <div className="flex animate-reveal items-center gap-2.5 opacity-0 [animation-delay:100ms]">
            <span className="font-medieval text-sm tracking-[0.05em] text-candleflame">⌬ Station I</span>
            <span className="font-caveat text-[17px] text-stone-400">— the index</span>
          </div>

          <h1 className="mt-6 animate-reveal-up font-cinzel text-[clamp(44px,6vw,74px)] font-semibold uppercase leading-[0.98] tracking-[0.015em] text-vellum opacity-0 translate-y-3 [animation-delay:250ms]">
            { headline }
            <span className="text-candleflame">.</span>
          </h1>

          <p className="mt-6 max-w-[44ch] animate-reveal font-sans text-lede text-stone-200 opacity-0 [animation-delay:600ms]">
            { bio }
          </p>

          <div className="mt-7 flex animate-reveal flex-wrap items-center gap-x-5 gap-y-3.5 opacity-0 [animation-delay:800ms]">
            <span className="inline-flex items-center gap-[7px] font-mono text-[11px] tracking-[0.05em] text-stone-400">
              <span className="h-[5px] w-[5px] animate-breathe rounded-full bg-candleflame shadow-[0_0_8px_#C9A961]" />
              { status }
            </span>
            <span className="font-mono text-[10px] tracking-[0.14em] text-stone-600">
              { stackNames.join(' · ') }
            </span>
          </div>

          <div className="mt-[22px] flex animate-reveal flex-wrap gap-x-[18px] gap-y-2.5 font-mono text-[11px] tracking-[0.06em] opacity-0 [animation-delay:950ms]">
            <a className="text-candleflame no-underline transition-colors duration-fast ease-ease hover:text-vellum" href="/portfolio">selected work →</a>
            <a className="text-stone-600 no-underline transition-colors duration-fast ease-ease hover:text-vellum" href={github} rel="noreferrer" target="_blank">github ↗</a>
            <a className="text-stone-600 no-underline transition-colors duration-fast ease-ease hover:text-vellum" href={linkedin} rel="noreferrer" target="_blank">linkedin ↗</a>
            <a className="text-stone-600 no-underline transition-colors duration-fast ease-ease hover:text-vellum" href={email}>email ↗</a>
          </div>
        </div>

        {/* ---- celestial instrument ---- */}
        <HomeCelestialInstrument portraitUrl={portraitUrl} />
      </LayoutContainer>
    </section>
  );
}
