"use client";

import { gridClasses } from "@/app/styles/gridClasses";
import useBulkRecipes from "@/app/features/profile/hooks/useBulkRecipes";
import useSavedRecipes from "@/app/features/profile/hooks/useSavedRecipes";
import { NotificationBlock } from "@/app/components/ui/NotificationBlock";
import Grid from "@/app/components/shared/data-display/grid/Grid";
import { useAuth } from "@/app/contexts/UserContext";

const SavedRecipes = () => {
  const { user, loading: loadingUser } = useAuth();
  const { savedRecipesIds, loading: loadingSavedRecipesIds } = useSavedRecipes(user?.uid || null);
  const { recipesData, loading, error } = useBulkRecipes(savedRecipesIds, loadingSavedRecipesIds);


  if (!user && !loadingUser) {
    return <NotificationBlock type="info" message="You need to sign in" />;
  }

  if (error) {
    return <NotificationBlock type="error" message={error} />;
  }

  return (
    <div className="w-full xl:w-2/3 pt-4">
      <Grid
        type="recipe"
        loading={loading}
        headerText="Your Saved Recipes"
        data={recipesData}
        cssClass={gridClasses.recipes}
        minDisplayItems={100}
      />
    </div>
  );
};

export default SavedRecipes;
