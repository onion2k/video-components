import React from 'react';
import './squares.css';

interface TextIntroProps {
  color?: string;
  direction?: string;
}

export const Squares: React.FC<TextIntroProps> = ({ color = "white", direction="row" }) => {
  return (
    <div className={`squares ${direction}`}>
      { Array(16*9).fill(undefined).map((value, index)=>{ return (<span key={index} style={{
        "--index": index,
        "--row": index % 16,
        "--col": Math.floor(index / 16),
        backgroundColor: color
      } as React.CSSProperties} /> ) }) }
    </div>
  );
};
