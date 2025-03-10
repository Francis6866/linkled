import React from 'react'
import Hiring from './Hiring'
import Feeds from './feed/Feeds'
import FormMedia from './FormMedia'

const MiddleSide = () => {
  return (
    <section className='space-y-4'>
        <Hiring />

      <FormMedia />

        {/* divide */}
        <div className='flex my-2 items-center gap-2'>
            <div className='border-b-2 border-slate-400 w-[80%] h-0.5'></div>
            <p>Sort by: <span className='font-[500]'>Top</span></p>
        </div>

       <Feeds />
      
    </section>
  )
}

export default MiddleSide
