/** @type {import('next').NextConfig} */

// Dev-only routes use the `.dev.tsx` extension. It's registered ONLY outside a
// production build, so files like app/(client)/library/page.dev.tsx exist under
// `next dev` but are fully excluded from `next build` — the route doesn't exist
// in production and its code never bundles.
const isProd = process.env.NODE_ENV === 'production';

const pageExtensions = isProd
  ? ['tsx', 'ts', 'jsx', 'js']
  : ['dev.tsx', 'dev.ts', 'tsx', 'ts', 'jsx', 'js'];

const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  pageExtensions,
};

module.exports = nextConfig;
