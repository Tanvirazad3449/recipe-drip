"use client";

import Grid from "@/app/components/organisms/Grid";
import { gridClasses } from "@/app/styles/gridClasses";
import useBulkRecipes from "@/app/hooks/useBulkRecipes";
import useSavedRecipes from "@/app/hooks/useSavedRecipes";
import { useAuth } from "@/app/context/UserContext";
import { ErrorNotificationBlock, InfoNotificationBlock } from "@/app/components/atoms/NotificationBlock";

const SavedRecipes = () => {
  const { user, loading: loadingUser } = useAuth();
  const { savedRecipesIds, loading: loadingSavedRecipesIds } = useSavedRecipes(user?.uid || null);
  const { recipesData, loading, error } = useBulkRecipes(savedRecipesIds, loadingSavedRecipesIds);


  if (!user && !loadingUser) {
    return <InfoNotificationBlock message="You need to sign in" />;
  }

  if (error) {
    return <ErrorNotificationBlock message={error} />;
  }

  return (
    <div className="min-h-screen">
      {loading ? (<InfoNotificationBlock message="Loading your saved recipes..." />) 
      : recipesData.length > 0 && !loading ? (
        <div className="flex flex-col px-4 md:px-28 py-4">
          <Grid
            headerText="Your Saved Recipes"
            data={recipesData}
            cssClass={gridClasses.recipesBigGrid}
            minDisplayItems={8}
          />
        </div>
      ): (
        <InfoNotificationBlock message="You have not saved any recipes yet..." />
      ) }
    </div>
  );
};

export default SavedRecipes;
