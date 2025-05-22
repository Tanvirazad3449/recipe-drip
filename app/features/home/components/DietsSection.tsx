import React from 'react'
import diets from '../constants/diets'
import { gridClasses } from '@/app/styles/gridClasses'
import Grid from '@/app/components/shared/data-display/grid/Grid'

const DietsSection = () => {
  return (
    <Grid
    errorMsg={null} 
    type="diet" 
    loading={false} 
    headerText="Diets" 
    data={diets} 
    cssClass={gridClasses.diets} 
    minDisplayItems={4} 
    />
  )
}

export default DietsSection