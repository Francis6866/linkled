import React from 'react'
import ProfileCard from './ProfileCard'

const LeftSide = () => {
  return (
    <section className='space-y-4'> 
       <ProfileCard />

       {/* connctions */}
       <div className="shadow rounded-[10px] overflow-hidden px-6 py-4">
        <div className='text-[0.75rem] font-bold'>
            <a href="#" className='hover:underline'>Connections</a> <br />
            <a href="#" className='hover:underline'>Grow Your Network</a>
        </div>
       </div>

       {/* premiun */}
       <div className="shadow rounded-[10px] overflow-hidden px-6 py-4">
        <div className='text-[0.75rem]'> 
            <a href="#" className='hover:underline'>Uncover decision makers on Sale</a> <br />
            <a href="#" className='hover:underline'>Nav</a> <br />
            <a href="#" className='hover:underline font-bold'>Try now for NGN0</a>
        </div>
       </div>


       {/* others */}
       <div className="shadow rounded-[10px] overflow-hidden px-6 py-4">
        <ul  className='text-[0.75rem] font-bold'>
            <li  className='hover:underline'>Saved items</li>
            <li  className='hover:underline'>Groups</li>
            <li  className='hover:underline'>Newsletters</li>
            <li  className='hover:underline'>Event</li>
        </ul>
       </div>
    
    </section>
  )
}

export default LeftSide