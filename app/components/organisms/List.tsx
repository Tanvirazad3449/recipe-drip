'use client';
import React from 'react';
import { HeadingText } from '../atoms/Texts';
import ListItem from '../molecules/ListItems';
import { CuisineType } from '@/app/interfaces/CuisineType';
import { Ingredient } from '@/app/interfaces/Ingredient';

interface ListProps {
  headerText: string; // The header text for the list
  data: (CuisineType | Ingredient)[]; // Array of objects with at least an `id` property
}

export default function List({ headerText, data }: ListProps) {
  return (
    <div>
      <div className="py-2">
        <HeadingText text={headerText} />
      </div>
      <ul className="list-none flex flex-col">
        {data.map((listObj) => (
          <ListItem key={listObj.id} listObj={listObj} />
        ))}
      </ul>
    </div>
  );
}
