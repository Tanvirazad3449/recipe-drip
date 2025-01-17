import { useState, useCallback, useEffect } from 'react';
import { SearchFilterTypes } from '@/app/interfaces/SearchFilterType';
import { debounce } from '@/app/utils/debounce';
import { getSearchParam } from '@/app/utils/getSearchParam';
import { useFetchRecipes } from '@/app/hooks/useFetchRecipes';
import { useToggle } from './useToggle';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { defaultSelectedValues } from '@/app/constants/defaultSelectedValues';

export const useSearch = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams()

    const { data, loading, loadRecipes, setData, setLoading } = useFetchRecipes();
    const [selectedValues, setSelectedValues] = useState<SearchFilterTypes>(defaultSelectedValues);
    const { value: isOpen, toggle: toggleDrawer } = useToggle();

    const debouncedFetch = useCallback(
        
        debounce((selectedValues: SearchFilterTypes) => {
            if (selectedValues.query.length > 0) {
                setLoading(true);
                loadRecipes(getSearchParam(selectedValues));
    
            } else {
                console.log("in the else of line 28")
                router.push(pathName)
                setData([]);
            }
        }, 500),
        []
    );

    function updateQueryIfAvailable(){
        for (const key in defaultSelectedValues) {
            console.log(key, searchParams.get(key), typeof searchParams.get(key))
            const element = searchParams.get(key)
            if(searchParams.get(key)){
                if (typeof element === "string" && element.length > 0) {
                    // url += `${key}=${element}&`
                    setSelectedValues(prev=>({...prev, [key]: element}))
                  }
              
                  if (key === "titleMatch" && element === "true") {
                    // url += `${key}=${selectedValues.query}&`
                    setSelectedValues(prev=>({...prev, [key]: element === "true"}))

                  }
              
                  if (key === "maxReadyTime") {
                    // url += `${key}=${element}&`
                    setSelectedValues(prev=>({...prev, [key]: typeof element === "string" ? parseInt(element) : 60}))

                  }
              
                  if (key === "servings" && Array.isArray(element)) {
                    // url += `minServings=${element[0]}&maxServings=${element[1]}&`
                    setSelectedValues(prev=>({...prev, minServings:parseInt(element[0]), maxServings: parseInt(element[1])}))

                  }
            }
        }
        
    }
useEffect(() => {
  console.log("useSearch called")
  updateQueryIfAvailable()

  
}, [])


    useEffect(() => {
        if(!isOpen){

            router.push(pathName + "?" + getSearchParam(selectedValues))
            debouncedFetch(selectedValues);
        }
        
    }, [selectedValues, isOpen]);

    return {
        selectedValues,
        setSelectedValues,
        data,
        isOpen,
        toggleDrawer,
        loading
    };
};

