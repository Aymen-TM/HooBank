import React, { useState } from 'react'
import {logo,menu,close} from '../assets/index'
import { navLinks } from '../constants'


function NavBar() {
    const [toggle, setToggle] = useState(false)
    

  return (
    <nav className='flex justify-between items-center w-full py-6  navbar'>
        <img src={logo} className='w-[124px] h-[32px] ' />
        <ul className='list-none sm:flex hidden justify-end items-center space-x-10 '>
            {
                navLinks.map((link,index)=>(
                    <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}><a href={`#${link.id}`}>{link.title}</a></li>
                ))
            }
        </ul>
        <div className='sm:hidden flex cursor-pointer' onClick={()=>setToggle((prev)=>!prev)}>
            <img src={toggle ? close : menu } className="object-contain h-[28px] w-[28px]" />
        </div>
        
        <div className={`${toggle ? 'flex' : 'hidden'} absolute top-20 right-0 min-w-[128px] bg-black-gradient mx-4 my-2 p-6 rounded-xl`}>
            <ul className='list-none sm:hidden flex flex-col justify-end items-center space-y-10 '>
                {
                    navLinks.map((link,index)=>(
                        <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}><a href={`#${link.id}`}>{link.title}</a></li>
                    ))
                }
            </ul>
        </div>

    </nav>
  )
}

export default NavBar