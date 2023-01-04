import React from 'react'
import { discount } from '../assets'
import styles from '../style'

function Discount() {
  return (
    <div className='flex items-center bg-discount-gradient py-[4px] px-[10px] rounded-[10px]'>
        <img src={discount} alt='discount' />
        <p className={`${styles.paragraph} ml-2`}><span className='text-white'>20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH </span> ACCOUNT</p>
    </div>
  )
}

export default Discount