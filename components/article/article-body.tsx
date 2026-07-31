'use client';

import type { PortableTextReactComponents } from '@portabletext/react';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaClipboardCheck, FaExternalLinkAlt, FaRegClipboard } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

/* Astrolabe article body: Portable Text serializers for a long-form note. The
   drop-cap and Roman-numeral h2 numbering come from `.article-prose` in
   globals.css; everything else is styled here. */

function CodeBlock({ value }: { value: any }) {
  const [copied, setCopied] = useState(false);
  const Icon = copied ? FaClipboardCheck : FaRegClipboard;

  return (
    <div className="my-7">
      <div className="flex items-center justify-between border-l-2 border-candleflame bg-ink-deep px-4 py-2 font-mono text-[11px] text-stone-400">
        <span>{ value?.language ?? 'code' }</span>

        <button
          className="flex items-center gap-1.5 text-stone-400 transition-colors duration-fast ease-ease hover:text-vellum"
          onClick={() => {
            navigator.clipboard.writeText(value?.code ?? '');
            setCopied(true);
          }}
          type="button"
        >
          <Icon /> { copied ? 'copied' : 'copy' }
        </button>
      </div>

      <SyntaxHighlighter
        customStyle={{ margin: 0, borderLeft: '2px solid #C9A961', borderRadius: 0, background: '#0A0810', fontSize: '13px', padding: '18px' }}
        language={value?.language}
        style={vscDarkPlus}
      >
        { value?.code ?? '' }
      </SyntaxHighlighter>
    </div>
  );
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="mb-5 font-sans text-[16px] leading-[1.8] text-stone-200">{ children }</p>,
    h1: ({ children }) => <h1 className="mb-3 mt-10 font-cinzel text-[28px] font-semibold uppercase tracking-[0.02em] text-vellum">{ children }</h1>,
    h2: ({ children }) => (
      <h2 className="mb-3 mt-10 font-cinzel text-[24px] font-medium uppercase tracking-[0.02em] text-vellum">
        <span className="art-h2-num" />{ children }
      </h2>
    ),
    h3: ({ children }) => <h3 className="mb-2 mt-6 font-cinzel text-lg font-medium uppercase tracking-[0.02em] text-vellum">{ children }</h3>,
    h4: ({ children }) => <h4 className="mb-2 mt-5 font-cinzel text-base font-medium uppercase text-vellum">{ children }</h4>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-candleflame pl-5 font-cardo text-[20px] italic leading-[1.5] text-vellum">{ children }</blockquote>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="relative mb-2 pl-5 font-sans text-[16px] leading-[1.7] text-stone-200 before:absolute before:left-0 before:top-1 before:text-[8px] before:text-candleflame before:content-['▲']">{ children }</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-vellum">{ children }</strong>,
    em: ({ children }) => <em className="italic text-candleflame">{ children }</em>,
    link: ({ children, value }) => (
      <Link
        className="border-b border-current text-candleflame transition-colors duration-fast ease-ease hover:text-vellum"
        href={value?.href ?? '#'}
        target="_blank"
      >
        { children }

        <FaExternalLinkAlt className="ml-1 inline-block text-[9px]" />
      </Link>
    ),
  },
  types: {
    code: ({ value }) => <CodeBlock value={value} />,
    image: ({ value }) => (
      <figure className="my-8">
        <div className="overflow-hidden rounded-md border border-line-10">
          <Image
            alt={value?.alt ?? ''}
            blurDataURL={value?.asset?.metadata?.blurHash}
            className="h-auto w-full"
            height={600}
            placeholder={value?.asset?.metadata?.blurHash ? 'blur' : 'empty'}
            src={value?.asset?.url}
            width={900}
          />
        </div>
        { value?.source && (
          <figcaption className="mt-2 text-center font-mono text-[10px] text-stone-600">
            source:{' '}
            <Link className="text-candleflame hover:text-vellum" href={value.source} target="_blank">
              { value.sourceName ?? value.source }
            </Link>
          </figcaption>
        ) }
      </figure>
    ),
  },
};

export function ArticleBody({ body }: { body: any }): JSX.Element {
  return (
    <div className="article-prose">
      <PortableText components={components} value={body} />
    </div>
  );
}
