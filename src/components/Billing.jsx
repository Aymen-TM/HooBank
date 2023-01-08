import React from 'react'
import { bill,apple,google } from '../assets/index'
import styles, { layout } from '../style'

function Billing() {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt='bill' className='h-[100%] w-[100%] z-5 ' />
        <div className='absolute z-0 top-0 -left-1/2 h-[50%] w-[50%] rounded-full white__gradient' />
        <div className='absolute z-0 bottom-0 -left-1/2 h-[50%] w-[50%] rounded-full pink__gradient' />
      </div>
      <div className={`flex flex-col flex-1 justify-center ml-10  space-y-6`}>
        <h3 className='font-poppins font-semibold text-white sm:text-[48px] text-[38px] sm:leading-[77px] leading-[67px] max-w-[470px]'>
        Easily control your billing & invoicing.
        </h3>
        <p className={`${styles.paragraph} max-w-[470px] `} >Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex space-x-4 flex-wrap'>
          <img src={apple} alt="apple" className='cursor-pointer' />
          <img src={google} alt="google" className='cursor-pointer'  />
        </div>
      </div>
    </section>
  )
}

export default Billing