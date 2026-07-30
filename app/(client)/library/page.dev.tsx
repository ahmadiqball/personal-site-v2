import { CoreArchCard } from '@/components/core/core-arch-card';
import { CoreButton } from '@/components/core/core-button';
import { CoreRivetedPlate } from '@/components/core/core-riveted-plate';
import { CoreSectionEyebrow } from '@/components/core/core-section-eyebrow';
import { CoreStatCell } from '@/components/core/core-stat-cell';
import { CoreTag } from '@/components/core/core-tag';
import { Container } from '@/components/layout/container';

// Dev-only component library. Lives at /library under `next dev` and is excluded
// from the production build via `pageExtensions` in next.config.js. Renders every
// core primitive with its variants plus token swatches, so the Tailwind transform
// of the Astrolabe design system can be verified at a glance.

export const metadata = {
  title: 'Component Library · dev',
};

const inks = [
  { name: 'ink-night', hex: '#08070C', cls: 'bg-ink-night' },
  { name: 'ink-deep', hex: '#14121A', cls: 'bg-ink-deep' },
  { name: 'ink-soft', hex: '#2A2530', cls: 'bg-ink-soft' },
];

const stones = [
  { name: 'stone-600', hex: '#6B6760', cls: 'bg-stone-600' },
  { name: 'stone-400', hex: '#8B857A', cls: 'bg-stone-400' },
  { name: 'stone-200', hex: '#B8B2A6', cls: 'bg-stone-200' },
  { name: 'vellum', hex: '#EDEAE3', cls: 'bg-vellum' },
];

const accents = [
  { name: 'candleflame', hex: '#C9A961', cls: 'bg-candleflame' },
  { name: 'nila', hex: '#5B4FE5', cls: 'bg-nila' },
  { name: 'ember', hex: '#8A3A24', cls: 'bg-ember' },
];

function Swatch({ cls, hex, name }: { cls: string; hex: string; name: string }) {
  return (
    <div>
      <div className={ `h-16 w-full rounded-[2px] border border-line-10 ${cls}` } />

      <div className="mt-2 font-mono text-[10px] tracking-[0.12em] text-stone-200">{ name }</div>

      <div className="font-mono text-[9px] text-stone-600">{ hex }</div>
    </div>
  );
}

function Section({ children, note, station, title }: { children: React.ReactNode; note?: string; station: string; title: string }) {
  return (
    <section className="border-t border-line-08 py-14">
      <div className="mb-8">
        <CoreSectionEyebrow note={ note } station={ station } title={ title } />
      </div>

      { children }
    </section>
  );
}

