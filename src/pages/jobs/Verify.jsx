import React from 'react'

const Verify = () => {
  return (
    <>
        {/* Verify */}
        <div className='shadow rounded-[10px] overflow-hidden flex justify-between items-center px-6 py-10 gap-4 relative'>
        <div>
            <h2 className='font-bold'>Verify to stand out in your job search</h2>
            <p className='opacity-50 text-[0.8rem]'>Verified members get 60% more profile views on average.</p>
            <section className="btns mt-4 space-x-4">
                <button className='border-2 font-bold text-amber-50 bg-[#0058E0] hover:bg-[#004182] py-2 px-4 rounded-full'>Verify now</button>
            </section>
        </div>
        {/* img div */}
        <div className='w-[100px] h-[100px] rounded-full border'></div>
        <p className='w-[30px] h-[30px] rounded-full hover:bg-[#E8E8E8] flex justify-center items-center absolute right-2 top-2 font-bold'>X</p>
      </div>
    </>
  )
}

export default Verify
