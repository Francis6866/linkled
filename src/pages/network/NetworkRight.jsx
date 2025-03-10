import React, { useState } from 'react'
import NetworkCards from './NetworkCards'

const NetworkRight = () => {
  const [devs, setDevs] = useState(['Francis James', 'Hannah Nwokocha', 'Nelson Odu', 'Richard Sunday', 'Blessing Effiong', 'Winner Iboloke', 'Charlse Francis', 'Rejoice Micheal'])
  

    const handleDelete = (id) => {
      const filDev = devs.filter((_, index) => index !== id)
      setDevs(filDev)
    }

  return (
    <section className='space-y-4'>
        {/* Catch up */}
      <div className="shadow rounded-[10px] overflow-hidden flex gap-6 px-8 font-[500]">
        <a className='p-4 hover:bg-[#F3F3F3] active:border-b'>Grow</a>
        <a className='p-4 hover:bg-[#F3F3F3] active:border-b'>Catch up</a>
      </div>

      {/* Manage */}
      <div className="shadow rounded-[10px] overflow-hidden flex gap-6 px-3 py-2 justify-between items-center">
        <p className='text-[1rem]'>No pending invitations</p>
        <p className='p-1.5 rounded hover:bg-[#F3F3F3] font-bold'>Manage</p>
      </div>

      {/* in touch */}
      <div className='shadow rounded-[10px] overflow-hidden p-2'>
        <div className='flex justify-between items-center'>
            <p className='text-[1rem]'>Stay in touch through daily games</p>
            <div className="btns flex gap-4">
                <button className='w-[40px] h-[40px] rounded-full border-2 font-bold text-2xl text-center bg-[#E8E8E8] border-[#E8E8E8] flex justify-center'>&lt;</button>
                <button className='w-[40px] h-[40px] rounded-full border-2 font-bold text-2xl text-center hover:bg-[#E8E8E8] flex justify-center'>&gt;</button>
            </div>
        </div>

             {/* puzzle */}
         <div className="flex justify-between">
             <section className='flex items-center gap-2 border-r p-2'>
                        <img src="" alt="" className='w-[40px] h-[40px] rounded'/>
                        <div className="des">
                            <h4 className='font-[500] text-[1rem]'>Queens <span className='font-normal opacity-50 text-[0.8rem]'>#307</span></h4>
                            <p className='text-[0.8rem] opacity-50'>Monday, Mar 3</p>
                        </div>
                        <button className='border border-blue-500 px-4 py-1 rounded-2xl font-bold hover:bg-[#EBF4FD] hover:border-2 text-[0.8rem]'>solve</button>
            </section>{/* first */}

             <section className='flex items-center gap-2 border-r p-2'>
                        <img src="" alt="" className='w-[40px] h-[40px] rounded'/>
                        <div className="des">
                            <h4 className='font-[500] text-[1rem]'>Tango <span className='font-normal opacity-50 text-[0.8rem]'>#147</span></h4>
                            <p className='text-[0.8rem] opacity-50'>Monday, Mar 3</p>
                        </div>
                        <button className='border border-blue-500 px-4 py-1 rounded-2xl font-bold hover:bg-[#EBF4FD] hover:border-2 text-[0.8rem]'>solve</button>
            </section>{/* second */}

             <section className='flex items-center gap-2 border-r p-2'>
                        <img src="" alt="" className='w-[40px] h-[40px] rounded'/>
                        <div className="des">
                            <h4 className='font-[500] text-[1rem]'>Pinpoint <span className='font-normal opacity-50 text-[0.8rem]'>#307</span></h4>
                            <p className='text-[0.8rem] opacity-50'>Monday, Mar 3</p>
                        </div>
                        <button className='border border-blue-500 px-4 py-1 rounded-2xl font-bold hover:bg-[#EBF4FD] hover:border-2 text-[0.8rem]'>solve</button>
            </section>{/* Third */}
         </div>
      </div> {/* end of in touch */}

       {/* people you may know */}
       <div  className='shadow rounded-[10px] overflow-hidden p-2'>
        <div className="flex gap-6 px-3 py-2 justify-between items-center">
            <p className='text-[1rem]'>Software Engineers you may know</p>
            <p className='p-1.5 rounded hover:bg-[#F3F3F3] font-bold'>Show all</p>
        </div>{/* show all */}


        {/* card grids */}
        <div className='grid gap-4 md:grid-cols-4 grid-cols-2'>
            {
                devs && devs.length > 0 ? devs.map((person, index) => <NetworkCards 
                key={person} 
                person={person} 
                index={index} 
                handleDelete={handleDelete}
                />) :
                (<p className='col-span-2 md:col-span-4 text-center text-blue-500 p-4'>You have no Suggestions</p>)
            }
        </div>
       </div>
    </section>
  )
}

export default NetworkRight
