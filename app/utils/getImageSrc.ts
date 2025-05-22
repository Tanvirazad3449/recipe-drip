const getRecipeImageSrc = (id: number, type:string | undefined): string => {
    return `${process.env.NEXT_PUBLIC_SPOONACULAR_RECIPE_IMAGE_BASE_URL}/recipes/${id}-312x231.${type}`
};

const getIngredientsImageSrc = (ingredientName:string | undefined): string => {
    return `${process.env.NEXT_PUBLIC_SPOONACULAR_INGREDIENTS_IMAGE_BASE_URL}/cdn/ingredients_100x100/${ingredientName}`
};

export {
    getRecipeImageSrc,
    getIngredientsImageSrc
}