export default function ComponentLibrary() {
  return (
    <Container className="py-16">
      <header className="mb-6">
        <div className="font-mono text-[10px] tracking-[0.22em] text-candleflame">— ASTROLABE · DEV ONLY</div>

        <h1 className="mt-3 font-cinzel text-h1 font-semibold uppercase text-vellum">Component Library</h1>

        <p className="mt-4 max-w-xl font-sans text-body text-stone-200">
          Core primitives and design tokens for the Astrolabe redesign. This page is served only under
          <span className="font-mono text-candleflame"> next dev </span>
          and is excluded from the production build.
        </p>
      </header>

      {/* ---- Colors ---- */}
      <Section note="the pigments" station="Station I" title="Colour">
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            { inks.map((s) => <Swatch key={ s.name } { ...s } />) }
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            { stones.map((s) => <Swatch key={ s.name } { ...s } />) }
          </div>

          <div className="grid grid-cols-3 gap-4">
            { accents.map((s) => <Swatch key={ s.name } { ...s } />) }
          </div>
        </div>
      </Section>

      {/* ---- Typography ---- */}
      <Section note="the hand" station="Station II" title="Typography">
        <div className="space-y-6">
          <div className="font-cinzel text-hero font-semibold uppercase text-vellum">Builder of small worlds</div>

          <div className="font-cinzel text-h2 font-medium uppercase text-vellum">The Archive · Cinzel H2</div>

          <p className="max-w-2xl font-cardo text-lede italic text-stone-200">
            Cardo italic lede — I build interfaces the way some people summit mountains.
          </p>

          <p className="max-w-2xl font-sans text-body text-stone-200">
            Hanken Grotesk body — the workhorse for UI and long-form copy, set at 15px with generous leading.
          </p>

          <div className="flex flex-wrap items-baseline gap-6">
            <span className="font-mono text-label uppercase text-candleflame">— MONO LABEL</span>

            <span className="font-caveat text-[20px] text-stone-400">— the summit log</span>

            <span className="font-medieval text-[20px] text-candleflame">⌬ Station</span>
          </div>
        </div>
      </Section>

      {/* ---- Motion ---- */}
      <Section note="slow orbits" station="Station III" title="Motion">
        <div className="flex items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-candleflame animate-breathe" />

            <span className="font-mono text-[9px] tracking-[0.12em] text-stone-600">breathe</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-vellum animate-twinkle" />

            <span className="font-mono text-[9px] tracking-[0.12em] text-stone-600">twinkle</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="block h-6 w-6 rounded-full border border-gold-line border-t-candleflame animate-spin" />

            <span className="font-mono text-[9px] tracking-[0.12em] text-stone-600">spin</span>
          </div>
        </div>
      </Section>

      {/* ---- Button ---- */}
      <Section note="link actions" station="Station IV" title="Button">
        <div className="space-y-10">
          {/* Link variants (base system — borderless) */}
          <div>
            <div className="mb-4 font-mono text-[9px] tracking-[0.18em] text-stone-600">— LINK · primary / ghost</div>

            <div className="flex flex-wrap items-center gap-8">
              <CoreButton href="#">selected work</CoreButton>

              <CoreButton href="#" variant="ghost">github</CoreButton>

              <CoreButton arrow={ false } href="#">no arrow</CoreButton>
            </div>
          </div>

          {/* Outline · square, across sizes */}
          <div>
            <div className="mb-4 font-mono text-[9px] tracking-[0.18em] text-stone-600">— OUTLINE · square · sm / md / lg</div>

            <div className="flex flex-wrap items-center gap-5">
              <CoreButton href="#" shape="square" size="sm" variant="outline">read more</CoreButton>

              <CoreButton href="#" shape="square" size="md" variant="outline">read more</CoreButton>

              <CoreButton href="#" shape="square" size="lg" variant="outline">read more</CoreButton>
            </div>
          </div>

          {/* Outline · rounded, across sizes */}
          <div>
            <div className="mb-4 font-mono text-[9px] tracking-[0.18em] text-stone-600">— OUTLINE · rounded · sm / md / lg</div>

            <div className="flex flex-wrap items-center gap-5">
              <CoreButton arrow={ false } href="#" shape="rounded" size="sm" variant="outline">contact</CoreButton>

              <CoreButton arrow={ false } href="#" shape="rounded" size="md" variant="outline">contact</CoreButton>

              <CoreButton arrow={ false } href="#" shape="rounded" size="lg" variant="outline">contact</CoreButton>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Tag ---- */}
      <Section note="stack tokens" station="Station V" title="Tag">
        <div className="flex flex-wrap items-center gap-2">
          <CoreTag role>Lead</CoreTag>

          { ['TypeScript', 'Vue', 'Nuxt', 'React', 'Next', 'Go'].map((t) => <CoreTag key={ t }>{ t }</CoreTag>) }
        </div>
      </Section>

      {/* ---- StatCell ---- */}
      <Section note="the ledger" station="Station VI" title="Stat Cell">
        <div className="grid max-w-2xl grid-cols-2 gap-px bg-[rgba(237,234,227,0.10)] sm:grid-cols-4">
          <CoreStatCell label="Shipped" value="12" />

          <CoreStatCell label="Reached" value="94k+" />

          <CoreStatCell gold label="Years" value="5" sub="and counting" />

          <CoreStatCell label="Open to" value="Q3" sub="2026" />
        </div>
      </Section>

      {/* ---- RivetedPlate ---- */}
      <Section note="the dossier" station="Station VII" title="Riveted Plate">
        <div className="max-w-sm">
          <CoreRivetedPlate eyebrow="DOSSIER">
            <dl className="space-y-2 font-mono text-[11px] text-stone-200">
              <div className="flex justify-between"><dt className="text-stone-600">year</dt><dd>2026</dd></div>

              <div className="flex justify-between"><dt className="text-stone-600">role</dt><dd>lead engineer</dd></div>

              <div className="flex justify-between"><dt className="text-stone-600">stack</dt><dd>nuxt · ts</dd></div>

              <div className="flex justify-between"><dt className="text-stone-600">status</dt><dd className="text-candleflame">shipped</dd></div>
            </dl>
          </CoreRivetedPlate>
        </div>
      </Section>

      {/* ---- ArchCard ---- */}
      <Section note="the archive" station="Station VIII" title="Arch Card">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CoreArchCard
            desc="Gradient fallback — no image provided."
            index="01"
            title="Courtsee"
            year="2026"
          />

          <CoreArchCard
            desc="With a real image dropped in."
            img="/assets/astrolabe/portrait-plate.png"
            index="02"
            title="Atelier"
            year="2025"
          />

          <CoreArchCard
            desc="Broken src auto-hides, revealing the gradient."
            img="/assets/astrolabe/does-not-exist.png"
            index="03"
            title="Fallback"
            year="2024"
          />
        </div>
      </Section>
    </Container>
  );
}
