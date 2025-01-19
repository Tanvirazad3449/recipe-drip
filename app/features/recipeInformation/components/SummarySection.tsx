import React from 'react'
import { HeadingText, RegularTextHTML } from '../../../components/ui/Texts'
interface SummarySectionProps{
  summary: string;
}
function SummarySection({summary}:SummarySectionProps) {
  return (
    <div className="mt-8">
  <HeadingText className="mt-8">Summary</HeadingText>
  <RegularTextHTML text={summary} />
</div>
  )
}

export default SummarySection