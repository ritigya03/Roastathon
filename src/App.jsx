import React from "react";
import TicTacToe from "./pages/TicTacToe";
import MemoryGame from "./pages/MemoryGame";
import Home from "./pages/Home";
import CandyCrush from "./pages/CandyCrush";
import { Routes, Route } from "react-router-dom";
import Mole from "./pages/Mole";
import HomePage from "./pages/HomePage";
import TicTacToeRules from "./pages/TicTacToeRules";
import MemoryRules from "./pages/MemoryRules";
import CandyCrushRules from "./pages/CandyCrushRules";
import WhackRules from "./pages/WhackRules";

function App() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
    //   <h1 className="text-4xl font-bold mb-6 text-indigo-600">Welcome to the Tic Tac Toe Game</h1>
    //   <a href="/tic-tac-toe" className="text-xl text-white bg-indigo-600 py-2 px-4 rounded">Play Tic Tac Toe</a>
    // </div>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/home" element= {<Home/>} />
      <Route path="/TicTacToe" element={<TicTacToe />} />
      <Route path="/MemoryGame" element={<MemoryGame />} />
      <Route path="/Mole" element={<Mole />} />
      <Route path="/CandyCrush" element={<CandyCrush />} />
      <Route path="/TicTacToeRules" element={<TicTacToeRules />} />
      <Route path="/MemoryRules" element={<MemoryRules />} />
      <Route path="/CandyCrushRules" element={<CandyCrushRules />} />
      <Route path="/WhackRules" element={<WhackRules />} />
    </Routes>
  );
}

export default App;
