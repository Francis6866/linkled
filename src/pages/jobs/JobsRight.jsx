import React from 'react'
import LookingJob from './LookingJob'
import Picks from './Picks'
import Verify from './Verify'

const JobsRight = () => {
  return (
    <section className='space-y-4'>
     <LookingJob />

     <Picks />

     <Verify />

      <button className='border p-1 w-full rounded-full text-[0.8rem] font-bold'>Show more details</button>
    </section>
  )
}

export default JobsRight
