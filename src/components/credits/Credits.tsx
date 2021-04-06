import React from 'react';
import "./credits.css"

interface CreditsProps {
  credits: string[];
  color?: string;
  backgroundColor?: string;
}

export const Credits: React.FC<CreditsProps> = ({ credits, color = "white", backgroundColor="black" }) => {
  return (
    <div
      className="credits-wrapper"
      style={{ backgroundColor }}
    >
      <div
        className="credits"
        style={{ color, height: `${credits.length * 50}vh`
      }}>
        {credits.map((credit)=>{ return (<div className={"credit"}>{credit}</div>) })}
      </div>
    </div>
  );
};
