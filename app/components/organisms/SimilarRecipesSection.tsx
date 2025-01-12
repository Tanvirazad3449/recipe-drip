import { gridClasses } from '@/app/styles/gridClasses'
import React from 'react'
import Grid from './Grid'
import { Recipe } from '@/app/interfaces/Recipe'
interface SimilarRecipesSectionProps {
  similarRecipes: Recipe[]
}
function SimilarRecipesSection({ similarRecipes }: SimilarRecipesSectionProps) {
  return (
    <div className="mt-4 w-full md:w-1/3 md:mt-0">
      {similarRecipes?.length > 0 &&
        <Grid
          headerText="Similar Recipes"
          data={similarRecipes}
          cssClass={gridClasses.recipesSmallGrid}
          minDisplayItems={4}
        />}
    </div>
  )
}

export default SimilarRecipesSection