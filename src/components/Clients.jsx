import React from 'react'
import { airbnb,binance,dropbox,coinbase } from '../assets'
import {clients} from '../constants/index'

function Clients() {
  return (
    <section className='flex justify-around items-center  flex-wrap '>
      {
        clients.map(({id,logo})=>(
          <div className='sm:min-w-[200px] min-w-[150px] group'>
            <img key={id} src={logo} alt={logo} className=' sm:w-[192px] w-[120px] object-contain group-hover: ' />
          </div>
        ))

      }
    </section>
  )
}

export default Clients