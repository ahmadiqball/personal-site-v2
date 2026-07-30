import type { ReactNode } from 'react';

/* Gold-outlined panel with four corner rivets — the 'dossier' surface. */
interface CoreRivetedPlateProps {
  children: ReactNode;
  eyebrow?: string;
}

const rivet = 'absolute h-[5px] w-[5px] rounded-full bg-candleflame shadow-[inset_0_0_0_1px_rgba(0,0,0,0.4)]';

export function CoreRivetedPlate({ children, eyebrow }: CoreRivetedPlateProps) {
  return (
    <div className="relative border border-candleflame bg-gold-wash px-6 py-[22px]">
      <span className={`${rivet} left-[5px] top-[5px]`} />

      <span className={`${rivet} right-[5px] top-[5px]`} />

      <span className={`${rivet} bottom-[5px] left-[5px]`} />

      <span className={`${rivet} bottom-[5px] right-[5px]`} />

      { eyebrow && (
        <div className="mb-3.5 font-mono text-[9px] tracking-[0.22em] text-candleflame">
          —
          { eyebrow }
        </div>
      ) }

      { children }
    </div>
  );
}
