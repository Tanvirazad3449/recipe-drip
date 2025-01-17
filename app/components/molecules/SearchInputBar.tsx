import React from 'react'
import { InputWithIconButton } from '../atoms/Inputs'
import CancelIcon from '@mui/icons-material/Cancel';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwitchWithLabel from '../organisms/SwitchWithLabel';
import { useMediaQuery, useTheme } from '@mui/material';
import { SearchFilterTypes } from '@/app/interfaces/SearchFilterType';

interface SearchInputBarProps{
    toggleDrawer:()=>void;
    setSelectedValues: React.Dispatch<React.SetStateAction<SearchFilterTypes>>;
    selectedValues: SearchFilterTypes;
}
function SearchInputBar({toggleDrawer, setSelectedValues, selectedValues}: SearchInputBarProps) {
    const theme = useTheme();
  const isLessThanMd = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <div className='w-full flex flex-col xl:flex-row justify-between items-end xl:items-center'>
          <div className='w-full xl:flex-1'>
            <InputWithIconButton
              labelHidden={true}
              type="text"
              placeholder='Search'
              value={selectedValues.query}
              onChange={e => setSelectedValues(prev => ({ ...prev, query: e.target.value }))}
              icon={<CancelIcon style={{ color: "gray", cursor: "pointer", }} />}
              onClickIcon={() => setSelectedValues(prev => ({ ...prev, query: "" }))}
              startIcon={<FilterListIcon style={{ color: "gray", cursor: "pointer", }} />}
              onClickStartIcon={() => toggleDrawer()}
              isStartIconVisible={isLessThanMd}
              isEndIconVisible={selectedValues.query.length > 0}
            />
          </div>
          <div className='ml-0 mt-4 xl:ml-4 xl:mt-0'>
            <SwitchWithLabel
              label={`Match Recipe Title? ${selectedValues.titleMatch ? "(Yes)" : "(No)"}`}
              checked={selectedValues.titleMatch}
              setChecked={(_: React.ChangeEvent<HTMLInputElement>, v: boolean) => setSelectedValues(prev => ({ ...prev, titleMatch: v }))}

            />
          </div>
        </div>
  )
}

export default SearchInputBar