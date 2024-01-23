"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import DarkModeSwitch from "./dark-mode-switch";
import { navList } from "./layout.constants";



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
    <nav className="fixed flex flex-col items-center justify-between right-5 top-1/2 -translate-y-1/2 h-[90vh] px-2 py-10 z-40 rounded-3xl">
      <h1 className="text-4xl text-[#5560b3] font-extrabold rounded-t-3xl ml-12 px-[14px] py-8 bg-white">
        A<span>I</span>
        <span className="text-black text-5xl leading-3">.</span>
      </h1>

      <div className="grow px-[19px] -my-1 bg-white ml-12">
        <DarkModeSwitch />
      </div>

      <div className="overflow-hidden pl-12 py-3">
        <div className="relative flex flex-col items-center justify-between h-[328px] w-[82px]">
          {navList.map((item, index) => (
            <div
              key={index}
              className="flex relative grow flex-col items-center justify-center py-4 w-[44px] hover:cursor-pointer"
              onClick={() => changeNav(index, item.label)}
            >
              <div
                className={`z-10 ease-in-out transition-all duration-300 ${
                  active === index &&
                  "bg-transparent relative -translate-x-[40px]"
                }`}
              >
                <item.Icon
                  className={`${
                    active === index ? "text-bgLight" : "text-gray-400"
                  } text-3xl`}
                />
              </div>
              <p
                className={`${
                  active === index ? "text-white -translate-x-[40px]" : "text-gray-400"
                } text-xs pt-1 font-semibold  capitalize z-10 ease-in-out transition-all duration-300`}
              >
                {item.label}
              </p>
            </div>
          ))}

          <div
            className={`absolute bg-mainLight w-[68px] h-[68px] top-0 rounded-[50%] left-0 ease-in-out transition-all duration-300`}
            style={{
              transform: `translate(-50%, calc(calc(328px)*${
                0.125 + 0.25 * active
              } - 50%))`,
            }}
          >
            <div className="absolute w-[82px] h-[300px] left-1/2 bottom-[calc(100%+14px)] bg-white" />
              <div className="absolute w-[calc(100%+30px)] h-[82px] left-[calc(50%-8px)] -top-[7px] overflow-hidden -rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 500 500" className="fill-white">
                  <path d="M0 250v250h500V0h-4.2c-6.5 0-16.6 2.7-22.2 6-11.3 6.4-20.4 19.1-22.7 31.5-8.8 46.8-32.3 88.9-66.4 118.8-19.3 16.9-48.2 33.4-72.1 41.2-42.1 13.6-87.8 13.6-129.4-.1-12.9-4.3-35.6-15.2-47-22.5C90.4 145.4 57.8 98 46.5 44.5c-3.1-14.9-6.8-22.9-14-30.4C24.9 6.1 11.7 0 2 0 0 0 0 2.8 0 250z"/>
                </svg>
              </div>
            <div className="absolute w-[82px] h-[300px] left-1/2 top-[calc(100%+14px)] bg-white"/>
          </div>
        </div>
      </div>
      <div className="w-[82px] h-[24px] ml-12 -mt-[1px] bg-white rounded-b-3xl"/>
    </nav>
  );
}
