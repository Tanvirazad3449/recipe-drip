import React from 'react'
import { HeadingText } from '../../../components/ui/Texts'
import { Button } from '../../../components/ui/Button'
import { SearchFilterTypes } from '@/app/types/search/filters';
import SearchFilters from './SearchFilters';

interface SearchDrawerProps {
    selectedValues: SearchFilterTypes;
    isOpen: boolean;
    toggleDrawer: ()=>void;
    setSelectedValues: React.Dispatch<React.SetStateAction<SearchFilterTypes>>
}
function SearchDrawer({selectedValues,setSelectedValues, isOpen, toggleDrawer}: SearchDrawerProps) {
  return (
    <div className={`w-full pt-4 h-screen bg-white px-4 xl:pr-8 xl:pl-0 xl:w-1/4 fixed z-50 xl:z-0  lg:static top-0  left-0 border-r-2 border-gray-200 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <HeadingText className='mt-4 mb-6'>Filters</HeadingText>
        <SearchFilters selectedValues={selectedValues} setSelectedValues={setSelectedValues} />
        <Button className={`w-full bg-brandColor text-white font-bold ${isOpen ? "" : "hidden"}`} onClick={toggleDrawer}>Save & Close</Button>
      </div>
  )
}

export default SearchDrawer