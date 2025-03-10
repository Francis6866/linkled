import React from 'react'

const LookingJob = () => {
  return (
    <>
         <div className='shadow rounded-[10px] overflow-hidden flex justify-between items-center px-6 py-10 gap-4 relative'>
        <div>
            <h2 className='font-bold'>Francis, are you looking for a new job?</h2>
            <p className='opacity-50 text-[0.8rem]'>Add your preferences to find relevant jobs and get notified about new open roles.</p>
            <section className="btns mt-4 space-x-4">
                <button className='border-2 font-bold text-amber-50 bg-[#0058E0] hover:bg-[#004182] py-2 px-4 rounded-full'>Actively looking</button>
                <button className='border-2 font-bold text-blue-500 py-2 px-4 rounded-full hover:bg-[#E8E8E8]'>Casually browsing</button>
            </section>
        </div>
        {/* img div */}
        <div className='w-[100px] h-[100px] border'></div>
        <p className='w-[30px] h-[30px] rounded-full hover:bg-[#E8E8E8] flex justify-center items-center absolute right-2 top-2 font-bold'>X</p>
      </div>
    </>
  )
}

export default LookingJob