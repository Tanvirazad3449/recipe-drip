import { HeadingText } from "@/app/components/ui/Texts"
import { Button } from "@/app/components/ui/Button";
import capitalize from "@/app/utils/capitalize";

interface SectionHeaderProps {
  headerText: string;
  setIsExpanded?: () => void;
  isExpanded?: boolean;
  showExpandButton?: boolean;
}

const SectionHeader = ({ headerText, setIsExpanded, isExpanded, showExpandButton }: SectionHeaderProps) => {
  return (
    <div className="justify-between align-middle flex mb-2 items-end">
      <HeadingText>{capitalize(headerText)}</HeadingText>
      <Button size="small" onClick={setIsExpanded} className={`${showExpandButton ? "" : "hidden"}`}>
        {`Show ${isExpanded ? "Less" : "More"}`}
      </Button>
    </div>
  )
}

export default SectionHeader