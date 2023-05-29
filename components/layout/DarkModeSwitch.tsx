"use client";

import { useEffect, useState } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

export default function DarkModeSwitch() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
        setMode("dark")
    } else {
        setMode("light")
    }
  })

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      onClick={changeMode}
      className={`relative p-1 rounded-[32px] w-24 lg:w-fit lg:h-28 lg:flex-col flex items-center ${
        mode === "light" ? "bg-[#FFBF00]" : "bg-[#250B82]"
      } overflow-hidden hover:cursor-pointer`}
    >
      <div
        className={`shadow-[0_0_40px_10px_#FB6BB6] rounded-[50%] transition-all ease-in duration-500 ${
          mode === "dark" && "translate-x-[52px] lg:translate-x-0 lg:translate-y-[66px]"
        }`}
      >
        <div
          className={`p-1 border-4 border-white shadow-inner bg-gray-50 rounded-[50%] z-10 relative`}
        >
          {mode === "light" && (
            <BsSun
              className={`text-xl text-[#FFBF00] ${
                mode === "light" ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
          {mode === "dark" && (
            <BsMoonStars
              className={`text-xl text-[#250B82] ${
                mode === "dark" ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>
      </div>

      <div
        className={`text-white text-xs text-center grow font-bold lg:pt-5 ease-in-out transition-all duration-500 ${
          mode === "light" ? "opacity-100" : "opacity-0"
        }`}
      >
        <p>Light</p>
        <p>Mode</p>
      </div>

      <div
        className={`absolute left-4 lg:top-5 lg:left-[6px] text-white text-xs text-center grow font-bold ease-in-out transition-all duration-500 ${
          mode === "dark" ? "opacity-100" : "opacity-0"
        }`}
      >
        <p>Dark</p>
        <p>Mode</p>
      </div>
    </div>
  );
}
