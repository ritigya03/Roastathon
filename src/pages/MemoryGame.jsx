import React, { useState, useEffect } from "react";
import Card from "../components/Card"; // Import the Card component
import "../index.css";
import img2 from "../assets/img2.jpg"
import Trump from  "../assets/trump.jpg"
import Kylie from  "../assets/kylie.jpg"
import Pika from  "../assets/pika.jpg"
import Gian from  "../assets/gian.jpg"
import Img3 from  "../assets/img3.jpg"
const cardImages = [
  { src:img2, matched: false },
  { src: Trump, matched: false },
  { src: Kylie, matched: false },
  { src:Pika, matched: false },
  { src: Gian, matched: false },
  { src: Img3, matched: false },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0); // Timer state
  const [difficulty, setDifficulty] = useState(null); // Difficulty state
  const [gameStarted, setGameStarted] = useState(false); // Game started state

  // Function to get card count based on difficulty
  const getCardCount = () => {
    switch (difficulty) {
      case "easy":
        return 8;
      case "medium":
        return 12;
      default:
        return 0;
    }
  };

  // Shuffle cards and start the game
  const shuffleCards = () => {
    const count = getCardCount();
    const selectedImages = cardImages.slice(0, count / 2); // Get half for matching pairs
    const shuffledCards = [...selectedImages, ...selectedImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setTime(0); // Reset time when starting a new game
  };

  const handleFlip = (card) => {
    if (!disabled && !flippedCards.includes(card)) {
      setFlippedCards((prev) => [...prev, card]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setDisabled(true);
      if (flippedCards[0].src === flippedCards[1].src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === flippedCards[0].src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [flippedCards]);

  const resetTurn = () => {
    setFlippedCards([]);
    setDisabled(false);
  };

  useEffect(() => {
    if (gameStarted && difficulty) {
      shuffleCards(); // Shuffle cards when game starts
    }
  }, [gameStarted, difficulty]);

  // Timer effect
  useEffect(() => {
    if (gameStarted) { // Only start timer if game has started
      const timer = setInterval(() => {
        setTime((prev) => prev + 1); // Increment time by 1 every second
      }, 1000);

      return () => clearInterval(timer); // Clear interval on unmount
    }
  }, [gameStarted]);

  const startGame = () => {
    setGameStarted(true); // Set game to started
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-500 to-purple-700">
      <h1 className="text-black text-4xl font-bold mb-8">Memory Game</h1>
      
      {/* Difficulty Selection */}
      {!difficulty && !gameStarted && (
        <div className="mb-8">
          <h2 className="text-white text-2xl mb-4">Select Difficulty</h2>
          <button
            onClick={() => setDifficulty("easy")}
            className="mx-2 px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Easy
          </button>
          <button
            onClick={() => setDifficulty("medium")}
            className="mx-2 px-4 py-2 bg-yellow-600 text-white rounded-lg"
          >
            Medium
          </button>
        </div>
      )}

      {difficulty && !gameStarted && (
        <div className="mb-8">
          <h2 className="text-white text-2xl mb-4">Ready to start the game?</h2>
          <button
            onClick={startGame}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Start Game
          </button>
        </div>
      )}

      {gameStarted && difficulty && (
        <>
          <div className="text-white text-2xl mb-4">Time: {time}s</div> {/* Display timer */}
          <div className="grid grid-cols-4 gap-4">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleFlip={handleFlip}
                flipped={flippedCards.includes(card) || card.matched}
              />
            ))}
          </div>
          <button
            onClick={() => {
              setDifficulty(null); 
              setCards([]); 
              setGameStarted(false); 
              setTime(0); 
            }}
            className="mt-8 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700"
          >
            Restart Game
          </button>
        </>
      )}
    </div>
  );
}

export default MemoryGame;
