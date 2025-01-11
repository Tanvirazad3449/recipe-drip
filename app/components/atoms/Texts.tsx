import { TextHTMLProps, TextProps } from "@/app/interfaces/TextProps"
import parse from 'html-react-parser';
const textClass = "text-slate-800 group-hover:text-brandColor";
const textClassLight = "text-slate-600";

const RegularText = ({className = "", children}:TextProps) => {
    return(
        <p className={`font-gentiumPlus ${textClass} ${className} `}>{children}</p>
    )
}

const HeadingText = ({className = "", children}:TextProps) => {
    return(
        <h1 className={`m-0 text-2xl md:text-3xl ${textClass} font-montserrat ${className}`}>{children}</h1>
    )
}

const SubHeadingText = ({className = "", children}:TextProps) => {
    return(
        <h1 className={`text-2xl md:text-3xl ${textClass} font-gentiumPlus font-bold ${className}`}>{children}</h1>
    )
}


const SmallText = ({className = "", children}:TextProps) => {
    return(
        <p className={`${textClassLight} text-sm font-montserrat ${className}`}>{children}</p>
    )
}

const RegularTextHTML = ({text, className = ""}:TextHTMLProps) => {
    return(
        <div className={`${textClass} font-gentiumPlus text-justify ${className}`}>
            {parse(text || "")}
        </div>
    )
}


export {
    RegularText,
    HeadingText,
    SmallText,
    RegularTextHTML,
    SubHeadingText
}