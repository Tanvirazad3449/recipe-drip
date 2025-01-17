import { useState } from "react";

export const useToggle = (initialState: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialState);

  const toggle = () => {
    setValue(prevState => !prevState);
  };

  return { value, toggle };
};
