interface IconProps {
    iconSrc: string;
    iconName?: string;
}

const LargeIcon = ({ iconSrc, iconName }: IconProps) => {

    if (iconName === null || iconName === "img.spoonacular.") {
        return (
            <img
                src={'/no-image-found-square.jpg'}
                className="w-10 h-auto max-h-10 xl:w-10 xl:h-auto object-contain"
                alt="Icon"
            /> 
        )
    }
    return (
         <img
                src={iconSrc}
                className="w-10 h-auto max-h-10 xl:w-10 xl:h-auto object-contain"
                alt="Icon"
            /> 
    )
}

export {
    LargeIcon
}