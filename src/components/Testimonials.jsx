import React from 'react'
import { feedback } from '../constants'
import styles,{layout} from '../style'
import FeedBackCard from './FeedBackCard'
function Testimonials() {
  return (
    <section className={`flex flex-col relative`}>
      <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

      <div className='flex w-full flex-col sm:flex-row sm:mb-16 mb-6'>
        <div className='flex flex-1 items-center'>
          <h2 className={`${styles.heading2} max-w-[470px]`}>What people are saying about us</h2>
        </div>
        <div className='flex flex-1 items-center'>
          <p className={`${styles.paragraph} max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className='flex flex-wrap md:space-x-20 sm:space-x-5 space-x-0 '>
       {
        feedback.map(({id,content,name,title,img})=>(
          <FeedBackCard key={id} content={content} name={name} title={title} img={img}  />
        ))
        
       }
      </div>
    </section>
  )
}

export default Testimonials