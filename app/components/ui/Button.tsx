

import { RegularText, SmallText } from "./Texts";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  size?: "small" | "medium"; 
}

const Button = ({onClick, children, className = "",icon, size = "medium"}: ButtonProps) => {
  const buttonSizeClass = size === "small" ? "mt-4 p-2" : "py-2 px-4";
  const buttonIconClass = icon
    ? "flex flex-row items-center justify-center"
    : "text-center";

  return (
    <button
      onClick={onClick}
      className={`${size === "small"
          ? "bg-white group hover:bg-brandColor"
          : "bg-brandColor hover:bg-brandColor-900 text-white"
        } ${buttonSizeClass} ${buttonIconClass} ${className}`}
    >
      {icon && <span className="mr-2 align-middle flex">{icon}</span>}
      {size === "small" &&
      <SmallText className="text-gray-500 group-hover:text-white">
        {children}
      </SmallText>
      }
      {size === "medium" &&
      <RegularText className="text-white group-hover:text-gray-500">
        {children}
      </RegularText>
      }
    </button>
  );
};

export { Button };
