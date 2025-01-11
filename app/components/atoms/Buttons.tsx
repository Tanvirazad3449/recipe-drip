interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
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
      className={`py-2 px-4 hover:bg-brandColor-900 ${className}`}
    >
      {children}
    </button>
  )
}

export {
  SmallButton,
  MediumButton
}