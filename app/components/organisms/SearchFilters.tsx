"use client"
import React from 'react'
import SelectMultiple from '../organisms/SelectMultiple'
import cuisines from '@/app/dummy/cuisines'
import { CuisineType } from '@/app/interfaces/CuisineType';
import { MealType } from '@/app/interfaces/MealType';
import mealTypes from '@/app/dummy/mealTypes';
import diets from '@/app/dummy/diets';
import { DietType } from '@/app/interfaces/DietType';
import { Box } from '@mui/material';
import ingredients from '@/app/dummy/ingredients';
import { IngredientType } from '@/app/interfaces/IngredientType';
import DiscreteSlider from '../organisms/DiscreteSlider';
import RangeSlider from '../organisms/RangeSlider';
import { SearchFilterTypes } from '@/app/interfaces/SearchFilterType';
import SearchSortBar from './SearchSortBar';

  
  interface SearchFilterProps {
    setSelectedValues: React.Dispatch<React.SetStateAction<SearchFilterTypes>>;
    selectedValues: SearchFilterTypes;
  }
function SearchFilters({ selectedValues, setSelectedValues }: SearchFilterProps) {

    const handleChangeMultiple = <T,>(key: keyof typeof selectedValues, getName: (item: T) => string) => (event: React.SyntheticEvent, value: T[]) => {
        if (Array.isArray(value)) {
            const selectedNames = value.map(getName).join(",");
            setSelectedValues((prev) => ({ ...prev, [key]: selectedNames }));
        }
    };

    const handleChangeMaxReadyTime = (value: number) => {
        setSelectedValues(prevState => ({
            ...prevState,
            maxReadyTime: value // Update only the nested 'option' field
        }));
    }

    const handleServings = (event: Event, value: number | number[]) => {
        setSelectedValues(prevState => ({
            ...prevState,
            servings: value // Update only the nested 'option' field
        }));
    }



    return (
        // <div className='w-full p-4'>
        <Box width="100%">
            {/* <p className='overflow-scroll'>{JSON.stringify(selectedValues)}</p> */}
            <SearchSortBar selectedValues={selectedValues} setSelectedValues={setSelectedValues} />

            <SelectMultiple
                data={cuisines}
                label="Cuisines"
                placeholder="Select your cuisines"
                getOptionLabel={(option) => option.cuisineName}
                onChange={handleChangeMultiple<CuisineType>("cuisine", (item) => item.cuisineName)}
            />

            <SelectMultiple
                data={mealTypes}
                label="Meal Type"
                placeholder="Select your meal types"
                getOptionLabel={(option) => option.mealTypeName}
                onChange={handleChangeMultiple<MealType>("type", (item) => item.mealTypeName)}
            />
            <SelectMultiple
                data={diets}
                label="Diets"
                placeholder="Select your diets"
                getOptionLabel={(option) => option.dietName}
                onChange={handleChangeMultiple<DietType>("diet", (item) => item.dietName)}
            />

            <SelectMultiple
                data={ingredients}
                label="Include Ingredients"
                placeholder="Select ingredients you wan't to include"
                getOptionLabel={(option) => option.label}
                onChange={handleChangeMultiple<IngredientType>("includeIngredients", (item) => item.key)}
            />

            <SelectMultiple
                data={ingredients}
                label="Exclude Ingredients"
                placeholder="Select ingredients you wan't to exclude"
                getOptionLabel={(option) => option.label}
                onChange={handleChangeMultiple<IngredientType>("excludeIngredients", (item) => item.key)}
            />

            <DiscreteSlider
                min={0}
                max={110}
                step={10}
                label={`Maximum Ready Time (${selectedValues.maxReadyTime} minutes)`}
                value={selectedValues.maxReadyTime}
                setValue={handleChangeMaxReadyTime}
            />

            <RangeSlider

                label={`${Array.isArray(selectedValues.servings) && selectedValues.servings[0]} to ${Array.isArray(selectedValues.servings) && selectedValues.servings[1]} servings`}
                value={selectedValues.servings}
                setValue={handleServings}
            />
        </Box>
    )
}

export default SearchFilters