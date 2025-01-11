"use client";

import { useAuth } from "@/app/hooks/useAuth";
import Grid from "@/app/components/organisms/Grid";
import { gridClasses } from "@/app/styles/gridClasses";
import useBulkRecipes from "@/app/hooks/useBulkRecipes";
import useSavedRecipes from "@/app/hooks/useSavedRecipes";

const SavedRecipesPage = () => {
  const { user } = useAuth(); 
  const { savedRecipesIds } = useSavedRecipes(user?.uid || null); 
  const { recipesData, loading, error } = useBulkRecipes(savedRecipesIds); 

  if (!user) {
    return <div>Please log in to see your saved recipes.</div>;
  }

  return (
    <div>
      {loading && <p>Loading saved recipes...</p>}
      {error && <p>{error}</p>}
      {recipesData.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <div className="flex flex-col px-4 md:px-28 py-4">
          <Grid
            headerText="Your Saved Recipes"
            data={recipesData}
            cssClass={gridClasses.recipesBigGrid}
            minDisplayItems={8}
          />
        </div>
      )}
    </div>
  );
};

export default SavedRecipesPage;
