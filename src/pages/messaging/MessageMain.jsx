import React from 'react'
import MessageBtns from './MessageBtns';
import MsgRghtGrd from './MsgRghtGrd';
import MSgFst from './MSgFst';

const MessageMain = () => {
  return (
    <section className='shadow rounded-[10px] overflow-hidden'>
        <MSgFst />

        <MessageBtns />

        <div className='grid grid-cols-3'>
            <div className='shadow p-5 flex flex-col justify-center items-center gap-2'>
                <div className="img w-[150px] h-[150px] border"></div>
                <button className='border px-3 py-0.5 font-[500] text-[0.8rem] rounded-full hover:border-2 hover:bg-[#E8E8E8]'>Send a message</button>
            </div>

            <MsgRghtGrd />
        </div>
    </section>
  )
}

export default MessageMain