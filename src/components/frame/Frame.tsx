import React from 'react';
import './frame.css';

interface TextIntroProps {
  color?: string;
}

export const Frame: React.FC<TextIntroProps> = ({ color = "black" }) => {
  return (
    <div className={'frame-outer'}>
      <div className={`frame`}>
        <div className={'frame-inner'}>
          Content
        </div>
      </div>
    </div>
  );
};
