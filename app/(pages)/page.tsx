"use client"
import List from '../components/organisms/List';
import BrandLine from '../components/atoms/BrandLine';
import cuisines from '../dummy/cuisines';
import diets from '../dummy/diets';
import mealTypes from '../dummy/mealTypes';
import Grid from '../components/organisms/Grid';
import { gridClasses } from '../styles/gridClasses';
import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../api/spoonacular';
import {Recipe } from '../interfaces/Recipe';
import { ErrorNotificationBlock } from '../components/atoms/NotificationBlock';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const loadRecipes = async () => {
    try {
      const data = await fetchRecipes("/recipes/complexSearch?sort=popularity");
        setRecipes(data.results);
      
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to fetch recipes information.');
      }
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  if (error) {
    return <ErrorNotificationBlock message={error} />;
  }

  if (!recipes) {
    return <div className='bg-brandColor-100 h-screen w-screen'></div>;
  }
  return (
    <main className="min-h-screen pb-6">
      <BrandLine/>
      <section className='px-4 xl:px-28 md:px-8'>
        <Grid headerText="Diets" data={diets} cssClass={gridClasses.diets} minDisplayItems={4} />
      </section>

      <section className='px-4 xl:px-28 md:px-8 mt-4 xl:pt-8'>
        <Grid headerText="Meal Types" data={mealTypes} cssClass={gridClasses.mealTypes} minDisplayItems={4} />
      </section>

      <section className='px-4 xl:px-28 md:px-8 xl:pt-8'>
        <div className='flex flex-col xl:flex-row mt-4'>
          <div className='w-full xl:w-2/3 '>
            {Array.isArray(recipes) &&
              <Grid headerText="Trending Recipes" data={recipes} cssClass={gridClasses.recipes} minDisplayItems={9} />
            }
          </div>
          <div className='w-full xl:w-1/3 md:w-1/2 xl:pl-16 mt-4'>
            <List headerText="Cuisines" data={cuisines} />
          </div>
        </div>
      </section>
    </main>
  );
}

