import { gridClasses } from '@/app/styles/gridClasses'
import React from 'react'
import { Recipe } from '@/app/types/domain/recipe/recipe'
import Grid from '@/app/components/shared/data-display/grid/Grid';

interface SearchResultProps {
  isVisible: boolean;
  loading: boolean;
  data: Recipe[];
}
function SearchResults({ isVisible, loading, data }: SearchResultProps) {
  return (
    <>
      {isVisible &&
        <div className='mt-8'>
          <Grid type='recipe' headerText="Search Results" loading={loading} data={data} cssClass={gridClasses.recipes} minDisplayItems={9} />
        </div>
      }
    </>
  )
}

export default SearchResults