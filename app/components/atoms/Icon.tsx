interface IconProps {
    iconSrc: string;
    iconName?: string;
}

const LargeIcon = ({ iconSrc, iconName }: IconProps) => {

    if (iconName === null || iconName === "img.spoonacular.") {
        return (
            <div className="rounded-full w-16 md:w-10 h-16 md:h-10 bg-gray-200"></div>
        )
    }
    return (
        <div className="rounded-lg w-16 md:w-10 h-16 md:h-10 overflow-hidden flex items-center justify-center">
            <img
                src={iconSrc}
                className="w-full h-full object-contain"
                alt="Icon"
            />
        </div>
    )
}

export {
    LargeIcon
}