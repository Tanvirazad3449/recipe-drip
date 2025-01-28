import { ACTION_TYPES } from "@/app/actionTypes/recipeDetailsActions";
import { AxiosError } from "axios";

export const handleError = (dispatch: React.Dispatch<any>, err: unknown) => {
  if (err instanceof AxiosError && typeof err.message === "string") {
    dispatch({ type: ACTION_TYPES.FETCH_ERROR, payload: err.message });
  }
};