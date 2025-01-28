import { ACTION_TYPES } from "../../actionTypes/recipeDetailsActions";

export 
  type State<T> = {
    loading: boolean;
    data: T | undefined;
    errorMessage: string | undefined;
  };
  
  type Action<T> = {
    type: string;
    payload?: T | string;
  };
  
  export const fetchReducer = <T>() => {
    return (state: State<T>, action: Action<T>): State<T> => {
      switch (action.type) {
        case ACTION_TYPES.FETCH_START:
          return {
            ...state,
            loading: true,
          };
        case ACTION_TYPES.FETCH_SUCCESS:
          return {
            loading: false,
            data: action.payload as T,
            errorMessage: undefined,
          };
        case ACTION_TYPES.FETCH_ERROR:
          return {
            loading: false,
            data: undefined,
            errorMessage: action.payload as string,
          };
        default:
          return state;
      }
    };
  };
  