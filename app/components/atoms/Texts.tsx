interface TextProps{
    text: string;
    className?: string;
}
const RegularText = ({text, className = ""}:TextProps) => {
    return(
        <p className={`font-serif font-medium ${className}`}>{text}</p>
    )
}

const HeadingText = ({text, className = ""}:TextProps) => {
    return(
        <h2 className={`text-s md:text-2xl ${className}`}>{text}</h2>
    )
}

export {
    RegularText,
    HeadingText
}