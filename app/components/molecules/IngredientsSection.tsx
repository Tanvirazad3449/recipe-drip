import React from 'react'
import List from '../organisms/List'

function IngredientsSection({extendedIngredients}:any) {
  return (
    <div className='w-full md:w-2/3 '>
                <List headerText="Ingredients" data={extendedIngredients} />
    </div>
  )
}

export default IngredientsSection