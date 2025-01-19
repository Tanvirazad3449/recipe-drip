
interface ContainerProps {
    children: React.ReactNode;
    className?: string;
  }
  
const Container = ({ children, className = "" }: ContainerProps) => {
    return (
        <div className={`hover:bg-brandColor-100 cursor-pointer ${className}`}>
            {children}
        </div>
    )
}

export {
    Container,
}