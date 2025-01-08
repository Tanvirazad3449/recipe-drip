import { HeadingText, SmallText } from "../atoms/Texts"
import { SmallButton } from "../atoms/Buttons";

interface SectionHeaderProps {
  headerText: string;
  toggleItemView?: () => void;
  isExpanded?: boolean;
}

const SectionHeader = ({ headerText, toggleItemView, isExpanded,  }: SectionHeaderProps) => {
  return (
    <div className="justify-between align-middle flex py-2 items-center">
      <HeadingText text={headerText} />
      <SmallButton onClick={toggleItemView}>
        <SmallText text={`Show ${isExpanded ? "Less" : "More"}`} />
      </SmallButton>
    </div>
  )
}

export default SectionHeader