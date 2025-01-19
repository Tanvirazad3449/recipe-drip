"use client"

import React from 'react';
import SearchDrawer from '@/app/features/search/components/SearchDrawer';
import SearchMainContent from '@/app/features/search/components/SearchMainContent';
import { useSearch } from '@/app/features/search/hooks/useSearch';

const Search: React.FC = () => {
    const {
        selectedValues,
        setSelectedValues,
        data,
        loading,
        isOpen,
        toggleDrawer,
    } = useSearch();

    return (
        <div className={`flex w-full flex-row px-4 xl:px-28 md:px-8`}>
            <SearchDrawer
                isOpen={isOpen}
                toggleDrawer={toggleDrawer}
                selectedValues={selectedValues}
                setSelectedValues={setSelectedValues}
            />
            <SearchMainContent
                selectedValues={selectedValues}
                setSelectedValues={setSelectedValues}
                toggleDrawer={toggleDrawer}
                loading={loading}
                data={data}
            />
        </div>
    )
}

export default Search