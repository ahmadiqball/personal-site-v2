'use client';

/* The signature work/writing card: a Gothic-arch-masked image plate with a gold
   frame, a colour-gradient fallback, index/year corners and a title block. The
   image auto-hides on error, revealing the gradient beneath. Hover lift + gold
   frame + CTA reveal are pure CSS via `group-hover`. */
interface CoreArchCardProps {
  cta?: string;
  desc?: string;
  gradient?: string;
  href?: string;
  img?: string;
  index?: number | string;
  title: string;
  year?: number | string;
}

export function CoreArchCard({
  cta = 'enter →',
  desc,
  gradient = 'linear-gradient(160deg,#1F3340,#2D5F4A 55%,#3D7A4E)',
  href = '#',
  img,
  index,
  title,
  year,
}: CoreArchCardProps) {
  return (
    <a
      className="group relative block min-h-[300px] overflow-hidden bg-ink-deep text-inherit no-underline transition-transform duration-med ease-ease hover:-translate-y-[3px]"
      href={href}
    >
      <div className="arch-mask absolute inset-0 overflow-hidden" style={{ background: gradient }}>
        { img && (
          <img
            alt=""
            className="block h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            src={img}
          />
        ) }

        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,transparent 45%,rgba(8,7,12,0.92) 100%)' }}
        />
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          className="transition-[stroke-opacity] duration-med ease-ease [stroke-opacity:0.6] group-hover:[stroke-opacity:1]"
          d="M 0 100 L 0 22 Q 0 0 50 0 Q 100 0 100 22 L 100 100"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="absolute left-4 top-3.5 font-mono text-[9px] tracking-[0.22em] text-candleflame">{ index }</div>

      <div className="absolute right-4 top-3.5 font-mono text-[9px] tracking-[0.12em] text-vellum">{ year }</div>

      <div className="absolute inset-x-0 bottom-0 px-[18px] pb-[18px] pt-4">
        <div className="font-cinzel text-[26px] font-medium uppercase leading-none tracking-[0.04em] text-vellum">
          { title }
        </div>

        { desc && <div className="mt-1.5 font-sans text-[13px] leading-[1.4] text-stone-200">{ desc }</div> }

        <div className="mt-2.5 font-mono text-[9px] tracking-[0.2em] text-candleflame opacity-0 transition-opacity duration-med ease-ease group-hover:opacity-100">
          { cta }
        </div>
      </div>
    </a>
  );
}
