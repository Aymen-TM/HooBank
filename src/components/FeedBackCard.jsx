import React from 'react'
import { quotes } from '../assets'
import styles from '../style'

function FeedBackCard({id,content,name,title,img}) {
  return (
    <div className='flex flex-col justify-between feedback-card py-[60px] px-[40px] rounded-[20px] max-w-[370px]'>
      <img src={quotes} alt="quotes" className='w-[43px] h-[27px] object-contain' />
      <p className={`${styles.paragraph} max-w-[290px] my-10`}>{content}</p>
      <div className='flex items-center  '>
        <img src={img} alt="img" className='w-[48px] h-[48px] rounded-full'/>
        <div className='flex flex-col ml-4'>
          <h3 className='text-white font-semibold font-poppins md:leading-[32px] leading-[22px]'>{name}</h3>
          <p className={`${styles.paragraph}`}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedBackCard