import { HeadingText, RegularText, SmallText } from "../atoms/Texts"

interface ComponentHeaderProps {
  headerText: string;
  toggle: () => void;
  showAll: boolean;
}

const ComponentHeader = ({ headerText, toggle, showAll }: ComponentHeaderProps) => {
  return (
    <div className="justify-between align-middle flex py-2 items-center">
      <HeadingText text={headerText} />

      <button
        onClick={toggle}
        className="p-2 hover:bg-slate-200 rounded"
      >
        <SmallText text={`Show ${showAll ? "Less" : "More"}`}/>
        
      </button>
    </div>
  )
}

export default ComponentHeader