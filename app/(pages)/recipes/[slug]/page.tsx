"use client"
import { fetchRecipes } from '@/app/api/spoonacular';
import { extractId } from '@/app/utils/extractId';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Recipe, Recipes } from '@/app/interfaces/Recipe';
import { HeadingText } from '@/app/components/atoms/Texts';
import Grid from '@/app/components/organisms/Grid';
import { gridClasses } from '@/app/css/gridClasses';

const RecipeInformation: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipes | []>([]);

    const [error, setError] = useState<string | null>(null);
    const slug = usePathname()
    let url = slug + "?"
    let headingText:string|null = ""
    const searchParams = useSearchParams(); // Get the searchParams
    if(searchParams.has("diet")){
        url +="diet="+searchParams.get("diet")
        headingText = searchParams.get("diet")
    }
    if(searchParams.has("type")){
        url +="type="+searchParams.get("type")
        headingText = searchParams.get("type")

    }
    if(searchParams.has("cuisine")){
        url +="cuisine="+searchParams.get("cuisine")
        headingText = searchParams.get("cuisine")

    }
console.log("searchParams: ", searchParams)
    const loadRecipes = async () => {
        try {
            const data = await fetchRecipes(url);
            setRecipes(data);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch recipeDetails information.');
        }
    };

    useEffect(() => {
        loadRecipes();
    }, []);

    // return(
    //     <p>{slug}{searchParams}</p>
    // )
    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!recipes) {
        return <div className='bg-brandColor-100 h-screen w-screen'></div>;
    }

    return (
        <div className='flex flex-col px-4 md:px-28 py-4 bg-brandColor-100'>
                {"results" in recipes && Array.isArray(recipes.results) &&
                <Grid headerText={headingText || ""} data={recipes.results} cssClass={gridClasses.recipesBigGrid} minDisplayItems={8}/>
                }


        </div>
    );
};

export default RecipeInformation;
