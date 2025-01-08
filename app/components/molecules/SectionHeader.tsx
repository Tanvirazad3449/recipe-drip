import { HeadingText, SmallText } from "../atoms/Texts"
import { SmallButton } from "../atoms/Buttons";
import capitalize from "@/app/utils/capitalize";

interface SectionHeaderProps {
  headerText: string;
  toggleItemView?: () => void;
  isExpanded?: boolean;
  showExpandButton?: boolean;
}

const SectionHeader = ({ headerText, toggleItemView, isExpanded, showExpandButton }: SectionHeaderProps) => {
  return (
    <div className="justify-between align-middle flex py-2 items-center">
      <HeadingText text={capitalize(headerText)} />
      <SmallButton onClick={toggleItemView} className={showExpandButton ? "" : "hidden"}>
        <SmallText text={`Show ${isExpanded ? "Less" : "More"}`} />
      </SmallButton>
    </div>
  )
}

export default SectionHeader