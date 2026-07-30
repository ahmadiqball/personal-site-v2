import Link from 'next/link';

import { LayoutContainer } from './layout-container';

/* Breadcrumb rail used at the top of interior pages: a small compass-rose back
   link to the index, then the trail. The last item is the current page. */
interface Crumb {
  href?: string;
  label: string;
}

function CompassRose() {
  return (
    <svg aria-hidden="true" className="h-[26px] w-[26px] shrink-0" viewBox="0 0 60 60">
      <g fill="none" stroke="#C9A961" strokeWidth="0.7">
        <circle cx="30" cy="30" r="26" />
        <circle cx="30" cy="30" r="18" />
        <circle cx="30" cy="30" r="10" />
      </g>
      <g stroke="#8B857A" strokeWidth="0.6">
        <line x1="30" x2="30" y1="4" y2="56" />
        <line x1="4" x2="56" y1="30" y2="30" />
        <line x1="12" x2="48" y1="12" y2="48" />
        <line x1="48" x2="12" y1="12" y2="48" />
      </g>
      <polygon fill="#C9A961" points="18,30 30,8 30,26" />
      <polygon fill="#EDEAE3" opacity="0.85" points="30,8 42,30 30,26" />
      <circle cx="30" cy="30" fill="#C9A961" r="1.5" />
    </svg>
  );
}

export function LayoutBreadcrumb({ items }: { items: Crumb[] }) {
  return (
    <LayoutContainer className="flex items-center gap-2.5 pt-5 font-mono text-[11px] tracking-[0.05em] text-stone-600">
      <Link
        aria-label="Back to index"
        className="mr-1 text-stone-400 transition-colors duration-fast ease-ease hover:text-vellum"
        href="/"
      >
        <CompassRose />
      </Link>

      { items.map((crumb, i) => (
        <span className="flex items-center gap-2.5" key={crumb.label}>
          { crumb.href
            ? (
                <Link className="transition-colors duration-fast ease-ease hover:text-vellum" href={crumb.href}>
                  { crumb.label }
                </Link>
              )
            : <span className="text-vellum">{ crumb.label }</span> }

          { i < items.length - 1 && <span className="text-stone-600">/</span> }
        </span>
      )) }
    </LayoutContainer>
  );
}
