import React from 'react'

const MsgRghtGrd = () => {
  return (
    <>
        {/* right grid */}
        <div className='col-span-2'>
                <h2 className='p-2 shadow font-[500]'>New message</h2>
                <div className='p-2 shadow font-[500]'>
                    <input type="text" placeholder='Type a name or multiple names' className='px-2 py-0.5 w-full rounded-full'/>
                </div>

                <div className='w-full h-[150px]'></div>

                <div className="textarea p-2 shadow font-[500] flex gap-6">
                    <textarea name="" id="" cols="30" rows="5" className='border-0 outline-0 bg-[#E8E8E8] w-full rounded-[15px] p-2' placeholder='Write a message...'></textarea>
                    <p>🔼</p>
                </div>

                <div className="icons p-2 shadow flex justify-between pb-10">
                    <div className="first flex gap-2">
                        <i className='w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-[#E8E8E8]'>📷</i>
                        <i className='w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-[#E8E8E8]'>📎</i>
                        <i className='w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-[#E8E8E8]'>GIF</i>
                        <i className='w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-[#E8E8E8]'>🙂</i>
                    </div>
                    <div className="pen flex items-center gap-2">
                        <button className='px-2 p-0.5 rounded-full flex justify-center items-center bg-[#E8E8E8] opacity-50'>send</button>
                        <p className='w-[30px] h-[30px] rounded-full flex justify-center items-end relative bottom-1 hover:bg-[#E8E8E8] font-bold text-2xl'>...</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MsgRghtGrd