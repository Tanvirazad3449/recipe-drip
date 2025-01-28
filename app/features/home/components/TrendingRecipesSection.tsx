import Grid from '@/app/components/shared/data-display/grid/Grid';
import { gridClasses } from '@/app/styles/gridClasses';
import React from 'react';
import { Recipe } from '@/app/types/domain/recipe/recipe';
import { fetchRecipes } from '@/app/api/spoonacular';

const TrendingRecipesSection = async () => {
  let data:Recipe[] = [];
  let loading = false;

  try {
    data = await fetchRecipes("sort=popularity"); // Call the Server Action
  } catch (error) {
    console.error(error);
    loading = true; // Handle errors
  }

  return (
    <div className='w-full xl:w-2/3 '>
      <Grid
        type="recipe"
        loading={loading}
        headerText="Trending Recipes"
        data={data}
        cssClass={gridClasses.recipes}
        minDisplayItems={9}
      />
    </div>
  );
};

export default TrendingRecipesSection;
