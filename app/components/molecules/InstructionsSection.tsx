import React from 'react'
import { HeadingText, RegularTextHTML } from '../atoms/Texts'

interface InstructionsSection{
  instructions: string;
}
function InstructionsSection({instructions}:InstructionsSection) {
  return (
    <div className="mt-8">
  <HeadingText>Instructions</HeadingText>
  <RegularTextHTML text={instructions} />
</div>
  )
}

export default InstructionsSection