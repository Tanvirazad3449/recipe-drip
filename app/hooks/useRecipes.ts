import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import getSearchUrl from '@utils/getSearchUrl';
import { fetchRecipes } from '@api/spoonacular';
import { Recipe } from '@interfaces/Recipe';

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const slug = usePathname();
  const searchParams = useSearchParams();

  const url = getSearchUrl(slug, searchParams);
  const headingText = searchParams.get("diet") || searchParams.get("type") || searchParams.get("cuisine") || searchParams.get("ingredients");

  const loadRecipes = async () => {
    try {
      const data = await fetchRecipes(url);
      setRecipes(data.results || data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to fetch recipes.');
      }
    }
  };

  useEffect(() => {
    loadRecipes();
  }, [url]);

  return { recipes, error, headingText };
};

export default useRecipes;
