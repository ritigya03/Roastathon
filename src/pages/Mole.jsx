import React, { useState, useEffect } from 'react';
import MoleHole from '../components/MoleHole';
import FireflyCanvas from '../components/FireflyCanvas';
import Forest from '../assets/forest.jpg'; // Ensure this imports the correct image path

const Mole = () => {
  const [moleIndex, setMoleIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const holes = Array.from({ length: 9 });
  const [isGameActive, setIsGameActive] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(null);

  useEffect(() => {
    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.onstart = () => console.log("Voice recognition activated.");
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log(transcript); // Log recognized words for debugging
        if (transcript === "play") {
          startGame(); // Call startGame if "start" is recognized
        }
      };
      recognition.onend = () => recognition.start(); // Restart recognition after it ends
      setSpeechRecognition(recognition);
      recognition.start();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isGameActive) {
        const randomIndex = Math.floor(Math.random() * holes.length);
        setMoleIndex(randomIndex);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameActive]);

  useEffect(() => {
    if (timeLeft > 0 && isGameActive) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsGameActive(false);
      speechRecognition?.stop(); // Stop speech recognition when game ends
    }
  }, [timeLeft, isGameActive, speechRecognition]);

  const handleClick = (index) => {
    if (index === moleIndex && isGameActive) {
      setScore((prevScore) => prevScore + 1);
      setMoleIndex(null);
    }
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsGameActive(false);
  };

  const startGame = () => {
    resetGame(); // Reset the game before starting
    setIsGameActive(true); // Start the game
    setTimeLeft(30); // Reset time
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Forest})` }} // Correctly set the background image
    >
      <FireflyCanvas />
      <div className="flex flex-col items-center absolute top-2 left-[38%] z-10">
        <h1 className="text-3xl mt-10 mb-4">Whack-a-Mole</h1>
        <p className="text-xl mb-4">Score: {score}</p>
        <p className="text-xl mb-4">Time Left: {timeLeft}s</p>
        <div className="grid grid-cols-3 gap-4">
          {holes.map((_, index) => (
            <MoleHole
              key={index}
              onClick={() => handleClick(index)}
              moleVisible={index === moleIndex}
            />
          ))}
        </div>
        {!isGameActive && (
          <div className="mt-4">
            <h2 className="text-2xl">Time's up!</h2>
            <button
              onClick={resetGame}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Play Again
            </button>
          </div>
        )}
        {/* Start Button */}
        {!isGameActive && (
          <button
            onClick={startGame}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Start Game
          </button>
        )}
      </div>
    </div>
  );
};

export default Mole;
