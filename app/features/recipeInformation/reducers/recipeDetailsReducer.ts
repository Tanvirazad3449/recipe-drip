import { RecipeDetails } from "../../../types/domain/recipe/recipe";
import { fetchReducer } from "../../../reducers/fetchReducers/fetchReducer";
  
const recipeDetailsReducer = fetchReducer<RecipeDetails>();

export default recipeDetailsReducer;
