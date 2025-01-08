const Tables = ({ children }: any) => {
    return (
        <table className="min-w-full table-auto border border-brandColor-200 mt-2">
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default Tables