import React from 'react'
import { HeadingText } from '../atoms/Texts'
import SearchInputBar from '../molecules/SearchInputBar'
import SearchResults from '../molecules/SearchResults'
import { SearchFilterTypes } from '@/app/interfaces/SearchFilterType';
import { Recipe } from '@/app/interfaces/Recipe';
interface SearchMainContentProps{
    toggleDrawer: ()=>void;
    selectedValues: SearchFilterTypes;
    loading: boolean;
    setSelectedValues: React.Dispatch<React.SetStateAction<SearchFilterTypes>>
    data: Recipe[];
}
function SearchMainContent({toggleDrawer, selectedValues, loading, setSelectedValues, data}:SearchMainContentProps) {
  return (
    <div className="flex flex-col w-full xl:w-3/4 py-8 xl:p-8 min-h-screen">
        <HeadingText className='mb-6'>Search</HeadingText>
        <SearchInputBar toggleDrawer={toggleDrawer} selectedValues={selectedValues} setSelectedValues={setSelectedValues} />
        <SearchResults loading={loading} isVisible={selectedValues.query.length > 0} data={data} />
      </div>
  )
}

export default SearchMainContent