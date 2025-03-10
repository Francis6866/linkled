import React from 'react'
import LeftSide from '../pages/home/LeftSide'
import MiddleSide from '../pages/home/MiddleSide'
import RightSide from '../pages/home/RightSide'

const HomeLayout2 = () => {
  return (
<div className='md:w-[1120px] mx-auto px-3 py-8'>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8 justify-center'>
        <div className='space-y-4 w-full md:w-[20%]'>
          <LeftSide />
        </div>
        
        <div className='col-start-2 col-span-2 space-y-4 w-full md:w-[50%]'>
          <MiddleSide />
        </div>
        <div className='space-y-4 w-full md:w-[25%]'>
          <RightSide />
        </div>
      </div>
    </div>    
  )
}

export default HomeLayout2
