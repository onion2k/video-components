import React from 'react';
import './fader.css';

interface FaderProps {
  color?: string;
}

export const Fader: React.FC<FaderProps> = ({ color = "black" }) => {
  return (
    <div className={`fader`} style={{ backgroundColor: color }} />
  );
};
