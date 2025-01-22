import List from '@/app/components/shared/data-display/list/List'
import React from 'react'
import cuisines from '../constants/cuisines'

const CuisinesSection = () => {
  return (
    <div className='w-full xl:w-1/3 md:w-1/2 xl:pl-16 mt-4'>
            <List type="cuisine" headerText="Cuisines" data={cuisines} />
          </div>
  )
}

export default CuisinesSection