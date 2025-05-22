import { useState, useCallback, useEffect } from 'react';
import { SearchFilterTypes } from '@/app/types/search/filters';
import { debounce } from '@/app/utils/debounce';
import { useRecipes } from '@/app/hooks/useRecipes';
import { useToggle } from '../../../hooks/useToggle';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { defaultSelectedValues } from '../constants/defaultSelectedValues';
import { generateSearchUrl } from '@/app/features/search/utils/generateSearchUrl';

export const useSearch = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams()

    const [selectedValues, setSelectedValues] = useState<SearchFilterTypes>(defaultSelectedValues);
    const { data, loading,errorMsg, setData, setLoading } = useRecipes(generateSearchUrl(selectedValues));
    const { value: isOpen, toggle: toggleDrawer } = useToggle();

    const debouncedFetch = useCallback(

        debounce((selectedValues: SearchFilterTypes) => {
            if (selectedValues.query.length > 0) {
                setLoading(true);
                router.push(pathName + "?" + generateSearchUrl(selectedValues))

            } else {
                console.log("in the else of line 28")
                router.push(pathName)
                setData([]);
            }
        }, 500),
        []
    );

    function updateQueryIfAvailable() {
        for (const key in defaultSelectedValues) {
            console.log(key, searchParams.get(key), typeof searchParams.get(key))
            const element = searchParams.get(key)
            if (searchParams.get(key)) {
                console.log("updateQueryifAvailable: ", key, typeof element, element)
                if (typeof element === "string" && element.length > 0) {
                    setSelectedValues(prev => ({ ...prev, [key]: element }))
                }

                if (key === "titleMatch" && element === "true") {
                    setSelectedValues(prev => ({ ...prev, [key]: element === "true" }))

                }

                if(key === "maxReadyTime" || key === "minServings" || key === "maxServings"){
                    setSelectedValues(prev => ({ ...prev, [key]: typeof element === "string" ? parseInt(element) : element }))
                  }

                
            }

        }

    }
    useEffect(() => {
        console.log("useSearch called")
        updateQueryIfAvailable()


    }, [])


    useEffect(() => {
        if (!isOpen) {
            debouncedFetch(selectedValues);
        }

    }, [selectedValues, isOpen]);

    return {
        selectedValues,
        setSelectedValues,
        data,
        errorMsg,
        isOpen,
        toggleDrawer,
        loading
    };
};

