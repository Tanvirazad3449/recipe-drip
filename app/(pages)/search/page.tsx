"use client"
import { fetchSearchResults } from '@/app/api/spoonacular';
import { SmallButton } from '@/app/components/atoms/Buttons';
import { InputWithIconButton } from '@/app/components/atoms/Inputs';
import { HeadingText } from '@/app/components/atoms/Texts';
import Grid from '@/app/components/organisms/Grid';
import SwitchWithLabel from '@/app/components/organisms/SwitchWithLabel';
import SearchFilters from '@/app/components/templates/SearchFilters';
import SearchSortBar from '@/app/components/templates/SearchSortBar';
import { Recipe } from '@/app/interfaces/Recipe';
import { SearchFilterTypes } from '@/app/interfaces/SearchFilterType';
import { gridClasses } from '@/app/styles/gridClasses';
import { debounce } from '@/app/utils/debounce';
import { getSearchParam } from '@/app/utils/getSearchParam';
import React, { useCallback, useEffect, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useMediaQuery, useTheme } from '@mui/material';
import { InfoNotificationBlock } from '@/app/components/atoms/NotificationBlock';
const ResponsiveDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const theme = useTheme();
  const isLessThanMd = useMediaQuery(theme.breakpoints.down("md"))
  const [selectedValues, setSelectedValues] = useState<SearchFilterTypes>({
    cuisine: "",
    type: "",
    diet: "",
    sort: "",
    sortDirection: "",
    maxReadyTime: 60,
    servings: [1, 8],
    includeIngredients: "",
    excludeIngredients: "",
    titleMatch: false,
    query: ""
  });


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const loadRecipes = async (url: string) => {
    setLoading(true)
    console.log("selectedValues.query: ", selectedValues.query) // empty string why?

    try {
      const data = await fetchSearchResults(url);
      setRecipes(data.results);
      setLoading(false)

    } catch (err) {
      console.log("error: ", err)
      setLoading(false)
    }
  };

  const debouncedLog = useCallback(
    debounce((selectedValues: SearchFilterTypes) => {
      loadRecipes(getSearchParam(selectedValues))
    }, 1000),
    [] // No dependencies here, as debounce should not recreate unnecessarily
  );

  useEffect(() => {
    if (selectedValues.query.length > 0 && !isOpen) {
      console.log("In the if statement");
      debouncedLog(selectedValues); // Pass the latest query as an argument
    }else{
      setRecipes([])
    }
  }, [selectedValues, isOpen]);


  return (
    <div className={`flex w-full flex-row px-4 md:px-28`}>

      {/* Drawer */}
      <div className={`w-full pt-4 h-screen bg-white px-4 md:pr-8 md:pl-0 md:w-1/4 fixed z-50 md:z-0  lg:static top-0  left-0 border-r-2 border-gray-200 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <HeadingText className='mt-4 mb-4'>Filters</HeadingText>
        <SearchFilters selectedValues={selectedValues} setSelectedValues={setSelectedValues} />
        <SmallButton className={`w-full bg-slate-400 ${isOpen ? "" : "hidden"}`} onClick={toggleDrawer}>Close</SmallButton>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full md:w-3/4 p-2 pt-8 md:p-8 min-h-screen">
        <div className='w-full flex flex-col md:flex-row justify-between items-end '>
          <div className='w-full'>
            <HeadingText className='mb-4'>Search</HeadingText>
            <InputWithIconButton
              labelHidden={true}
              type="text"
              placeholder='Search'
              value={selectedValues.query}
              onChange={e => setSelectedValues(prev => ({ ...prev, query: e.target.value }))}
              icon={<CancelIcon style={{color: "gray", cursor: "pointer",}}/>}
              onClickIcon={() => setSelectedValues(prev => ({ ...prev, query: "" }))}
              startIcon={<FilterListIcon style={{color: "gray", cursor: "pointer",}}/>} 
              onClickStartIcon={() => toggleDrawer()} 
              isStartIconVisible={isLessThanMd}
              />
          </div>
          <div className='w-full ml-0 md:ml-8'>
            <SwitchWithLabel
              label={`Match Recipe Title? ${selectedValues.titleMatch ? "(Yes)" : "(No)"}`}
              checked={selectedValues.titleMatch}
              setChecked={(_: React.ChangeEvent<HTMLInputElement>, v: boolean) => setSelectedValues(prev => ({ ...prev, titleMatch: v }))}
              
            />
          </div>
        </div>


        {loading ?
          <InfoNotificationBlock message="Loading..."/>
          :
          <>
        {Array.isArray(recipes) && recipes.length > 0 ?

        
          <>
            <div className='w-full flex justify-end mb-4'>
              <SearchSortBar selectedValues={selectedValues} setSelectedValues={setSelectedValues} />
            </div>

            <Grid headerText="Search Results" data={recipes} cssClass={gridClasses.recipes} minDisplayItems={9} />
          </>
          :
          <InfoNotificationBlock message="No recipes found"/>
        }
        </>
}
      </div>
    </div>
  );
};

export default ResponsiveDrawer;

