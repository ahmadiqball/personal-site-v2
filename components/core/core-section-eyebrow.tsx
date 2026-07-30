/* Station glyph + handwritten sub, above an optional Cinzel title. */
interface CoreSectionEyebrowProps {
  note?: string;
  station?: string;
  title?: string;
}

export function CoreSectionEyebrow({ note, station, title }: CoreSectionEyebrowProps) {
  return (
    <div>
      <div className={`flex items-center gap-2.5 ${title ? 'mb-3' : ''}`}>
        { station && (
          <span className="font-medieval text-sm text-candleflame">
            ⌬
            { station }
          </span>
        ) }

        { note && (
          <span className="font-caveat text-[17px] text-stone-400">
            —
            { note }
          </span>
        ) }
      </div>

      { title && (
        <h2 className="m-0 font-cinzel text-[28px] font-medium uppercase tracking-[0.02em] text-vellum">
          { title }
        </h2>
      ) }
    </div>
  );
}
