import React from 'react'
import styles from '../style'
import { stats } from '../constants' 

function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}>
    {
      stats.map((stat)=>(
      <div key={stat.id} className='flex flex-wrap items-center space-x-[18px] m-5'>
        <h2 className='font-semibold font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white' >{stat.value}</h2>
        <h3 className='font-poppins xs:text-[20px] text-[15px] text-gradient xs:leading-[27px] leading-[18px] uppercase'>{stat.title}</h3>
      </div>
      ))
    }
    </section>
  )
}




export default Stats