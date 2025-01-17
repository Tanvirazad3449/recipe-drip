import { SearchFilterTypes } from "../interfaces/SearchFilterType";

export const defaultSelectedValues: SearchFilterTypes = {
    cuisine: "",
    type: "",
    diet: "",
    sort: "popularity",
    sortDirection: "",
    maxReadyTime: 60,
    servings: [1, 8],
    includeIngredients: "",
    excludeIngredients: "",
    titleMatch: false,
    query: ""
};
