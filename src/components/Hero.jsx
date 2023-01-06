import React from 'react'
import styles from '../style'
import { robot} from '../assets'
import Discount from '../widget/Discount'
import GetStarted from './GetStarted'


function Hero() {
  return (
    <section id='home' className={`flex flex-col md:flex-row`}>
      <div className={`flex-2 ${styles.flexStart} flex-col xl:px-0 md:px-16 px-6`}>
        <Discount />
        <div className='flex flex-col md:flex-row'>
          <div>
          <h1 className='font-poppins text-[52px] font-semibold ss:text-[72px] leading-[75px] ss:leading-[100px] text-white'>The Next <br className='hidden sm:block' />
          <span className='text-gradient'>Generation</span><br className='hidden md:block' />{" "}
          Payment Method.
          </h1>
          <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`} >Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, annual fees.</p>
          </div>
          <div className='hidden sm:block'>
            <GetStarted />
          </div>
        </div>
      </div>
      <div className='flex-1 relative'>
        <img src={robot} alt="robot" className='h-[100%] w-[100%] z-5'/>
        <div className='absolute z-0 top-0 h-[35%] w-[40%] pink__gradient' />
        <div className='absolute z-1  h-[80%] w-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-0  h-[50%] w-[50%] right-20 bottom-20 blue__gradient' />
      </div>
      <div className={`${styles.flexCenter} block sm:hidden `}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero