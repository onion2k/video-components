import React from 'react';
import "./splitText.css"

interface SplitTextProps {
  text: string
}

export const SplitText: React.FC<SplitTextProps> = ({ text }) => {
  return(
    <span aria-label={text} role={"heading"} aria-level={2}>
      {text.split("").map((char, index) => {
        return <span aria-hidden="true" key={index} style={{ "--char-index": index } as React.CSSProperties}>{char}</span>;
      })}
    </span>
  );
}
