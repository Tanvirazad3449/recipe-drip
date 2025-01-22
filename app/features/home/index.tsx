"use client"


import React from 'react';
import BrandLine from '@/app/components/shared/layout/BrandLine';
import CuisinesSection from './components/CuisinesSection';
import TrendingRecipesSection from './components/TrendingRecipesSection';
import MealTypesSection from './components/MealTypesSection';
import DietsSection from './components/DietsSection';

export default function Home() {
  return (
    <main className="min-h-screen pb-6">
      <BrandLine />
      <section className='px-4 xl:px-28 md:px-8 mt-4'>
        <DietsSection />
      </section>
      <section className='px-4 xl:px-28 md:px-8 mt-8 xl:mt-16'>
        <MealTypesSection />
      </section>
      <section className='px-4 xl:px-28 md:px-8 xl:pt-8 flex flex-col xl:flex-row mt-8'>
        <TrendingRecipesSection />
        <CuisinesSection />
      </section>
    </main>
  );
}

