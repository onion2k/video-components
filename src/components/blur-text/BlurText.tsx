import React from 'react';
import "./blurText.css"

interface BlurTextProps {
  text: string;
  color?: string;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, color="black" }) => {
  return(
    <div className="blur">
      {Array(20).fill(undefined).map((a, index) => {
        return <span className="clone" key={index} style={{ "--clone-index": index, animationDelay: `${index * 3}ms`, color: color } as React.CSSProperties}>{text}</span>;
      })}
    </div>
  );
}
