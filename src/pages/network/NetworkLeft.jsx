import React from 'react'

const NetworkLeft = () => {
  return (
    <section className='space-y-4'>
         <div className="shadow rounded-[10px] overflow-hidden">
            <header className='font-bold text-[1rem] px-4  py-6 border-b-[0.1px]'>
                <h2>Manage my network</h2>
            </header>
            <ul  className='text-[1rem] opacity-50 font-bold mt-[-6px]'>
                <li  className='mt-2 px-4 py-4 rounded hover:bg-[#EBEBEB]'>Connections</li>
                <li  className='mt-2 px-4 py-4 rounded hover:bg-[#EBEBEB]'>Following & followers</li>
                <li  className='mt-2 px-4 py-4 rounded hover:bg-[#EBEBEB]'>Groups</li>
                <li  className='mt-2 px-4 py-4 rounded hover:bg-[#EBEBEB]'>Events</li>
                <li  className='mt-2 px-4 py-4 rounded hover:bg-[#EBEBEB] flex justify-between'>Pages <span>1</span></li>
                <li  className='mt-2 px-4 py-4 rounded hover:bg-[#EBEBEB]'>Newsletter</li>
            </ul>
       </div>

       {/* image holder */}
       <div className="shadow rounded-[10px] overflow-hidden h-[400px]">
        <img src="/src/assets/images/linkeinPass.jpg" alt="" className='w-full object-cover'/>
       </div>
    </section>
  )
}

export default NetworkLeft