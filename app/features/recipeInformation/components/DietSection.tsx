import React from 'react'
import { HeadingText } from '../../../components/ui/Texts'
import TableContainer from '@/app/components/shared/data-display/table/TableContainer';
import { TableRowKeyValuePair } from '@/app/components/shared/data-display/table/TableRowKeyValuePair';

interface DietSectionProps{
  dairyFree: boolean;
  glutenFree: boolean;
  vegan: boolean; 
  vegetarian: boolean;
}
function DietSection({dairyFree, glutenFree, vegan, vegetarian}:DietSectionProps) {
  return (
    <div className='pl-0 xl:pl-8 w-full xl:w-1/3 flex flex-col mt-6 xl:mt-2'>
            <HeadingText>Diet</HeadingText>
            <TableContainer>
              <TableRowKeyValuePair attribute="Dairy-free?" value={dairyFree} />
              <TableRowKeyValuePair attribute="Gluten-free?" value={glutenFree} />
              <TableRowKeyValuePair attribute="Vegan?" value={vegan} />
              <TableRowKeyValuePair attribute="Vegetarian?" value={vegetarian} />
            </TableContainer>
          </div>
  )
}

export default DietSection