

import { getSingleProjectData } from "@/app/api/sanity";
import { projectData, Project } from "@/components/projectData";
import Stack from "@/components/projects/Stack";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import {PortableText} from '@portabletext/react'
import { getFormattedDate } from "@/utils/dateFormatter";

export default async function ProjectDetail({params}: any) {
  const project = await getSingleProjectData(params.projectId)

  return (
    <div className="py-8 lg:flex lg:justify-end min-h-[calc(100vh-80px)] lg:relative">
      <title>{`Ahmad Iqbal | ${project?.projectName}`}</title>

      <Image
        src={project.images[0].asset.url}
        alt={project.images[0].asset.originalFilename}
        width={400}
        height={400}
        className="w-full rounded-lg aspect-video lg:w-1/2 lg:absolute lg:top-[calc(50vh-40px)] lg:-translate-y-1/2 lg:left-1/4 lg:-translate-x-1/2"
      />

      <div className="my-auto lg:w-1/2 lg:pl-10">
        <h2 className="text-2xl text-bgDark dark:text-white font-bold mt-8 lg:mt-0">
          {project.projectName}
        </h2>
        <div className="flex flex-col sm:flex-row sm:divide-x divide-gray-500 dark:divide-gray-300 font-semibold text-lg text-gray-500 dark:text-gray-300">
          <h5 className="pr-4">{project.type}</h5>
          <h5 className="sm:pl-4">{getFormattedDate(project.startDate, project.endDate)}</h5>
        </div>
        <div className="flex gap-4 pt-5">
          {project.webUrl ? (
            <a
              href={project.webUrl}
              className="p-2 bg-blue-300 bg-opacity-80 rounded-md flex gap-2 items-center text-white"
            >
              <BsGlobe className="text-xl hover:pointer" />
              Website
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              className="p-2 bg-gray-600 bg-opacity-80 rounded-md flex gap-2 items-center text-white"
            >
              <SiGithub className="text-xl hover:pointer" />
              Repository
            </a>
          ) : null}
        </div>

        {project.stacks && project.stacks.length > 0 ? (
          <>
            <h5 className="text-xl text-bgDark dark:text-white font-semibold pt-5">
              Stack
            </h5>
            <div className="flex gap-3 pt-3">
              {project.stacks?.map((item: any) => (
                <Image key={item._id} src={item.icon.asset.url} alt={item.icon.asset.originalFilename} className="h-6 w-6" width={50} height={50}/> 
              ))}
            </div>
          </>
        ) : null}
        
        {project.features && project.features.length > 0 ? (
          <>
            <h5 className="text-xl text-bgDark dark:text-white font-semibold pt-5">
              Features
            </h5>
            <ul className="max-w-full pt-3 dark:text-white">
              {project.features.map((item: string, index: number) => (
                <li key={index} className="flex gap-1">
                  <p className="min-w-[16px]">{index + 1}.</p>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <div className="pt-5 text-justify text-bgDark dark:text-white">
          <PortableText value={project.description}/>
        </div>
      </div>
    </div>
  );
}
