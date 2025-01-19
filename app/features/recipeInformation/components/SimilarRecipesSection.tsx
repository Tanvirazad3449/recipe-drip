import { gridClasses } from '@/app/styles/gridClasses'
import React from 'react'
import { Recipe } from '@/app/types/domain/recipe/recipe'
import Grid from '@/app/components/shared/data-display/grid/Grid';
interface SimilarRecipesSectionProps {
  similarRecipes: Recipe[],
  loading: boolean;
}
function SimilarRecipesSection({ similarRecipes, loading }: SimilarRecipesSectionProps) {
  return (
    <div className="mt-4 w-full xl:w-1/3 xl:mt-0">
      {similarRecipes?.length > 0 &&
        <Grid
        type="recipe"
        loading={loading}
          headerText="Similar Recipes"
          data={similarRecipes}
          cssClass={gridClasses.recipesSmallGrid}
          minDisplayItems={4}
        />}
    </div>
  )
}

export default SimilarRecipesSection