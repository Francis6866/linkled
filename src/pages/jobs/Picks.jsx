import React from 'react'

const Picks = () => {
  return (
    <>
         {/* Picks for you */}
      <div className='shadow rounded-[10px] overflow-hidden space-y-2'>
      <header className='p-4'>
            <h2 className='font-[500] text-[1.2rem]'>Job picks for you</h2>
            <p className='text-[0.8rem] opacity-50'>Based on your profile, preferences, and activity like applies, searches, and saves</p>
        </header>

        {/* jobs */}
        <div className='flex justify-between px-4'>
            <section className='flex items-center gap-2'>
                <div className="logo w-[50px] h-[50px] border"></div>
                <div>
                    <h4 className='text-[#0A66C2] font-bold'>Junior Data Engineer</h4>
                    <p className='text-[0.8rem]'>Canonical.Lagos, Lagos State, Nigeria (Remote)</p>
                    <p className='text-[0.8rem] opacity-50 mt-2'>1 week ago</p>
                </div>
            </section>
            <p className='w-[30px] h-[30px] rounded-full hover:bg-[#E8E8E8] flex justify-center items-center font-bold'>X</p>
        </div>

        {/* show all */}
        <div  className='shadow rounded-b-[10px] overflow-hidden'>
            <p className='font-[500] opacity-50 text-center py-4 border-t hover:bg-[#E8E8E8]'>Show All &gt; </p>
        </div>
      </div>
    </>
  )
}

export default Picks