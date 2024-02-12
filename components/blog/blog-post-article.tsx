'use client';

import type { PortableTextReactComponents } from '@portabletext/react';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const components: Partial<PortableTextReactComponents> = {
  block: {
    blockquote: ({ children }) => (
      <p className="my-2 py-3 px-3 bg-white/30 border-l-4 border-[#6a77d7]">{ children }</p>
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
      <Link className="underline text-[#3f4881] dark:text-[#d1d6f6]" href={ value.href } target="_blank">
        { children }

        <FaExternalLinkAlt className="text-[10px] ml-1 inline-block" />
      </Link>
    ),
  },
  types: {
    image: ({ value }) => (
      <Image
        alt={ value.alt }
        blurDataURL={ value.asset.metadata.blurHash }
        className="w-full my-5 rounded-lg"
        height={ 400 }
        placeholder="blur"
        src={ value.asset.url }
        width={ 400 }
      />
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
