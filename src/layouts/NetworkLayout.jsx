import React from 'react'
import NetworkLeft from '../pages/network/NetworkLeft'
import NetworkRight from '../pages/network/NetworkRight'

const NetworkLayout = () => {
  return (
    <div className='md:w-[1120px] mx-auto px-3 py-8'>
    <div className='flex flex-col md:flex-row gap-8 justify-center'>
      <div className='w-full md:w-[25%]'>
        <NetworkLeft />
      </div>
      
      <div className='w-full md:w-[70%]'>
        <NetworkRight />
      </div>
    </div>
  </div> 
  )
}

export default NetworkLayout