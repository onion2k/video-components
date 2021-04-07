import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce'

interface SpeakerProps {
  text: string;
  debounce?: boolean;
}

export const Speaker: React.FC<SpeakerProps> = ({ text, debounce=false }) => {

  const [ss,] = useState(window.speechSynthesis)
  const debText = useDebounce(text, 500, debounce)

  useEffect(()=>{
    if (ss) {

      ss.cancel();

      const voices = ss.getVoices();

      const utterThis = new SpeechSynthesisUtterance(debText);

      utterThis.voice = voices[0];
      utterThis.pitch = 1;
      utterThis.rate = 1;

      ss.speak(utterThis);

    }

  }, [ss, debText, debounce]);

  return null;
};
