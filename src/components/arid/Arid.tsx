import React from 'react';
import './arid.css';
import bg from './code.jpg';

interface TextIntroProps {
  color?: string;
  leftOffset: number;
}

export const Arid: React.FC<TextIntroProps> = ({ color = "black", leftOffset = 0 }) => {
  return (
    <div className="arid-outer" style={{
      backgroundColor: color,
    }}>
      <div className={'arid-inner'} style={{
        backgroundImage: `url(${bg})`,
        "--lo": `${leftOffset}px`,
      } as React.CSSProperties} >
        Content
      </div>
    </div>
  );
};
