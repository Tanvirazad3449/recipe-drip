import React from 'react'
import List from '../organisms/List'
import { Ingredient } from '@/app/interfaces/Ingredient'

interface IngredientsSectionProps{
  extendedIngredients: Ingredient[]
}
function IngredientsSection({extendedIngredients}:IngredientsSectionProps) {
  return (
    <div className='w-full md:w-2/3 '>
                <List headerText="Ingredients" data={extendedIngredients} />
    </div>
  )
}

export default IngredientsSection