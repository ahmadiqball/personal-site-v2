import type { ReactNode } from 'react';

/* One metric in a hairline grid: mono key, Cinzel value, mono sub. */
interface CoreStatCellProps {
  gold?: boolean;
  label: string;
  sub?: string;
  value: ReactNode;
}

export function CoreStatCell({ gold = false, label, sub, value }: CoreStatCellProps) {
  return (
    <div className="bg-ink-night px-4 pb-3.5 pt-4">
      <div className="mb-2 font-mono text-[9px] tracking-[0.18em] text-stone-600">
        —
        { label }
      </div>

      <div className={`font-cinzel text-[26px] font-medium ${gold ? 'text-candleflame' : 'text-vellum'}`}>
        { value }
      </div>

      { sub && <div className="mt-[5px] font-mono text-[9px] text-stone-400">{ sub }</div> }
    </div>
  );
}
