'use client';

import Image from 'next/image';

export function BlogCard({ data }) {
  console.log('🚀 ~ BlogCard ~ props:', data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      { data.map((item) => (
        <div className="relative rounded-xl overflow-hidden text-white group w-full h-60" key={ item._id }>
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

            <div className="flex items-center text-sm gap-2 pt-1 opacity-70">
              <span>{ (new Date(item.publishedAt)).toDateString() }</span>

              <span className="w-1 h-1 bg-white rounded-full" />

              <span>{ `${Math.round(item.char / 1000)} minutes read` }</span>
            </div>
          </div>
        </div>
      )) }
    </div>
  );
}
