import React, { useEffect, useState, useMemo } from "react";

function Typewriter() {
  const delay = 50;
  const wordPause = 2000;
  const [currentText, setCurrentText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const welcomeText = useMemo(
    () => [
      "Welcome",
      "Hello",
      "Hi",
      "Howdy",
      "Greetings",
      "Bonjour",
      "Hey",
      "Hola",
      "Hallo",
      "Ciao",
      "Cześć",
      "Olá",
    ],
    []
  );

  useEffect(() => {
    const text = welcomeText[currentWordIndex] + ".";

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setCurrentText(" ");
        setCurrentIndex(0);
        setCurrentWordIndex(
          (prevIndex) => (prevIndex + 1) % welcomeText.length
        );
      }, wordPause);

      return () => clearTimeout(pauseTimeout);
    }
  }, [currentIndex, currentWordIndex, welcomeText]);

  return <span>{currentText}</span>;
}

export default Typewriter;
