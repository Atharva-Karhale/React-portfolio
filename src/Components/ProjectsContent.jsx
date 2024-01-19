import React from 'react';
import { useState } from 'react';
import passwordGenerator from "../Assets/1x/password generator.png"
import router from "../Assets/1x/router.png"
import ticTacToe from "../Assets/1x/tic tac toe.png"

export default function ProjectskContent() {
    
    const [isHovered, setHovered] = useState(false);

    const mouseEntered = () => {
        setHovered(true);
    };

    const mouseLeft = () => {
        setHovered(false);
    };

    return (
        <div className={` relative grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] font-abc font-bold text-4xl h-full text-theme1-gray ${isHovered ? ' text-white ' : ''}`} onMouseEnter={mouseEntered}
        onMouseLeave={mouseLeft}>

            {isHovered && (
            <>
              <div className='absolute col-start-1 h-full w-1/3 box-border border-8 border-theme1-white'>
                <div className=' absolute w-full h-full bg-gradient-to-b from-theme1-gray from-20% hover:bg-none z-10'></div>
                <img src={passwordGenerator} className=' object-cover h-full w-full object-top'/>
              </div>
              
              <div className='absolute col-start-2 h-full w-6/12 box-border border-8 border-theme1-white'>
                <div className=' absolute w-full h-full bg-gradient-to-b from-theme1-orange from-30% hover:bg-none z-10' ></div>
                <img src={ticTacToe} className=' object-cover h-full w-full object-top'/>
              </div>

              <div className='absolute col-start-3 h-full w-full box-border border-8 border-theme1-white'>
                <div className=' absolute w-full h-full bg-gradient-to-b from-theme1-gray from-20% hover:bg-none z-10'></div>
                <img src={router} className=' object-cover h-full w-full object-top'/>
              </div>
            </>
            )}

            <div className='relative row-start-3 m-3 text-right z-10'>
            <div className=' text-5xl hover:underline hover:decoration-theme1-orange hover:cursor-pointer z-20'><a href='https://passwordgeneratorak.netlify.app/'>Password Generator</a></div>
            <div className=' text-[7em] absolute top-0 right-[0.05em] text-[#000000] opacity-15 -z-10'>1</div>
            </div>
            <div className='relative row-start-3 m-3 text-right z-10'>
            <div className=' text-5xl hover:underline hover:decoration-theme1-gray hover:cursor-pointer z-20'><a href='https://tic-tac-toe-tic.netlify.app/'>Tic Tac Toe </a></div>
            <div className=' text-[7em] absolute top-0 right-[0.05em] text-[#000000] opacity-15 -z-10'>2</div>
            </div>
            <div className='relative row-start-3 m-3 text-right z-10'>
            <div className=' text-5xl hover:underline hover:decoration-theme1-orange hover:cursor-pointer z-20'><a href='https://router-projectak.netlify.app/'>Router Project </a></div>
            <div className=' text-[7em] absolute top-2 right-[0.05em] text-[#000000] opacity-15 -z-10'>3</div>
            </div>
            
        </div>
    );
}