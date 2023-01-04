import React from 'react'
import NavBar from './components/NavBar'
import { Hero } from './components'
import styles from './style'

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div  className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`${styles.flexCenter} ${styles.paddingY}`}>
          <Hero />
      </div>
    </div>
  )
}

export default App