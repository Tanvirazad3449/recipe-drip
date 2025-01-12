import React from 'react'
import { RegularText, SubHeadingText } from '../atoms/Texts'

interface RecipeTitleAndAuthorProps{
  title: string;
  creditsText: string;
}
function RecipeTitleAndAuthor({title, creditsText}: RecipeTitleAndAuthorProps) {
  return (
    <div>
  <SubHeadingText className="mt-0">{title}</SubHeadingText>
  <RegularText>{`By ${creditsText}`}</RegularText>
</div>
  )
}

export default RecipeTitleAndAuthor