import { TextProps } from "@/app/interfaces/TextProps"
import parse from 'html-react-parser';
const textClass = "text-slate-600";
const textClassLight = "text-slate-500";

const RegularText = ({text, className = ""}:TextProps) => {
    return(
        <p className={`font-serif font-medium ${textClass} ${className}`}>{text}</p>
    )
}

const HeadingText = ({text, className = ""}:TextProps) => {
    return(
        <h1 className={`text-xl ${textClass} md:text-2xl font-sans font-bold my-2 ${className}`}>{text}</h1>
    )
}

const SubHeadingText = ({text, className = ""}:TextProps) => {
    return(
        <h2 className={`text-lg ${textClass} md:text-xl font-serif font-bold ${className}`}>{text}</h2>
    )
}

const SmallText = ({text, className = ""}:TextProps) => {
    return(
        <p className={`text-sm ${textClassLight} font-sans font-thin ${className}`}>{text}</p>
    )
}

const RegularTextHTML = ({text, className = ""}:TextProps) => {
    return(
        <div className={`${textClass} font-serif text-justify ${className}`}>
            {parse(text || "")}
        </div>
    )
}


export {
    RegularText,
    HeadingText,
    SubHeadingText,
    SmallText,
    RegularTextHTML
}