import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useMediaQuery, useTheme } from '@mui/material';
import { SearchFilterTypes } from '@/app/types/search/filters';
import TextInput from '@/app/components/ui/TextInput';
import SwitchWithLabel from '@/app/components/ui/SwitchWithLabel';

interface SearchInputBarProps {
  toggleDrawer: () => void;
  setSelectedValues: React.Dispatch<React.SetStateAction<SearchFilterTypes>>;
  selectedValues: SearchFilterTypes;
}
function SearchInputBar({ toggleDrawer, setSelectedValues, selectedValues }: SearchInputBarProps) {
  const theme = useTheme();
  const isLessThanMd = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <div className='w-full flex flex-col xl:flex-row justify-between items-end xl:items-center'>
      <div className='w-full xl:flex-1'>
        <TextInput
          type="text"
          placeholder='Search'
          value={selectedValues.query}
          onChange={e => setSelectedValues(prev => ({ ...prev, query: e.target.value }))}
          startIcon={isLessThanMd ? <FilterListIcon style={{ color: "gray", cursor: "pointer", }} /> : null}
          onClickStartIcon={toggleDrawer}
          endIcon={selectedValues.query.length > 0 && <CancelIcon style={{ color: "gray", cursor: "pointer", }} />}
          onClickEndIcon={() => setSelectedValues(prev => ({ ...prev, query: "" }))}
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