'use client'

import AppStore from "@/store/store";
import { ThemeContextType } from "@/types/UiInfoTypes";
import React, { createContext, useState } from "react"
import { Provider } from "react-redux";

export const themeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [classTheme, setClassTheme] = useState("slide-one");
    return (
        <themeContext.Provider value={{ classTheme, setClassTheme }}>
            <Provider store={AppStore}>
                <div className={`${classTheme} h-full`}>
                    {children}
                </div>
            </Provider>
        </themeContext.Provider>
    )
}