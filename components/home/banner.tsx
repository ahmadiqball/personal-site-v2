'use client';

import {
  SiGithub,
  SiHackerrank,
  SiInstagram,
  SiLinkedin,
} from 'react-icons/si';

import { Ticker } from './ticker';

export function Banner({ profile }: any): JSX.Element {
  return (
    <section className="py-10 flex items-center sm:min-h-[calc(100vh-440px)] min-h-[calc(100vh-40px)] lg:min-h-[calc(100vh-40px)]">
      <div className="lg:pl-36">
        <h1 className="text-3xl text-bgDark dark:text-white font-bold mt-16 sm:text-4xl lg:text-5xl">
          { profile.name }
        </h1>

        <h2 className="text-bgDark dark:text-white mt-2 md:mt-4">
          <Ticker titles={ profile.titles } />
        </h2>

        <p className="pt-3 dark:text-gray-100 sm:max-w-xs lg:max-w-md">
          { profile.description }
        </p>

        <div className="pt-6 flex gap-2">
          <a href="https://www.linkedin.com/in/ahmadiqball">
            <SiLinkedin className="text-2xl text-gray-500 hover:text-[#0077b5] transition-all duration-300" />
          </a>

          <a href="https://github.com/ahmadiqball">
            <SiGithub className="text-2xl text-gray-500 hover:text-[#333] dark:hover:text-white transition-all duration-300" />
          </a>

          <a href="https://www.hackerrank.com/ahmiqbal1412">
            <SiHackerrank className="text-2xl text-gray-500 hover:text-[#00EB64] transition-all duration-300" />
          </a>

          <a href="https://instagram.com/ahmiqball">
            <SiInstagram className="text-2xl text-gray-500 hover:text-[#E60D95] transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
