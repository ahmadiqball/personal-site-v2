/** @type {import('tailwindcss').Config} */

// Astrolabe design system — tokens from the handoff's design-system/tokens/*.css,
// transformed into the Tailwind theme. Utility classes are the single source of
// truth; the only hand-written CSS is what Tailwind can't express (keyframes are
// defined here; khatim background + reduced-motion live in globals.css).
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Inks (backgrounds, deepest to card)
        'ink-night': '#08070C',
        'ink-deep': '#14121A',
        'ink-soft': '#2A2530',
        // Stone (text ramp, muted -> bright)
        'stone-600': '#6B6760',
        'stone-400': '#8B857A',
        'stone-200': '#B8B2A6',
        'vellum': '#EDEAE3',
        // Accents
        'candleflame': '#C9A961',
        'nila': '#5B4FE5',
        'ember': '#8A3A24',
        // Semantic aliases
        'bg': '#08070C',
        'surface': '#14121A',
        'surface-raised': '#2A2530',
      },
      borderColor: {
        'line-08': 'rgba(237,234,227,0.08)',
        'line-10': 'rgba(237,234,227,0.10)',
        'line-12': 'rgba(237,234,227,0.12)',
        'gold-line': 'rgba(201,169,97,0.40)',
      },
      backgroundColor: {
        'gold-wash': 'rgba(201,169,97,0.06)',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'Georgia', 'serif'],
        sans: ['var(--font-hanken)', 'system-ui', '-apple-system', 'sans-serif'],
        cardo: ['var(--font-cardo)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
        caveat: ['var(--font-caveat)', 'cursive'],
        medieval: ['var(--font-medieval)', 'serif'],
      },
      fontSize: {
        // Display scale (Cinzel, uppercase, letter-spacing ~0.02em)
        hero: ['clamp(44px,6vw,74px)', { lineHeight: '1', letterSpacing: '0.02em' }],
        h1: ['clamp(40px,6vw,76px)', { lineHeight: '1', letterSpacing: '0.02em' }],
        h2: ['clamp(24px,3.5vw,32px)', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        h3: ['20px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        // Text scale
        lede: ['17px', { lineHeight: '1.6' }],
        body: ['15px', { lineHeight: '1.6' }],
        small: ['13px', { lineHeight: '1.5' }],
        // Mono label scale
        label: ['10px', { lineHeight: '1.4', letterSpacing: '0.18em' }],
        micro: ['9px', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      letterSpacing: {
        label: '0.18em',
        wide: '0.22em',
      },
      transitionTimingFunction: {
        // The house easing — enter & hover
        ease: 'cubic-bezier(0.2,0.8,0.2,1)',
      },
      transitionDuration: {
        fast: '300ms', // nav/link colour
        med: '500ms', // card lift, mask gradient
        slow: '900ms', // headline reveal
      },
      keyframes: {
        'reveal': { to: { opacity: '1' } },
        'reveal-up': { to: { opacity: '1', transform: 'translateY(0)' } },
        'orbit': { to: { transform: 'rotate(360deg)' } },
        'spin': { to: { transform: 'rotate(360deg)' } },
        'twinkle': { '0%,100%': { opacity: '1' }, '50%': { opacity: '.2' } },
        'breathe': {
          '0%,100%': { opacity: '.7', boxShadow: '0 0 4px #C9A961' },
          '50%': { opacity: '1', boxShadow: '0 0 12px #C9A961' },
        },
      },
      animation: {
        'reveal': 'reveal 800ms cubic-bezier(0.2,0.8,0.2,1) forwards',
        'reveal-up': 'reveal-up 900ms cubic-bezier(0.2,0.8,0.2,1) forwards',
        'twinkle': 'twinkle 3.6s ease-in-out infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
        // orbit/spin use per-element durations set inline (18s–220s); base helpers:
        'orbit': 'orbit 20s linear infinite',
        'spin': 'spin 30s linear infinite',
        // brand-mark armillary rings (60/90/120s, middle ring reversed)
        'orbit-60': 'orbit 60s linear infinite',
        'orbit-90': 'orbit 90s linear infinite reverse',
        'orbit-120': 'orbit 120s linear infinite',
      },
      backgroundImage: {
        'khatim': 'url(\'/assets/astrolabe/khatim-tile.svg\')',
        'gold-radial': 'radial-gradient(circle at 50% 0%, rgba(201,169,97,0.06), transparent 60%)',
      },
      boxShadow: {
        plate: '0 24px 60px rgba(8,7,12,0.6)',
      },
      maxWidth: {
        // Centered content shell — full-bleed bars, content capped at 1280px.
        shell: '1280px',
      },
    },
  },
  plugins: [],
};
