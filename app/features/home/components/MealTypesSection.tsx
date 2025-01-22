import Grid from '@/app/components/shared/data-display/grid/Grid'
import React from 'react'
import mealTypes from '../constants/mealTypes'
import { gridClasses } from '@/app/styles/gridClasses'

const MealTypesSection = () => {
  return (
     <Grid 
     type="mealType" 
     loading={false} 
     headerText="Meal Types" 
     data={mealTypes} 
     cssClass={gridClasses.mealTypes} 
     minDisplayItems={4} 
     />
  )
}

export default MealTypesSection