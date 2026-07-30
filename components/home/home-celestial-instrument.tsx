'use client';

import { useEffect, useRef, useState } from 'react';

import styles from './home-celestial-instrument.module.css';

/* The signature hero ornament: an arch-masked portrait at the nucleus of tilted,
   slowly-rotating armillary shells, orbiting bodies, a graduated watch tick-ring,
   twinkling stars and clockwork gears. Tailwind-first; the animated shell/orbit/
   gear geometry lives in the co-located CSS module (see its header for why).

   The art is composed at a fixed "design" size (560×600) then uniformly scaled to
   fit its container width via a ResizeObserver, inside an overflow-hidden wrapper.
   This keeps every part in proportion on any screen AND stops the rotating shells
   from bleeding out and changing the page's scroll width as they spin. */

const DESIGN_W = 560;
const DESIGN_H = 600;

interface HomeCelestialInstrumentProps {
  plateMeta?: string;
  plateNum?: string;
  plateTitle?: string;
  portraitAlt?: string;
  portraitUrl?: string;
}

// 72 ticks, every 6th longer (viewBox 540×540, centre 270,270, radius 262).
const ticks = Array.from({ length: 72 }, (_, i) => {
  const a = (i * 5 * Math.PI) / 180;
  const r = 262;
  const r2 = i % 6 === 0 ? r - 13 : r - 7;
  return {
    x1: 270 + Math.cos(a) * r,
    y1: 270 + Math.sin(a) * r,
    x2: 270 + Math.cos(a) * r2,
    y2: 270 + Math.sin(a) * r2,
  };
});

const stars = [
  { cx: 70, cy: 90, r: 1.1, delay: '0s' },
  { cx: 500, cy: 120, r: 1.4, delay: '.7s' },
  { cx: 120, cy: 470, r: 1, delay: '1.3s' },
  { cx: 470, cy: 450, r: 1.2, delay: '.4s' },
  { cx: 40, cy: 300, r: 0.9, delay: '1.9s' },
  { cx: 530, cy: 300, r: 0.9, delay: '1.1s' },
  { cx: 300, cy: 40, r: 1.1, delay: '2.3s' },
  { cx: 250, cy: 520, r: 0.8, delay: '1.6s' },
];

const MASK_GRADIENT = 'linear-gradient(135deg,#1A1F4A 0%,#3A3A6E 35%,#8A5A82 70%,#E89762 100%)';
const PLACEHOLDER_BG = 'repeating-linear-gradient(135deg,rgba(237,234,227,0.04) 0,rgba(237,234,227,0.04) 10px,transparent 10px,transparent 22px)';

