import { SmallText } from "./Texts";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
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
    className={`w-full p-2 mb-4 border focus:outline-none focus:ring focus:ring-blue-200 ${className}`}
    />
    </>
  )
}

export {
  Input
}
