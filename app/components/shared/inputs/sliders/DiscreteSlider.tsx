import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

interface DiscreteSliderProps {
  min: number;
  max: number;
  step: number;
  label: string;
  onChange: (value: number) => void;
  value: number;
}

const DiscreteSlider: React.FC<DiscreteSliderProps> = ({
  min,
  max,
  step,
  label,
  onChange,
  value
}) => {
  return (
    <Box sx={{mt: 2, backgroundColor: ""}}>
      <Typography gutterBottom >{label}</Typography>
      <Slider
        aria-label={label}
        defaultValue={value}
        valueLabelDisplay="auto"
        step={step}
        marks
        min={min}
        sx={{color: "#783c5c"}}
        max={max}
        value={value}
        onChange={(_, v) => {
          if (typeof v === "number") {
            onChange(v)
          }
        }}
      />
    </Box>
  );
};

export default DiscreteSlider;
