import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentWord = words[currentWordIndex];
      if (currentCharIndex < currentWord.length) {
        setDisplayedText(currentWord.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentCharIndex(0);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000); // Delay before typing the next word
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWordIndex, currentCharIndex, words, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
