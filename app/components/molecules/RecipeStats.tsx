import { GridDataType } from "@/app/interfaces/GridDataType"
import { SmallText } from "../atoms/Texts"

interface RecipeStatsProps{
    recipe: GridDataType;
}
function RecipeStats({recipe}:RecipeStatsProps) {
    return (
        <div className='flex flex-row items-center justify-between border-b-2 border-b-slate-300 pb-1 w-full'>
            <SmallText text={`${recipe.readyInMinutes} min`}/>
            <SmallText text={`${recipe.servings} servings`}/>
        </div>
    )
}

export default RecipeStats