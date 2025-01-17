import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectSingleProps{
    data: {key: string, label: string}[];
    label: string;
    selected: string;
    onChange: (value: string) => void;
}
export default function SelectSingle({data, label, selected, onChange}:SelectSingleProps) {
 

  return (

    <FormControl sx={{mb:2}} size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label={label}
          sx={{borderRadius:0}}
          onChange={(e:SelectChangeEvent)=>onChange(e.target.value)}
          >
            {data.map((e)=><MenuItem key={e.key} value={e.key}>{e.label}</MenuItem>)}
          
        </Select>
      </FormControl>
  );
}