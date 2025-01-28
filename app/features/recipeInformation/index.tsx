"use client";

import React from "react";
import { useParams } from 'next/navigation'
import useRecipeDetails from "@/app/features/recipeInformation/hooks/useRecipeDetails";
import useSimilarRecipes from "@/app/features/recipeInformation/hooks/useSimilarRecipes";
import RecipeDetailsSection from "@/app/features/recipeInformation/components/RecipeDetailsSection";
import SimilarRecipesSection from "@/app/features/recipeInformation/components/SimilarRecipesSection";
import useSaveRecipe from "./hooks/useSaveRecipe";

type ParamsType = {
  slug: string
  id?: string
}

function RecipeInformation() {
  const params = useParams<ParamsType>();

  const { state: recipeDetails } = useRecipeDetails(params.slug);
  const { state: isRecipeSaved, toggleState: toggleRecipeSave } = useSaveRecipe(params.slug);
  const { similarRecipes, error: similarError, loading } = useSimilarRecipes(params.slug);

  return (
    <div className="flex flex-col xl:flex-row px-4 xl:px-28 md:px-8 py-2">
      <RecipeDetailsSection
        recipeDetails={recipeDetails.data}
        saved={isRecipeSaved.data}
        handleSave={toggleRecipeSave}
        errorMessage={recipeDetails.errorMessage || similarError}
      />
      <SimilarRecipesSection loading={loading} similarRecipes={similarRecipes} />
    </div>
  );
};

export default RecipeInformation;
