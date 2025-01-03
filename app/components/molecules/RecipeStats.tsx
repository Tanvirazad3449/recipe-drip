
function RecipeStats({recipe}:any) {
    return (
        <div className='flex flex-row items-center justify-between border-b-2 border-b-brandColor-200 pb-1 px-2 w-full'>

            <div className="flex flex-row items-center space-x-2">
                <img
                    src={`/t.png`}
                    alt="time icon"
                    className="w-3 h-3"
                />
                <p className="text-brandColor text-sm ">{recipe.readyInMinutes} min</p>
            </div>

            <div className="flex flex-row items-center space-x-2">
                <img
                    src={`/s.png`}
                    alt="time icon"
                    className="w-4 h-4"
                />
                <p className="text-brandColor text-sm">{recipe.servings} servings</p>
            </div>
        </div>
    )
}

export default RecipeStats