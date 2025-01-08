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
import { gridClasses } from '@/app/css/gridClasses';

const RecipeInformation: React.FC = () => {
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetails | null>(null);
  const [similarRecipes, setSimilarRecipes] = useState<Recipe[] | []>([]);

  const [error, setError] = useState<string | null>(null);
  const pathName = usePathname()
  
  const loadRecipeDetails = async () => {
    try {
      const data = await fetchRecipeInformation(extractId(pathName));
      setRecipeDetails(data);
      console.log(data)
    } catch (err) {
      if(err instanceof Error){
        setError(err.message || 'Failed to fetch recipeDetails information.');
      }
    }
  };

  const loadSimilarRecipes = async () => {
    try {
      const data = await fetchSimilarRecipes(extractId(pathName));
      setSimilarRecipes(data);
    } catch (err) {
      if(err instanceof Error){
        setError(err.message || 'Failed to fetch recipeDetails information.');
      }
    }
  };

  useEffect(() => {
    loadRecipeDetails();
    loadSimilarRecipes()
  },[]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!recipeDetails) {
    return <div className='bg-brandColor-100 h-screen w-screen'></div>;
  }

  return (
    <div className='flex flex-col md:flex-row px-4 md:px-28 py-8 bg-brandColor-100'>
      <div className='w-full md:w-2/3 pr-0 md:pr-16 pt-4'>
        {/*     Banner     */}
        <SubHeadingText text={recipeDetails.title} className='mt-0' />
        <RegularText text={`By ${recipeDetails.creditsText}`} />
        <BannerImage imageSrc={recipeDetails.image} className='mt-8' />



        {/*     Instruction     */}
        <div className='mt-8'>
          <HeadingText text="Summary" className='mt-8' />
          <RegularTextHTML text={recipeDetails.summary} />
        </div>



        {/*     Instruction     */}
        <div className='mt-8'>
          <HeadingText text="Instructions" />
          <RegularTextHTML text={recipeDetails.instructions} />
        </div>



        {/*     Ingredients & Diet     */}
        <div className='flex flex-col md:flex-row mt-6 w-full'>
          <div className='w-full md:w-2/3 '>
            <List headerText="Ingredients" data={recipeDetails.extendedIngredients} />
          </div>
          <div className='pl-0 md:pl-8 w-full md:w-1/3 flex flex-col mt-6 md:mt-2'>
            <HeadingText text="Diet" />
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
