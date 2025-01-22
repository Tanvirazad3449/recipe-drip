import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function valuetext() {
  return ``;
}

interface RangeSliderProps {
  label: string;
  onChange: (value: number[]) => void;
  value: number[];
}

export default function RangeSlider({ label, onChange, value }: RangeSliderProps) {
  return (
    <Box sx={{ mt: 2, backgroundColor: "" }}>
      <Typography>{label}</Typography>
      <Slider
        marks
        step={1}
        min={1}
        max={15}
        sx={{ color: "#783c5c" }}
        value={value}
        // onChange={setValue}
        onChange={(_, v) => {
          if (Array.isArray(v)) {
            onChange(v)
          }
        }}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
