"use client";
import React from 'react';
import { gridClasses } from '@/app/styles/gridClasses';
import useRecipes from '@/app/hooks/useRecipes';
import { NotificationBlock } from '@/app/components/ui/NotificationBlock';
import Grid from '@/app/components/shared/data-display/grid/Grid';

const Recipes: React.FC = () => {
  const { recipes, error, headingText, loading } = useRecipes();

  if (error) {
    return <NotificationBlock type='error' message={error} />;
  }

  if (!recipes) {
    return <NotificationBlock type="info" message='No recipes to show'/>;
  }

  return (
    <div className="flex flex-col px-4 xl:px-28 md:px-8 py-4 min-h-screen">
      <Grid
      type="recipe"
      loading={loading}
        headerText={headingText || ""}
        data={recipes}
        cssClass={gridClasses.recipesBigGrid}
        minDisplayItems={8}
      />
    </div>
  );
};

export default Recipes;
