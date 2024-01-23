"use client";

import Image from "next/image";
import {
  SiLinkedin,
  SiGithub,
  SiHackerrank,
  SiInstagram,
} from "react-icons/si";
import Ticker from "./ticker";

export default function Banner({profile, resume}: any) {
  return (
    <section className="py-10 sm:flex sm:flex-row-reverse sm:items-center sm:min-h-[calc(100vh-440px)] min-h-[calc(100vh-40px)] lg:min-h-[calc(100vh-40px)]">
      <Image
        src="/avatar.png"
        alt="avatar"
        className="maskImage h-80 w-72 mx-auto sm:scale-125 lg:scale-150 my-auto"
        width={400}
        height={400}
      />

      <div className="lg:pl-36">
        <h1 className="text-3xl text-bgDark dark:text-white font-bold mt-16 sm:text-4xl lg:text-5xl">
          {profile.name}<br></br>
          <span>
            <Ticker titles={profile.titles}/>
          </span>
        </h1>

        <p className="pt-3 dark:text-gray-100 sm:max-w-xs lg:max-w-md">
          {profile.description}
        </p>

        <div className="pt-6 flex gap-2">
          <a href="https://www.linkedin.com/in/ahmadiqball">
            <SiLinkedin className="text-2xl text-gray-500 hover:text-[#0077b5]" />
          </a>
          <a href="https://github.com/ahmadiqball">
            <SiGithub className="text-2xl text-gray-500 hover:text-[#333] dark:hover:text-white" />
          </a>
          <a href="https://www.hackerrank.com/ahmiqbal1412">
            <SiHackerrank className="text-2xl text-gray-500 hover:text-[#00EB64]" />
          </a>
          <a href="https://instagram.com/ahmiqball">
            <SiInstagram className="text-2xl text-gray-500 hover:text-[#E60D95]" />
          </a>
        </div>
      </div>
    </section>
  );
}
