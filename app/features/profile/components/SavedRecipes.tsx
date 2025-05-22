"use client";

import { gridClasses } from "@/app/styles/gridClasses";
import Grid from "@/app/components/shared/data-display/grid/Grid";
import useSavedRecipes from "../hooks/useSavedRecipes";

const SavedRecipes = () => {
  const {recipes, loading, errorMsg} = useSavedRecipes()

  return (
    <div className="w-full xl:w-2/3 pt-4">
      <Grid
        errorMsg={errorMsg}
        type="recipe"
        loading={loading}
        headerText="Your Saved Recipes"
        data={recipes}
        cssClass={gridClasses.recipes}
        minDisplayItems={100}
      />
    </div>
  );
};

export default SavedRecipes;
