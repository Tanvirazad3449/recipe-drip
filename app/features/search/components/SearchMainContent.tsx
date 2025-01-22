import React from 'react'
import { HeadingText } from '../../../components/ui/Texts'
import { SearchFilterTypes } from '@/app/types/search/filters';
import { Recipe } from '@/app/types/domain/recipe/recipe';
import SearchInputBar from './SearchInputBar';
import SearchResults from './SearchResults';

interface SearchMainContentProps {
  toggleDrawer: () => void;
  selectedValues: SearchFilterTypes;
  loading: boolean;
  setSelectedValues: React.Dispatch<React.SetStateAction<SearchFilterTypes>>
  data: Recipe[];
}

function SearchMainContent({ toggleDrawer, selectedValues, loading, setSelectedValues, data }: SearchMainContentProps) {
  return (
    <div className="flex flex-col w-full xl:w-3/4 py-4 xl:py-8 xl:p-8 min-h-screen">
      <HeadingText className='mb-2 xl:mb-6'>Search</HeadingText>
      <SearchInputBar
        toggleDrawer={toggleDrawer}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
      />
      <SearchResults
        loading={loading}
        isVisible={selectedValues.query.length > 0}
        data={data}
      />
    </div>
  )
}

export default SearchMainContent