import ProjectCard from "@/components/projects/ProjectCard";
import { getProjectsData } from "@/app/api/sanity";

export default async function Projects() {
  const projects = await getProjectsData()
  projects.sort((a: any,b: any) => {
    return (new Date(b.endDate)).getTime() - (new Date(a.endDate)).getTime()
  })

  return (
    <div>
      <title>Ahmad Iqbal | Projects</title>

      <h2 className="text-3xl text-bgDark font-bold dark:text-white pb-5">Projects</h2>
      <div className="grid grid-col-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {projects.map((item: any) => (
          <ProjectCard project={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}
