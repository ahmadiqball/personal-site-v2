"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  SiLinkedin,
  SiGithub,
  SiHackerrank,
  SiInstagram,
} from "react-icons/si";

export default function Banner() {
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isDelete, setIsDelete] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const profText = ["Web Developer", "Data Scientist"];
  const period = 2000;

  const type = () => {
    let idx = loopNum % profText.length;
    let fullText = profText[idx];
    let movingText = isDelete
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(movingText);

    if (isDelete) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDelete && movingText === fullText) {
      setIsDelete(true);
      setDelta(period);
    } else if (isDelete && movingText === "") {
      setIsDelete(false);
      setLoopNum((prevNum) => prevNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let typer = setInterval(() => {
      type();
    }, delta);

    return () => {
      clearInterval(typer);
    };
  }, [text, delta]);

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
          Ahmad Iqbal<br></br>
          <span>
            <span className="border-r text-2xl lg:text-3xl font-semibold border-[#666]">
              {text}
            </span>
          </span>
        </h1>

        <p className="pt-3 dark:text-gray-100 sm:max-w-xs lg:max-w-md">
          A fronted developer and data scientist that eager to learn and grow.
          Excited to use my skills to create engaging and interactive things.
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
