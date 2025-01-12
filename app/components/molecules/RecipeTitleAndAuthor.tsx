import React from 'react'
import { RegularText, SubHeadingText } from '../atoms/Texts'

function RecipeTitleAndAuthor({title, creditsText}: any) {
  return (
    <div>
  <SubHeadingText className="mt-0">{title}</SubHeadingText>
  <RegularText>{`By ${creditsText}`}</RegularText>
</div>
  )
}

export default RecipeTitleAndAuthor