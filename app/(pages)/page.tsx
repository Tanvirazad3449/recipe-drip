import Link from 'next/link';
import Grid from '../components/Grid';
import List from '../components/List';
import Modal from '../components/Modal';
import React from 'react';
import BrandLine from '../components/BrandLine';
import recipes from '../dummy/recipes';
import HeaderText from '../components/atoms/HeaderText';
import RecipeList from '../components/RecipeList';
import cuisines from '../dummy/cuisines';
import diets from '../dummy/diets';
import mealTypes from '../dummy/mealTypes';

export default function Home() {

  return (
    <main className="min-h-screen bg-white text-slate-600">
      <BrandLine imgPath="./brand.svg" />
      <section>
        <Grid headerText="Find your flavor in every food category" data={diets} type="large"/>
      </section>

      <section>
        <Grid headerText="Find your flavor in every food category" data={mealTypes} type="small"/>

      </section>

      <section>
        <div className='flex flex-row'>
          <div className='w-2/3 pl-28 pr-14'>
            <RecipeList headerText="Trending Recipes" data={recipes} />
          </div>
          <div className='w-1/3 pr-28'>
            <List headerText="Savor every cuisine" data={cuisines} />
          </div>
        </div>
      </section>

      <section>
        <Modal />
      </section>

      <section className="text-center">
        <Link href="/about" className="text-blue-500 hover:underline">
          Learn more about Recipe Drip
        </Link>
      </section>
    </main>
  );
}

