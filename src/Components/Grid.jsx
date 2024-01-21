import React, { useState } from 'react';
import Navbar from './Navbar';
import TechStack from './TechStack';
import TechstackContent from './TechstackContent';
import { FaFilePdf, FaGithub, FaLinkedin, FaMousePointer, FaAngleDown } from "react-icons/fa";
import Test from './Test';
import Projects from './Projects';
import ProjectskContent from './ProjectsContent';
import Journey from './Journey';
import JourneykContent from './JourneyContent';
import ContactContent from './ContactContents';
import { IoLogoBehance } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { Link, animateScroll as scroll } from 'react-scroll';



export default function Grid() {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const scrollToSection = (section) => {
        scroll.scrollTo(section, {
            duration: 800, 
            smooth: 'easeInOutQuart',
        });
    };

    return(

        <div>
            <div className=' bg-theme1-white grid grid-rows-[3.2em_34.5em_3.5em_34em_4em_38em_4em_28em_4em_30em_2.8em] grid-cols-[1px_auto_1px] lg:grid-cols-[50px_auto_50px] h-auto'>

                <div className=' col-span-3 row-span-1 z-10 '>
                    <div className=' border-2 border-theme1-black'></div>
                    <div className=' flex items-center ' id='top'>
                    <Navbar/></div>
                    <div className=' border-2 border-theme1-black'></div>
                </div>
                

                <div className=" col-span-1 row-span-1 border-2 border-theme1-black text-[#cdcdcd]  hover:text-theme1-orange hover:bg-theme1-black " >
                    <div className= 'hidden -rotate-90 lg:flex items-center h-full font-abc lg:text-xl lg:mt-24 '>

                        <div><FaMousePointer /></div>
                        <div>_Hover_Anywhere!</div>
                    </div>
                </div>

                <div className={` ${isHovered? " col-span-1 row-span-1 border-2 border-theme1-black grid grid-rows-[2fr_1fr_1fr] lg:grid lg:grid-cols-[3fr_4fr] lg:grid-rows-5 relative overflow-hidden": "grid grid-rows-3 lg:grid lg:grid-cols-[3fr_4fr] lg:grid-rows-5 relative overflow-hidden border-2 border-theme1-black"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >

                    {isHovered && 
                    <div className='col-span-1 row-span-3 border-r-4 border-theme1-gray relative overflow-hidden font-abc font-semibold text-theme1-black hidden lg:block '>
                        <span className=' top-[0.17em] absolute text-[18em] -rotate-[113deg] -left-2'>A</span>
                        <span className=' -top-[0.44em] absolute text-[18em] rotate-[85deg] left-[0.08em]'>S</span>
                        <span className=' -top-[0.06em] absolute text-[18em] -rotate-[135deg] left-[1.26em]'>K</span>
                        <span className=' -top-[0.13em] absolute text-[18em] -rotate-[199deg] left-[0.88em]'>__</span>
                        <span className=' top-[0.48em] absolute text-[18em] -rotate-[135deg] left-[1.67em] text-theme1-orange'>.</span>
                    </div>}

                    {isHovered &&
                    <div className='col-span-1 row-span-2 border-b-4 border-theme1-gray lg:grid lg:grid-cols-2 overflow-hidden hidden  '>
                        <div className='relative col-span-1 text-center -top-20 lg:p-2  text-[14em] mx-auto  text-theme1-black '>IIIII</div>
                        <Link to="contact" spy={true} smooth={true} offset={-80}>
                        <div className=' bg-theme1-black hover:cursor-pointer  '> <FaAngleDown className='text-theme1-white text-[8em] lg:text-[18em] mx-auto -my-8 hover:text-theme1-orange'/></div> </Link>

                    </div>}

                    {isHovered &&
                    <div className='border-b-4 border-theme1-gray col-span-1 row-span-2 text-theme1-black lg:text-[9em] text-[6em] my-auto font-def font-black text-center hidden lg:block '>
                        Hi.
                    </div>}

                    {isHovered &&
                    <div className='row-start-2 my-auto lg:m-0 lg:col-span-1 lg:row-span-2  font-abc font-bold text-4xl text-center md:text-4xl text-theme1-black flex flex-col lg:text-end lg:border-r-4 lg:p-4 lg:border-t-4 border-theme1-gray'>
                        <div className='underline underline-offset-8 hover:text-theme1-orange'>Atharva Karhale</div>
                        <div className='text-[0.44em] font-medium'>Frontend Developer | Graphic Dsigner</div>
                    </div>}

                    {!isHovered && 
                    <div className=' row-start-2 my-auto lg:m-0 text-center lg:row-start-4 lg:col-span-1 lg:row-span-2  font-abc font-bold text-4xl md:text-4xl text-theme1-black flex flex-col lg:text-end lg:border-r-4 lg:p-4 lg:border-t-4 border-theme1-white'>
                    <div className='underline underline-offset-8 hover:text-theme1-orange'>Atharva Karhale</div>
                    <div className='text-[0.44em] font-medium'>Frontend Developer | Graphic Dsigner</div>
                    </div>
                    }
                    

                    {isHovered &&
                    <div className=' row-start-3 lg:col-span-1 lg:row-span-1  '>
                        <ul className=' flex text-4xl justify-between py-7 px-20 '>
                            <li title='Github' className='hover:text-theme1-orange hover:cursor-pointer rounded-full border-4 border-theme1-black p-2 border-opacity-25 hover:border-theme1-orange '><a href='https://github.com/Atharva-Karhale'><FaGithub className='text-theme1-gray' /></a></li>
                            <li title='LinkedIn' className='hover:text-theme1-orange hover:cursor-pointer rounded-full border-4 border-theme1-black p-2 border-opacity-25 hover:border-theme1-orange'><a href='https://www.linkedin.com/in/atharva-karhale/'><FaLinkedin className='text-theme1-gray' /></a></li>
                            <li title='Download CV in PDF format' className='hover:text-theme1-orange hover:cursor-pointer rounded-full border-4 border-opacity-25 border-theme1-black p-2 hover:border-theme1-orange'><a href='https://drive.google.com/file/d/19HE-QPlmDlpCDo_A_AO1pkd3wURmFLod/view?usp=sharing'><FaFilePdf className='text-theme1-gray' /></a></li>
                            <li title='Download CV in PDF format' className='hover:text-theme1-orange hover:cursor-pointer rounded-full border-4 border-opacity-25 border-theme1-black hover:border-theme1-orange p-2'><a href='https://www.behance.net/askmodink'><IoLogoBehance className='text-theme1-gray' /></a></li>
                        </ul>
                    </div>}
                    
                </div>

                <div className=" col-span-1 row-span-1 border-2 border-theme1-black" ></div>

                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>
                <div className='col-span-1 row-span-1 border-2 border-theme1-black'> <TechStack heading={"Skills"}/></div>
                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>

                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>
                <div className='col-span-1 row-span-1 border-2 border-theme1-black' id='skills'> <TechstackContent/></div>
                <div className="col-span-1 row-span-1 border-2 border-theme1-black"></div>

                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>
                <div className='col-span-1 row-span-1 border-2 border-theme1-black'> <TechStack heading={'Projects'}/></div>
                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>

                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>
                <div className='col-span-1 row-span-1 border-2 border-theme1-black' id='projects'> <ProjectskContent/></div>
                <div className="col-span-1 row-span-1 border-2 border-theme1-black"></div>

                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>
                <div className='col-span-1 row-span-1 border-2 border-theme1-black'> <TechStack heading={'Education'}/></div>
                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>

                
                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>
                <div className='col-span-1 row-span-1 border-2 border-theme1-black' id="education"> <JourneykContent/></div>
                <div className="col-span-1 row-span-1 border-2 border-theme1-black"></div>

                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>
                <div className='col-span-1 row-span-1 border-2 border-theme1-black'> <TechStack heading={'Contact'}/></div>
                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>

                
                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>
                <div className='col-span-1 row-span-1 border-2 border-theme1-black' id='contact'> <ContactContent/></div>
                <div className="col-span-1 row-span-1 border-2 border-theme1-black"></div>

                <div className=" col-span-1 row-span-1 border-2 border-theme1-black"></div>
                <div className='col-span-1 row-span-1 border-2 border-theme1-black' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {!isHovered && <div className=' font-abc font-bold text-center text-4xl text-theme1-orange'>'?'</div>}
                    {isHovered && <div className='flex font-abc font-bold justify-center my-2 text-xl text-theme1-gray'>Wanna see more?<span className='flex text-theme1-orange mx-2'>Hire Me <FaArrowUp /></span></div>}
                </div>
                <div className=" col-span-1 row-span-1 border-2 border-theme1-black">
                    
                </div>
                
                
            </div>
        </div>
    )
}