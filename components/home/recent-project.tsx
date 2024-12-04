import Link from 'next/link';

import ProjectCard from '../projects/project-card';

export function RecentProject({ projects }: { projects: any }): JSX.Element {
  projects.sort((a: any, b: any) => {
    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
  });

  return (
    <section className="mt-16">
      <h3 className="text-2xl text-bgDark dark:text-white font-bold pb-5">
        Featured Portfolio
      </h3>

      <div className="grid grid-col-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 justify-center items-center">
        { projects.map((item: any) => (
          <ProjectCard key={ item._id } project={ item } />
        )) }
      </div>

      <Link
        className="dark:text-gray-400 text-gray-500 hover:text-bgDark text-center text-lg mt-12 mx-auto underline block dark:hover:text-gray-100 transition-colors duration-300"
        href="/portfolio"
      >
        Find more porjects
      </Link>
    </section>
  );
}
