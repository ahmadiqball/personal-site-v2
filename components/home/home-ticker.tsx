import { LayoutContainer } from '@/components/layout/layout-container';

/* Full-bleed tech ticker bar between the hero and the work section. */
const FALLBACK_STACK = ['React', 'Vue', 'Nuxt', 'TypeScript', 'Next', 'Svelte', 'Go'];

export function HomeTicker({ stacks }: { stacks?: Array<string> }) {
  const items = stacks?.length ? stacks : FALLBACK_STACK;
  const line = `· ${items.map((s) => s.toUpperCase()).join(' · ')} ·`;

  return (
    <div className="border-b border-line-08 bg-ink-night" role="presentation">
      <LayoutContainer className="flex items-center justify-between gap-6 py-3">
        <span className="truncate font-mono text-[10px] tracking-[0.2em] text-stone-400">{ line }</span>

        <svg aria-hidden="true" className="hidden h-4 w-60 shrink-0 sm:block" viewBox="0 0 240 16">
          <path d="M 0 8 Q 30 2 60 8 T 120 8 T 180 8 T 240 8" fill="none" opacity="0.6" stroke="#C9A961" strokeWidth="0.5" />
          <path d="M 0 12 Q 30 6 60 12 T 120 12 T 180 12 T 240 12" fill="none" opacity="0.4" stroke="#C9A961" strokeWidth="0.5" />
          <circle cx="40" cy="6" fill="#C9A961" r="1.5" />
        </svg>

        <span className="hidden shrink-0 font-mono text-[9px] tracking-[0.1em] text-stone-600 sm:inline">⌃ descend</span>
      </LayoutContainer>
    </div>
  );
}
