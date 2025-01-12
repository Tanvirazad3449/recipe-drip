import { useState, useEffect } from "react";
import { fetchSimilarRecipes } from "@/app/api/spoonacular";
import { Recipe } from "@/app/interfaces/Recipe";

const useSimilarRecipes = (recipeId: string | null) => {
  const [similarRecipes, setSimilarRecipes] = useState<Recipe[] | []>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!recipeId) return;

    const fetchData = async () => {
      try {
        const similarRecipesResponse = await fetchSimilarRecipes(recipeId);
        setSimilarRecipes(similarRecipesResponse);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "Failed to fetch similar recipes.");
        }
      }
    };

    fetchData();
  }, [recipeId]);

  return { similarRecipes, error };
};

export default useSimilarRecipes;
