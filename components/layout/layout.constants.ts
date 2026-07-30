// Astrolabe top-nav information architecture. Text-only (no icons) per the
// design system. Routes for work/writing/cv/about are built in later redesign
// phases; the homepage exists today.
export interface NavItem {
  href: string;
  label: string;
}

export const navList: Array<NavItem> = [
  { href: '/', label: '[index]' },
  { href: '/work', label: 'work' },
  { href: '/writing', label: 'writing' },
  { href: '/cv', label: 'cv' },
  { href: '/about', label: 'about' },
];
