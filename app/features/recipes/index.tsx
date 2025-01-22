"use client";
import React, { useEffect } from 'react';
import { gridClasses } from '@/app/styles/gridClasses';
import Grid from '@/app/components/shared/data-display/grid/Grid';
import { useSearchParams } from 'next/navigation';
import { useFetchRecipes } from '@/app/hooks/useFetchRecipes';
import getRecipesUrl from './hooks/getRecipesUrl';

const Recipes: React.FC = () => {
  const searchParams = useSearchParams();

  const url = getRecipesUrl(searchParams);

  const { data, loading, loadRecipes } = useFetchRecipes();
  const headingText = searchParams.get("diet") || searchParams.get("type") || searchParams.get("cuisine") || searchParams.get("includeIngredients");

  useEffect(() => {
    loadRecipes(url)
  }, [])

  return (
    <div className="flex flex-col px-4 xl:px-28 md:px-8 py-4 min-h-screen">
      <Grid
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
