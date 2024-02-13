'use client';

import { getFormattedDate } from '@/utils/date-formatter';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

export function BlogCard({ data }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      { data.map((item: any) => (
        <Link
          className="relative rounded-xl overflow-hidden text-white group w-full h-60 cursor-pointer"
          href={ `blog/${item.slug.current}` }
          key={ item._id }
        >
          <Image
            alt={ item.mainImage.alt }
            blurDataURL={ item.mainImage.asset.metadata.blurHash }
            className="group-hover:scale-110 transition-all duration-300 object-cover"
            fill
            src={ item.mainImage.asset.url }
          />

          <div className="absolute top-0 w-full h-full flex flex-col justify-end bg-black/50 p-3">
            <span className="opacity-80 text-[15px]">{ item.type }</span>

            <h5 className="text-white font-semibold text-xl">{ item.title }</h5>

            <div className="flex items-center text-xs gap-4 pt-1 opacity-70">
              <span className='flex items-center gap-1'><FaRegCalendarAlt className='mb-[1px]'/>{ getFormattedDate(item.publishedAt) }</span>

              <span className='flex items-center gap-1'><FaRegClock className='mb-[1px]' />{ `${Math.round(item.char / 1000)} minutes read` }</span>
            </div>
          </div>
        </Link>
      )) }
    </div>
  );
}
