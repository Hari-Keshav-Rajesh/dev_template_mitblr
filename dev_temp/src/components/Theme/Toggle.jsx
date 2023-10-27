"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { useState } from "react"

import "../../app/globals.css"



export function ModeToggle() {

  const sunIconClasses = "h-[2.2rem] w-[2.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 shadow-inner"
  const moonIconClasses = " h-[2.2rem] w-[2.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 shadow-inner"

  const { setTheme } = useTheme()
  const [dark,setDark] = useState(false)
  const [icon,setIcon] = useState(<SunIcon />)


  const initialTheme = "dark"
  useState(() => {
    setTheme(initialTheme)
    setDark(initialTheme === "dark")
    setIcon(initialTheme === "dark" ? <MoonIcon className={moonIconClasses}/> : <SunIcon  className={sunIconClasses}/>)
  })

  const toggleTheme = () => {
      setDark(!dark)
      setIcon(dark ? <SunIcon className={sunIconClasses}/> : <MoonIcon className={moonIconClasses}/>)
      setTheme(dark ? "light" : "dark")
  }

  return (
    <div>
      <button 
      className=" h-fit w-fit"
      onClick={toggleTheme}
      >
        {icon}
      </button>
    </div>
  )
}
