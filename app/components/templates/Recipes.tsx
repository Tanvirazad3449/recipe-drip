"use client";
import React from 'react';
import Grid from '@/app/components/organisms/Grid';
import { gridClasses } from '@/app/styles/gridClasses';
import useRecipes from '@/app/hooks/useRecipes';
import { ErrorNotificationBlock, InfoNotificationBlock } from '../atoms/NotificationBlock';

const Recipes: React.FC = () => {
  const { recipes, error, headingText } = useRecipes();

  if (error) {
    return <ErrorNotificationBlock message={error} />;
  }

  if (!recipes) {
    return <InfoNotificationBlock message='No recipes to show'/>;
  }

  return (
    <div className="flex flex-col px-4 xl:px-28 md:px-8 py-4 min-h-screen">
      <Grid
        headerText={headingText || ""}
        data={recipes}
        cssClass={gridClasses.recipesBigGrid}
        minDisplayItems={8}
      />
    </div>
  );
};

export default Recipes;
