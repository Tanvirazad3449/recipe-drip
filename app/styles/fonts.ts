import {Gentium_Plus, Montserrat} from 'next/font/google'

const gentiumPlus = Gentium_Plus({
    subsets: ["latin"],
    weight: ["400","700"],
    variable: "--font-gentium-plus"
})


const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-montserrat"
})

 
export { gentiumPlus, montserrat }
