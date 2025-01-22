"use client"
import React from 'react'
import SelectMultiple from '../../../components/shared/inputs/selects/SelectMultiple'
import cuisines from '@/app/features/home/constants/cuisines'
import mealTypes from '@/app/features/home/constants/mealTypes';
import diets from '@/app/features/home/constants/diets';
import { Box } from '@mui/material';
import ingredients from '@/app/features/search/constants/ingredients';
import DiscreteSlider from '../../../components/shared/inputs/sliders/DiscreteSlider';
import RangeSlider from '../../../components/shared/inputs/sliders/RangeSlider';
import { SearchFilterTypes } from '@/app/types/search/filters';
import SelectSingle from '@/app/components/shared/inputs/selects/SelectSingle';
import sort from '@/app/features/search/constants/sort';
import sortDirection from '@/app/features/search/constants/sortDirections';
import { CuisineType, DietType, MealType } from '@/app/types/domain/recipe/attributes';
import { IngredientType } from '@/app/types/domain/recipe/ingredients';
import SwitchWithLabel from '@/app/components/ui/SwitchWithLabel';
import { getStringFromArray } from '../utils/getStringFromArray';
import { getArrayFromString } from '@/app/features/search/utils/getArrayFromString';


interface SearchFilterProps {
    setSelectedValues: React.Dispatch<React.SetStateAction<SearchFilterTypes>>;
    selectedValues: SearchFilterTypes;
}

function SearchFilters({ selectedValues, setSelectedValues }: SearchFilterProps) {

    const updateFilter = (value: SearchFilterTypes[keyof SearchFilterTypes], key: string) => { 
        //here, value holds the union type of all types appearing in SearchFilterTypes
        console.log("in updatefilter: ", value, key)
        setSelectedValues(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    return (
        <Box width="100%">
            <SelectSingle
                data={sort}
                label="Sort by"
                value={selectedValues.sort}
                onChange={(value) => updateFilter(value, "sort")}
            />

            <SelectSingle
                data={sortDirection}
                label="Sort direction"
                value={selectedValues.sortDirection}
                onChange={(value) => updateFilter(value, "sortDirection")}
            />

            <SelectMultiple
                data={cuisines}
                label="Cuisines"
                value={getArrayFromString<CuisineType>(selectedValues.cuisine, cuisines, "cuisineName")}
                placeholder="Select your cuisines"
                getOptionLabel={(option) => option.cuisineName}
                onChange={(value)=> updateFilter(getStringFromArray<CuisineType>(value, "cuisineName"), "cuisine")}
            />

            <SelectMultiple
                data={mealTypes}
                label="Meal Type"
                value={getArrayFromString<MealType>(selectedValues.type, mealTypes, "mealTypeName")}
                placeholder="Select your meal types"
                getOptionLabel={(option) => option.mealTypeName}
                onChange={(value)=> updateFilter(getStringFromArray<MealType>(value, "mealTypeName"), "type")}

            /> 

            <SelectMultiple
                data={diets}
                label="Diets"
                value={getArrayFromString<DietType>(selectedValues.diet, diets, "dietName")}
                placeholder="Select your diets"
                getOptionLabel={(option) => option.dietName}
                onChange={(value)=> updateFilter(getStringFromArray<DietType>(value, "dietName"), "diet")}

            />

            <SelectMultiple
                data={ingredients}
                label="Include Ingredients"
                value={getArrayFromString<IngredientType>(selectedValues.includeIngredients, ingredients, "key")}
                placeholder="Select ingredients you wan't to include"
                getOptionLabel={(option) => option.label}
                onChange={(value)=> updateFilter(getStringFromArray<IngredientType>(value, "key"), "includeIngredients")}

            />

            <SelectMultiple
                data={ingredients}
                label="Exclude Ingredients"
                value={getArrayFromString<IngredientType>(selectedValues.excludeIngredients, ingredients, "key")}
                placeholder="Select ingredients you wan't to exclude"
                getOptionLabel={(option) => option.label}
                onChange={(value)=> updateFilter(getStringFromArray<IngredientType>(value, "key"), "excludeIngredients")}

            /> 

            <SwitchWithLabel
                label={`Match Recipe Title? ${selectedValues.titleMatch ? "(Yes)" : "(No)"}`}
                checked={selectedValues.titleMatch}
                onChange={(value) => updateFilter(value, "titleMatch")}
            />

            <DiscreteSlider
                min={10}
                max={110}
                step={10}
                label={`Maximum Ready Time (${selectedValues.maxReadyTime} minutes)`}
                value={selectedValues.maxReadyTime}
                onChange={(value) => updateFilter(value, "maxReadyTime")}
            />

            <RangeSlider
                label={`From ${selectedValues.minServings} to ${selectedValues.maxServings} servings`}
                value={[selectedValues.minServings, selectedValues.maxServings]}
                onChange={(value) => {
                    updateFilter(value[0], "minServings")
                    updateFilter(value[1], "maxServings")
                }}
            />
        </Box>
    )
}

export default SearchFilters

