import Link from 'next/link';

import ProjectCard from '../projects/project-card';

export function RecentProject({ projects }: { projects: any }): JSX.Element {
  projects.sort((a: any, b: any) => {
    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
  });

  return (
    <section className="mt-16">
      <h3 className="text-2xl text-bgDark dark:text-white font-bold pb-5">
        Recent Projects
      </h3>

      <div className="grid grid-col-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 justify-center items-center">
        { projects.slice(0, 3).map((item: any) => (
          <ProjectCard key={ item._id } project={ item } />
        )) }
      </div>

      <Link
        className="dark:text-white text-center text-xl mt-6 mx-auto underline block"
        href="/projects"
      >
        Find more porjects
      </Link>
    </section>
  );
}
