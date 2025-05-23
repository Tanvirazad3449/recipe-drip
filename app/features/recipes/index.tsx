"use client";
import React from 'react';
import { gridClasses } from '@/app/styles/gridClasses';
import Grid from '@/app/components/shared/data-display/grid/Grid';
import { useSearchParams } from 'next/navigation';
import { useRecipes } from '@/app/hooks/useRecipes';
import getRecipesUrl from './utils/getRecipesUrl';

const Recipes: React.FC = () => {
  const searchParams = useSearchParams();

  const url = getRecipesUrl(searchParams);

  const { data, loading, errorMsg } = useRecipes(url);
  const headingText = searchParams.get("diet") || searchParams.get("type") || searchParams.get("cuisine") || searchParams.get("includeIngredients");


  return (
    <div className="flex flex-col px-4 xl:px-28 md:px-8 py-4 min-h-screen">
      <Grid
      errorMsg={errorMsg}
        type="recipe"
        loading={loading}
        headerText={headingText || ""}
        data={data}
        cssClass={gridClasses.recipesBigGrid}
        minDisplayItems={8}
      />
    </div>
  );
};

export default Recipes;
