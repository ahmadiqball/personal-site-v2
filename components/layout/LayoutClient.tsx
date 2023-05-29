'use client';

import { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import NavbarFloat from "./NavbarFloat";
import NavbarFloatRight from "./NavbarFloatRight";

export default function LayoutClient() {
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
      function windowResize() {
        setWidth(window.innerWidth);
      }
  
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
  
      window.addEventListener("resize", windowResize);
      setWidth(window.innerWidth);
  
      return () => {
        window.removeEventListener("resize", windowResize);
      };
    }, []);

    return(
        <div>
            {width ? width! < 768 ? <Header /> : null : null}
            {width ? width! < 768 ? <Navbar /> : null : null}
          {width ? (
            width! >= 768 && width! < 1024 ? (
              <NavbarFloat />
            ) : null
          ) : null}
          {width ? width! >= 1024 ? <NavbarFloatRight /> : null : null}
        </div>
    )
}