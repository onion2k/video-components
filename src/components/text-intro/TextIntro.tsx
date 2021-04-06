import React from 'react';
import { SplitText } from '../split-text/SplitText'
import "./text-intro.css"

interface TextIntroProps {
  text: string;
  color?: string;
  backgroundColor?: string;
}

export const TextIntro: React.FC<TextIntroProps> = ({ text, color = "white", backgroundColor="black" }) => {
  return (
    <div className="bg"
      style={{ backgroundColor }}
    >
      <div className="f">
        <div className="text-intro" style={{ color }}>
          <SplitText text={text} />
        </div>
      </div>
    </div>
  );
};
