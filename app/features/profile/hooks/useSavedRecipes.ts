import { useState, useEffect } from 'react';
import { useAuth } from '@/app/contexts/UserContext';
import { fetchBulkRecipes } from '@/app/api/spoonacular';
import { RecipeDetails } from '@/app/types/domain/recipe/recipe';
import { fetchSavedRecipesIds } from '@/app/api/firebase';

const useSavedRecipes = () => {
    const [recipes, setRecipes] = useState<RecipeDetails[]>([]);

    const [loading, setLoading] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const { user } = useAuth();
    const userId = user?.uid

    const fetchSavedRecipes = async () => {
        try {
            const recipeIds = await fetchSavedRecipesIds(userId as string);
            if (recipeIds.length > 0) {
                const ids = recipeIds.join(',');
                const response = await fetchBulkRecipes(ids);
                setRecipes(response);
                setLoading(false)
            }else{
                setLoading(false)
            }
        } catch (err) {
            if (err instanceof Error) {
                setErrorMsg(err.message);
              } else {
                setErrorMsg("Something went wrong");
              }
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchSavedRecipes();
        }
    }, [userId]);

    return { recipes, loading, errorMsg };
};

export default useSavedRecipes;
