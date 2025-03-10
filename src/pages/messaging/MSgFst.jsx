import React from 'react'
import { FaSearch } from "react-icons/fa";


const MSgFst = () => {
  return (
    <>
      <div className='flex justify-between items-center shadow p-2'>
            <header className='flex gap-2 grow items-center'>
                <h2 className='font-[500]'>Messaging</h2>

                <div className='flex items-center bg-[#EDF3F8] p-2 rounded-[10px] gap-1'>
                    <FaSearch 
                         role='button'
                    />
                    <input 
                         type="text"
                         placeholder='Search' 
                         className='px-2 border-0 outline-0 grow-1 w-auto'
                    />
                </div>{/* input div */}
            </header>

            <div className="pen flex items-center gap-2">
                    <p className='w-[30px] h-[30px] rounded-full flex justify-center items-end relative bottom-1 hover:bg-[#E8E8E8] font-bold text-2xl'>...</p>
                    <p className='w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-[#E8E8E8]'>✒</p>
            </div>
        </div>{/* messaging */}
    </>
  )
}

export default MSgFst
