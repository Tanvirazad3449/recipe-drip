
const Container = ({ children, className = "" }: any) => {
    return (
        <div className={`hover:bg-slate-200 cursor-pointer bg-slate-100 rounded-lg ${className}`}>
            {children}
        </div>
    )
}

export {
    Container,
}