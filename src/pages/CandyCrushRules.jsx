import React from 'react';
import Candybg from "../assets/candybg.jpg"
import { Link } from 'react-router-dom';
const CandyCrushRules = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage:  `url(${Candybg})` }}>
            <div className="text-left max-w-lg p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold mb-4 text-black">CANDY CRUSH</h1>
                <p className="text-lg  text-black leading-relaxed mb-4">
                    Enter a world of colorful candies and delightful puzzles! Your goal is simple: swap and match delicious candies to create rows of three or more. The more matches you make, the sweeter your score!
                </p>
                <p className="text-lg text-black leading-relaxed mb-4">
                    Complete each level by reaching your target score or clearing special objectives. With each level comes new challenges and tasty power-ups to help you along the way.
                </p>
                <p className="text-lg text-black leading-relaxed mb-6">
                    Are you ready to dive into this candy-filled adventure and crush your way to victory? Let’s get matching!
                </p>
                <Link to="/CandyCrush">
                <a href="#" className="block w-24 py-2 mt-4 text-center text-white bg-black font-bold rounded hover:bg-gray-700 transition">
                    PLAY
                </a></Link>
               
            </div>
        </div>
    );
};

export default CandyCrushRules;
