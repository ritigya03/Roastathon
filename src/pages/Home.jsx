import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css"; // Ensure you have Tailwind set up in your index.css
import TicTacToeImg from '../assets/tictactoe.jpg';
import MemImg from '../assets/Memory.jpg';
import Wam from '../assets/wam.png';
import CandyImg from '../assets/candy.jpg';

function Home() {
    return (
        <div className="flex flex-col items-center p-6 min-h-screen">
            <nav className="w-full p-8 shadow-md">
                <div className="flex justify-center space-x-8">
                    <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                        Home
                    </Link>
                    <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                        About
                    </Link>
                    <Link to="/rules" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                        Rules
                    </Link>
                </div>
            </nav>

            <h1 className="text-8xl font-black my-6">Game Changers</h1>

            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card for Tic Tac Toe */}
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <img src={TicTacToeImg} alt="Tic Tac Toe" className="w-full h-32 object-cover rounded-md" />
                    <h2 className="text-xl text-black  font-black mt-4">Tic Tac Toe</h2>
                    <Link to="/TicTacToe">
                        <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
                            Play
                        </button>
                    </Link>
                </div>

                {/* Card for Memory Game */}
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <img src={MemImg} alt="Memory Game" className="w-full h-32 object-cover rounded-md" />
                    <h2 className="text-xl  text-black font-black mt-4">Memory Game</h2>
                    <Link to="/MemoryGame">
                        <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
                            Play
                        </button>
                    </Link>
                </div>

                {/* Card for Whack a Mole */}
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <img src={Wam} alt="Whack a Mole" className="w-full h-32 object-cover rounded-md" />
                    <h2 className="text-xl text-black font-black  mt-4">Whack a Mole</h2>
                    <Link to="/Mole">
                        <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
                            Play
                        </button>
                    </Link>
                </div>

                {/* Card for Candy Crush */}
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <img src={CandyImg} alt="Candy Crush" className="w-full h-32 object-cover rounded-md" />
                    <h2 className="text-xl text-black font-black mt-4">Candy Crush</h2>
                    <Link to="/CandyCrush">
                        <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
                            Play
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
