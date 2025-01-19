"use client"


import React, { useEffect } from 'react';
import diets from '@/app/features/home/constants/diets';
import { gridClasses } from '@/app/styles/gridClasses';
import BrandLine from '@/app/components/shared/layout/BrandLine';
import mealTypes from '@/app/features/home/constants/mealTypes';
import cuisines from '@/app/features/home/constants/cuisines';
import List from '@/app/components/shared/data-display/list/List';
import Grid from '@/app/components/shared/data-display/grid/Grid';
import { useFetchRecipes } from '@/app/hooks/useFetchRecipes';

export default function Home() {

  const { data, loading, loadRecipes } = useFetchRecipes();

  useEffect(() => {
    loadRecipes("sort=popularity");
  }, []);

  return (
    <main className="min-h-screen pb-6">
      <BrandLine/>
      <section className='px-4 xl:px-28 md:px-8'>
        <Grid type="diet" loading={false} headerText="Diets" data={diets} cssClass={gridClasses.diets} minDisplayItems={4} />
      </section>

      <section className='px-4 xl:px-28 md:px-8 mt-4 xl:pt-8'>
        <Grid type="mealType" loading={false} headerText="Meal Types" data={mealTypes} cssClass={gridClasses.mealTypes} minDisplayItems={4} />
      </section>

      <section className='px-4 xl:px-28 md:px-8 xl:pt-8'>
        <div className='flex flex-col xl:flex-row mt-4'>
          <div className='w-full xl:w-2/3 '>
            {Array.isArray(data) &&
              <Grid type="recipe" loading={loading} headerText="Trending Recipes" data={data} cssClass={gridClasses.recipes} minDisplayItems={9} />
            }
          </div>
          <div className='w-full xl:w-1/3 md:w-1/2 xl:pl-16 mt-4'>
            <List type="cuisine" headerText="Cuisines" data={cuisines} />
          </div>
        </div>
      </section>
    </main>
  );
}

