import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'

function CTA() {
  return (
    <section className='flex sm:flex-row flex-col  py-[72px] px-[100px] bg-black-gradient-2 box-shadow rounded-[20px]'>
      <div className='flex flex-col flex-1'>
        <h2 className={`${styles.heading2} max-w-[670px] `}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[455px] `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        <Button />
      </div>
    </section>
  )
}

export default CTA