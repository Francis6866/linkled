import React from 'react'
import ProfileCard from '../home/ProfileCard'

const NotifyLeft = () => {
  return (
    <section className='space-y-4'>
       <ProfileCard />

       {/* Manage */}
       <div className="shadow rounded-[10px] overflow-hidden p-4">
        <h2 className='font-bold'>Manage your notifications</h2>
        <a href="" className='text-[0.8rem] font-bold text-blue-500 hover:underline'>View settings</a>
       </div>
    </section>
  )
}

export default NotifyLeft
