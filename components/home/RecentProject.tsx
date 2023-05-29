"use client";

import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";
import Link from "next/link";
import { projectData } from "../projectData";
import { useRouter } from "next/navigation";

export default function RecentProject() {
  const router = useRouter();

  return (
    <section className="mt-16">
      <h3 className="text-2xl text-bgDark dark:text-white font-bold pb-5">
        Recent Projects
      </h3>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-6">
        {projectData
          .slice(-3)
          .reverse()
          .map((item) => (
            <div
              key={item.id}
              className="relative px-4 py-4 rounded-md overflow-hidden z-10 hover:cursor-pointer w-full grow sm:max-w-[calc(50%-12px)] lg:max-w-[calc(33%-24px)] "
              onClick={() => router.push(`/projects/${item.id}`)}
            >
              <div className="absolute -z-10 bg-black dark:bg-white w-full h-full top-0 left-0 opacity-10 backdrop-blur-3xl" />
              <Image
                src={`/projects/${item.image}`}
                alt={item.image}
                width={400}
                height={400}
                className="w-full aspect-video"
              />
              <h4 className="text-xl text-bgDark dark:text-white font-bold pt-4 pb-1 line-clamp-1">
                {item.name}
              </h4>
              <p className="line-clamp-4 text-bgDark dark:text-gray-100">
                {item.desc}
              </p>
              <div className="pt-3 dark:text-white flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {item.deploy ? (
                    <a href={item.deploy}>
                      <BsGlobe className="text-xl hover:pointer text-gray-500 hover:text-gray-800 dark:hover:text-white" />
                    </a>
                  ) : null}
                  {item.repo ? (
                    <a href={item.repo}>
                      <SiGithub className="text-xl hover:pointer text-gray-500 hover:text-gray-800 dark:hover:text-white" />
                    </a>
                  ) : null}
                </div>
                <CgArrowLongRight className="text-3xl hover:cursor-pointer" />
              </div>
            </div>
          ))}
      </div>

      <Link
        href="/projects"
        className="dark:text-white text-center text-xl mt-6 mx-auto underline block"
      >
        Find more porjects
      </Link>
    </section>
  );
}
