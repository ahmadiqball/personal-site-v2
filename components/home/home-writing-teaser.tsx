import { LayoutContainer } from '@/components/layout/layout-container';

/* Writing teaser: an intro column (eyebrow, title, star-chart plate, blurb) beside
   a short list of recent notes with dropcaps. CMS-backed via the blog list. */

function readTime(char?: number): number {
  return Math.max(1, Math.ceil((char ?? 0) / 1000));
}

const WAVES = [
  'M 0 8 Q 10 4 20 8 T 40 8 T 50 8',
  'M 0 8 Q 8 2 16 8 Q 24 14 32 8 Q 40 2 50 8',
  'M 0 8 Q 6 1 12 8 T 24 8 Q 32 14 40 8 T 50 8',
];

export function HomeWritingTeaser({ posts }: { posts?: Array<any> }) {
  const rows = (posts ?? []).slice(0, 3);

  return (
    <section aria-labelledby="writing-heading" className="border-b border-line-08">
      <LayoutContainer className="grid items-start gap-8 py-14 min-[981px]:grid-cols-[320px_1fr] min-[981px]:gap-12">
        {/* ---- intro column ---- */}
        <div>
          <div className="mb-2.5 flex items-center gap-2.5">
            <span className="font-medieval text-sm text-candleflame">⌬ Station III</span>
            <span className="font-caveat text-base text-stone-400">— nightbook</span>
          </div>

          <h2 className="font-cinzel text-[26px] font-medium uppercase leading-[1.1] text-vellum" id="writing-heading">
            Notes from
            <br />
            the codex
          </h2>

          {/* star-chart plate ornament */}
          <div className="relative my-[18px]">
            <svg aria-hidden="true" className="block h-auto w-full max-w-[280px]" viewBox="0 0 280 200">
              <rect fill="#0A0810" height="200" rx="2" stroke="#C9A961" strokeWidth="0.5" width="280" />
              <g fill="none" opacity="0.4" stroke="#C9A961" strokeWidth="0.3">
                <line x1="0" x2="280" y1="65" y2="65" />
                <line x1="0" x2="280" y1="130" y2="130" />
                <line x1="70" x2="70" y1="0" y2="200" />
                <line x1="140" x2="140" y1="0" y2="200" />
                <line x1="210" x2="210" y1="0" y2="200" />
              </g>
              <g fill="#EDEAE3">
                <circle cx="50" cy="40" r="2" />
                <circle cx="80" cy="55" r="1.4" />
                <circle cx="130" cy="35" r="2.4" />
                <circle cx="160" cy="60" r="1.6" />
                <circle cx="200" cy="45" r="1.2" />
                <circle cx="120" cy="100" r="1.8" />
                <circle cx="160" cy="135" r="2.2" />
                <circle cx="200" cy="120" r="1.4" />
                <circle cx="230" cy="155" r="1.6" />
                <circle cx="70" cy="160" r="1.2" />
                <circle cx="40" cy="130" r="1" />
                <circle cx="240" cy="90" r="1" />
              </g>
              <g fill="none" opacity="0.7" stroke="#C9A961" strokeWidth="0.5">
                <path d="M 50 40 L 80 55 L 130 35 L 160 60 L 200 45" />
                <path d="M 130 35 L 120 100 L 160 135 L 200 120" />
                <path d="M 120 100 L 70 160" />
              </g>
            </svg>
          </div>

          <p className="mb-3.5 font-sans text-[15px] italic leading-[1.55] text-stone-400">
            On engineering, faith, running, and the small things between.
          </p>
          <a className="font-mono text-[10px] tracking-[0.1em] text-candleflame no-underline transition-colors duration-fast ease-ease hover:text-vellum" href="/blog">→ all entries</a>
        </div>

        {/* ---- list ---- */}
        <ul>
          { rows.map((post, i) => {
            const title: string = post?.title ?? '';
            const href = post?.slug?.current ? `/blog/${post.slug.current}` : '/blog';
            const meta = `${(post?.type ?? 'note').toLowerCase()} · ${readTime(post?.char)}m`;

            return (
              <li key={post?._id ?? i}>
                <a
                  className="flex flex-col gap-1.5 border-t border-line-10 py-[18px] text-inherit no-underline transition-[padding] duration-med ease-ease last:border-b hover:pl-3 sm:flex-row sm:items-baseline sm:gap-4"
                  href={href}
                >
                  <span className="flex min-w-0 items-baseline gap-3 sm:flex-1">
                    <span className="font-medieval text-3xl leading-[0.8] text-candleflame sm:text-4xl">{ title.charAt(0) }</span>
                    <span className="block font-sans text-lg italic leading-[1.3] text-vellum sm:text-[22px]">{ title.slice(1) }</span>
                  </span>

                  <svg aria-hidden="true" className="hidden h-4 w-[50px] self-center sm:block" viewBox="0 0 50 16">
                    <path d={WAVES[i % WAVES.length]} fill="none" opacity="0.5" stroke="#C9A961" strokeWidth="0.5" />
                  </svg>

                  <span className="whitespace-nowrap pl-9 font-mono text-[9px] tracking-[0.1em] text-stone-600 sm:w-[60px] sm:pl-0 sm:text-right">{ meta }</span>
                </a>
              </li>
            );
          }) }
        </ul>
      </LayoutContainer>
    </section>
  );
}
