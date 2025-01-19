import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

interface DiscreteSliderProps {
  min: number;
  max: number;
  step: number;
  label: string;
  setValue: (value: number) => void;
  value: number;
}

const DiscreteSlider: React.FC<DiscreteSliderProps> = ({
  min,
  max,
  step,
  label,
  setValue,
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
            setValue(v)
          }
        }}
      />
    </Box>
  );
};

export default DiscreteSlider;
