import React from 'react';
import './arid.css';
import bg from './code.jpg';

interface TextIntroProps {
  color?: string;
  frame: number;
}

export const Arid: React.FC<TextIntroProps> = ({ color = "black", frame = 0 }) => {
  return (
    <div className="arid-outer" style={{
      backgroundColor: color,
    }}>
      <div className={'arid-inner'} style={{
        backgroundImage: `url(${bg})`,
        "--lo": `${frame - 500}px`,
      } as React.CSSProperties} >
        Content
      </div>
    </div>
  );
};
