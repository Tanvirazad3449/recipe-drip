'use client';
import React from 'react';
import ListItemIngredient from './ListItemIngredient';
import ListItemCuisine from './ListItemCuisine';
import { HeadingText } from '@/app/components/ui/Texts';
import { IngredientDetailType } from '@/app/types/domain/recipe/ingredients';
import { CuisineType } from '@/app/types/domain/recipe/attributes';

type ListProps<T> = {
  headerText: string;
  data: T[];
  type: "ingredient" | "cuisine"
}

const List = ({ headerText, data, type }: ListProps<CuisineType | IngredientDetailType>) => {

  const renderListItem = (listObj: CuisineType | IngredientDetailType) => {
    switch (type) {
      case "ingredient":
        return <ListItemIngredient key={listObj.id} item={listObj as IngredientDetailType} />
      case "cuisine":
        return <ListItemCuisine key={listObj.id} item={listObj as CuisineType} />
      default:
        return null
    }
  }

  return (
    <div>
      <HeadingText className='py-2'>{headerText}</HeadingText>
      <ul className="list-none flex flex-col">
        {data.map(renderListItem)}
      </ul>
    </div>
  );
}


export default List


// app/types/
// ├── auth/
// │   └── user.ts               // (previously FirebaseAuthUser.ts)
// │
// ├── common/
// │   ├── components.ts         // (previously TextProps.ts)
// │   └── grid.ts              // For any grid-related types
// │
// ├── domain/
// │   └── recipe/
// │       ├── attributes.ts     // Combine all attributes in one file
// │       ├── ingredients.ts    // Combine ingredient types
// │       └── recipe.ts        // Main recipe type
// │
// └── search/
//     └── filters.ts           // (previously SearchFilterType.ts)