import { ReactNode } from "react";
import { SmallText } from "./Texts";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: ReactNode;
  labelHidden?: boolean;
  startIcon?: ReactNode;
  onClickStartIcon?: ()=>void;
  onClickIcon?: ()=>void;
  isStartIconVisible?: boolean;

}
const Input = ({ type, placeholder, value, onChange, className = "" }: InputProps) => {
  return (
    <>
    <SmallText className="font-bold mb-2">{placeholder}</SmallText>
    <input
    type={type}
    placeholder={`Enter your ${placeholder}`}
    value={value}
    onChange={onChange}
    className={`w-full p-2 mb-4 border focus:outline-none ${className}`}
    />
    </>
  )
}

const InputWithIconButton = ({ type, placeholder, value, onChange, className = "", icon, labelHidden, startIcon, onClickStartIcon, onClickIcon, isStartIconVisible }: InputProps) => {
  return (
    <>
    <SmallText className={`font-bold mb-2 ${labelHidden ? "hidden" : ""}`}>{placeholder}</SmallText>
    <div className="w-full p-2 mb-4 border flex flex-row justify-center items-center bg-white">
      {isStartIconVisible && <span onClick={onClickStartIcon} className="pr-2">

    {startIcon}
      </span>
}
    <input
    type={type}
    placeholder={`Enter your ${placeholder}`}
    value={value}
    onChange={onChange}
    className={`focus:outline-none  flex-1 ${className}`}
    />
    <span onClick={onClickIcon} className="p-1">

    {icon}
    </span>
    </div>
    </>
  )
}

export {
  Input,
  InputWithIconButton
}
