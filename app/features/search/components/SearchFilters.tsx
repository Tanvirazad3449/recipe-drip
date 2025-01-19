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

    const handleChangeSingle = (value: string, key: string) => {
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
                selected={selectedValues.sort}
                onChange={(value: string) => handleChangeSingle(value, "sort")}
            />
            <SelectSingle
                data={sortDirection}
                label="Sort direction"
                selected={selectedValues.sortDirection}
                onChange={(value: string) => handleChangeSingle(value, "sortDirection")}
            />
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