"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { useState } from "react"
import { useEffect } from "react"

import "../../app/globals.css"



export function ModeToggle() {

  const sunIconClasses = "h-[2.2rem] w-[2.2rem]  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 shadow-inner hover:text-orange-800"
  const moonIconClasses = " h-[2.2rem] w-[2.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 shadow-inner dark:hover:text-gray-950"

  const { setTheme, resolvedTheme } = useTheme();
  const [icon, setIcon] = useState(null); // Initially set to null

  useEffect(() => {
    setTheme(resolvedTheme);
    if (resolvedTheme === "dark") {
      setIcon(<MoonIcon className={moonIconClasses} />);
    } else {
      setIcon(<SunIcon className={sunIconClasses} />);
    }
  }, [resolvedTheme,setTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setIcon(
      newTheme === "dark" ? <MoonIcon className={moonIconClasses} /> : <SunIcon className={sunIconClasses} />
    )
  }

  return (
    <div>
      <button 
      className=" h-fit w-fit bg-slate-300 dark:bg-indigo-900 border-none"
      onClick={toggleTheme}
      >
        {icon}
      </button>
    </div>
  )
}
