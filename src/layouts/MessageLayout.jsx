import React from 'react'
import MessageMain from '../pages/messaging/MessageMain'
import MessageRight from '../pages/messaging/MessageRight'

const MessageLayout = () => {
  return (
    <div className='md:w-[1120px] mx-auto px-3 py-8'>
    <div className='flex flex-col md:flex-row gap-8 justify-center'>
      <div className='w-full md:w-[75%]'>
        <MessageMain />
      </div>
      
      <div className='w-full md:w-[20%]'>
        <MessageRight />
      </div>
    </div>
  </div>
  )
}

export default MessageLayout