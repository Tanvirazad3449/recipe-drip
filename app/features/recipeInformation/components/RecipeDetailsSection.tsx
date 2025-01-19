import React from 'react'
import RecipeTitleAndAuthor from './RecipeTitleAndAuthor'
import { Image } from '../../../components/ui/Image'
import SaveRecipeSection from './SaveRecipeSection'
import SummarySection from './SummarySection'
import InstructionsSection from './InstructionsSection'
import IngredientsSection from './IngredientsSection'
import DietSection from './DietSection'
import { RecipeDetails } from '@/app/types/domain/recipe/recipe'
interface RecipeDetailsSectionProps{
    recipeDetails: RecipeDetails;
    saved: boolean;
    handleSave: ()=>void;
}
function RecipeDetailsSection({ recipeDetails, saved, handleSave }: RecipeDetailsSectionProps) {
    return (
        <div className="w-full xl:w-2/3 pr-0 xl:pr-16 pt-4">
            <RecipeTitleAndAuthor title={recipeDetails.title} creditsText={recipeDetails.creditsText} />
            <Image size='banner' imageSrc={recipeDetails.image} className="mt-8" />
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