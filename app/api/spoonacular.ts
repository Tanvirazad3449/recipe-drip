import { Recipe, RecipeDetails, Recipes } from "../types/domain/recipe/recipe";
import { apiClient } from "./apiClient";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

export const fetchRecipeInformation = async (recipeId: string): Promise<RecipeDetails> => {
  const endpoint = `/recipes/${recipeId}/information?apiKey=${API_KEY}`;
  return await apiClient<RecipeDetails>(endpoint, 'GET');
};
export const fetchSimilarRecipes = async (recipeId: string): Promise<Recipe[]> => {
  const endpoint = `/recipes/${recipeId}/similar?apiKey=${API_KEY}&number=10`;
  return await apiClient<Recipe[]>(endpoint, 'GET');
};

export const fetchBulkRecipes = async (arg: string): Promise<RecipeDetails[]> => {
  const endpoint = `/recipes/informationBulk?ids=${arg}&includeNutrition=false&apiKey=${API_KEY}`;
  return await apiClient<RecipeDetails[]>(endpoint, 'GET');
};

export const fetchSearchResults = async (arg: string): Promise<Recipes> => {
  const endpoint = `/recipes/complexSearch?${arg}&apiKey=${API_KEY}&number=20`;
  console.log("###### complexSearch called", endpoint)
  return await apiClient<Recipes>(endpoint, 'GET');
};
