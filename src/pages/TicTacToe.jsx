import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import CanvasBackground from '../components/Matrix';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function TicTacToe() {
  const [gameMode, setGameMode] = useState('2-player');
  const [difficulty, setDifficulty] = useState('easy');
  const [voiceMove, setVoiceMove] = useState(null); 

  const handleModeChange = (e) => setGameMode(e.target.value);
  const handleDifficultyChange = (e) => setDifficulty(e.target.value);

  // Initialize SpeechRecognition
  useEffect(() => {
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const lastResult = event.results[event.results.length - 1][0].transcript.trim();
        handleVoiceCommand(lastResult); // handle commands based on voice
      };

      recognition.start();
    } else {
      console.error("Speech Recognition is not supported in this browser.");
    }
  }, []);
  const handleVoiceCommand = (command) => {
    console.log('Voice Command:', command); // Log the received command
  
    const moveMatch = command.toLowerCase().match(/(x|o) (top left|top middle|top right|middle left|middle|middle right|bottom left|bottom middle|bottom right)/);
    if (moveMatch) {
      const symbol = moveMatch[1].toUpperCase();
      const position = moveMatch[2];
      console.log(`Parsed Command: Symbol - ${symbol}, Position - ${position}`); // Debugging output
  
      const coordinates = getCoordinatesFromPosition(position); 
      console.log(`Coordinates Found: ${coordinates}`);
      if (coordinates !== null) {
        console.log(`Placing ${symbol} at position ${coordinates}`);
        setVoiceMove({ symbol, position: coordinates });
      } else {
        console.error('Invalid position:', position);
      }
    } else if (command.toLowerCase().includes('reset')) {
      window.location.reload(); // Reset game
    }
  };
  
  
   
  
  const getCoordinatesFromPosition = (position) => {
    const positionMap = {
      'top left': 0,
      'top middle': 1,
      'top right': 2,
      'middle left': 3,
      'middle': 4,
      'middle right': 5,
      'bottom left': 6,
      'bottom middle': 7,
      'bottom right': 8,
    };
  
    const normalizedPosition = position.toLowerCase();
    console.log(`Normalizing Position: "${normalizedPosition}"`);
    console.log(`Position Map:`, positionMap); 
  
    return positionMap[normalizedPosition] !== undefined ? positionMap[normalizedPosition] : null; 
  };
  
  

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background animation */}
      <CanvasBackground />

      {/* Tic-Tac-Toe game content */}
      <div className="absolute top-0 right-[38%] z-10 flex flex-col items-center justify-start pt-12">
        <div className="bg-black border-4 border-indigo-500 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-white text-center">Tic Tac Toe</h1>

          <div className="mb-4">
            <label className="mr-2">Select Game Mode:</label>
            <select
              value={gameMode}
              onChange={handleModeChange}
              className="px-2 py-1 border rounded"
            >
              <option value="2-player">2-Player</option>
              <option value="vs-computer">User vs Computer</option>
            </select>
          </div>

          {gameMode === 'vs-computer' && (
            <div className="mb-4">
              <label className="mr-2">Difficulty:</label>
              <select
                value={difficulty}
                onChange={handleDifficultyChange}
                className="px-2 py-1 border rounded"
              >
                <option value="easy">Easy</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          )}

          {/* Tic-Tac-Toe Board */}
          <Board 
            gameMode={gameMode} 
            difficulty={difficulty} 
            voiceMove={voiceMove}
          />
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
