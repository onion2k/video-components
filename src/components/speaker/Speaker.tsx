import React, { useEffect } from 'react';

interface SpeakerProps {
  text: string;
}

export const Speaker: React.FC<SpeakerProps> = ({ text }) => {

  useEffect(()=>{
    const ss = window.speechSynthesis;

    if (ss) {
      const voices = ss.getVoices();

      const utterThis = new SpeechSynthesisUtterance(text);

      utterThis.voice = voices[0];
      utterThis.pitch = 1;
      utterThis.rate = 1;

      // ss.speak(utterThis);

    }

  });

  return null;
};
