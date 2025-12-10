'use client'

import { ThemeContextType } from "@/types/UiInfoTypes";
import React, { createContext, useState} from "react"

export const themeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({children}:{children:React.ReactElement}) {
    const [classTheme , setClassTheme] = useState("slide-one");
    return (
        <themeContext.Provider value={{classTheme , setClassTheme}}>
            <div className={`${classTheme} h-full`}>
                 {children}
            </div>           
        </themeContext.Provider>
    )
}