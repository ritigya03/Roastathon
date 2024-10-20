// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure you have Tailwind set up in your index.css
import TicTacToeImg from '../assets/tictactoe.jpg';
import MemImg from '../assets/Memory.jpg';
import Wam from '../assets/wam.png';
import CandyImg from '../assets/candy.jpg';
import BgImg from "../assets/bg_game.jpg";

function Home() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="grid grid-cols-1 mt-[170px] sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <img src={TicTacToeImg} alt="Tic Tac Toe" className="w-full h-32 object-cover rounded-md" />
                    <h2 className="text-xl text-black font-black mt-4">Tic Tac Toe</h2>
                    <Link to="/TicTacToe">
                        <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Play</button>
                    </Link>
                    <Link to="/TicTacToeRules">
                        <button className="mt-2 ml-2 bg-black text-white rounded px-4 py-2 hover:bg-gray-400">Rules</button>
                    </Link>
                </div>

                {/* Card for Memory Game */}
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <img src={MemImg} alt="Memory Game" className="w-full h-32 object-cover rounded-md" />
                    <h2 className="text-xl text-black font-black mt-4">Memory Game</h2>
                    <Link to="/MemoryGame">
                        <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Play</button>
                    </Link>
                    <Link to="/MemoryGameRules">
                        <button className="mt-2 ml-2 bg-black text-white rounded px-4 py-2 hover:bg-gray-400">Rules</button>
                    </Link>
                </div>

                {/* Card for Whack a Mole */}
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <img src={Wam} alt="Whack a Mole" className="w-full h-32 object-cover rounded-md" />
                    <h2 className="text-xl text-black font-black mt-4">Whack a Mole</h2>
                    <Link to="/Mole">
                        <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Play</button>
                    </Link>
                    <Link to="/MoleRules">
                        <button className="mt-2 ml-2 bg-black text-white rounded px-4 py-2 hover:bg-gray-400">Rules</button>
                    </Link>
                </div>

                {/* Card for Candy Crush */}
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <img src={CandyImg} alt="Candy Crush" className="w-full h-32 object-cover rounded-md" />
                    <h2 className="text-xl text-black font-black mt-4">Candy Crush</h2>
                    <Link to="/CandyCrush">
                        <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Play</button>
                    </Link>
                    <Link to="/CandyCrushRules">
                        <button className="mt-2 ml-2 bg-black text-white rounded px-4 py-2 hover:bg-gray-400">Rules</button>
                    </Link>
                </div>
            </div>

            {/* Back to Home Button */}
            <Link to="/">
                <button className="mt-8 bg-gray-300 text-black rounded px-4 py-2 hover:bg-gray-400">Back to Home</button>
            </Link>
        </div>
    );
}

export default Home;

