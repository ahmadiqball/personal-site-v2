"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaHome, FaBook, FaUser, FaTasks } from "react-icons/fa";

const navList = ["projects", "blog", "home", "resume"];

export default function Navbar() {
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
    <nav className="fixed bottom-0 left-0 w-[calc(100vw-24px)] z-40 mb-3 mx-3 flex">
      <div className="h-[63px] w-4 rounded-l-xl bg-white mt-8"/>
      <div className="pt-8 overflow-hidden grow shrink">
        <div className="relative w-full flex justify-between">
          {navList.map((item, index) => (
            <div
              key={index}
              className="flex relative flex-1 flex-col items-center pt-3 pb-2 hover:cursor-pointer"
              onClick={() => changeNav(index, item)}
            >
              <div
                className={`z-10 ease-in-out transition-all duration-300 ${
                  active === index &&
                  "bg-transparent absolute -translate-y-[24px]"
                }`}
              >
                {item === "projects" ? (
                  <FaTasks
                    className={`${
                      active === index ? "text-bgLight" : "text-gray-400"
                    } text-xl`}
                  />
                ) : null}
                {item === "blog" ? (
                  <FaBook
                    className={`${
                      active === index ? "text-bgLight" : "text-gray-400"
                    } text-xl`}
                  />
                ) : null}
                {item === "home" ? (
                  <FaHome
                    className={`${
                      active === index ? "text-bgLight" : "text-gray-400"
                    } text-xl`}
                  />
                ) : null}
                {item === "resume" ? (
                  <FaUser
                    className={`${
                      active === index ? "text-bgLight" : "text-gray-400"
                    } text-xl`}
                  />
                ) : null}
              </div>
              <p
                className={`${
                  active === index ? "text-mainLight" : "text-gray-400"
                } text-[10px] font-semibold pt-2 grow flex items-end capitalize`}
              >
                {item}
              </p>
            </div>
          ))}

          <div
            className={`absolute bg-mainLight w-[60px] h-[60px] top-0 rounded-[50%] left-0 ease-in-out transition-all duration-[300ms] -z-10`}
            style={{
              transform: `translate(calc(calc(calc(100vw - 56px) / ${4 / (active + 0.5)}) - 50%), -51%)`,
            }}
          >
            <div 
              className="absolute w-[75vw] h-[63px] top-1/2 right-[calc(100%+10px)] bg-white"
            />
            <div className="absolute w-[calc(100%+24px)] h-[63px] top-1/2 -left-[12px] overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 500 500" className="fill-white">
                <path d="M0 250v250h500V0h-4.2c-6.5 0-16.6 2.7-22.2 6-11.3 6.4-20.4 19.1-22.7 31.5-8.8 46.8-32.3 88.9-66.4 118.8-19.3 16.9-48.2 33.4-72.1 41.2-42.1 13.6-87.8 13.6-129.4-.1-12.9-4.3-35.6-15.2-47-22.5C90.4 145.4 57.8 98 46.5 44.5c-3.1-14.9-6.8-22.9-14-30.4C24.9 6.1 11.7 0 2 0 0 0 0 2.8 0 250z"/>
              </svg>
            </div>
            <div 
              className="absolute w-[75vw] h-[63px] top-1/2 left-[calc(100%+10px)] bg-white"
            />
          </div>
        </div>
      </div>
     <div className="h-[63px] w-4 rounded-r-xl bg-white mt-8"/>
    </nav>
  );
}
