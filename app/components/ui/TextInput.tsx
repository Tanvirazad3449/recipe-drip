import React, { ReactNode } from 'react'
import { SmallText } from './Texts'

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    startIcon?: ReactNode;
    onClickStartIcon?: () => void;
    endIcon?: ReactNode;
    onClickEndIcon?: () => void;

}
const TextInput = ({ type, placeholder, label, value, onChange, className = "", endIcon, startIcon, onClickStartIcon, onClickEndIcon }: InputProps) => {
    

    return (
        <>
            <SmallText className={`font-bold mb-2 ${!label ? "hidden" : ""}`}>{label}</SmallText>
            
            <div className="w-full border p-2 min-h-14 flex flex-row justify-center items-center bg-white">
                {startIcon && <span onClick={onClickStartIcon} className="p-1 pr-2">
                    {startIcon}
                </span>
                }
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`focus:outline-none  flex-1 ${className} ml-2`}
                />
                {endIcon &&
                    <span onClick={onClickEndIcon} className="p-1">
                        {endIcon}
                    </span>
                }
            </div>
        </>
    )
}

export default TextInput