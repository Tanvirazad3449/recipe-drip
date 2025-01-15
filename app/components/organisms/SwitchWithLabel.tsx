import { FormControlLabel, Switch } from '@mui/material';
import * as React from 'react';

 interface SearchFilterProps {
    setChecked: (_:React.ChangeEvent<HTMLInputElement>, value:boolean)=>void;
    checked: boolean;
    label: string;
  }

const SwitchWithLabel = ({label,checked, setChecked}:SearchFilterProps) => {
  
  return (
    <FormControlLabel sx={{marginBottom: 2, width: '100%'}} control={<Switch checked={checked} onChange={setChecked} />} label={label} />
);
};

export default SwitchWithLabel;
