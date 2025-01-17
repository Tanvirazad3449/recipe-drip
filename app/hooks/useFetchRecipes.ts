import { useState } from "react";
import { fetchSearchResults } from "@/app/api/spoonacular";
import { Recipe } from "@/app/interfaces/Recipe";

export const useFetchRecipes = () => {
  const [data, setData] = useState<Recipe[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadRecipes = async (url: string) => {
    setLoading(true);
    try {
      const data = await fetchSearchResults(url);
      setData(data.results);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, loadRecipes, setLoading, setData };
};
