"use client";

import React from "react";
import { handleSaveRecipe } from "@/app/features/recipeInformation/utils/saveRecipe";
import useRecipeDetails from "@/app/features/recipeInformation/hooks/useRecipeDetails";
import useSimilarRecipes from "@/app/features/recipeInformation/hooks/useSimilarRecipes";
import RecipeDetailsSection from "@/app/features/recipeInformation/components/RecipeDetailsSection";
import SimilarRecipesSection from "@/app/features/recipeInformation/components/SimilarRecipesSection";
import { NotificationBlock } from "@/app/components/ui/NotificationBlock";
import { useRouter } from "next/navigation";
import { auth } from "@/app/libs/firebase/config";
import { useParams } from 'next/navigation'

type ParamsType = {
  slug: string
  id?: string
}

function RecipeInformation() {
  const router = useRouter();
  const params = useParams<ParamsType>();
  const user = auth.currentUser;
  const { recipeDetails, saved, error: detailsError, setSaved } = useRecipeDetails(params.slug);
  const { similarRecipes, error: similarError, loading } = useSimilarRecipes(params.slug);
  const handleSave = async () => {
    if (!user) {
      router.push("/auth")
    } else {

      await handleSaveRecipe(params.slug, setSaved);
    }
  };

  if (detailsError || similarError) {
    return <NotificationBlock type="error" message={detailsError || similarError} />;
  }

  if (!recipeDetails) {
    return <NotificationBlock type="error" message="Loading Recipe Details..." />;
  }

  return (
    <div className="flex flex-col xl:flex-row px-4 xl:px-28 md:px-8 py-2">
      <RecipeDetailsSection
        recipeDetails={recipeDetails}
        saved={saved}
        handleSave={handleSave}
      />
      <SimilarRecipesSection loading={loading} similarRecipes={similarRecipes} />
    </div>
  );
};

export default RecipeInformation;
