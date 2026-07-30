'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { LayoutContainer } from './layout-container';
import { navList } from './layout.constants';

/* Sticky top navigation for the Astrolabe redesign: an animated armillary brand
   mark (A·I·Y), a role meta label, a breathing status pill, and mono links whose
   active/hover state brightens stone -> vellum. Below md the meta/status/links
   collapse behind a mono menu toggle that opens a stacked panel. Dark-only. */

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

function StatusPill() {
  return (
    <span className="inline-flex items-center gap-[7px]">
      <span className="h-[5px] w-[5px] rounded-full bg-candleflame shadow-[0_0_8px_#C9A961] animate-breathe" />
      open · q3 2026
    </span>
  );
}

export function LayoutNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-[100] border-b border-line-08 bg-ink-night/85 font-mono text-[11px] tracking-[0.05em] text-stone-600 backdrop-blur-md">
      <LayoutContainer className="flex items-center justify-between py-3.5">
        <div className="flex items-center gap-3.5 md:gap-[22px]">
          <BrandMark />

          <span className="hidden md:inline">frontend engineer</span>

          <span className="hidden md:inline-flex">
            <StatusPill />
          </span>
        </div>

        {/* desktop links */}
        <nav className="hidden gap-[18px] md:flex">
          { navList.map((item) => (
            <Link
              className={`no-underline transition-colors duration-fast ease-ease hover:text-vellum ${
                isActive(item.href) ? 'text-vellum' : 'text-stone-600'
              }`}
              href={item.href}
              key={item.href}
            >
              { item.label }
            </Link>
          )) }
        </nav>

        {/* mobile toggle */}
        <button
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="uppercase tracking-[0.15em] text-stone-400 transition-colors duration-fast ease-ease hover:text-vellum md:hidden"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          { open ? 'close ✕' : 'menu ☰' }
        </button>
      </LayoutContainer>

      {/* mobile panel — absolute dropdown, overlays content instead of pushing it */}
      { open && (
        <div className="absolute inset-x-0 top-full border-b border-line-08 bg-ink-night/95 shadow-plate backdrop-blur-md md:hidden">
          <LayoutContainer className="flex flex-col gap-4 py-5">
            { navList.map((item) => (
              <Link
                className={`no-underline transition-colors duration-fast ease-ease hover:text-vellum ${
                  isActive(item.href) ? 'text-vellum' : 'text-stone-400'
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                { item.label }
              </Link>
            )) }

            <span className="mt-1 border-t border-line-08 pt-4 text-stone-600">
              <StatusPill />
            </span>
          </LayoutContainer>
        </div>
      ) }
    </header>
  );
}
