import React from 'react'
import { features } from '../constants'
import styles,{layout} from '../style'
import Button from '../components/Button'


const FeatureCard = ({title,content,icon,index})=>(
  <div className={`flex space-x-4 items-center py-6 px-3 feature-card rounded-[18px] cursor-pointer ${index != features.length-1 ? 'mb-6' : 'mb-0'} `}>
    <div className={`h-[64px] w-[64px] rounded-full  ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon " className='w-[50%] h-[50%] object-contain ' />
    </div>
    <div>
      <h4 className='font-poppins font-semibold capitalize text-white text-[18px] sm:leading-[23px] leading-[28px]'>{title}</h4>
      <p className={`font-poppins text-white sm:text-[16px] text-[11px] max-w-[370px] leading-[24px]`}>{content}</p>
    </div>
  </div>
)

function Business() {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className='font-poppins  font-semibold sm:text-[47px] text-[38px] text-white sm:leading-[77px] leading-[60px]'>You do the business, we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col `}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} content={feature.content} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business