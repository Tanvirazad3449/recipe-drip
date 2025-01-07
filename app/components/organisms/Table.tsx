const Table = ({children}:any)=>{
    return(

        <table className="min-w-full table-auto border-separate border border-slate-400">
            <tbody>

{children}
            </tbody>
              
            </table>
    )
}

export default Table