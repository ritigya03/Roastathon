import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import CanvasBackground from '../components/Matrix';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function TicTacToe() {
  const [gameMode, setGameMode] = useState('2-player');
  const [difficulty, setDifficulty] = useState('easy');
  const [lastCommand, setLastCommand] = useState('');

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
        setLastCommand(lastResult);
        handleVoiceCommand(lastResult); // handle commands based on voice
      };

      recognition.start();
    } else {
      console.error("Speech Recognition is not supported in this browser.");
    }
  }, []);

  const handleVoiceCommand = (command) => {
    console.log('Voice Command:', command);
    // Example: "place X in top-left" or "reset"
    // Map command to game actions here

    if (command.toLowerCase().includes('reset')) {
      window.location.reload(); // Example: Reset the game if 'reset' is spoken
    }
    // You can add more voice command parsing logic for placing moves
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
          <Board gameMode={gameMode} difficulty={difficulty} lastCommand={lastCommand} />
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
