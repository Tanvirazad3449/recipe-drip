import { Switch } from '@mui/material';
import * as React from 'react';
import { RegularText } from './Texts';

interface SearchFilterProps {
  onChange: (value: boolean) => void;
  checked: boolean;
  label: string;
}

const SwitchWithLabel = ({ label, checked, onChange }: SearchFilterProps) => {

  return (
    <div className='w-full flex flex-row items-center justify-center border border-gray-300'>
      <Switch sx={{
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: '#783c5c', 
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: '#783c5c', 
        },
      }} 
      checked={checked} 
      onChange={(_, v) => {
        if (typeof v === "boolean") {
          onChange(v)
        }
      }} />
      <RegularText className='w-full'>{label}</RegularText>
    </div>
  );
};

export default SwitchWithLabel;
