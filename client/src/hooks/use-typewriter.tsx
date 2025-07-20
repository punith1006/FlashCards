import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  shouldStart: boolean;
}

export function useTypewriter({ text, speed = 50, startDelay = 0, shouldStart }: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!shouldStart) {
      setDisplayText('');
      setIsComplete(false);
      return;
    }

    const timeout = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay, shouldStart]);

  return { displayText, isComplete };
}