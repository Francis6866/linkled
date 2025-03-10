import React from 'react'
import JobsLeft from '../pages/jobs/JobsLeft'
import JobsRight from '../pages/jobs/JobsRight'

const JobsLayout = () => {
  return (
    <div className='md:w-[1120px] mx-auto px-3 py-8'>
    <div className='flex flex-col md:flex-row gap-8 justify-center'>
      <div className='w-full md:w-[25%]'>
        <JobsLeft />
      </div>
      
      <div className='w-full md:w-[70%]'>
        <JobsRight />
      </div>
    </div>
  </div>
  )
}

export default JobsLayout