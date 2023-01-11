import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

function Footer() {
  return (
    <footer className={`flex-col `}>
      <div className={`${styles.flexStart} sm:flex-row mb-8 w-full flex-col`}>
        <div className='flex flex-1 flex-col justify-start mr-10 mb-5'>
          <img src={logo} alt="logo" className='w-[270px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} max-w-[312px] mt-4`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex flex-col sm:flex-row  justify-between sm:flex-[1.5]'>
          {
            footerLinks.map(({title,links})=>(
              <div key={title} className='mb-5 sm:mb-0'>
              <h4 className={`sm:text-[18px] text-[23px] text-white font-medium leading-[27px]`}>{title}</h4>
              <ul className='list-none mt-6 '>
                {links.map(({ name, link },index) => (
                  <li key={name} className={`${index === 0 ?'mt-0':'mt-3'} hover:text-secondary cursor-pointer leading-[24px] text-[16px] text-dimWhite`}><a href={link}>{name}</a></li>
                ))}
              </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className={`${styles.flexBetween} w-full md:flex-row flex-col border-t-[2px] pt-6 border-t-[#3F3E45]`}>
          <h4 className={`${styles.paragraph} `}>
          Copyright 2021 HooBank. All Rights Reserved.
          </h4>
          <div className='flex space-x-4'>
            {socialMedia.map(({id,icon,link})=>(
              <a key={id} href={link}><img  src={icon} className='h-[21px] w-[21px] object-contain'  /></a>
            ))}
          </div>
      </div>
    </footer>
  )
}

export default Footer