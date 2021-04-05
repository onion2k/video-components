import React from 'react';
import './burns.css';
import bg from './code.jpg';

interface BurnsProps {
  color?: string;
  frame: number;
}

export const Burns: React.FC<BurnsProps> = ({ color = "black", frame = 0 }) => {
  return (
    <div className="burns-outer" style={{
      backgroundColor: color,
    }}>
      <div className={'burns-inner'} style={{
        backgroundImage: `url(${bg})`
      } as React.CSSProperties} >
      </div>
    </div>
  );
};
