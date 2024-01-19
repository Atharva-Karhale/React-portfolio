import React from 'react';
import { useState } from 'react';
import Test from './Test';
import Test1 from './Test';
import Pattern from './Test';
import DotPattern from './DotPattern';

export default function JourneykContent() {
    
    const [isHovered, setHovered] = useState(false);

    const mouseEntered = () => {
        setHovered(true);
    };

    const mouseLeft = () => {
        setHovered(false);
    };

    return (

        <div className='grid grid-rows-[1fr_3fr] h-full w-full group'onMouseEnter={mouseEntered} onMouseLeave={mouseLeft}  >
            <div className=' row-span-1 font-abc font-bold text-center text-4xl pt-5 grid grid-rows-[3fr_1fr]' >
                <div className=' row-span-1'>
                    {isHovered && <div className='underline underline-offset-2 text-theme1-gray'>Follow My Journey!</div>}

                    {isHovered && <div className=' font-def text-center text-sm no-underline text-theme1-gray'> <span className=' text-theme1-orange'>Hover over</span> the icons below to <span className=' text-theme1-orange'>see my Journey</span>.</div>}
                    
                    
                </div>
                <div className=' text-sm row-span-1 hover:opacity-30 group-hover:opacity-20'>
                    Secondary Education [2017] | Higher Secondary Education [2019] | B.Tech [2023]
                </div>
            </div>

            {isHovered && <div className=' row-span-1
             flex justify-center items-center bg-gradient-to-t from-white'>
                <DotPattern/>   
            </div>}
        </div>

    );
}