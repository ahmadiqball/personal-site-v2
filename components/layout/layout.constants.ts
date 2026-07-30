// Astrolabe top-nav information architecture. Text-only (no icons) per the
// design system. Labels follow the redesign vocabulary; hrefs point at the
// existing routes (work→/portfolio, writing→/blog, cv→/resume). /about is built
// in a later redesign phase.
export interface NavItem {
  href: string;
  label: string;
}

export const navList: Array<NavItem> = [
  { href: '/', label: '[index]' },
  { href: '/portfolio', label: 'work' },
  { href: '/blog', label: 'writing' },
  { href: '/resume', label: 'cv' },
  { href: '/about', label: 'about' },
];
