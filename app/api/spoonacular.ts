// src/api/spoonacular.ts

import { Recipe, RecipeDetails } from "../interfaces/Recipe";
import { apiClient } from "./apiClient";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY; // Store your API key in .env.local

export const fetchRecipeInformation = async (recipeId: number): Promise<any> => {
  const endpoint = `/recipes/${recipeId}/information?apiKey=${API_KEY}`;
  return await apiClient<RecipeDetails>(endpoint, 'GET');
};

export const fetchPopularRecipes = async (): Promise<any> => {
    const endpoint = `/recipes/complexSearch?sort=popularity&apiKey=${API_KEY}&number=10`;
    return await apiClient<Recipe[]>(endpoint, 'GET');
};

export const fetchSimilarRecipes = async (recipeId: number): Promise<any> => {
  const endpoint = `/recipes/${recipeId}/similar?apiKey=${API_KEY}&number=10`;
  return await apiClient<Recipe[]>(endpoint, 'GET');
};
  
// https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=10

// https://api.spoonacular.com/recipes/random?number=1&include-tags=vegetarian,dessert&exclude-tags=quinoa
