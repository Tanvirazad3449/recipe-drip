"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { extractId } from "@/app/utils/extractId";
import { handleSaveRecipe } from "@/app/utils/saveRecipe"; 
import useRecipeDetails from "@/app/hooks/useRecipeDetails";
import useSimilarRecipes from "@/app/hooks/useSimilarRecipes";
import RecipeDetailsSection from "../organisms/RecipeDetailsSection";
import SimilarRecipesSection from "../organisms/SimilarRecipesSection";
import { ErrorNotificationBlock, InfoNotificationBlock } from "../atoms/NotificationBlock";
import { useRouter } from "next/navigation";
import { auth } from "@/app/libs/firebase/config";

const RecipeInformation: React.FC = () => {
  const pathName = usePathname();
  const recipeId = extractId(pathName);
const router = useRouter();
  const user = auth.currentUser;
  const { recipeDetails, saved, error: detailsError, setSaved } = useRecipeDetails(recipeId);
  const { similarRecipes, error: similarError } = useSimilarRecipes(recipeId);

  const handleSave = async () => {
    if (!user) {
      router.push("/auth")
    }else{

      await handleSaveRecipe(recipeId, setSaved);
    }
  };

  if (detailsError || similarError) {
    return <ErrorNotificationBlock message={detailsError || similarError}/>;
  }

  if (!recipeDetails) {
    return <InfoNotificationBlock message="Loading Recipe Details..."/>;
  }

  return (
    <div className="flex flex-col xl:flex-row px-4 xl:px-28 md:px-8 py-8">
      <RecipeDetailsSection
        recipeDetails={recipeDetails}
        saved={saved}
        handleSave={handleSave}
      />
      <SimilarRecipesSection similarRecipes={similarRecipes} />
    </div>
  );
};

export default RecipeInformation;
