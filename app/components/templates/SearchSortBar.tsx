"use client"
import React from 'react'
import SelectSingle from '../organisms/SelectSingle';
import { SearchFilterTypes } from '@/app/interfaces/SearchFilterType';
import sort from '@/app/dummy/sort';
import sortDirection from '@/app/dummy/sortDirections';

 interface SearchFilterProps {
    setSelectedValues: React.Dispatch<React.SetStateAction<SearchFilterTypes>>;
    selectedValues: SearchFilterTypes;
  }

function SearchSortBar({selectedValues, setSelectedValues}:SearchFilterProps) {
    // const [selectedValues, setSelectedValues] = useState({
    //     cuisines: "",
    //     mealTypes: "",
    //     diets: "",
    //     sort: "",
    //     sortDirection: ""
    // });
    const handleChangeSingle = (value: string, key:string) => {
        setSelectedValues(prevState => ({
          ...prevState,
          [key]: value 
        }));
      };
      
    return (
            // <div className='w-full p-4'>
            // <Box width="100%" display="flex" flexDirection="row">
            <div className='flex flex-row'>
                {/* <p>{JSON.stringify(selectedValues)}</p> */}
                <SelectSingle
            
                    data={sort}
                    label="Sort by"
                    selected={selectedValues.sort}
                    onChange={(value:string)=>handleChangeSingle(value, "sort")}
                />
                <SelectSingle
                    data={sortDirection}
                    label="Sort direction"
                    selected={selectedValues.sortDirection}
                    onChange={(value:string)=>handleChangeSingle(value, "sortDirection")}
                />
</div>
// </Box>

    )
}

export default SearchSortBar