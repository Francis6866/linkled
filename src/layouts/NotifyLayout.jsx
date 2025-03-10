import React from 'react'
import NotifyLeft from '../pages/notification/NotifyLeft'
import NotifyMid from '../pages/notification/NotifyMid'
import NotifyRight from '../pages/notification/NotifyRight'

const NotifyLayout = () => {
  return (
    <div className='md:w-[1120px] mx-auto px-3 py-8'>
    <div className='flex flex-col md:flex-row gap-8 justify-center'>
      <div className='space-y-4 w-full md:w-[17.5%]'>
        <NotifyLeft />
      </div>
      
      <div className='col-start-2 col-span-2 space-y-4 w-full md:w-[60%]'>
        <NotifyMid />
      </div>
      <div className='space-y-4 w-full md:w-[17.5%]'>
        <NotifyRight />
      </div>
    </div>
  </div>    
  )
}

export default NotifyLayout