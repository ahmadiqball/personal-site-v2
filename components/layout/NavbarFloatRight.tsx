"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaHome, FaBook, FaUser, FaTasks } from "react-icons/fa";
import DarkModeSwitch from "./DarkModeSwitch";

const navList = ["projects", "blog", "home", "resume"];

export default function NavbarFloatRight() {
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
  }, [pathname, router]);

  const changeNav = (index: number, item: string) => {
    setActive(index);
    if (item === "home") {
      router.push("/");
    } else {
      router.push(`/${item}`);
    }
  };

  return (
    <nav className="fixed flex flex-col items-center justify-between right-5 top-1/2 -translate-y-1/2 h-[90vh] bg-white px-2 py-10 z-40 rounded-3xl">
      <h1 className="text-4xl text-[#5560b3] font-extrabold">
        A<span>I</span>
        <span className="text-black text-5xl leading-3">.</span>
      </h1>

      <DarkModeSwitch />

      <div className="relative flex flex-col items-center justify-between h-[328px]">
        {navList.map((item, index) => (
          <div
            key={index}
            className="flex relative grow flex-col items-center justify-center py-4 w-[44px] hover:cursor-pointer"
            onClick={() => changeNav(index, item)}
          >
            <div
              className={`z-10 ease-in-out transition-all duration-300 ${
                active === index &&
                "bg-transparent relative -translate-x-[35px]"
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
                active === index ? "text-white -translate-x-[35px]" : "text-gray-400"
              } text-xs pt-1 font-semibold  capitalize z-10 ease-in-out transition-all duration-300`}
            >
              {item}
            </p>
          </div>
        ))}

        <div
          className={`absolute bg-mainLight w-[68px] h-[68px] top-0 rounded-[50%] left-0 ease-in-out transition-all duration-300`}
          style={{
            transform: `translate(calc(-51% - 12px), calc(calc(328px)*${
              0.125 + 0.25 * active
            } - 50%))`,
          }}
        >
          <span className="w-[42px] h-[84px] rounded-r-full absolute -top-2 left-1/2 bg-[#D8D1D8] dark:bg-[#1C1D27] -z-50" />
          <span className="bg-mainLight w-[68px] h-[68px] rounded-[50%] absolute top-0 left-0" />
          <span className="absolute h-4 w-4 top-0 left-1/2 -translate-y-[21px] bg-[#D8D1D8] dark:bg-[#1C1D27] ">
            <span className="w-5 h-5 bg-white absolute left-0 bottom-0  rounded-bl-full" />
          </span>
          <span className="absolute h-4 w-4 bottom-0 left-1/2 translate-y-[21px] bg-[#D8D1D8] dark:bg-[#1C1D27] ">
            <span className="w-5 h-5 bg-white absolute left-0 top-0  rounded-tl-full" />
          </span>
        </div>
      </div>
    </nav>
  );
}
