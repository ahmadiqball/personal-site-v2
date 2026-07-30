'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/* Header carousel for a case study: arch-masked 16:10 slides on a translate-X
   flex track, with prev/next buttons, dot indicators, an "n / total" counter,
   keyboard ←/→, touch swipe, and 5s auto-advance (disabled under reduced motion). */

const GRADIENTS = [
  'linear-gradient(135deg,#1F3340,#2D5F4A 35%,#3D7A4E 70%,#5A9968)',
  'linear-gradient(160deg,#1F3340,#2D5F4A 50%,#3D7A4E)',
  'linear-gradient(160deg,#243240,#3A4A5E 50%,#4A6B70)',
  'linear-gradient(160deg,#1A2E3A,#2F5A45 50%,#5C8A6B)',
];

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

interface Slide {
  alt?: string;
  url?: string;
}

export function WorkCarousel({ slides, title }: { slides: Slide[]; title: string }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const total = slides.length;

  const go = useCallback((k: number) => {
    setIndex((prev) => (k + total) % total);
  }, [total]);

  // 5s auto-advance, reset whenever the index changes; honour reduced motion.
  useEffect(() => {
    if (total <= 1) {
      return;
    }
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      return;
    }
    const timer = setInterval(() => go(index + 1), 5000);
    return () => clearInterval(timer);
  }, [index, total, go]);

  if (total === 0) {
    return null;
  }

  return (
    <div
      aria-label={`${title} — screens from the live app`}
      aria-roledescription="carousel"
      className="relative mx-auto w-full max-w-[1180px] outline-none"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') {
          go(index + 1);
        }
        if (e.key === 'ArrowLeft') {
          go(index - 1);
        }
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) {
          return;
        }
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) {
          go(index + (dx < 0 ? 1 : -1));
        }
        touchX.current = null;
      }}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      ref={containerRef}
      tabIndex={0}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-[600ms] ease-ease"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          { slides.map((slide, i) => (
            <div className="relative aspect-[16/10] min-w-full" key={i}>
              <div className="arch-mask absolute inset-0 overflow-hidden" style={{ background: GRADIENTS[i % GRADIENTS.length] }}>
                { slide.url && <img alt={slide.alt ?? ''} className="h-full w-full object-cover" src={slide.url} /> }
              </div>

              <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M 0 100 L 0 22 Q 0 0 50 0 Q 100 0 100 22 L 100 100" fill="none" stroke="#C9A961" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
              </svg>

              <div className="absolute bottom-5 left-5 border-[0.5px] border-gold-line bg-ink-night/[0.86] px-3.5 py-2 backdrop-blur-[4px]">
                <div className="font-mono text-[8px] tracking-[0.15em] text-candleflame">— PLATE { ROMAN[i] ?? i + 1 }</div>
                <div className="mt-0.5 font-cinzel text-[11px] font-medium uppercase tracking-[0.06em] text-vellum">{ title }</div>
              </div>
            </div>
          )) }
        </div>
      </div>

      { total > 1 && (
        <>
          <button
            aria-label="Previous screen"
            className="absolute left-4 top-1/2 z-[6] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-[0.5px] border-gold-line bg-ink-night/70 font-cinzel text-[22px] leading-none text-candleflame backdrop-blur-[4px] transition-colors duration-fast ease-ease hover:border-vellum hover:text-vellum"
            onClick={() => go(index - 1)}
            type="button"
          >
            ‹
          </button>

          <button
            aria-label="Next screen"
            className="absolute right-4 top-1/2 z-[6] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-[0.5px] border-gold-line bg-ink-night/70 font-cinzel text-[22px] leading-none text-candleflame backdrop-blur-[4px] transition-colors duration-fast ease-ease hover:border-vellum hover:text-vellum"
            onClick={() => go(index + 1)}
            type="button"
          >
            ›
          </button>

          <div className="mt-[18px] flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2.5">
              { slides.map((_, i) => (
                <button
                  aria-label={`Screen ${i + 1}`}
                  className={`h-2 w-2 rounded-full border-[0.5px] border-[rgba(201,169,97,0.5)] transition-all duration-fast ease-ease ${i === index ? 'scale-110 bg-candleflame' : 'bg-transparent'}`}
                  key={i}
                  onClick={() => go(i)}
                  type="button"
                />
              )) }
            </div>

            <div className="font-mono text-[10px] tracking-[0.15em] text-stone-600">
              <span className="text-candleflame">{ index + 1 }</span> / { total } · SCREENS FROM THE LIVE APP
            </div>
          </div>
        </>
      ) }
    </div>
  );
}
