import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { ArticleBody } from '@/components/article/article-body';
import { HomeFooter } from '@/components/home/home-footer';
import { LayoutBreadcrumb } from '@/components/layout/layout-breadcrumb';
import { LayoutContainer } from '@/components/layout/layout-container';
import { getBlogPostData } from '@/sanity/get-data';

function readTime(char?: number): number {
  return Math.max(1, Math.round((char ?? 0) / 1000));
}

function monthYear(date?: string): string {
  return date ? new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : '';
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const article = await getBlogPostData(params.title);
  return { title: article ? `${article.title} · Writing` : 'Writing' };
}

export default async function BlogPost({ params }: any): Promise<JSX.Element> {
  const article = await getBlogPostData(params.title);

  if (!article) {
    notFound();
  }

  const cover = article.mainImage?.asset?.url;

  return (
    <>
      <LayoutBreadcrumb items={[{ href: '/', label: 'index' }, { href: '/blog', label: 'writing' }, { label: article.title }]} />

      <article>
        {/* head */}
        <LayoutContainer className="py-10">
          <div className="mx-auto max-w-[760px]">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10px] tracking-[0.18em] text-stone-600">
              <span className="text-candleflame">▲ { (article.type ?? 'note').toUpperCase() }</span>
              <span>·</span>
              <span>{ readTime(article.char) } MIN READ</span>
              { article.publishedAt && <><span>·</span><span>{ monthYear(article.publishedAt).toUpperCase() }</span></> }
            </div>

            <h1 className="mt-5 font-cinzel text-h1 font-semibold uppercase leading-[1] text-vellum">
              { article.title }
              <span className="text-candleflame">.</span>
            </h1>

            { article.deck && (
              <p className="mt-5 font-cardo text-[19px] italic leading-[1.5] text-stone-200">{ article.deck }</p>
            ) }

            <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-line-08 pt-4 font-mono text-[10px] tracking-[0.05em] text-stone-600">
              <span>by <b className="font-semibold text-stone-200">Ahmad Iqbal Yahya</b> · from Bandung</span>
              <span className="tracking-[0.15em]">CODEX</span>
            </div>
          </div>
        </LayoutContainer>

        {/* cover */}
        { cover && (
          <LayoutContainer className="pb-6">
            <div className="relative mx-auto aspect-[2/1] max-w-[1116px]">
              <div className="arch-mask absolute inset-0 overflow-hidden bg-ink-deep">
                <img alt={article.mainImage?.alt ?? ''} className="h-full w-full object-cover" src={cover} />
              </div>
              <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M 0 100 L 0 22 Q 0 0 50 0 Q 100 0 100 22 L 100 100" fill="none" stroke="#C9A961" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="absolute bottom-5 left-5 border-[0.5px] border-gold-line bg-ink-night/[0.86] px-3.5 py-2 backdrop-blur-[4px]">
                <div className="font-mono text-[8px] tracking-[0.15em] text-candleflame">— FIG. I</div>
                { article.mainImage?.sourceName && <div className="mt-0.5 font-sans text-[11px] italic text-stone-200">{ article.mainImage.sourceName }</div> }
              </div>
            </div>
          </LayoutContainer>
        ) }

        {/* reading column */}
        <LayoutContainer className="py-8">
          <div className="mx-auto max-w-[680px]">
            <ArticleBody body={article.body} />

            <div className="mt-10 text-center font-medieval text-2xl text-candleflame">⌬</div>

            <div className="mt-8 flex items-center justify-between border-t border-line-08 pt-6">
              <a className="font-mono text-[11px] tracking-[0.1em] text-candleflame no-underline transition-colors duration-fast ease-ease hover:text-vellum" href="/blog">← all writing</a>
              <span className="font-caveat text-sm text-stone-400">the nightbook ↗</span>
            </div>
          </div>
        </LayoutContainer>
      </article>

      <HomeFooter />
    </>
  );
}
