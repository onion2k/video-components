import React, { useState, useEffect } from 'react';

export default function useDebounce(value:any, delay:number, immediate:boolean=true) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      if (immediate===true) {
        setDebouncedValue(value);
      }
      return () => {
        clearTimeout(handler);
      };
    },
    [value, immediate] 
  );

  return debouncedValue;
}
