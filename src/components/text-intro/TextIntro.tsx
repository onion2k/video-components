import React from 'react';
import { SplitText } from '../split-text/SplitText'
import "./split.css"

interface TextIntroProps {
  text: string;
  color?: string;
}

export const TextIntro: React.FC<TextIntroProps> = ({ text, color = "black" }) => {
  return (
    <div className="bg">
      <div className="f">
        <div className="text-intro" style={{ color }}>
          <SplitText text={text} />
        </div>
      </div>
    </div>
  );
};
