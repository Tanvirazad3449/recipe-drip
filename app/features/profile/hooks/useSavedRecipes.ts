import { useState, useEffect } from 'react';
import { getSavedRecipes } from '../../../libs/firebase/config';

const useSavedRecipes = (userId: string | null) => {
  const [savedRecipesIds, setSavedRecipesIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      if (userId) {
        try {
          const recipeIds = await getSavedRecipes(userId);
          setSavedRecipesIds(recipeIds);
          setLoading(false);
        } catch (err) {
          setError('Error fetching saved recipes');
          console.error('Error fetching saved recipes', err);
          setLoading(false);
        } 
      }else{
        setLoading(false)
      }
    };

    if (userId) {
      fetchSavedRecipes();
    }
  }, [userId]);

  return { savedRecipesIds, loading, error };
};

export default useSavedRecipes;
