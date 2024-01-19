import React from 'react';
import { useState } from 'react';
import { TbSend } from "react-icons/tb";
import { FaAngleDown, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import Contact from '../Assets/1x/SVG/Contact';
import { IoLogoBehance } from 'react-icons/io5';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function ContactContent({ heading }) {

    const [isHovered, setHovered] = useState(false);

    const mouseEntered = () => {
        setHovered(true);
    };

    const mouseLeft = () => {
        setHovered(false);
    };

    const scrollToSection = (section) => {
        scroll.scrollTo(section, {
            duration: 800, 
            smooth: 'easeInOutQuart',
        });
    };


    return(
        <div className=' group grid grid-cols-[1fr_1fr] size-full' onMouseEnter={mouseEntered} onMouseLeave={mouseLeft}>
            <div className=' grid grid-rows-[1fr_1fr] overflow-hidden'>

            {!isHovered && <div></div>}

            {isHovered && <div className=' w-full h-fit object-scale-down overflow-hidden -mx-10 -my-5 ' >
                    <Contact
                        defaultColors={['#c55ea4', '#b765aa', '#9179ba', '#5599d3', '#4b9ed7', '#59a5d0', '#7eb8bf', '#b9d6a3', '#dce792']}
                        hoverColors={['#c55ea4', '#b765aa', '#9179ba', '#5599d3', '#4b9ed7', '#59a5d0', '#7eb8bf', '#b9d6a3', '#dce792']} color={"#FF7517"} 

                    />
                </div>}

                <div className=' grid grid-rows-[2fr_1fr] grid-cols-[2fr_1fr]'>
                    <div className=' col-span-1 row-span-1'>
                        <div className={`p-4 font-abc font-bold text-5xl underline underline-offset-2  ${isHovered ? 'border-t-4 border-theme1-gray':''} `}>Let's Connect</div>
                        <div className='px-4 font-def font-bold mt-3'>Email: pirateask2@gmail.com <br/>Phone: 'refer to cv'</div>
                    </div>
                    {!isHovered && <div></div>}

                {isHovered && 
                    <div className=' col-span-1 row-span-2'>
                        <Link to="top" spy={true} smooth={true} offset={-80}>
                        <div className=' bg-theme1-black hover:cursor-pointer h-full'> <FaAngleDown className='text-theme1-white w-full text-[14em]  hover:text-theme1-orange scale-y-[-1] '/> </div> </Link>
                    </div>}
                    {!isHovered && <div></div>}

                {isHovered &&
                    <div className=' col-span-1 row-span-1 '>
                        <ul className=' flex text-4xl gap-6 pl-4'>
                            <li title='Github' className='hover:text-theme1-orange hover:cursor-pointer rounded-full border-4 border-theme1-black p-2 border-opacity-25 hover:border-theme1-orange '><a href='https://github.com/Atharva-Karhale'><FaGithub className='text-theme1-gray' /></a></li>
                            <li title='LinkedIn' className='hover:text-theme1-orange hover:cursor-pointer rounded-full border-4 border-theme1-black p-2 border-opacity-25 hover:border-theme1-orange'><a href='https://www.linkedin.com/in/atharva-karhale/'><FaLinkedin className='text-theme1-gray' /></a></li>
                            <li title='Download CV in PDF format' className='hover:text-theme1-orange hover:cursor-pointer rounded-full border-4 border-opacity-25 border-theme1-black p-2 hover:border-theme1-orange'><a href='https://drive.google.com/file/d/19HE-QPlmDlpCDo_A_AO1pkd3wURmFLod/view?usp=sharing'><FaFilePdf className='text-theme1-gray' /></a></li>
                            <li title='Download CV in PDF format' className='hover:text-theme1-orange hover:cursor-pointer rounded-full border-4 border-opacity-25 border-theme1-black hover:border-theme1-orange p-2'><a href='https://www.behance.net/askmodink'><IoLogoBehance className='text-theme1-gray' /></a></li>
                        </ul>
                    </div> }                   
                </div>
            </div>

            <div className={`${isHovered ? 'bg-theme1-black': ''}` }>
            {!isHovered && <div></div>}

                {isHovered &&
                <form className=' caret-theme1-orange  flex flex-col my-5 mx-8'>
                    <label htmlFor='name' className=' font-abc text-white'>Name:</label>
                    <input
                    name='name'
                    id='name'
                    className=' caret rounded mt-1 font-def p-2 font-bold'
                    placeholder='Aap ka Subh Naam 🙏'
                    />

                    <label htmlFor='email' className=' font-abc text-white pt-5'>Email:</label>
                    <input
                    name='email'
                    id='email'
                    className='rounded mt-1 font-def p-2 font-bold'
                    placeholder='abc@gmail.com'
                    />

                    <label htmlFor='email' className=' font-abc text-white pt-5'>Message:</label>
                    <textarea
                    name='message'
                    id='meesage'
                    rows={6}
                    className='rounded mt-1 font-def p-2 font-bold'
                    placeholder='Say hi :)'
                    ></textarea>

                    <button className='mt-5 p-2 font-abc rounded font-bold text-white hover:text-slate-800 hover:underline bg-blue-600 hover:bg-blue-400 flex items-center justify-center'><TbSend /> _Send</button>

                </form>}
            </div>
        </div>
    )}