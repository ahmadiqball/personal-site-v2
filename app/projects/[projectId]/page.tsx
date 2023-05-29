"use client";

import { projectData, Project } from "@/components/projectData";
import Stack from "@/components/projects/Stack";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

export default function ProjectDetail() {
  const pathname = usePathname();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const id = pathname.split("/").slice(-1)[0];
    const data = projectData.filter((item) => item.id === id);
    setProject(data[0]);
  }, [pathname]);

  return (
    <div className="py-8 lg:flex lg:justify-end min-h-[calc(100vh-80px)] lg:relative">
      <title>{`Ahmad Iqbal | ${project?.name}`}</title>

      <Image
        src={`/projects/${project?.image}`}
        alt={project?.image || "project-image"}
        width={400}
        height={400}
        className="w-full rounded-lg aspect-video lg:w-1/2 lg:absolute lg:top-[calc(50vh-40px)] lg:-translate-y-1/2 lg:left-1/4 lg:-translate-x-1/2"
      />

      <div className="my-auto lg:w-1/2 lg:pl-10">
        <h2 className="text-2xl text-bgDark dark:text-white font-bold mt-8 lg:mt-0">
          {project?.name}
        </h2>
        <div className="flex divide-x divide-gray-500 dark:divide-gray-300 font-semibold text-lg text-gray-500 dark:text-gray-300">
          <h5 className="pr-4">{project?.type}</h5>
          <h5 className="pl-4">{project?.date}</h5>
        </div>
        <div className="flex gap-4 pt-5">
          {project?.deploy ? (
            <a
              href={project?.deploy}
              className="p-2 bg-blue-300 bg-opacity-80 rounded-md flex gap-2 items-center text-white"
            >
              <BsGlobe className="text-xl hover:pointer" />
              Website
            </a>
          ) : null}
          {project?.repo ? (
            <a
              href={project?.repo}
              className="p-2 bg-gray-600 bg-opacity-80 rounded-md flex gap-2 items-center text-white"
            >
              <SiGithub className="text-xl hover:pointer" />
              Repository
            </a>
          ) : null}
        </div>

        <h5 className="text-xl text-bgDark dark:text-white font-semibold pt-5">
          Stack
        </h5>
        <div className="flex gap-3 pt-3">
          {project?.stack.map((item, index) => (
            <Stack key={index} stack={item} />
          ))}
        </div>
        {project?.features.length !== 0 ? (
          <>
            <h5 className="text-xl text-bgDark dark:text-white font-semibold pt-5">
              Features
            </h5>
            <ul className="max-w-full pt-3 dark:text-white">
              {project?.features.map((item, index) => (
                <li key={index} className="flex gap-1">
                  <p className="min-w-[16px]">{index + 1}.</p>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <p className="pt-5 text-justify text-bgDark dark:text-white">{project?.desc}</p>
      </div>
    </div>
  );
}
