import React from 'react'
import ProfileCard from '../home/ProfileCard'

const JobsLeft = () => {
  return (
    <section className='space-y-4'>
        <ProfileCard />

       {/* preference */}
       <div className='shadow rounded-[10px] overflow-hidden py-6'>
        <ul  className='text-[1rem] font-bold mt-[-6px]'>
                    <li  className='mt-2 px-4 py-4 rounded hover:bg-[#EBEBEB]'>Preferences</li>
                    <li  className='mt-2 px-4 py-4 rounded hover:bg-[#EBEBEB]'>My jobs</li>
                    <li  className='mt-2 px-4 py-4 rounded hover:bg-[#EBEBEB] mb-4'>My Carrer Insight</li>
                    <hr className='w-[95%] mx-auto'/>
        </ul>
        <div>
            <p className='p-4 text-blue-500 hover:bg-[#EBEBEB] hover:underline font-[500] mt-4'>Post a free job</p>
        </div>
       </div>
    </section>
  )
}

export default JobsLeft