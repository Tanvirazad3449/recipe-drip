import React from 'react'
import { HeadingText, RegularTextHTML } from '../atoms/Texts'

function SummarySection({summary}:any) {
  return (
    <div className="mt-8">
  <HeadingText className="mt-8">Summary</HeadingText>
  <RegularTextHTML text={summary} />
</div>
  )
}

export default SummarySection