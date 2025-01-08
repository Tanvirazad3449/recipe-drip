import { Ingredient } from "./Ingredient";

interface RecipeDetails {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: Ingredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: {
    name: string;
    steps: {
      number: number;
      step: string;
      ingredients: Ingredient[];
    }[];
  }[];
}

interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

interface Recipes {
  results: Recipe[];
  
}

export type {
  RecipeDetails, Recipes, Recipe
}