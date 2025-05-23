import { doc, getDoc } from "firebase/firestore";
import { db } from "../libs/firebase/config";

export const fetchSavedRecipesIds = async (userId: string): Promise<string[]> => {
    try {
        const docRef = doc(db, 'savedRecipes', userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data()?.savedRecipes || [];

    } catch (error) {
        throw error
    }
};
