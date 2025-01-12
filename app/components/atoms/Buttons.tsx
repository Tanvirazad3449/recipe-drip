interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}
const SmallButton = ({ onClick, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`mt-4 p-2 hover:bg-brandColor-100 ${className}`}
    >
      {children}
    </button>
  )
}

const MediumButton = ({ onClick, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 bg-brandColor hover:bg-brandColor-900 text-white ${className}`}
    >
      {children}
    </button>
  )
}

const MediumButtonWithIcon = ({ onClick, children, icon, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 flex flex-row align-middle justify-center items-center bg-brandColor hover:bg-brandColor-900 text-white ${className}`}
      >
        {icon}
      {children}
    </button>
  )
}

export {
  SmallButton,
  MediumButton,
  MediumButtonWithIcon
}