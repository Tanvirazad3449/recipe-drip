import React from 'react'
import RecipeTitleAndAuthor from '../molecules/RecipeTitleAndAuthor'
import { BannerImage } from '../atoms/Images'
import SaveRecipeSection from '../molecules/SaveRecipeSection'
import SummarySection from '../molecules/SummarySection'
import InstructionsSection from '../molecules/InstructionsSection'
import IngredientsSection from '../molecules/IngredientsSection'
import DietSection from '../molecules/DietSection'
import { RecipeDetails } from '@/app/interfaces/Recipe'
interface RecipeDetailsSectionProps{
    recipeDetails: RecipeDetails;
    saved: boolean;
    handleSave: ()=>void;
}
function RecipeDetailsSection({ recipeDetails, saved, handleSave }: RecipeDetailsSectionProps) {
    return (
        <div className="w-full xl:w-2/3 pr-0 xl:pr-16 pt-4">
            <RecipeTitleAndAuthor title={recipeDetails.title} creditsText={recipeDetails.creditsText} />
            <BannerImage imageSrc={recipeDetails.image} className="mt-8" />
            <SaveRecipeSection saved={saved} handleSave={handleSave} />
            <SummarySection summary={recipeDetails.summary} />
            {recipeDetails.instructions && recipeDetails.instructions.length > 0 && (
                <InstructionsSection instructions={recipeDetails.instructions} />
            )}
            <div className='flex flex-col xl:flex-row mt-6 w-full'>
                <IngredientsSection extendedIngredients={recipeDetails.extendedIngredients} />
                <DietSection
                    dairyFree={recipeDetails.dairyFree}
                    glutenFree={recipeDetails.glutenFree}
                    vegan={recipeDetails.vegan}
                    vegetarian={recipeDetails.vegetarian}
                />
            </div>
        </div>

    )
}

export default RecipeDetailsSection