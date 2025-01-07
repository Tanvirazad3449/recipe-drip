"use client"
import { fetchRecipeInformation, fetchSimilarRecipes } from '@/app/api/spoonacular';
import { extractId } from '@/app/utils/extractId';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { HeadingText, RegularText, RegularTextHTML } from '@/app/components/atoms/Texts';
import Table from '@/app/components/organisms/Table';
import { TableRowKeyValuePair } from '@/app/components/molecules/TableRow';
import { Recipe, RecipeDetails } from '@/app/interfaces/Recipe';
import List from '@/app/components/organisms/List';
import { BannerImage } from '@/app/components/atoms/Image';
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
    } catch (err: any) {
      setError(err.message || 'Failed to fetch recipeDetails information.');
    }
  };

  const loadSimilarRecipes = async () => {
    try {
      const data = await fetchSimilarRecipes(extractId(pathName));
      setSimilarRecipes(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch recipeDetails information.');
    }
  };

  useEffect(() => {
    loadRecipeDetails();
    loadSimilarRecipes()
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!recipeDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex flex-row px-28 py-8'>
{/* <p>{JSON.stringify(similarRecipes)}</p> */}
      <div className='w-2/3 pr-16 pt-6'>
        {/*     Banner     */}
        <BannerImage imageSrc={recipeDetails.image} />
        <HeadingText text={recipeDetails.title} className='mt-8' />
        <RegularText text={`By ${recipeDetails.creditsText}`} />



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
        <div className='flex flex-row mt-8'>
          <div className='w-2/3'>
            <List headerText="Ingredients" data={recipeDetails.extendedIngredients} />
          </div>
          <div className='pl-8 w-1/3 flex flex-col'>
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
      <div className='w-1/3'>
      <Grid headerText="Similar Recipes" data={similarRecipes} cssClass={gridClasses.recipesSmallGrid} minDisplayItems={4}/>
      </div>
    </div>
  );
};

export default RecipeInformation;
