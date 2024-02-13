import { BlogCard } from '../blog/blog-card';

export function RecentBlog({ data }: any): JSX.Element {
  return (
    <section className="mt-16">
      <h4 className="text-2xl text-bgDark dark:text-white font-bold pb-5">
        Blog
      </h4>

      <BlogCard data={ data } />
    </section>
  );
}
