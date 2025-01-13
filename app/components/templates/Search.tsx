"use client"
import React, { useState } from 'react'
import SelectMultiple from '../organisms/SelectMultiple'
import cuisines from '@/app/dummy/cuisines'
import { CuisineType } from '@/app/interfaces/CuisineType';
import { MealType } from '@/app/interfaces/MealType';
import mealTypes from '@/app/dummy/mealTypes';
import diets from '@/app/dummy/diets';
import { DietType } from '@/app/interfaces/DietType';
import sortingOptions from '@/app/dummy/sortingOptions';
import SelectSingle from '../organisms/SelectSingle';
import sortingDirections from '@/app/dummy/sortingDirections';
interface handleSingleChangeProps{
    key: string;
}
function Search() {
    const [selectedValues, setSelectedValues] = useState({
        cuisines: "",
        mealTypes: "",
        diets: "",
        sortingOptions: "",
        sortingDirections: ""
    });

    const handleChangeMultiple = <T,>(key: keyof typeof selectedValues, getName: (item: T) => string) => (event: React.SyntheticEvent, value: T[]) => {
        console.log(`Selected ${key}:`, value);
        if(Array.isArray(value)){
            const selectedNames = value.map(getName).join(", ");
            setSelectedValues((prev) => ({ ...prev, [key]: selectedNames }));
        }
    };
    const handleChangeSingle = (value: string, key:string) => {
        setSelectedValues(prevState => ({
          ...prevState,
          [key]: value // Update only the nested 'option' field
        }));
      };

    // const handleSingleChange = ({key, event}:handleSingleChangeProps) =>{
    //     setSelectedValues((prev) => ({ ...prev, [key]: event.target.value }));

    // }
    return (
        <div className="w-full min-h-screen items-start pt-12 justify-start flex flex-col">
            <p>{JSON.stringify(selectedValues)}</p>
            <div className='w-1/4 p-4'>

                <SelectMultiple
                    data={cuisines}
                    label="Cuisines"
                    placeholder="Select your cuisines"
                    getOptionLabel={(option) => option.cuisineName}
                    onChange={handleChangeMultiple<CuisineType>("cuisines", (item) => item.cuisineName)}
                />

                <SelectMultiple
                    data={mealTypes}
                    label="Meal Type"
                    placeholder="Select your meal types"
                    getOptionLabel={(option) => option.mealTypeName}
                    onChange={handleChangeMultiple<MealType>("mealTypes", (item) => item.mealTypeName)}
                />
                <SelectMultiple
                    data={diets}
                    label="Diets"
                    placeholder="Select your diets"
                    getOptionLabel={(option) => option.dietName}
                    onChange={handleChangeMultiple<DietType>("diets", (item) => item.dietName)}
                />

                <SelectSingle
                    data={sortingOptions}
                    label="Sort by"
                    selected={selectedValues.sortingOptions}
                    onChange={(value:string)=>handleChangeSingle(value, "sortingOptions")}
                />
                <SelectSingle
                    data={sortingDirections}
                    label="Sort direction"
                    selected={selectedValues.sortingDirections}
                    onChange={(value:string)=>handleChangeSingle(value, "sortingDirections")}
                />

            </div>
        </div>
    )
}

export default Search