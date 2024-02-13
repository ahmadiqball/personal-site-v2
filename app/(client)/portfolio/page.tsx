import { getProjectsData } from '@/app/api/sanity';
import ProjectCard from '@/components/projects/project-card';

export default async function Projects() {
  const projects = await getProjectsData();
  projects.sort((a: any, b: any) => {
    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
  });

  return (
    <div>
      <title>Ahmad Iqbal | Projects</title>

      <h2 className="text-3xl font-bold text-white pb-2 mt-5">Portfolio</h2>

      {/* <div className="bg-[url(/assets/curvy-2.svg)] dark:bg-[url(/assets/curvy.svg)] bg-cover bg-opacity-5 w-full h-72 bg-center rounded-3xl flex items-center justify-center">
        <h2 className="text-6xl font-bold text-white pb-5">Projects</h2>
      </div> */}

      <div className="grid grid-col-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 mt-3">
        {projects.map((item: any) => (
          <ProjectCard key={item._id} project={item} />
        ))}
      </div>
    </div>
  );
}
