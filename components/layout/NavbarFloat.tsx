"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaHome, FaBook, FaUser, FaTasks } from "react-icons/fa";
import DarkModeSwitch from "./DarkModeSwitch";

const navList = ["projects", "blog", "home", "resume"];

export default function NavbarFloat() {
  const [active, setActive] = useState<number>(2);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currNav = pathname.split("/")[1];
    if (currNav === "projects") {
      setActive(0);
    } else if (currNav === "blog") {
      setActive(1);
    } else if (currNav === "resume") {
      setActive(3);
    } else if (currNav === "home") {
      setActive(2);
    } else {
      router.push("/");
    }
  }, [pathname]);

  const changeNav = (index: number, item: string) => {
    setActive(index);
    if (item === "home") {
      router.push("/");
    } else {
      router.push(`/${item}`);
    }
  };

  return (
    <nav className="fixed flex items-center justify-between bottom-10 left-1/2 -translate-x-1/2 w-[90vw] bg-white px-8 z-40 rounded-3xl">
      <h1 className="text-4xl text-[#5560b3] font-extrabold">
        A<span>I</span>
        <span className="text-black text-5xl leading-3">.</span>
      </h1>

      <DarkModeSwitch />

      <div className="relative flex justify-between w-[400px]">
        {navList.map((item, index) => (
          <div
            key={index}
            className="flex relative grow flex-col items-center py-4 w-[82px] hover:cursor-pointer"
            onClick={() => changeNav(index, item)}
          >
            <div
              className={`z-10 ease-in-out transition-all duration-300 ${
                active === index &&
                "bg-transparent absolute -translate-y-[31px]"
              }`}
            >
              {item === "projects" ? (
                <FaTasks
                  className={`${
                    active === index ? "text-bgLight" : "text-gray-400"
                  } text-3xl`}
                />
              ) : null}
              {item === "blog" ? (
                <FaBook
                  className={`${
                    active === index ? "text-bgLight" : "text-gray-400"
                  } text-3xl`}
                />
              ) : null}
              {item === "home" ? (
                <FaHome
                  className={`${
                    active === index ? "text-bgLight" : "text-gray-400"
                  } text-3xl`}
                />
              ) : null}
              {item === "resume" ? (
                <FaUser
                  className={`${
                    active === index ? "text-bgLight" : "text-gray-400"
                  } text-3xl`}
                />
              ) : null}
            </div>
            <p
              className={`${
                active === index ? "text-mainLight" : "text-gray-400"
              } text-xs font-semibold pt-1 grow flex items-end capitalize`}
            >
              {item}
            </p>
          </div>
        ))}

        <div
          className={`absolute bg-mainLight w-[68px] h-[68px] top-0 rounded-[50%] left-0 ease-in-out transition-all duration-300`}
          style={{
            transform: `translate(calc(calc(400px)*${
              0.125 + 0.25 * active
            } - 50%), -52%)`,
          }}
        >
          <span className="w-[84px] h-[42px] rounded-b-full absolute top-1/2 -left-2 bg-bgLight dark:bg-bgDark -z-50" />
          <span className="bg-mainLight w-[68px] h-[68px] rounded-[50%] absolute top-0 left-0" />
          <span className="absolute h-4 w-4 top-1/2 left-0 -translate-x-[21px] bg-bgLight dark:bg-bgDark ">
            <span className="w-5 h-5 bg-white absolute top-[1px] right-0  rounded-tr-full" />
          </span>
          <span className="absolute h-4 w-4 top-1/2 right-0 translate-x-[21px] bg-bgLight dark:bg-bgDark ">
            <span className="w-5 h-5 bg-white absolute top-[1px] left-0  rounded-tl-full" />
          </span>
        </div>
      </div>
    </nav>
  );
}
