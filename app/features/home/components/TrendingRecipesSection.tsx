import Grid from '@/app/components/shared/data-display/grid/Grid';
import { gridClasses } from '@/app/styles/gridClasses';
import React from 'react';
import { Recipe } from '@/app/types/domain/recipe/recipe';
import { fetchRecipes } from '@/app/api/spoonacular';

const TrendingRecipesSection = async () => {
  let data:Recipe[] = [];
  let error = null
  let loading = false;

  try {
    data = await fetchRecipes("sort=popularity"); // Call the Server Action
  } catch (e:any) {
    error = e.message
    loading = false; 
  }

  return (
    <div className='w-full xl:w-2/3 '>
      <Grid
        errorMsg={error}
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
