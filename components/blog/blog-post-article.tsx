'use client';

import type { PortableTextReactComponents } from '@portabletext/react';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaClipboardCheck, FaExternalLinkAlt, FaRegClipboard } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const components: Partial<PortableTextReactComponents> = {
  block: {
    blockquote: ({ children }) => (
      <p className="my-4 py-3 px-3 bg-white/30 border-l-4 border-[#6a77d7]">{ children }</p>
    ),
    h1: ({ children }) => (
      <h1 className="my-2 text-2xl font-bold">{ children }</h1>
    ),
    h2: ({ children }) => (
      <h2 className="my-2 text-xl font-bold">{ children }</h2>
    ),
    h3: ({ children }) => (
      <h3 className="my-2 text-lg font-bold">{ children }</h3>
    ),
    h4: ({ children }) => (
      <h4 className="my-2 text-base font-bold">{ children }</h4>
    ),
    normal: ({ children }) => (
      <p className="my-2">{ children }</p>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="list-disc ml-4">{ children }</li>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <Link
        className="underline text-[#3f4881] dark:text-[#d1d6f6]"
        href={ value.href }
        target="_blank"
      >
        { children }

        <FaExternalLinkAlt className="text-[10px] ml-1 inline-block" />
      </Link>
    ),
  },
  types: {
    code: ({ value }) => {
      const [copied, setCopied] = useState(false);

      function copyToClipboard() {
        navigator.clipboard.writeText(value.code);
        setCopied(true);
      }

      const Icon = copied ? FaClipboardCheck : FaRegClipboard;

      return (
        <div className="my-5">
          <div className="dark:bg-white/40 px-5 py-2 rounded-t-md bg-bgDark/50 text-bgLight/90 flex items-center justify-between text-sm">
            <span>{ value.language }</span>

            <span
              className="flex items-center gap-1 cursor-pointer"
              onClick={ copyToClipboard }
            >
              <Icon className="text-sm" />

              { copied ? 'Copied!' : 'Copy' }
            </span>
          </div>

          <SyntaxHighlighter
            customStyle={{ borderRadius: '0 0 6px 6px', margin: '0 auto', paddingBottom: '20px' }}
            language={ value.language }
            lineNumberStyle={{ color: 'rgb(255,255,255)' }}
            showLineNumbers
            style={ vscDarkPlus }
            useInlineStyles
          >
            { value.code }
          </SyntaxHighlighter>
        </div>
      );
    },
    image: ({ value }) => (
      <div className="max-w-[500px] mx-auto mt-5 mb-3">
        <Image
          alt={ value.alt }
          blurDataURL={ value.asset.metadata.blurHash }
          className="w-full rounded-lg"
          height={ 400 }
          placeholder="blur"
          src={ value.asset.url }
          width={ 400 }
        />

        { value.source
          ? (
            <span className="text-xs pt-1 italic flex items-center gap-1 justify-center">
              Image source:

              <Link className="underline text-[#3f4881] dark:text-[#d1d6f6] line-clamp-1 max-w-[400px]" href={ value.source } target="_blank">
                { value.sourceName ? value.sourceName : value.source }
              </Link>
            </span>
            )
          : null }
      </div>
    ),
  },
};

export function BlogPostArticle(props: any): JSX.Element {
  console.log('🚀 ~ BlogPostArticle ~ props:', props.article);
  return (
    <div className="text-bgDark dark:text-white text-sm text-justify pt-1">
      <PortableText
        components={ components }
        value={ props.article.body }
      />
    </div>
  );
}
