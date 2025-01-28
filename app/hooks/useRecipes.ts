import { useState } from "react";
import { fetchRecipes } from "@/app/api/spoonacular";
import { Recipe } from "@/app/types/domain/recipe/recipe";

export const useRecipes = () => {
  const [data, setData] = useState<Recipe[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadRecipes = async (url: string) => {
    setLoading(true);
    try {
      const data = await fetchRecipes(url);
      setData(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, loadRecipes, setLoading, setData };
};
