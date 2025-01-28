"use server"
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

export const fetchRecipes = async (arg: string): Promise<any[]> => {
  try {
    const endpoint = `/recipes/complexSearch?${arg}&apiKey=${API_KEY}&number=20`;
    const res: Recipes = await apiClient<Recipes>(endpoint, 'GET');
    return res.results; // Return the results directly
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw new Error('Failed to fetch recipes');
  }
};