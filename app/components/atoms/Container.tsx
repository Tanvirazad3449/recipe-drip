
interface ContainerProps {
    children: React.ReactNode;
    className: string;
  }
  
const Container = ({ children, className = "" }: ContainerProps) => {
    return (
        <div className={`hover:bg-slate-100 cursor-pointer bg-slate-50 rounded-lg ${className}`}>
            {children}
        </div>
    )
}

export {
    Container,
}