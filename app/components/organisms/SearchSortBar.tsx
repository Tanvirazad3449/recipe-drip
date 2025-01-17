"use client"
import React from 'react'
import SelectSingle from './SelectSingle';
import { SearchFilterTypes } from '@/app/interfaces/SearchFilterType';
import sort from '@/app/dummy/sort';
import sortDirection from '@/app/dummy/sortDirections';

interface SearchFilterProps {
  setSelectedValues: React.Dispatch<React.SetStateAction<SearchFilterTypes>>;
  selectedValues: SearchFilterTypes;
}

function SearchSortBar({ selectedValues, setSelectedValues }: SearchFilterProps) {
  const handleChangeSingle = (value: string, key: string) => {
    setSelectedValues(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  return (
    <div className='flex flex-col'>
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
    </div>
  )
}

export default SearchSortBar