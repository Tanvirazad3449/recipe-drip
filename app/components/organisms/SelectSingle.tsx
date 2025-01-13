import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectSingleProps{
    data: string[];
    label: string;
    selected: string;
    onChange: (value: string) => void;
}
export default function SelectSingle({data, label, selected, onChange}:SelectSingleProps) {
 

  return (
    <div className='w-full m-4'>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label={label}
          onChange={(e:SelectChangeEvent)=>onChange(e.target.value)}
          >
            {data.map((e)=><MenuItem key={e} value={e}>{e}</MenuItem>)}
          
        </Select>
      </FormControl>
          </div>
  );
}