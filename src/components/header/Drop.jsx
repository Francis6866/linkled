import React from 'react'

const Drop = ({ text }) => {
  return (
    <ul className='absolute top-full w-[100px] -left-3.5 bg-white shadow z-50 mt-1 rounded-[10px] overflow-hidden'>
      {
        text && text.map(t => {
          return <li className='px-4 py-0.5 text-center hover:bg-[#E8E8E8]' key={t}>{t}</li>
        })
      }
        
        {/* <li className='px-2 py-0.5 border-b-[0.5px] hover:bg-[#E8E8E8]'>Profile</li>
        <li className='px-2 py-0.5 border-b-[0.5px] hover:bg-[#E8E8E8]'>Profile</li>
        <li className='px-2 py-0.5 hover:bg-[#E8E8E8]'>Profile</li> */}
    </ul>
  )
}

export default Drop