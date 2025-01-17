import { Switch } from '@mui/material';
import * as React from 'react';
import { RegularText } from '../atoms/Texts';

interface SearchFilterProps {
  setChecked: (_: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
  checked: boolean;
  label: string;
}

const SwitchWithLabel = ({ label, checked, setChecked }: SearchFilterProps) => {

  return (
    <div className='w-full flex flex-row items-center justify-center'>
      <Switch sx={{
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: '#783c5c', 
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: '#783c5c', 
        },
      }} checked={checked} onChange={setChecked} />
      <RegularText className='w-full'>{label}</RegularText>
    </div>
  );
};

export default SwitchWithLabel;
