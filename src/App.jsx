import React from 'react'
import NavBar from './components/NavBar'
import { Billing, Business, Hero, Stats } from './components'
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
    </div>
  )
}

export default App