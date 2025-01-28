import { useEffect, useReducer } from "react";
import { fetchRecipeInformation } from "@/app/api/spoonacular";
import { ACTION_TYPES } from "@/app/actionTypes/recipeDetailsActions";
import { AxiosError } from "axios";
import recipeDetailsReducer from "@/app/features/recipeInformation/reducers/recipeDetailsReducer";
import { INITIAL_STATE } from "@/app/reducers/fetchReducers/initialState";
import { handleError } from "@/app/reducers/fetchReducers/handleError";

const useRecipeDetails = (recipeId: string | null) => {
  
  const [state, dispatch] = useReducer(recipeDetailsReducer, INITIAL_STATE);

  useEffect(() => {
    if (!recipeId) return;
    const fetchData = async () => {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      try {
        const res = await fetchRecipeInformation(recipeId);
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: res });

      } catch (err) {
        handleError(dispatch, err)
      }
    };

    fetchData();
  }, [recipeId]);

  return { state };
};

export default useRecipeDetails;
