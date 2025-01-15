import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function valuetext() {
  return ``;
}

interface RangeSliderProps{
  label: string;
  setValue: (event: Event, value: number | number[]) => void;
  value: number | number[];
}

export default function RangeSlider({label, setValue, value}:RangeSliderProps) {
  

  return (
    <Box sx={{mt:4}}>
      <Typography>{label}</Typography>
      <Slider
      marks
      step={1}
      max={15}
      
        value={value}
        onChange={setValue}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
