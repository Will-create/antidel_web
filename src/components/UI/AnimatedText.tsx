import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  phrases: string[];
  className?: string;
  speed?: number;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  phrases,
  className = '',
  speed = 3000,
  delay = 100,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // If we're currently deleting text
    if (isDeleting) {
      if (currentText === '') {
        // Move to next phrase when current one is fully deleted
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        timeout = setTimeout(() => {}, delay);
      } else {
        // Continue deleting characters
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, delay / 2);
      }
    } else {
      // If we're currently typing
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (currentText === currentPhrase) {
        // When phrase is complete, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, speed);
      } else {
        // Continue typing characters
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting, phrases, speed, delay]);

  return (
    <span className={`${className} inline-block`}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default AnimatedText;