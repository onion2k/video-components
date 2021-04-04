import React from 'react';
import './fader.css';

interface TextIntroProps {
  color?: string;
}

export const Fader: React.FC<TextIntroProps> = ({ color = "black" }) => {
  return (
    <div className={`fader`} style={{ backgroundColor: color }} />
  );
};
