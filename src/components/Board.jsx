import React, { useState, useEffect } from 'react';
import Square from './Square';

function Board({ gameMode, difficulty, voiceMove }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Handle voice move placement
  useEffect(() => {
    if (voiceMove) {
      const { symbol, position } = voiceMove;
      if (squares[position] === null) {
        const newSquares = squares.slice();
        newSquares[position] = symbol;
        setSquares(newSquares);
        setIsXNext(symbol === 'O');
      }
    }
  }, [voiceMove]);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    if (!isXNext && gameMode === 'vs-computer') {
      if (difficulty === 'easy') {
        makeRandomMove();
      } else if (difficulty === 'hard') {
        makeOptimalMove();
      }
    }
  }, [isXNext]);

  const makeRandomMove = () => {
    const emptySquares = squares
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    if (emptySquares.length > 0) {
      const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
      const newSquares = squares.slice();
      newSquares[randomIndex] = 'O';
      setSquares(newSquares);
      setIsXNext(true);
    }
  };

  const makeOptimalMove = () => {
    const bestMove = getBestMove(squares);
    const newSquares = squares.slice();
    newSquares[bestMove] = 'O';
    setSquares(newSquares);
    setIsXNext(true);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl font-semibold">{status}</div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Reset Game
      </button>
    </div>
  );
}

// Check for winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
