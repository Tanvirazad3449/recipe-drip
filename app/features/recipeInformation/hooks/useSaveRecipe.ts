import { useEffect, useReducer } from "react";
import { db } from "../../../libs/firebase/config";
import saveRecipeReducer from "../reducers/saveRecipeReducer";
import { INITIAL_STATE } from "@/app/reducers/fetchReducers/initialState";
import { ACTION_TYPES } from "@/app/actionTypes/recipeDetailsActions";
import { useAuth } from "@/app/contexts/UserContext";
import { doc, setDoc, arrayUnion } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { handleError } from "@/app/reducers/fetchReducers/handleError";
import { fetchSavedRecipesIds } from "@/app/api/firebase";


const useSaveRecipe = (recipeId: string) => {
  const router = useRouter();

  const [state, dispatch] = useReducer(saveRecipeReducer, INITIAL_STATE);
  const { user } = useAuth();

  useEffect(() => {
    const checkRecipeSaved = async () => {
      if (!recipeId || !user) return;

      try {
        dispatch({ type: ACTION_TYPES.FETCH_START });

        const savedRecipes = await fetchSavedRecipesIds(user.uid);
        dispatch({
          type: ACTION_TYPES.FETCH_SUCCESS,
          payload: savedRecipes.includes(recipeId)
        });
      } catch (err) {
        handleError(dispatch, err);
      }
    };

    checkRecipeSaved();
  }, [recipeId, user]);

  const toggleState = async () => {
    if (!user) {
      router.push("/auth")
      return
    };

    try {
      dispatch({ type: ACTION_TYPES.FETCH_START });

      const docRef = doc(db, "savedRecipes", user.uid);
      const savedRecipes = await fetchSavedRecipesIds(user.uid);

      if (savedRecipes.includes(recipeId)) {
        // Unsave the recipe
        const updatedRecipes = savedRecipes.filter((id) => id !== recipeId);
        await setDoc(docRef, { savedRecipes: updatedRecipes }, { merge: true });
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: false });
        console.log("Recipe unsaved!");
      } else {
        // Save the recipe
        await setDoc(
          docRef,
          { savedRecipes: arrayUnion(recipeId) },
          { merge: true }
        );
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: true });
        console.log("Recipe saved!");
      }
    } catch (err) {
      handleError(dispatch, err);
    }
  };

  return { state, toggleState };
};

export default useSaveRecipe;