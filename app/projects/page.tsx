"use client";

import Image from "next/image";
import { BsGlobe } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";
import { SiGithub } from "react-icons/si";

import { projectData } from "@/components/projectData";
import { useRouter } from "next/navigation";

export default function Projects() {
  const datas = projectData.sort((a, b) => (a.id < b.id ? 1 : -1));
  const router = useRouter();

  const navDetail = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div>
      <title>Ahmad Iqbal | Projects</title>

      <h2 className="text-3xl text-bgDark font-bold dark:text-white pb-5">Projects</h2>
      <div className="grid grid-col-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {datas.map((item) => (
          <div
            key={item.id}
            className="relative px-4 py-4 rounded-md overflow-hidden z-10 hover:cursor-pointer"
            onClick={() => navDetail(item.id)}
          >
            <div className="absolute -z-10 bg-black dark:bg-white w-full h-full top-0 left-0 opacity-10 backdrop-blur-3xl" />
            <Image
              src={`/projects/${item.image}`}
              alt={item.image}
              width={400}
              height={400}
              className="w-full aspect-video"
            />
            <h4 className="text-xl text-bgDark dark:text-white font-bold pt-4 pb-1">
              {item.name}
            </h4>
            <p className="line-clamp-4 text-bgDark dark:text-gray-100">
              {item.desc}
            </p>

            <div className="pt-3 dark:text-white flex justify-between items-center">
              <div className="flex items-center gap-4">
                {item.deploy ? (
                  <a href={item.deploy}>
                    <BsGlobe className="text-xl text-gray-500 hover:text-gray-800 hover:pointer dark:hover:text-white" />
                  </a>
                ) : null}
                {item.repo ? (
                  <a href={item.repo}>
                    <SiGithub className="text-xl text-gray-500 hover:text-gray-800 hover:pointer dark:hover:text-white" />
                  </a>
                ) : null}
              </div>
              <CgArrowLongRight
                className="text-3xl hover:pointer"
                onClick={() => navDetail(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
