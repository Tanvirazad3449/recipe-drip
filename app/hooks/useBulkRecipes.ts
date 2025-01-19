import { useState, useEffect } from 'react';
import { fetchBulkRecipes } from '@/app/api/spoonacular'; // Ensure the API function is imported
import { RecipeDetails } from '@/app/types/domain/recipe/recipe';

const useBulkRecipes = (likedRecipesIds: string[], loadingSavedRecipesIds: boolean) => {
  const [recipesData, setRecipesData] = useState<RecipeDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (likedRecipesIds.length > 0) {
        const ids = likedRecipesIds.join(',');
        setError(null);

        try {
          // Make the API call
          const response = await fetchBulkRecipes(ids);
          setRecipesData(response);
          setLoading(false); // Only set loading to false after data is set
          console.log("set loading of fetchSaved Recipes: false line 21")

        } catch (error) {
          setError('Error fetching recipe details');
          console.error('Error fetching recipe details', error);
          setLoading(false); // Ensure loading is also set to false in case of an error
          console.log("set loading of fetchSaved Recipes: false line 27")

        }
      }else{
        setLoading(false)
        console.log("set loading of fetchSaved Recipes: false line 32")

      }
    };
if(!loadingSavedRecipesIds){

  fetchRecipeDetails();
}
  }, [likedRecipesIds]);

  return { recipesData, loading, error };
};

export default useBulkRecipes;
