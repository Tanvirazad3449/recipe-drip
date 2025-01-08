interface ButtonProps {
    onClick?: ()=>void;
    children: React.ReactNode;
}
const SmallButton = ({onClick, children}:ButtonProps) =>{
    return(
        <button
        onClick={onClick}
        className="mt-4 p-2 hover:bg-brandColor-100"
      >
        {children}
      </button>
    )
}

export {
    SmallButton
}