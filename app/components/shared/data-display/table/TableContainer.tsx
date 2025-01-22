import React, { ReactNode } from 'react';

interface TablesProps {
    children: ReactNode; // Properly typing the children prop
  }

const TableContainer: React.FC<TablesProps> = ({ children }) => {
    return (
        <table className="min-w-full table-auto border border-brandColor-200">
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default TableContainer