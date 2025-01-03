import Link from 'next/link';
import List from '../components/List';
import Modal from '../components/Modal';
import React from 'react';
import BrandLine from '../components/BrandLine';
import recipes from '../dummy/recipes';
import cuisines from '../dummy/cuisines';
import diets from '../dummy/diets';
import mealTypes from '../dummy/mealTypes';
import LargeGrid from '../components/organisms/LargeGrid';
import SmallGrid from '../components/organisms/SmallGrid';
import MediumGrid from '../components/organisms/MediumGrid';

export default function Home() {

  return (
    <main className="min-h-screen bg-white text-slate-600">
      <BrandLine imgPath="./brand.svg" />
      <section>
        <LargeGrid headerText="Diets" data={diets}/>
      </section>

      <section>
        <SmallGrid headerText="Meal Types" data={mealTypes}/>

      </section>

      <section>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-2/3'>
          <MediumGrid headerText="Trending Recipes" data={recipes}/>
          </div>
          <div className='w-full md:w-1/3'>
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

