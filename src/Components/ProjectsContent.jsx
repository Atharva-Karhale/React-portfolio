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
        <div className={` overflow-hidden text-xl grid grid-rows-3 size-full lg:relative lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[1fr_1fr_1fr] font-abc font-bold lg:text-4xl lg:h-full text-theme1-gray ${isHovered ? ' text-white ' : ''}`} onMouseEnter={mouseEntered}
        onMouseLeave={mouseLeft}>

            {isHovered && (
            <>
              <div className='relative row-span-1 overflow-hidden lg:absolute lg:col-start-1 lg:h-full lg:w-1/3 lg:box-border lg:border-8 lg:border-theme1-white border-8 border-theme1-white group'>

                <div className=' lg:hidden absolute bottom-6 right-2 text-2xl hover:underline hover:decoration-theme1-orange hover:cursor-pointer z-20 group-hover:text-theme1-white group-hover:underline group-hover:decoration-theme1-orange'><a href='https://passwordgeneratorak.netlify.app/'>Password<br/>Generator</a></div>
                <div className=' lg:hidden absolute text-[7em] bottom-12 right-[0.05em] lg:text-[#000000] opacity-25 z-10 '>1</div>

                <div className=' absolute w-full h-full bg-gradient-to-b from-theme1-gray from-20% hover:bg-none '></div>
                <img src={passwordGenerator} className=' lg:object-cover lg:h-full lg:w-full lg:object-top'/>
              </div>
              
              <div className='relative row-span-1 overflow-hidden  lg:absolute lg:col-start-2 lg:h-full lg:w-6/12 lg:box-border lg:border-8 lg:border-theme1-white border-8 border-theme1-white group'>

                <div className=' lg:hidden absolute bottom-6 right-2 text-2xl hover:underline hover:decoration-theme1-orange hover:cursor-pointer z-20 group-hover:text-theme1-black group-hover:underline group-hover:decoration-theme1-orange'><a href='https://tic-tac-toe-tic.netlify.app/'>Tic Tac Toe</a></div>
                <div className=' lg:hidden absolute text-[7em] bottom-12 right-[0.05em] lg:text-[#000000] opacity-25 z-10 '>2</div>

                <div className=' absolute w-full h-full bg-gradient-to-b from-theme1-orange from-30% hover:bg-none ' ></div>
                <img src={ticTacToe} className=' lg:object-cover lg:h-full lg:w-full lg:object-top'/>
              </div>

              <div className='relative row-span-1 overflow-hidden lg:absolute lg:col-start-3 lg:h-full lg:w-full lg:box-border lg:border-8 lg:border-theme1-white border-8 border-theme1-white group'>

                <div className=' lg:hidden absolute bottom-6 right-2 text-2xl hover:underline hover:decoration-theme1-orange hover:cursor-pointer z-20 group-hover:text-theme1-black group-hover:underline group-hover:decoration-theme1-orange'><a href='https://router-projectak.netlify.app/'>Router Project</a></div>
                <div className=' lg:hidden absolute text-[7em] bottom-12 right-[0.05em] lg:text-[#000000] opacity-25 z-10 '>3</div>

                <div className='absolute w-full h-full bg-gradient-to-b from-theme1-gray from-20% hover:bg-none'></div>
                <img src={router} className=' lg:object-cover lg:h-full lg:w-full lg:object-top'/>
              </div>
              </>
              )}
              
              {!isHovered && (
                <>
                  <div className='relative row-span-1 overflow-hidden lg:absolute lg:col-start-1 lg:h-full lg:w-1/3 lg:box-border lg:border-8 lg:border-theme1-white border-8 border-theme1-white group'>

                    <div className=' lg:hidden absolute bottom-6 right-2 text-2xl hover:underline hover:decoration-theme1-orange hover:cursor-pointer z-20 group-hover:text-theme1-white group-hover:underline group-hover:decoration-theme1-orange'><a href='https://passwordgeneratorak.netlify.app/'>Password<br/>Generator</a></div>
                    <div className=' lg:hidden absolute text-[7em] bottom-12 right-[0.05em] lg:text-[#000000] opacity-25 z-10 '>1</div>

               
                  </div>
              
                  <div className='relative row-span-1 overflow-hidden  lg:absolute lg:col-start-2 lg:h-full lg:w-6/12 lg:box-border lg:border-8 lg:border-theme1-white border-8 border-theme1-white group'>

                    <div className=' lg:hidden absolute bottom-6 right-2 text-2xl hover:underline hover:decoration-theme1-orange hover:cursor-pointer z-20 group-hover:text-theme1-black group-hover:underline group-hover:decoration-theme1-orange'><a href='https://tic-tac-toe-tic.netlify.app/'>Tic Tac Toe</a></div>
                    <div className=' lg:hidden absolute text-[7em] bottom-12 right-[0.05em] lg:text-[#000000] opacity-25 z-10 '>2</div>

               
                  </div>

                  <div className='relative row-span-1 overflow-hidden lg:absolute lg:col-start-3 lg:h-full lg:w-full lg:box-border lg:border-8 lg:border-theme1-white border-8 border-theme1-white group'>

                    <div className=' lg:hidden absolute bottom-6 right-2 text-2xl hover:underline hover:decoration-theme1-orange hover:cursor-pointer z-20 group-hover:text-theme1-black group-hover:underline group-hover:decoration-theme1-orange'><a href='https://router-projectak.netlify.app/'>Router Project</a></div>
                    <div className=' lg:hidden absolute text-[7em] bottom-12 right-[0.05em] lg:text-[#000000] opacity-25 z-10 '>3</div>
                  </div>
                  </>
                  )
              }
           
            

            <div className='hidden lg:block lg:relative lg:row-start-3 lg:m-3 lg:text-right lg:z-10'>
              <div className=' lg:text-5xl lg:hover:underline lg:hover:decoration-theme1-orange lg:hover:cursor-pointer lg:z-20'><a href='https://passwordgeneratorak.netlify.app/'>Password Generator</a></div>
              <div className=' lg:text-[7em] lg:absolute lg:top-0 lg:right-[0.05em] lg:text-[#000000] lg:opacity-15 lg:-z-10'>1</div>
            </div>
            <div className=' hidden lg:block lg:relative lg:row-start-3 lg:m-3 lg:text-right lg:z-10'>
              <div className=' lg:text-5xl lg:hover:underline lg:hover:decoration-theme1-gray lg:hover:cursor-pointer lg:z-20'><a href='https://tic-tac-toe-tic.netlify.app/'>Tic Tac Toe </a></div>
              <div className=' lg:text-[7em] lg:absolute lg:top-0 lg:right-[0.05em] lg:text-[#000000] lg:opacity-15 lg:-z-10'>2</div>
            </div>
            <div className=' hidden lg:block lg:relative lg:row-start-3 lg:m-3 lg:text-right lg:z-10'>
              <div className=' lg:text-5xl lg:hover:underline lg:hover:decoration-theme1-orange lg:hover:cursor-pointer lg:z-20'><a href='https://router-projectak.netlify.app/'>Router Project </a></div>
              <div className=' lg:text-[7em] lg:absolute lg:top-2 lg:right-[0.05em] lg:text-[#000000] lg:opacity-15 lg:-z-10'>3</div>
            </div>
            
        </div>
    );
}