// src/api/spoonacular.ts

import { Recipe, RecipeDetails, Recipes } from "../interfaces/Recipe";
import { apiClient } from "./apiClient";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY; // Store your API key in .env.local

export const fetchRecipeInformation = async (recipeId: string): Promise<RecipeDetails> => {
  const endpoint = `/recipes/${recipeId}/information?apiKey=${API_KEY}`;
  return await apiClient<RecipeDetails>(endpoint, 'GET');
};
export const fetchSimilarRecipes = async (recipeId: string): Promise<Recipe[]> => {
  const endpoint = `/recipes/${recipeId}/similar?apiKey=${API_KEY}&number=10`;
  return await apiClient<Recipe[]>(endpoint, 'GET');
};

export const fetchRecipes = async (arg: string): Promise<Recipes> => {
  const endpoint = `${arg}&apiKey=${API_KEY}&number=10`;
  console.log("this is endpoint in spoonacular.ts:", endpoint)
  return await apiClient<Recipes>(endpoint, 'GET');
};
  

// https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=10

// https://api.spoonacular.com/recipes/random?number=1&include-tags=vegetarian,dessert&exclude-tags=quinoa
