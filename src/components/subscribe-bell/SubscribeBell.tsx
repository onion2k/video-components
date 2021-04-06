import React from 'react';
import { SplitText } from '../split-text/SplitText'
import "./subscribe-bell.css"

interface SubscribeBellProps {}

export const SubscribeBell: React.FC<SubscribeBellProps> = ({ }) => {
  return (
    <div className="subscribe">
      <div className="text-intro">
        <SplitText text={"Subscribe"} />
        <span className="bell">🔔</span>
      </div>
    </div>
  );
};
