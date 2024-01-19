import React, { useState } from 'react';
import School1 from '../Assets/1x/SVG/School 1.svg'
import { FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import School2 from '../Assets/1x/SVG/College 2.svg'
import School3 from '../Assets/1x/SVG/College 3.svg'
import College from '../Assets/1x/SVG/college.svg'
import Job from '../Assets/1x/SVG/Job.svg'
import { GiGraduateCap } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";

export function Shape ({ text, svg, icon }) {
    const [isHovered, setHovered] = useState(false);

    const mouseEntered = () => {
        setHovered(true);
    };

    const mouseLeft = () => {
        setHovered(false);
    };

    return (
        <div className={` flex items-center justify-center size-14 bg-theme1-gray rounded-full ease-in-out duration-300 ${isHovered ? ' bg-theme1-black size-24' : ''}`}  onMouseEnter={mouseEntered}
    onMouseLeave={mouseLeft}>
        <div className=' absolute text-white text-xl mx-[0.3em] my-[0.25em] z-10'>{icon}</div>

        {isHovered && (
            <div className=' flex flex-col items-center w-full '>
                <img src={svg} className=' my-9 ' />
                <div className=' w-full font-def my-[6em] text-center text-sm font-bold text-theme1-gray'>{text}</div>
            </div>
            
            )}
            
        </div>
    )
    
}

const DotPattern = () => (


  <div className=' flex items-center'>

    <Shape text='Lions International Academy' svg={School1} icon={<FaSchool />}/>
    <div className=' w-28 h-[2px] bg-black mx-2'></div>

    <Shape text='Advait Vidyniketan' svg={School2} icon={<BiSolidSchool />}/>
    <div className=' w-28 h-[2px] bg-black mx-2'></div>

    <Shape text='IITRAM Ahmedabad' svg={School3} icon={<GiGraduateCap className='size-6' />}/>
    <div className=' w-28 h-[2px] bg-black mx-2'></div>
    
    <Shape text='Self Learning & Pw Skills' svg={College} icon={<FaLaptopCode className=' size-6' />}/>
    <div className=' w-28 h-[2px] bg-black mx-2'></div>

    <Shape text='{INSERT YOUR COMPANY NAME}' svg={Job} icon={<FaMoneyCheckAlt className=' size-6' />}/>

  </div>
);

export default DotPattern;
