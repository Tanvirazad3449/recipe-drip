import { SearchFilterTypes } from "@/app/types/search/filters";

export const defaultSelectedValues: SearchFilterTypes = {
    cuisine: "",
    type: "",
    diet: "",
    sort: "popularity",
    sortDirection: "asc",
    maxReadyTime: 60,
    minServings: 1,
    maxServings: 8,
    includeIngredients: "",
    excludeIngredients: "",
    titleMatch: false,
    query: ""
};
