import React, { useState, useEffect } from 'react';

export default function useDebounce(value:any, delay:number, toggle=true) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      if (toggle===false) {
        setDebouncedValue(value);
      }
      return () => {
        clearTimeout(handler);
      };
    },
    [value, toggle] 
  );

  return debouncedValue;
}
