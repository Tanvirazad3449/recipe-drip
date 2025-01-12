import React from 'react'
import { HeadingText } from '../atoms/Texts'
import Tables from '../atoms/Tables'
import { TableRowKeyValuePair } from './TableRow'

interface DietSectionProps{
  dairyFree: boolean;
  glutenFree: boolean;
  vegan: boolean; 
  vegetarian: boolean;
}
function DietSection({dairyFree, glutenFree, vegan, vegetarian}:DietSectionProps) {
  return (
    <div className='pl-0 md:pl-8 w-full md:w-1/3 flex flex-col mt-6 md:mt-2'>
            <HeadingText>Diet</HeadingText>
            <Tables>
              <TableRowKeyValuePair attribute="Dairy-free?" value={dairyFree} />
              <TableRowKeyValuePair attribute="Gluten-free?" value={glutenFree} />
              <TableRowKeyValuePair attribute="Vegan?" value={vegan} />
              <TableRowKeyValuePair attribute="Vegetarian?" value={vegetarian} />
            </Tables>
          </div>
  )
}

export default DietSection