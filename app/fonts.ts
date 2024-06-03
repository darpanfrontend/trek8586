import { Oswald, Outfit } from 'next/font/google'
export const headingFont = Oswald({ 
    subsets: ['vietnamese'],
    weight: ["200","300","400","500","600","700"]
 })
export const bodyFont = Outfit({
    subsets:['latin'],
    weight: ["100","200","300","400","500","600","700","800","900"]
})