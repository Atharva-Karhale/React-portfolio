import React from 'react';
import { useState } from 'react';

export default function Projects() {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return(
        <div className={`relative font-abc font-bold text-4xl text-center p-2 h-full text-[#333333] ${isHovered ? 'bg-[#ffa500] text-[#f8f8fd] mx-auto font-def grid grid-cols-[1fr_1fr_1fr]' : ''}`} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            {isHovered && <img src='src/Assets/1x/Pattern.png' className='absolute inset-0 h-full w-full object-cover opacity-10 '/>}

            {isHovered && <img src='./src/Assets/1x/tailwind-logo-b&w.png' className='my-auto size-8 col-span-1 mx-auto animate-spin mix-blend-differe'/>}

            <div className='col-span-1'>Projects</div>

            {isHovered && <img src='src/Assets/1x/react_icon.webp' className=' size-8  col-span-1 mx-auto my-auto animate-spin mix-blend-screen'/>}
        </div>
    );
}