"use client"
import { fetchRecipeInformation, fetchSimilarRecipes } from '@/app/api/spoonacular';
import { extractId } from '@/app/utils/extractId';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { HeadingText, RegularText, RegularTextHTML, SubHeadingText } from '@/app/components/atoms/Texts';
import Table from '@/app/components/atoms/Tables';
import { TableRowKeyValuePair } from '@/app/components/molecules/TableRow';
import { Recipe, RecipeDetails } from '@/app/interfaces/Recipe';
import List from '@/app/components/organisms/List';
import { BannerImage } from '@/app/components/atoms/Images';
import Grid from '@/app/components/organisms/Grid';
import { gridClasses } from '@/app/styles/gridClasses';

import { db, auth } from '../../../libs/firebase/config'; // Import your Firebase initialization
import { doc, setDoc, arrayUnion, getDoc } from "firebase/firestore"; // Import necessary Firestore functions
import { MediumButton } from '@/app/components/atoms/Buttons';

const RecipeInformation: React.FC = () => {
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetails | null>(null);
  const [similarRecipes, setSimilarRecipes] = useState<Recipe[] | []>([]);
  const [saved, setSaved] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);
  const pathName = usePathname()
  const recipeId = extractId(pathName);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [recipeDetails, similarRecipes] = await Promise.all([
          fetchRecipeInformation(recipeId),
          fetchSimilarRecipes(recipeId),
        ]);
  
        setRecipeDetails(recipeDetails);
        setSimilarRecipes(similarRecipes);
  
        console.log(recipeDetails);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || 'Failed to fetch data.');
        }
      }
    };
  
    loadData();
  }, [pathName]);
  

  const handleSave = async () => {
    const user = auth.currentUser;
  
    if (user) {
      const userId = user.uid;
  
      try {
        // Fetch the current savedRecipes
        const docRef = doc(db, "savedRecipes", userId);
        const docSnap = await getDoc(docRef);
  
        let savedRecipes = [];
        if (docSnap.exists()) {
          savedRecipes = docSnap.data()?.savedRecipes || [];
        }
  
        // If the recipeId is not already in the array, add it
        if (!savedRecipes.includes(recipeId)) {
          await setDoc(
            docRef,
            {
              savedRecipes: arrayUnion(recipeId),
            },
            { merge: true }
          );
  
          setSaved(true); // Mark the recipe as liked in the UI
          console.log("Liked the recipe!");
        } else {
          console.log("Recipe already saved.");
        }
      } catch (error) {
        console.error("Error saving liked recipe: ", error);
      }
    } else {
      console.log("User not authenticated");
    }
  };
  
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!recipeDetails) {
    return <div className='bg-brandColor-100 h-screen w-screen'></div>;
  }

  
  return (
    <div className='flex flex-col md:flex-row px-4 md:px-28 py-8 '>
      <div className='w-full md:w-2/3 pr-0 md:pr-16 pt-4'>
        {/*     Banner     */}
        <SubHeadingText className='mt-0'>
        {recipeDetails.title}
          </SubHeadingText> 
        <RegularText>{`By ${recipeDetails.creditsText}`}</RegularText>
        <BannerImage imageSrc={recipeDetails.image} className='mt-8' />
        <div className='my-4 align-middle'>

        <RegularText>Like this recipe? Save it for later!</RegularText>
        <MediumButton onClick={handleSave} className='bg-brandColor text-white mt-2'>{saved ? 'Saved!' : 'Save Recipe'}</MediumButton>
        </div>



        {/*     Instruction     */}
        <div className='mt-8'>
          <HeadingText className='mt-8'>Summary</HeadingText>
          <RegularTextHTML text={recipeDetails.summary} />
        </div>



        {/*     Instruction     */}
        {recipeDetails.instructions && recipeDetails.instructions.length > 0 &&
        <div className='mt-8'>
          <HeadingText>Instructions</HeadingText>
          <RegularTextHTML text={recipeDetails.instructions} />
        </div>
}



        {/*     Ingredients & Diet     */}
        <div className='flex flex-col md:flex-row mt-6 w-full'>
          <div className='w-full md:w-2/3 '>
            <List headerText="Ingredients" data={recipeDetails.extendedIngredients} />
          </div>
          <div className='pl-0 md:pl-8 w-full md:w-1/3 flex flex-col mt-6 md:mt-2'>
            <HeadingText>Diet</HeadingText>
            <Table>
              <TableRowKeyValuePair attribute="Dairy-free?" value={recipeDetails.dairyFree} />
              <TableRowKeyValuePair attribute="Gluten-free?" value={recipeDetails.glutenFree} />
              <TableRowKeyValuePair attribute="Vegan?" value={recipeDetails.vegan} />
              <TableRowKeyValuePair attribute="Vegetarian?" value={recipeDetails.vegetarian} />
            </Table>
          </div>
        </div>



      </div>
      <div className='mt-4 w-full md:w-1/3 md:mt-0'>
      {similarRecipes?.length > 0 &&
      <Grid headerText="Similar Recipes" data={similarRecipes} cssClass={gridClasses.recipesSmallGrid} minDisplayItems={4}/>
}
      </div>
    </div>
  );
};

export default RecipeInformation;
