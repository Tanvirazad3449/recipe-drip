import { doc, setDoc, arrayUnion, getDoc } from "firebase/firestore";
import { auth, db } from "@/app/libs/firebase/config";

export const handleSaveRecipe = async (
  recipeId: string,
  setSaved: (saved: boolean) => void
) => {

  
  const user = auth.currentUser;

  if (!user) {
    
    return null;
  }

  try {
    const userId = user.uid;
    const docRef = doc(db, "savedRecipes", userId);
    const docSnap = await getDoc(docRef);

    let savedRecipes: string[] = [];
    if (docSnap.exists()) {
      savedRecipes = docSnap.data()?.savedRecipes || [];
    }

    if (savedRecipes.includes(recipeId)) {
      // Unsave the recipe
      const updatedRecipes = savedRecipes.filter((id) => id !== recipeId);
      await setDoc(docRef, { savedRecipes: updatedRecipes }, { merge: true });
      setSaved(false);
      console.log("Recipe unsaved!");
    } else {
      // Save the recipe
      await setDoc(
        docRef,
        {
          savedRecipes: arrayUnion(recipeId),
        },
        { merge: true }
      );
      setSaved(true);
      console.log("Recipe saved!");
    }
  } catch (error) {
    console.error("Error saving or unsaving the recipe: ", error);
  }
};
