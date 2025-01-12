import React from 'react'
import { HeadingText, RegularTextHTML } from '../atoms/Texts'

function InstructionsSection({instructions}:any) {
  return (
    <div className="mt-8">
  <HeadingText>Instructions</HeadingText>
  <RegularTextHTML text={instructions} />
</div>
  )
}

export default InstructionsSection