export function HomeCelestialInstrument({
  plateMeta = 'oil on memory · 2026',
  plateNum = '— PLATE I',
  plateTitle = 'Self-portrait',
  portraitAlt = 'Self-portrait',
  portraitUrl = '/assets/astrolabe/portrait-plate.png',
}: HomeCelestialInstrumentProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) {
      return;
    }
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? DESIGN_W;
      setScale(Math.min(1, width / DESIGN_W));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="relative z-[2] flex w-full animate-reveal justify-center overflow-hidden opacity-0 [animation-delay:500ms] [animation-duration:1200ms]"
      ref={wrapRef}
      style={{ height: DESIGN_H * scale }}
    >
      <div
        className="relative flex h-[600px] w-[560px] shrink-0 items-center justify-center"
        style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
      >
        {/* atom shells */}
        <div className={styles.armillary}>
          <span className={`${styles.ar} ${styles.arOuter}`} />
          <span className={`${styles.ar} ${styles.arEq}`} />
          <span className={`${styles.ar} ${styles.arS1}`} />
          <span className={`${styles.ar} ${styles.arS2}`} />
          <span className={`${styles.ar} ${styles.arS3}`} />
        </div>

        {/* graduated watch tick-ring */}
        <svg className={styles.ticks} preserveAspectRatio="xMidYMid meet" viewBox="0 0 540 540">
          <g opacity="0.5" stroke="#C9A961" strokeWidth="0.6">
            { ticks.map((t, i) => (
              <line key={i} x1={t.x1} x2={t.x2} y1={t.y1} y2={t.y2} />
            )) }
          </g>
        </svg>

        {/* twinkling star field */}
        <svg
          className="pointer-events-none absolute inset-0 m-auto h-[560px] w-[560px]"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 560 560"
        >
          <g fill="#EDEAE3">
            { stars.map((s, i) => (
              <circle className={styles.tw} cx={s.cx} cy={s.cy} key={i} r={s.r} style={{ animationDelay: s.delay }} />
            )) }
          </g>
        </svg>

        {/* orbiting bodies */}
        <div className={styles.orbitTrack}><span className={styles.planet} /></div>
        <div className={`${styles.etrack} ${styles.e1}`}><span className={styles.planet} /></div>
        <div className={`${styles.etrack} ${styles.e2}`}><span className={styles.planet} /></div>
        <div className={`${styles.etrack} ${styles.e3}`}><span className={styles.planet} /></div>
        <div className={`${styles.etrack} ${styles.e4}`}><span className={styles.planet} /></div>

        {/* arched portrait plate */}
        <div className="relative z-[4] w-72">
          <div
            className="relative h-[392px] w-72 overflow-hidden rounded-[144px_144px_10px_10px] border border-candleflame shadow-plate"
            style={{ background: MASK_GRADIENT }}
          >
            { portraitUrl && (
              <img alt={portraitAlt} className="relative z-[1] h-full w-full object-cover object-center" src={portraitUrl} />
            ) }

            <div
              className="absolute inset-0 flex items-end justify-center pb-[22px] font-mono text-[9px] uppercase tracking-[0.2em] text-[rgba(237,234,227,0.55)]"
              style={{ backgroundImage: PLACEHOLDER_BG }}
            >
              — portrait
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 z-[3] w-max -translate-x-1/2 border-[0.5px] border-gold-line bg-ink-night/[0.86] px-3.5 py-[7px] text-center backdrop-blur-[4px]">
            <div className="font-mono text-[8px] tracking-[0.15em] text-candleflame">{ plateNum }</div>
            <div className="mt-0.5 font-cinzel text-[11px] font-medium uppercase tracking-[0.06em] text-vellum">{ plateTitle }</div>
            <div className="mt-0.5 font-mono text-[8px] text-stone-600">{ plateMeta }</div>
          </div>
        </div>

        {/* corner gears */}
        <svg className={`${styles.gear} ${styles.g1}`} viewBox="0 0 60 60">
          <g className={styles.cw} fill="none" stroke="#C9A961" strokeWidth="1" transform="translate(30 30)">
            <circle r="16" />
            <circle r="6" />
            <g strokeWidth="2">
              <line y1="-16" y2="-24" />
              <line y1="16" y2="24" />
              <line x1="-16" x2="-24" />
              <line x1="16" x2="24" />
              <line x1="-11" x2="-17" y1="-11" y2="-17" />
              <line x1="11" x2="17" y1="11" y2="17" />
              <line x1="11" x2="17" y1="-11" y2="-17" />
              <line x1="-11" x2="-17" y1="11" y2="17" />
            </g>
          </g>
        </svg>

        <svg className={`${styles.gear} ${styles.g2}`} viewBox="0 0 44 44">
          <g className={styles.ccw} fill="none" stroke="#C9A961" strokeWidth="0.9" transform="translate(22 22)">
            <circle r="11" />
            <circle r="4" />
            <g strokeWidth="1.6">
              <line y1="-11" y2="-17" />
              <line y1="11" y2="17" />
              <line x1="-11" x2="-17" />
              <line x1="11" x2="17" />
              <line x1="-8" x2="-12" y1="-8" y2="-12" />
              <line x1="8" x2="12" y1="8" y2="12" />
              <line x1="8" x2="12" y1="-8" y2="-12" />
              <line x1="-8" x2="-12" y1="8" y2="12" />
            </g>
          </g>
        </svg>

        <svg className={`${styles.gear} ${styles.g3}`} viewBox="0 0 34 34">
          <g className={styles.cw} fill="none" stroke="#C9A961" strokeWidth="0.8" transform="translate(17 17)">
            <circle r="8" />
            <circle r="3" />
            <g strokeWidth="1.3">
              <line y1="-8" y2="-13" />
              <line y1="8" y2="13" />
              <line x1="-8" x2="-13" />
              <line x1="8" x2="13" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
