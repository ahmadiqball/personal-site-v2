'use client'

import { BsGlobe } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";
import { SiGithub } from "react-icons/si";
import {PortableText} from '@portabletext/react';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectCard({project}: any) {
    const router = useRouter();

    return(
        <div
            key={project._id}
            className="relative px-4 py-4 rounded-md overflow-hidden z-10 hover:cursor-pointer w-full grow "
            onClick={() => router.push(`/projects/${project.slug.current}`)}
        >
            <div className="absolute -z-10 bg-black dark:bg-white w-full h-full top-0 left-0 opacity-10 backdrop-blur-3xl" />
            <Image
                src={project.images[0].asset.url}
                alt={project.images[0].asset.url}
                width={400}
                height={400}
                className="w-full aspect-video"
            />
            <h4 className="text-xl text-bgDark dark:text-white font-bold pt-4 pb-1 line-clamp-1">
                {project.projectName}
            </h4>
            <div className="line-clamp-4 text-bgDark dark:text-gray-100">
                <PortableText value={project.description} />
            </div>
            <div className="pt-3 dark:text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
                {project.webUrl ? (
                    <a href={project.webUrl}>
                        <BsGlobe className="text-xl hover:pointer text-gray-500 hover:text-gray-800 dark:hover:text-white" />
                    </a>
                ) : null}
                {project.repoUrl ? (
                    <a href={project.repoUrl}>
                        <SiGithub className="text-xl hover:pointer text-gray-500 hover:text-gray-800 dark:hover:text-white" />
                    </a>
                ) : null}
            </div>
            <CgArrowLongRight className="text-3xl hover:cursor-pointer" />
            </div>
        </div>
    )
}