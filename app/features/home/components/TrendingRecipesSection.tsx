import Grid from '@/app/components/shared/data-display/grid/Grid'
import { useFetchRecipes } from '@/app/hooks/useFetchRecipes';
import { gridClasses } from '@/app/styles/gridClasses';
import React, { useEffect } from 'react'

const TrendingRecipesSection = () => {
    const { data, loading, loadRecipes } = useFetchRecipes();

    useEffect(() => {
        loadRecipes("sort=popularity");
    }, []);

    return (
        <div className='w-full xl:w-2/3 '>
            <Grid type="recipe" loading={loading} headerText="Trending Recipes" data={data} cssClass={gridClasses.recipes} minDisplayItems={9} />
        </div>
    )
}

export default TrendingRecipesSection