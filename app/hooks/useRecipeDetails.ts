import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { fetchRecipeInformation } from "@/app/api/spoonacular";
import { RecipeDetails } from "@/app/interfaces/Recipe";
import { auth, db } from "../libs/firebase/config";

const useRecipeDetails = (recipeId: string | null) => {
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetails | null>(null);
  const [saved, setSaved] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!recipeId) return;

    const fetchData = async () => {
      try {
        const recipeDetailsResponse = await fetchRecipeInformation(recipeId);
        setRecipeDetails(recipeDetailsResponse);

        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, "savedRecipes", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const savedRecipes = docSnap.data()?.savedRecipes || [];
            setSaved(savedRecipes.includes(recipeId));
          }
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "Failed to fetch recipe details.");
        }
      }
    };

    fetchData();
  }, [recipeId]);

  return { recipeDetails, saved, setSaved, error };
};

export default useRecipeDetails;
