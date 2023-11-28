import { Inter } from "next/font/google";
import { Merriweather } from "next/font/google";
import { PT_Sans } from "next/font/google";

export const  merriweather = Merriweather({
    subsets: ["latin-ext"],
    style: "normal",
    weight: "400",
})

export const pt_sans = PT_Sans({
    weight: "400",
    style : "normal",
    subsets: ["latin-ext"],
})