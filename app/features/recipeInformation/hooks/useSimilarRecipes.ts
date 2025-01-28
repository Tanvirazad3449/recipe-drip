import { useState, useEffect } from "react";
import { fetchSimilarRecipes } from "@/app/api/spoonacular";
import { Recipe } from "@/app/types/domain/recipe/recipe";

const useSimilarRecipes = (recipeId: string | null) => {
  const [similarRecipes, setSimilarRecipes] = useState<Recipe[] | []>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!recipeId) return;

    const fetchData = async () => {
      setLoading(true)
      try {
        const similarRecipesResponse = await fetchSimilarRecipes(recipeId);
        setSimilarRecipes(similarRecipesResponse);
        setLoading(false)

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "Failed to fetch similar recipes.");
          setLoading(false)
        }
      }
    };

    fetchData();
  }, [recipeId]);

  return { similarRecipes, error, loading };
};

export default useSimilarRecipes;
