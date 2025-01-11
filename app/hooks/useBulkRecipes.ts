import { useState, useEffect } from 'react';
import { fetchBulkRecipes } from '@/app/api/spoonacular'; // Ensure the API function is imported
import { RecipeDetails } from '@/app/interfaces/Recipe';

const useBulkRecipes = (likedRecipesIds: string[]) => {
  const [recipesData, setRecipesData] = useState<RecipeDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (likedRecipesIds.length > 0) {
        const ids = likedRecipesIds.join(',');
        setLoading(true);
        setError(null);

        try {
          // Make the API call
          const response = await fetchBulkRecipes(ids);
          setRecipesData(response);
        } catch (error) {
          setError('Error fetching recipe details');
          console.error('Error fetching recipe details', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRecipeDetails();
  }, [likedRecipesIds]);

  return { recipesData, loading, error };
};

export default useBulkRecipes;
