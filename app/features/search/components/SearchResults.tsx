import { gridClasses } from '@/app/styles/gridClasses'
import React from 'react'
import { Recipe } from '@/app/types/domain/recipe/recipe'
import Grid from '@/app/components/shared/data-display/grid/Grid';

interface SearchResultProps {
  isVisible: boolean;
  loading: boolean;
  data: Recipe[];
  errorMsg: string | null;
}
function SearchResults({ isVisible, loading, data, errorMsg }: SearchResultProps) {
  return (
    <>
      {isVisible &&
        <div className='mt-8'>
          <Grid 
          errorMsg={errorMsg}
          type='recipe' 
          loading={loading} 
          headerText="Search Results" 
          data={data} 
          cssClass={gridClasses.recipes} 
          minDisplayItems={9} />
        </div>
      }
    </>
  )
}

export default SearchResults