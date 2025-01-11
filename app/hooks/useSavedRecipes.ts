import { useState, useEffect } from 'react';
import { getSavedRecipes } from '../libs/firebase/config';

const useSavedRecipes = (userId: string | null) => {
  const [savedRecipesIds, setSavedRecipesIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      if (userId) {
        setLoading(true);
        try {
          const recipeIds = await getSavedRecipes(userId);
          setSavedRecipesIds(recipeIds);
        } catch (err) {
          setError('Error fetching saved recipes');
          console.error('Error fetching saved recipes', err);
        } finally {
          setLoading(false);
        }
      }
    };

    if (userId) {
      fetchSavedRecipes();
    }
  }, [userId]);

  return { savedRecipesIds, loading, error };
};

export default useSavedRecipes;
