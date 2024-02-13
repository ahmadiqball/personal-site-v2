import type { Metadata } from 'next';

import { getResumeData } from '@/app/api/sanity';
import EducationsField from '@/components/resume/educations-field';
import WorksField from '@/components/resume/works-field';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Ahmad Iqbal | Resume',
};

export default async function Profile() {
  const resume = await getResumeData();

  return (
    <div className="pt-8 dark:text-white">
      <div>
        <h2 className="text-2xl font-bold sm:text-4xl">{ resume.fullname }</h2>

        <h3 className="text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400">
          { resume.position }
        </h3>
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold pb-2 sm:text-2xl">
          Work Experience
        </h3>

        <WorksField works={ resume.works } />
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold pb-2 sm:text-2xl">Education</h3>

        <EducationsField education={ resume.educations } />
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold pb-2 sm:text-2xl">Tech Stack</h3>

        { resume.stacks.map((tech: any) => (
          <div className="pb-3" key={ tech._key }>
            <h4 className="text-md font-semibold pb-2">{ tech.category }</h4>

            <div className="flex gap-3">
              { tech.stack.map((item: any) => (
                <Image
                  alt={ item.icon.asset.originalFilename }
                  className="h-6 w-6"
                  height={ 50 }
                  key={ item._id }
                  src={ item.icon.asset.url }
                  width={ 50 }
                />
              )) }
            </div>
          </div>
        )) }
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold pb-2 sm:text-2xl">
          Voluntray/Organizational Experience
        </h3>

        <WorksField works={ resume.volunteer } />
      </div>
    </div>
  );
}
