import { BlogPostArticle } from '@/components/blog/blog-post-article';
import { getBlogPostData } from '@/sanity/get-data';
import { getFormattedDate } from '@/utils/date-formatter';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: any) {
  const article = await getBlogPostData(params.title);

  if (!article) {
    notFound();
  }

  return (
    <div className="relative max-w-[875px] mx-auto">
      <title>{ article.title }</title>

      <div className="md:max-w-[700px] mx-auto mt-5 mb-3">
        <Image
          alt={ article.mainImage.alt }
          blurDataURL={ article.mainImage.asset.metadata.blurHash }
          className="w-full rounded-xl"
          height={ 400 }
          placeholder="blur"
          src={ article.mainImage.asset.url }
          width={ 400 }
        />

        { article.mainImage.source
          ? (
            <span className="text-xs pt-1 italic flex items-center gap-1 text-bgDark dark:text-bgLight">
              Image source:

              <Link className="underline text-[#3f4881] dark:text-[#d1d6f6] line-clamp-1 max-w-[400px]" href={ article.mainImage.source } target="_blank">
                { article.mainImage.sourceName ? article.mainImage.sourceName : article.mainImage.source }
              </Link>
            </span>
            )
          : null }
      </div>

      <div className="px-1.5 text-bgDark dark:text-bgLight">
        <div className="pb-6">
          <h5 className="font-bold text-2xl lg:text-3xl pt-4">{ article.title }</h5>

          <div className="flex items-center text-sm gap-2 pt-2">
            <p>{ article.type }</p>

            <span className="w-1 h-1 bg-bgDark dark:bg-bgLight rounded-full" />

            <p>{ `${Math.round(article.char / 1000)} minutes read` }</p>
          </div>

          <div className="pt-3 flex items-center gap-3">
            <Image
              alt="avatar"
              className="w-8 h-8 bg-[#6a77d7] rounded-full"
              height={ 50 }
              src="/avatar.png"
              width={ 50 }
            />

            <div className="flex flex-col text-xs gap-1">
              <span className="font-semibold text-sm leading-[14px]">Ahmad Iqbal</span>

              <span className="opacity-70">{ getFormattedDate(article.publishedAt) }</span>
            </div>
          </div>
        </div>

        <BlogPostArticle article={ article } />
      </div>
    </div>
  );
}
