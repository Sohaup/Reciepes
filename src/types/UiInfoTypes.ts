import React from "react"

export type landingInfoType = {
    title: string,
    description: string,
    imgPath: string ,
    id:number ,
    powerInfoes:powerInfoCardType[]
}

export type powerInfoCardType = {
    name:string ,
    value:number ,
    id:number    
}

export type ThemeContextType = {
    classTheme:string ,
    setClassTheme:React.Dispatch<React.SetStateAction<string>>
}

export type ChefPreviewInfo = {
    path:string , 
    title:string ,
    description:string
}