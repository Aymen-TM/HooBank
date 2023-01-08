import React from 'react'
import styles,{layout} from '../style'
import { card } from '../assets'
import Button from './Button'

function CardDeal() {
  return (
    <section className={`${layout.section}`} >
      <div className={`${layout.sectionInfo} space-y-5`}>
          <h2 className={`${styles.heading2} max-w-[570px]`}>
          Find a better card deal in few easy steps.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px]`} >Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt='card' className='h-[100%] w-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal