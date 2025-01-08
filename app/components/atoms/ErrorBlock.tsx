import React from "react";

interface ErrorComponentProps {
  message: string;
}

const ErrorBlock: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100 text-red-800 text-lg font-semibold shadow-md ">
      {message}
    </div>
  );
};

export default ErrorBlock;
