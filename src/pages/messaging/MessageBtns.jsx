import React from 'react'

const MessageBtns = () => {
  return (
    <>
      <div className='flex p-2 gap-4 shadow items-center'>
            <div className='border-r pr-2'>
                <button className='border-2 font-bold  py-2 px-4 rounded-full bg-[#004C33] text-amber-50'>Focussed</button>
            </div>
            <div className='md:hidden'>
                <button className='border-2 font-bold  py-2 px-4 rounded-full bg-[#004C33] text-amber-50'>All filters</button>
            </div>
            <div className='space-x-4 hidden md:block'>
                <button className='border-2 font-bold hover:bg-[#E8E8E8] py-2 px-4 rounded-full'>Unread</button>
                <button className='border-2 font-bold hover:bg-[#E8E8E8] py-2 px-4 rounded-full'>My Connections</button>
                <button className='border-2 font-bold hover:bg-[#E8E8E8] py-2 px-4 rounded-full'>InMail</button>
                <button className='border-2 font-bold hover:bg-[#E8E8E8] py-2 px-4 rounded-full'>Starred</button>
            </div>
        </div>{/* buttons */}
    </>
  )
}

export default MessageBtns
