// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import BgImg from "../assets/bg_game.jpg";

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="flex flex-col items-center justify-center text-center text-white py-20 relative">
                <h1 className="text-7xl font-bold font-press-start">ARENA VERSE</h1>
                <h2 className="text-3xl mb-6">Your one-stop video game center</h2>
                <Link to="/home">
                    <button className="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg">PLAY</button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
