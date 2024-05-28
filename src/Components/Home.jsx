/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const phrases = [
    "Student",
    "Software Developer",
    "Web Designer",
    "Full-Stack Engineer",
  ];

  useEffect(() => {
    const currentWord = phrases[currentWordIndex];
    if (isTyping && index < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[index]);
        setIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
    if (!isTyping && index > 0) {
      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, index - 1));
        setIndex((prev) => prev - 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    if (isTyping && index === currentWord.length) {
      setTimeout(() => setIsTyping(false), 1000);
    }
    if (!isTyping && index === 0) {
      setCurrentWordIndex((prev) => (prev + 1) % phrases.length);
      setIsTyping(true);
    }
  }, [index, isTyping, currentWordIndex, phrases]);

  return (
    <div
      id="home"
      className="home-container flex justify-center items-center h-screen gap-12 p-5 transition-colors duration-200 bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-gray-300"
    >
      <div className="details flex flex-col items-center">
        <h1 className="text-9xl">Julian Rodriguez</h1>
        <span className="typing-text text-5xl h-10 mt-4 relative">
          {text}
          <span className="absolute inset-y-0 right-0 animate-blink">|</span>
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-blue-200 dark:to-gray-900"></div>
    </div>
  );
}

export default Home;
