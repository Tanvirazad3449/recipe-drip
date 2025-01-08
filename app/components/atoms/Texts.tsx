import { TextHTMLProps, TextProps } from "@/app/interfaces/TextProps"
import parse from 'html-react-parser';
const textClass = "text-slate-800 group-hover:text-brandColor";
const textClassLight = "text-slate-600";

const RegularText = ({text, className = ""}:TextProps) => {
    return(
        <p className={`font-gentiumPlus ${textClass} ${className} `}>{text}</p>
    )
}

const HeadingText = ({text, className = ""}:TextProps) => {
    return(
        <h1 className={`m-0 text-2xl md:text-3xl ${textClass} font-montserrat ${className}`}>{text}</h1>
    )
}

const SubHeadingText = ({text, className = ""}:TextProps) => {
    return(
        <h1 className={`text-2xl md:text-3xl ${textClass} font-gentiumPlus font-bold ${className}`}>{text}</h1>
    )
}


const SmallText = ({text, className = ""}:TextProps) => {
    return(
        <p className={`${textClassLight} text-sm font-montserrat ${className}`}>{text}</p>
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