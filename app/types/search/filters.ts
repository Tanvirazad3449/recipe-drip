export interface SearchFilterTypes {
    cuisine: string;
    type: string;
    diet: string;
    sort: string;
    sortDirection: string;
    maxReadyTime: number;
    servings: number | number[];
    includeIngredients: string;
    excludeIngredients: string;
    titleMatch: boolean;
    query: string;
  }