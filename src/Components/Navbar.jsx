import React from 'react';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';


export default function Navbar() {
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
        <nav className='w-full h-full '>
            <div className={`flex relative size-full ${isHovered ? 'bg-theme1-gray ' : ''}`} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>

                {isHovered && <img src='src/Assets/1x/Pattern.png' className='absolute inset-0 h-full w-full object-cover opacity-10'/>}
                <img src='src/Assets/1x/Logo.png' className=' mx-auto h-12 py-1.5' alt='Atharva_Karhale-Wordmark'/>

                {isHovered && <div className='absolute z-10 gap-10 grid grid-cols-7 w-full text-center mt-2 font-abc font-bold '>
                        <div className=' col-start-2 bg-theme1-black text-theme1-white hover:text-theme1-orange hover:shadow-[0_0_15px] cursor-pointer hover:shadow-theme1-orange  m-auto p-1 mx-2 rounded'>
                        <Link to="education" spy={true} smooth={true} offset={-150} onClick={() => scrollToSection("education")}>
                        <div className=' size-full '>Education</div>
                        </Link>
                        </div>

                        <div className='bg-theme1-black text-theme1-white hover:text-theme1-orange hover:shadow-[0_0_15px] cursor-pointer hover:shadow-theme1-orange  m-auto p-1 mx-2 rounded'><Link to="skills" spy={true} smooth={true} offset={-80} onClick={() => scrollToSection("skills")}>
                        <div className=' size-full '>Skills</div>
                        </Link>
                        </div>

                    
                        <div className=' col-start-5 bg-theme1-black text-theme1-white hover:text-theme1-orange hover:shadow-[0_0_15px] cursor-pointer hover:shadow-theme1-orange  m-auto p-1 mx-2 rounded'><Link to="projects" spy={true} smooth={true} offset={-80} onClick={() => scrollToSection("projects")}>
                        <div className=' size-full '>Projects</div>
                        </Link>
                        </div>
                    
                       
                        <div className='bg-theme1-black text-theme1-white hover:text-theme1-orange hover:shadow-[0_0_15px] cursor-pointer hover:shadow-theme1-orange  m-auto p-1 mx-2 rounded'> <Link to="contact" spy={true} smooth={true} offset={-80} onClick={() => scrollToSection("contact")}>
                        <div className=' size-full '>Contact</div>
                        </Link>
                        </div>
                    
                    
                </div> }
            </div>
            
        </nav>
    );
}