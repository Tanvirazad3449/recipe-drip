import { gridClasses } from '@/app/styles/gridClasses'
import React from 'react'
import { InfoNotificationBlock } from '../atoms/NotificationBlock'
import Grid from '../organisms/Grid'
import { Recipe } from '@/app/interfaces/Recipe'

interface SearchResultProps{
    isVisible: boolean;
    loading: boolean;
    data: Recipe[];
}
function SearchResults({isVisible, loading, data}:SearchResultProps) {
  return (
    <>
    {isVisible &&
          <>

            {loading ?
              <InfoNotificationBlock message="Loading..." />
              :
              <>
                {Array.isArray(data) && data.length > 0 ?
                  <div className='mt-8'>
                    
                    <Grid headerText="Search Results" data={data} cssClass={gridClasses.recipes} minDisplayItems={9} />
                  </div>
                  :
                  <InfoNotificationBlock message="No recipes found" />
                }
              </>
            }
          </>
        }
    </>
  )
}

export default SearchResults