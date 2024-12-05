'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsGlobe } from 'react-icons/bs';
import { CgArrowLongRight } from 'react-icons/cg';
import { SiGithub } from 'react-icons/si';

export default function ProjectCard({ project }: any) {
  const router = useRouter();

  return (
    <div
      className="relative px-4 py-4 rounded-md overflow-hidden z-10 hover:cursor-pointer w-full grow group"
      key={ project._id }
      onClick={ () => router.push(`/portfolio/${project.slug.current}`) }
    >
      <div className="absolute -z-10 bg-white dark:bg-bgDark w-full h-full top-0 left-0 opacity-20 group-hover:opacity-40 dark:group-hover:opacity-30 dark:opacity-50 backdrop-blur-3xl transition-opacity duration-300 ease-in" />

      <Image
        alt={ project.images[0].asset.url }
        className="w-full aspect-video"
        height={ 400 }
        src={ project.images[0].asset.url }
        width={ 400 }
      />

      <h4 className="text-xl text-bgDark dark:text-white font-bold pt-4 pb-1 line-clamp-1">
        { project.projectName }
      </h4>

      <div className="line-clamp-4 text-bgDark dark:text-gray-200 text-sm">
        <PortableText value={ project.description } />
      </div>

      <div className="pt-3 dark:text-white flex justify-between items-center">
        <div className="flex items-center gap-4">
          { project.webUrl
            ? (
              <a href={ project.webUrl }>
                <BsGlobe className="text-xl hover:pointer text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-300" />
              </a>
              )
            : null }

          { project.repoUrl
            ? (
              <a href={ project.repoUrl }>
                <SiGithub className="text-xl hover:pointer text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-300" />
              </a>
              )
            : null }
        </div>

        <CgArrowLongRight className="text-3xl hover:cursor-pointer" />
      </div>
    </div>
  );
}
