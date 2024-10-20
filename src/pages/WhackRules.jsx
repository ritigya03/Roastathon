import React from 'react';
import MoleImg from "../assets/mole.jpg";
import { Link } from 'react-router-dom';

const WhackRules = () => {
    return (
        <div 
            className="flex justify-between items-center h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${MoleImg})`, backgroundSize: '80%' }} // Adjust size here
        >
            <div className="ml-4 mt-40 max-w-xs">
                <p className="text-lg leading-relaxed  text-white">
                    Moles are popping up everywhere, and it's your job to whack them back into their holes! Armed with your trusty hammer, you'll need quick reflexes and sharp eyes to hit as many moles as possible before time runs out.
                </p>
            </div>
            <div className="mr-[280px] mt-32">
                <Link to= "/Mole">
                <button className="bg-black text-[#4EC5C1] px-8 py-4 text-lg cursor-pointer">
                    PLAY
                </button>
                </Link>
           
            </div>
        </div>
    );
};

export default WhackRules;

