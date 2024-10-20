import React from 'react';
import { Link } from 'react-router-dom';

const MemoryRules = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-green-200">
            <div className="text-center p-4">
                <h1 className="text-5xl text-black mt-[30px] font-bold mb-2">MEMORY GAME</h1>
                <p className="text-lg text-black mb-2">
                    Test your brainpower by matching pairs of hidden cards. Flip two cards at a time, and try to remember their positions. Match all the pairs to win the game! How sharp is your memory? Let's find out!
                </p>
                <h2 className="text-lg font-semibold text-black mb-4">How to Play the Memory Game:</h2>
                <ul className="list-disc text-black list-inside mb-3">
                    <li>At the start of the game, all cards are placed face down.</li>
                    <li>Click on any two cards to flip them over and reveal their images.</li>
                    <li>If the two cards match, they stay face up.</li>
                    <li>Continue flipping and matching cards until all pairs are found.</li>
                    <li>The game ends when all card pairs are successfully matched.</li>
                </ul>
                
                {/* Move the Play button here for better visibility */}
                <div className="mb-3">
                    <Link to="/MemoryGame">
                        <a href="#" className="text-green-300 bg-black px-4 py-2 rounded text-lg hover:bg-gray-700 transition">
                            PLAY
                        </a>
                    </Link>
                </div>
                
                <div className="grid w-[400px] ml-[550px] grid-cols-4 gap-1 justify-center ">
                    {[...Array(16)].map((_, index) => (
                        <div key={index} className="w-20 h-20 bg-green-100 border-2 border-green-400 flex justify-center items-center rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
                            {/* Placeholder for card image */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemoryRules;
