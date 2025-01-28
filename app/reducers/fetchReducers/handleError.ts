import { ACTION_TYPES } from "@/app/actionTypes/recipeDetailsActions";
import { AxiosError } from "axios";
interface Action {
  type: string;
  payload?: string;  // Since the payload is an error message (string)
}
export const handleError = (dispatch: (action: Action) => void, err: unknown) => {
  if (err instanceof AxiosError && typeof err.message === "string") {
    dispatch({ type: ACTION_TYPES.FETCH_ERROR, payload: err.message });
  }
};