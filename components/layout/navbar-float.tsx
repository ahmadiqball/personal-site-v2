"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import DarkModeSwitch from "./dark-mode-switch";
import { navList } from "./layout.constants";

export default function NavbarFloat() {
  const [active, setActive] = useState<number>(2);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currNav = pathname.split("/")[1];
    if (currNav === "portfolio") {
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
    <nav className="fixed flex items-center justify-between bottom-10 left-1/2 -translate-x-1/2 w-[90vw] z-40 rounded-3xl">
      <h1 className="text-4xl text-[#5560b3] font-extrabold mt-9 grow bg-white py-[21px] pl-8 rounded-l-3xl">
        A<span>I</span>
        <span className="text-black text-5xl leading-3">.</span>
      </h1>

      <div className="grow py-[19px] -mx-1 bg-white mt-9">
        <DarkModeSwitch />
      </div>

      <div className="pt-9 overflow-hidden">
        <div className="relative flex justify-between w-[400px]">
          {navList.map((item, index) => (
            <div
              key={index}
              className="flex relative grow flex-col items-center py-4 w-[82px] hover:cursor-pointer"
              onClick={() => changeNav(index, item.label)}
            >
              <div
                className={`z-10 ease-in-out transition-all duration-300 ${
                  active === index &&
                  "bg-transparent absolute -translate-y-[31px]"
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
                  active === index ? "text-mainLight" : "text-gray-400"
                } text-xs font-semibold pt-1 grow flex items-end capitalize`}
              >
                {item.label}
              </p>
            </div>
          ))}

          <div
            className={`absolute bg-mainLight w-[68px] h-[68px] top-0 rounded-[50%] left-0 ease-in-out transition-all duration-300 -z-10`}
            style={{
              transform: `translate(calc(calc(400px)*${
                0.125 + 0.25 * active
              } - 50%), -50%)`,
            }}
          >
            <div className="absolute w-[350px] h-[82px] top-1/2 right-[calc(100%+10px)] bg-white" />
            <div className="absolute w-[calc(100%+24px)] h-[82px] top-1/2 -left-[12px] overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 500 500" className="fill-white">
                <path d="M0 250v250h500V0h-4.2c-6.5 0-16.6 2.7-22.2 6-11.3 6.4-20.4 19.1-22.7 31.5-8.8 46.8-32.3 88.9-66.4 118.8-19.3 16.9-48.2 33.4-72.1 41.2-42.1 13.6-87.8 13.6-129.4-.1-12.9-4.3-35.6-15.2-47-22.5C90.4 145.4 57.8 98 46.5 44.5c-3.1-14.9-6.8-22.9-14-30.4C24.9 6.1 11.7 0 2 0 0 0 0 2.8 0 250z"/>
              </svg>
            </div>
            <div className="absolute w-[350px] h-[82px] top-1/2 left-[calc(100%+10px)] bg-white"/>
          </div>
        </div>
      </div>
      
      <div className="w-[33px] h-[82px] mt-9 -ml-[1px] bg-white rounded-r-3xl"/>
    </nav>
  );
}
