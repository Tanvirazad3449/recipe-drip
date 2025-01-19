import { HeadingText } from "@/app/components/ui/Texts"
import { Button } from "@/app/components/ui/Button";
import capitalize from "@/app/utils/capitalize";

interface SectionHeaderProps {
  headerText: string;
  toggleItemView?: () => void;
  isExpanded?: boolean;
  showExpandButton?: boolean;
}

const SectionHeader = ({ headerText, toggleItemView, isExpanded, showExpandButton }: SectionHeaderProps) => {
  return (
    <div className="justify-between align-middle flex my-2 items-center">
      <HeadingText>{capitalize(headerText)}</HeadingText>
      <Button size="small" onClick={toggleItemView} className={`${showExpandButton ? "" : "hidden"}`}>
        {`Show ${isExpanded ? "Less" : "More"}`}
      </Button>
    </div>
  )
}

export default SectionHeader