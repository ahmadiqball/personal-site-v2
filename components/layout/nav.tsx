'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Container } from './container';
import { navList } from './layout.constants';

/* Sticky top navigation for the Astrolabe redesign: an animated armillary brand
   mark (A·I·Y), a role meta label, a breathing status pill, and mono links whose
   active/hover state brightens stone -> vellum. Dark-only; replaces the former
   responsive navbar quartet. */

function BrandMark() {
  return (
    <Link
      aria-label="Ahmad Iqbal Yahya — home"
      className="flex items-center gap-2.5 no-underline"
      href="/"
    >
      <svg aria-hidden="true" className="h-[22px] w-[22px] shrink-0" viewBox="0 0 60 60">
        <g fill="none" stroke="#EDEAE3" strokeWidth="0.8">
          <ellipse className="origin-center animate-orbit-60" cx="30" cy="30" rx="22" ry="22" />

          <ellipse className="origin-center animate-orbit-90" cx="30" cy="30" rx="22" ry="6" />

          <ellipse
            className="origin-center animate-orbit-120"
            cx="30"
            cy="30"
            rx="22"
            ry="13"
            transform="rotate(-25 30 30)"
          />
        </g>

        <circle cx="30" cy="30" fill="#C9A961" r="1.6" />
      </svg>

      <span className="font-cinzel text-base font-semibold tracking-[0.15em] text-vellum">A · I · Y</span>
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] border-b border-line-08 bg-ink-night/85 py-3.5 font-mono text-[11px] tracking-[0.05em] text-stone-600 backdrop-blur-md">
      <Container className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-[22px]">
          <BrandMark />

          <span className="hidden sm:inline">frontend engineer</span>

          <span className="inline-flex items-center gap-[7px]">
            <span className="h-[5px] w-[5px] rounded-full bg-candleflame shadow-[0_0_8px_#C9A961] animate-breathe" />
            open · q3 2026
          </span>
        </div>

        <nav className="flex gap-3 sm:gap-[18px]">
          { navList.map((item) => {
            const active = item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);

            return (
              <Link
                className={`no-underline transition-colors duration-fast ease-ease hover:text-vellum ${
                  active ? 'text-vellum' : 'text-stone-600'
                }`}
                href={item.href}
                key={item.href}
              >
                { item.label }
              </Link>
            );
          }) }
        </nav>
      </Container>
    </header>
  );
}
