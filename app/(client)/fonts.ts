// Astrolabe webfonts — the six families from the design system, loaded via
// next/font/google and exposed as CSS variables that tailwind.config.js maps to
// the font-* utilities. Replaces the handoff's raw @import in tokens/fonts.css.
import {
  Cardo,
  Caveat,
  Cinzel,
  Hanken_Grotesk,
  JetBrains_Mono,
  MedievalSharp,
} from 'next/font/google';

// Display: titles, headings (UPPERCASE)
export const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

// UI + body copy
export const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
});

// Editorial serif, often italic (essay body, ledes)
export const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cardo',
  display: 'swap',
});

// Labels, meta, coordinates, eyebrows
export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

// Handwritten marginalia — MAX 1 per screen
export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-caveat',
  display: 'swap',
});

// Chapter / Station glyphs & watermarks only
export const medieval = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-medieval',
  display: 'swap',
});

// Space-joined variable classes for the <body> element.
export const fontVariables = [
  cinzel.variable,
  hanken.variable,
  cardo.variable,
  jetbrains.variable,
  caveat.variable,
  medieval.variable,
].join(' ');
