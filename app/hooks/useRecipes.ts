import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import getSearchUrl from '@utils/getSearchUrl';
import { fetchSearchResults } from '@api/spoonacular';
import { Recipe } from '@/app/types/domain/recipe/recipe';

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();

  const url = getSearchUrl(searchParams);
  const headingText = searchParams.get("diet") || searchParams.get("type") || searchParams.get("cuisine") || searchParams.get("ingredients");

  const loadRecipes = async () => {
    console.log("this is url in useRecipes: ", url)
    setLoading(true)
    try {
      const data = await fetchSearchResults(url);
      setRecipes(data.results || data);
      setLoading(false)

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to fetch recipes.');
        setLoading(false)

      }
    }
  };

  useEffect(() => {
    loadRecipes();
  }, [url]);

  return { recipes, error, headingText, loading };
};

export default useRecipes;
