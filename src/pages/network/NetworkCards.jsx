import React from 'react'

const NetworkCards = ({person, index, handleDelete}) => {
  return (
    <div className="card rounded-2xl overflow-hidden shadow  relative">
         <header className='p-8 bg-[#E8E8E8]'></header>
         <p className="close w-[25px] h-[25px] rounded-full bg-black text-amber-50 text-center flex justify-center items-center absolute right-2 top-2 cursor-pointer" onClick={() => handleDelete(index)}>X</p>
         <div className="profile-img w-[80px] h-[80px] border rounded-full absolute top-[9%] left-[25%]"></div>
        <div className="content mt-14 flex flex-col justify-center items-center px-4 py-4">
                <h3 className='font-bold'>{person}</h3>
                <p className='profile text-[0.75rem] opacity-50'>Lorem ipsum dolor sit amet, consect adipisicing elit...</p>
                <p className='opacity-50'>3MTT Nigeria</p>
                
                <button className='border border-blue-500 px-4 py-1 rounded-2xl font-bold hover:bg-[#EBF4FD] hover:border-2 text-[0.8rem] mt-4 w-full text-blue-500'>Connect</button>
        </div>
    </div>
  )
}

export default NetworkCards
