import React from 'react';
import { useState } from 'react';

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
                <img src='src/Assets/1x/password generator.png' className=' object-cover h-full w-full object-top'/>
              </div>
              
              <div className='absolute col-start-2 h-full w-6/12 box-border border-8 border-theme1-white'>
                <div className=' absolute w-full h-full bg-gradient-to-b from-theme1-orange from-30% hover:bg-none z-10' ></div>
                <img src='src/Assets/1x/tic tac toe.png' className=' object-cover h-full w-full object-top'/>
              </div>

              <div className='absolute col-start-3 h-full w-full bg-black box-border border-8 border-theme1-white'>
                <div className=' absolute w-full h-full bg-gradient-to-b from-theme1-gray from-20% hover:bg-none z-10'></div>
                <img src='src/Assets/1x/tic tac toe.png' className=' object-cover h-full w-full object-top'/>
              </div>
            </>
            )}

            <div className='relative row-start-3 m-3 text-right z-10'>
            <div className=' text-5xl hover:underline hover:decoration-theme1-orange hover:cursor-pointer z-20'><a href='https://github.com/Atharva-Karhale/Password-Generator'>Password Generator</a></div>
            <div className=' text-[7em] absolute top-0 right-[0.05em] text-[#000000] opacity-15 -z-10'>1</div>
            </div>
            <div className='relative row-start-3 m-3 text-right z-10'>
            <div className=' text-5xl hover:underline hover:decoration-theme1-gray hover:cursor-pointer z-20'><a href='https://github.com/Atharva-Karhale/Tic_Tac_Toe'>Tic Tac Toe </a></div>
            <div className=' text-[7em] absolute top-0 right-[0.05em] text-[#000000] opacity-15 -z-10'>2</div>
            </div>
            <div className='relative row-start-3 m-3 text-right z-10'>
            <div className=' text-5xl hover:underline hover:decoration-theme1-orange hover:cursor-pointer z-20'><a href='https://github.com/Atharva-Karhale/Router-Project'>Router Project </a></div>
            <div className=' text-[7em] absolute top-2 right-[0.05em] text-[#000000] opacity-15 -z-10'>3</div>
            </div>
            
        </div>
    );
}