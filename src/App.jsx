import React from 'react'
import NavBar from './components/NavBar'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Stats, Testimonials } from './components'
import styles from './style'


function App() {
  return (
    <div className='bg-primary w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div  className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`${styles.paddingY}`}>
          <Hero />
      </div>
      <div>
        <Stats />
      </div>
      <div className={`${styles.paddingX}`}>
          <Business />
      </div>
      <div className={`${styles.paddingX}`}>
          <Billing />
      </div>
      <div className={`${styles.paddingX}`}>
          <CardDeal />
      </div>
      <div className={`${styles.paddingX}`}>
          <Testimonials />
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <Clients />
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <CTA />
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <Footer />
      </div>
    </div>
  )
}

export default App