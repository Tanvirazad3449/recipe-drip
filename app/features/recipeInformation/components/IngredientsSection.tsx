import React from 'react'
import List from '../../../components/shared/data-display/list/List'
import { IngredientDetailType } from '@/app/types/domain/recipe/ingredients'

interface IngredientsSectionProps{
  extendedIngredients: IngredientDetailType[]
}
function IngredientsSection({extendedIngredients}:IngredientsSectionProps) {
  return (
    <div className='w-full xl:w-2/3 mt-2'>
      <List type="ingredient" headerText="Ingredients" data={extendedIngredients} />
    </div>
  )
}

export default IngredientsSection