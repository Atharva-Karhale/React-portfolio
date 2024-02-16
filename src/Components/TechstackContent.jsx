import React from 'react';
import { useState } from 'react';
import './TechContent.css'


export default function TechstackContent() {
    
    const [isHovered, setHovered] = useState(false);

    const mouseEntered = () => {
        setHovered(true);
    };

    const mouseLeft = () => {
        setHovered(false);
    };

    return (
        <div className={`lg:grid grid-cols-[1fr_1fr] font-abc font-bold text-4xl h-full text-[#333333] ${isHovered ? '' : ''}`} onMouseEnter={mouseEntered}
        onMouseLeave={mouseLeft}>

            <div className={` ${isHovered ? ' hidden lg:block border-r-4 border-theme1-gray bg-[url(/src/Assets/1x/brain.png)] bg-center bg-contain bg-no-repeat' : ''}` }>
     
            </div>
            

            <div className='grid grid-rows-[2fr_1fr] '>

                <div className={` hover:text-center grid grid-rows-[1fr_5fr]  ${isHovered ? 'text-center tracking-widest' : 'text-right'}`}>

                    <div className={` py-2 px-6 text-4xl underline underline-offset-2 ${isHovered ? " bg-theme1-gray text-theme1-white " : ""}`}>Technologies</div>
                    <div className='lg:grid lg:grid-cols-2 text-m font-medium  '>
                        {isHovered && <div className='hidden col-start-1 lg:grid lg:grid-rows-4'>
                            <div className=' h-6 bg-theme1-orange my-auto mx-4 hover:text-theme1-white text-theme1-orange'>
                                <div className='absolute mx-[19.4em] text-sm text-right font-abc font-bold '>90%</div>
                                <div className=' h-6 my-auto max-w-[10%] bg-theme1-gray'></div>
                            </div>    
                            <div className='h-6 bg-theme1-orange my-auto mx-4 hover:text-theme1-white text-theme1-orange'>
                                <div className='absolute mx-[19.4em] text-sm text-right font-abc font-bold '>60%</div>
                                <div className=' h-6 my-auto max-w-[40%] bg-theme1-gray'></div>
                            </div>   
                            <div className='h-6 bg-theme1-orange my-auto mx-4 hover:text-theme1-white text-theme1-orange'>
                                <div className='absolute mx-[19.4em] text-sm text-right font-abc font-bold '>50%</div>
                                <div className=' h-6 my-auto max-w-[50%] bg-theme1-gray'></div>
                            </div>   
                            <div className='h-6 bg-theme1-orange my-auto mx-4 hover:text-theme1-white text-theme1-orange'>
                                <div className='absolute mx-[19.4em] text-sm text-right font-abc font-bold '>70%</div>
                                <div className=' h-6 my-auto max-w-[30%] bg-theme1-gray'></div>
                            </div>
                        </div>}


                        <ul className={`flex flex-col ml-20 md:ml-0 items-end ${isHovered ? 'bg-[url(/src/Assets/1x/brain.png)] bg bg-contain bg-no-repeat font-extrabold lg:font-normal text-transparent md:text-black' : ' '}  lg:bg-none md:bg-none text-xs lg:text-right col-start-2 lg:grid grid-rows-4 h-full lg:mx-6 lg:text-lg lg:text-[0.6em] font-medium`}>
                            <li className={` group: hover:bg-theme1-gray hover:text-white p-2 my-auto ${isHovered ? 'text-left' : 'text-right'}`}>
                                React+Tailwind
                            </li>
                            <li className={`hover:bg-theme1-gray hover:text-white p-2 my-auto ${isHovered ? 'text-left' : 'text-right'}`}>
                                Redux Toolkit
                            </li>
                            <li className={`hover:bg-theme1-gray hover:text-white p-2 my-auto ${isHovered ? 'text-left' : 'text-right'}`}>
                                JavaScript+NodeJS
                            </li>
                            <li className={`hover:bg-theme1-gray hover:text-white p-2 my-auto ${isHovered ? 'text-left' : 'text-right'}`}>
                                MongoDB+Express
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className={`${isHovered ? 'flex items-center border-t-4 border-theme1-gray bg-theme1-black' : ''} `}>
                    {isHovered && <div className='  text-center text-8em font-def w-full text-white'>"I speak fluent <span className=' animate-loop-text'>creativity</span> and <br/>thrive on coffee 🍵."</div>}
                </div>
                
            </div>

            
            
    </div>
    );
}