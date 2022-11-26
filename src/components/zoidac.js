import React from "react";
import { SocialIcon } from "react-social-icons"


const Zoidac = () => {
    return (
        <div>
          <div className='w-36 cursor-pointer mb-5'>
            <h1 className='px-2 text-xl font-extrabold tracking-wide text-white' >ZOI<span className='text-[#CB22A6]'>DAC</span></h1>
          </div>
          <p className='text-white mb-2'>Build anything you can dream of without writing code or spending high budget hiring a developer.</p>
          <div className='flex mb-10 flex-row items-center w-36 justify-around'>
            <SocialIcon
                style={{width:"30px",height:"30px"}}
                url='https://twitter.com/vancebillions' 
                fgColor='white' 
                bgColor='#CB22A6' 
            />
            <SocialIcon
                style={{width:"30px",height:"30px"}}
                url='https://instagram.com/VansRouges/'
                fgColor='white' 
                bgColor='#CB22A6' 
            />
            <SocialIcon
                style={{width:"30px",height:"30px"}}
                className='cursor-pointer'
                network='email'
                fgColor='white'
                bgColor='#CB22A6'
            />
            <SocialIcon
                style={{width:"30px",height:"30px"}}
                url='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFIwFAckM7ACAAAAYQWFiGgcUVk0-wCKhjoGeKt7V3Hf0p7wR13cT-RqAsEvNJNBngbNbeTHAuAycfgJjsf5CaikALrqQVrnRODlfm9VB_1tfSuv7ij1qLX54xVedzCc4gaJUA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fevans-agina-a3b69b219%2F'
                fgColor='white' 
                bgColor='#CB22A6' 
            />
          </div>
          <h5 className='text-white text-xs'>Copyright 2021. Nocode Academy</h5>
        </div>
    )}

export default Zoidac;