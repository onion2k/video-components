import React from 'react';
import './overlay.css';

interface ShardProps {
  position: number;
  width?: number;
  delay?: number;
  duration?: number;
  color?: string;
}

const Shard = ({ width=200, position=0, color="red", delay=0, duration=2 }) => <div className="shard" style={{ width, backgroundColor: color, color: color, left: `${position}px`, animationDuration: `${duration}s`, animationDelay: `${delay}ms` }}></div>

interface OverlayProps {
  color?: string;
}

export const Overlay: React.FC<OverlayProps> = ({ color = "black" }) => {
  return (
    <div className="overlay">
      <div className="shard-wrapper">
        <Shard width={200} color={"hsl(0,100%,50%)"} position={350} duration={2+Math.floor(Math.random()*8)} delay={Math.floor(Math.random()*1000)} />
        <Shard width={200} color={"hsl(0,100%,40%)"} position={250} duration={2+Math.floor(Math.random()*8)} delay={Math.floor(Math.random()*1000)} />
        <Shard width={200} color={"hsl(0,100%,20%)"} position={150} duration={2+Math.floor(Math.random()*8)} delay={Math.floor(Math.random()*1000)} />
        <Shard width={200} color={"hsl(0,100%,50%)"} position={50} duration={2+Math.floor(Math.random()*8)} delay={Math.floor(Math.random()*1000)} />
        <Shard width={200} color={"hsl(0,100%,10%)"} position={-50} duration={2+Math.floor(Math.random()*8)} delay={Math.floor(Math.random()*1000)} />
        <Shard width={200} color={"hsl(0,100%,70%)"} position={-150} duration={2+Math.floor(Math.random()*8)} delay={Math.floor(Math.random()*1000)} />
      </div>
    </div>
  );
};
