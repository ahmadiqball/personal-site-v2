import type { Metadata } from 'next';

import { getBlogDataList } from '@/app/api/sanity';
import { BlogCard } from '@/components/blog/blog-card';

export const metadata: Metadata = {
  title: 'Ahmad Iqbal | Resume',
};

export default async function Blog() {
  const blogList = await getBlogDataList();

  return (
    <div className="min-h-[calc(100vh-208px)] sm:min-h-[calc(100vh-272px)] lg:min-h-[calc(100vh-80px)] min-w-screen">

      <BlogCard data={ blogList } />

    </div>
  );
}
