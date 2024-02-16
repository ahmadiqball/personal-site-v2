import type { Metadata } from 'next';

import { BlogCard } from '@/components/blog/blog-card';
import { getBlogDataList } from '@/sanity/get-data';

export const metadata: Metadata = {
  title: 'Ahmad Iqbal | Blog',
};

export default async function Blog() {
  const blogList = await getBlogDataList();

  return (
    <div className="min-h-[calc(100vh-208px)] sm:min-h-[calc(100vh-272px)] lg:min-h-[calc(100vh-80px)] min-w-screen">

      <BlogCard data={ blogList } />

    </div>
  );
}
