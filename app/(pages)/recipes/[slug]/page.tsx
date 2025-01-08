// "use client"
// import { fetchRecipes } from '@/app/api/spoonacular';
// import { usePathname, useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import { Recipe } from '@/app/interfaces/Recipe';
// import Grid from '@/app/components/organisms/Grid';
// import { gridClasses } from '@/app/css/gridClasses';

// const Recipes: React.FC = () => {
//     const [recipes, setRecipes] = useState<Recipe[]>([]);
//     const [error, setError] = useState<string | null>(null);
//     const slug = usePathname();
//     const searchParams = useSearchParams();

//     let headingText: string | null = null;
//     let url = slug + "?";

//     const keys = ["diet", "type", "cuisine"];

//     keys.forEach((key) => {
//         const value = searchParams.get(key);
//         if (value) {
//             url += `${key}=${value}&`;
//             headingText = value; 
//         }
//     });

//     url = url.endsWith("&") ? url.slice(0, -1) : url;

//     const loadRecipes = async () => {
//         try {
//             const data = await fetchRecipes(url);
//             setRecipes(data.results);
//         } catch (err) {
//             if (err instanceof Error) {
//                 setError(err.message || 'Failed to fetch recipeDetails information.');
//             }
//         }
//     };

//     useEffect(() => {
//         loadRecipes();
//     }, []);

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     if (!recipes) {
//         return <div className='bg-brandColor-100 h-screen w-screen'></div>;
//     }

//     return (
//         <div className='flex flex-col px-4 md:px-28 py-4 bg-brandColor-100'>
//             {Array.isArray(recipes) && <Grid headerText={headingText || ""} data={recipes} cssClass={gridClasses.recipesBigGrid} minDisplayItems={8} />}
//         </div>
//     );
// };

// export default Recipes;


"use client";
import React from 'react';
import Grid from '@/app/components/organisms/Grid';
import { gridClasses } from '@/app/styles/gridClasses';
import useRecipes from '@/app/hooks/useRecipes';
import ErrorBlock from '@/app/components/atoms/ErrorBlock';

const Recipes: React.FC = () => {
  const { recipes, error, headingText } = useRecipes();

  if (error) {
    return <ErrorBlock message={error} />;
  }

  if (!recipes) {
    return <div className="bg-brandColor-100 h-screen w-screen">No recipes to show!</div>;
  }

  return (
    <div className="flex flex-col px-4 md:px-28 py-4 bg-brandColor-100">
      <Grid
        headerText={headingText || ""}
        data={recipes}
        cssClass={gridClasses.recipesBigGrid}
        minDisplayItems={8}
      />
    </div>
  );
};

export default Recipes;
