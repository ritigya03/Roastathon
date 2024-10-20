import React from 'react';
import tttRules from "../assets/tttrules.jpg"
import { Link } from 'react-router-dom';
const TicTacToeRules = () => {
  return (
    <div className="bg-black text-white font-mono flex justify-center items-center h-screen m-0">
      <div className="text-center">
        <h1 className="text-5xl mb-5">TIC-TAC-TOE</h1>
        <div className="mb-7 max-w-xl mx-auto text-left">
          <ul className="list-disc list-inside">
            <li><strong>Tic Tac Toe</strong> is a classic two-player strategy game played on a 3x3 grid.</li>
            <li>Each player takes turns marking a cell in the grid with either an "X" or an "O."</li>
            <li>The objective is to be the first player to align three of your marks either horizontally, vertically, or diagonally.</li>
            <li>If all nine cells are filled and neither player has achieved a winning combination, the game ends in a draw.</li>
            <li>Simple yet engaging, Tic Tac Toe is a game of quick thinking and strategic planning, perfect for players of all ages!</li>
          </ul>
        </div>
        <Link to = "/TicTacToe">
        <button className="bg-white rounded text-black border-none py-3 px-6 text-lg cursor-pointer uppercase hover:bg-purple-600 transition">
          Play
        </button>
        </Link>
       
        <div className="mt-6 flex justify-center">
          <img alt="Tic Tac Toe game illustration with Xs and Os" src={tttRules} />
        </div>
      </div>
    </div>
  );
};


export default TicTacToeRules;

