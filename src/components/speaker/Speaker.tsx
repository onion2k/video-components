import React, { useState, useEffect } from 'react';

interface SpeakerProps {
  text: string;
}

export const Speaker: React.FC<SpeakerProps> = ({ text }) => {

  const [ss,] = useState(window.speechSynthesis)

  useEffect(()=>{
    if (ss) {

      ss.cancel();
      
      const voices = ss.getVoices();

      const utterThis = new SpeechSynthesisUtterance(text);

      utterThis.voice = voices[0];
      utterThis.pitch = 1;
      utterThis.rate = 1;

      ss.speak(utterThis);

    }

  }, [ss, text]);

  return null;
};
