import Stack from "@/components/projects/Stack";
import { works, techStack, volunteer } from "./resumeData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ahmad Iqbal | Resume',
};

export default function Profile() {
  return (
    <div className="pt-8 dark:text-white">
      <div>
        <h2 className="text-2xl font-bold sm:text-4xl">Ahmad Iqbal Yahya</h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400">
          Front End/Data Science
        </h3>
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold pb-2 sm:text-2xl">Work Experience</h3>
        {works.map((work, index) => (
          <div key={index} className="mt-2">
            <h5 className="text-md text-gray-500 dark:text-gray-400">{work.time}</h5>
            <div>
              <h4 className="text-md font-semibold">{work.title}</h4>
              <h5 className="text-md">{work.company}</h5>
              <ol className="list-disc text-sm pt-1 ml-6">
                {work.desc.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3></h3>
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold pb-2 sm:text-2xl">Education</h3>
        <div>
          <h5 className="text-md text-gray-500 dark:text-gray-400">August, 2018 - June, 2023</h5>
          <div>
            <h4 className="text-md font-semibold">
              Bandung Institute of Technology, Bandung
            </h4>
            <h5 className="text-md">
              Bachelor of Engineering, Aerospace Engineering
            </h5>
            <p className="text-sm pt-2">
              Working on a bachelor thesis titled "Development of Aircraft's
              Autopilot System for Take-off Phase Using Articial Neural Network"
              as being part of expertise group of Flight Physics and Aircraft
              Design, Operation, and Maintenance
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold pb-2 sm:text-2xl">Tech Stack</h3>
        {techStack.map((tech, index) => (
          <div key={index} className="pb-3">
            <h4 className="text-md font-semibold pb-2">{tech.role}</h4>
            <div className="flex gap-3">
              {tech.stacks.map((item, id) => (
                <span key={id}>
                  <Stack stack={item.icon} />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold pb-2 sm:text-2xl">Voluntray/Organizational Experience</h3>
        {volunteer.map((work, index) => (
          <div key={index} className="mt-2">
            <h5 className="text-md text-gray-500 dark:text-gray-400">{work.time}</h5>
            <div>
              <h4 className="text-md font-semibold">{work.title}</h4>
              <h5 className="text-md">{work.company}</h5>
              <ol className="list-disc text-sm pt-1 ml-6">
                {work.desc.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
