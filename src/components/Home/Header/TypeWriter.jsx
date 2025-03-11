"use client";

// React imports
import { useEffect, useState } from "react";

const Typewriter = ({ phrases, delay = 100, loop = true }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      const textToDisplay = isDeleting
        ? currentPhrase.substring(0, currentText.length - 1)
        : currentPhrase.substring(0, currentText.length + 1);

      setCurrentText(textToDisplay);

      if (!isDeleting && textToDisplay === currentPhrase) {
        // Wait a little bit before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && textToDisplay === "") {
        // Change to other phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) =>
          loop ? (prevIndex + 1) % phrases.length : prevIndex + 1
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, delay, loop]);

  return (
    <div className="Typewriter" data-testid="typewriter-wrapper">
      <span className="Typewriter__wrapper">{currentText}</span>
      <span className="Typewriter__cursor">|</span>
    </div>
  );
};

export default Typewriter;
