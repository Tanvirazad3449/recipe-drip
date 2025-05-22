import { useEffect, useState } from "react";
import { fetchRecipes } from "@/app/api/spoonacular";
import { Recipe } from "@/app/types/domain/recipe/recipe";

export const useRecipes = (url: string) => {
  const [data, setData] = useState<Recipe[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const loadRecipes = async () => {
    setLoading(true);
    setErrorMsg(null)
    try {
      const data = await fetchRecipes(url);
      setData(data);
    } catch (err:any) {
      setErrorMsg(err.message || "Search failed")
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    
  loadRecipes()
    return () => {
      setData([])
    }
  }, [url])
  

  return { data, loading,errorMsg, setLoading, setData };
};
