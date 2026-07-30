import type { ReactNode } from 'react';

/* Small pill for a tech/stack token. 'role' variant is gold-outlined for the
   lead label. */
interface CoreTagProps {
  children: ReactNode;
  role?: boolean;
}

export function CoreTag({ children, role = false }: CoreTagProps) {
  return (
    <span
      className={`inline-block rounded-full border px-[7px] py-[3px] font-mono text-[8px] uppercase tracking-[0.08em] ${
        role
          ? 'border-[rgba(201,169,97,0.45)] text-candleflame'
          : 'border-[rgba(139,133,122,0.35)] text-stone-400'
      }`}
    >
      { children }
    </span>
  );
}
