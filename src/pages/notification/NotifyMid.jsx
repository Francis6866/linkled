import React from 'react'

const NotifyMid = () => {
  return (
    <section className='space-y-4'>
        {/* btns */}
        <div className='shadow rounded-[10px] overflow-hidden p-4 font-[500] opacity-50 space-x-4'>
            <button className='border px-4 py-1 rounded-full hover:border-2 hover:bg-[#004C33] text-amber-50 bg-green-700'>All</button>
            <button className='border px-4 py-1 rounded-full hover:border-2 hover:bg-[#E8E8E8]'>Jobs</button>
            <button className='border px-4 py-1 rounded-full hover:border-2 hover:bg-[#E8E8E8]'>My posts</button>
            <button className='border px-4 py-1 rounded-full hover:border-2 hover:bg-[#E8E8E8]'>Mentions</button>
        </div>

        {/* feeds */}
        <div className='shadow rounded-[10px] overflow-hidden'>
            <section className='flex justify-between p-6 hover:bg-[#E8E8E8] border-b'>
                {/* content */}
                <div className='flex gap-2'>
                    <div className='w-[40px] h-[40px] rounded-full border'></div>
                    <div>
                        <p className='text-[0.9rem]'><span className='font-[500]'>Lorem ipsum dolor:</span> sit amet consectetur adipisicing elit. Quod perspiciatis itaque sunt iusto repellat. Doloremque sed nesciunt illo facere dignissimos.</p>
                        <p className='text-[0.8rem] opacity-50 mt-3'>3,456 reactions . 3,449 comments</p>
                    </div>
                </div>

                {/* more */}
                <div className='font-[500] opacity-50'>
                    <p>22h</p>
                    <p>...</p>
                </div>
            </section>{/* first */}

            <section className='flex justify-between p-4 hover:bg-[#E8E8E8] border-b'>
                {/* content */}
                <div className='flex gap-2'>
                    <div className='w-[40px] h-[40px] rounded-full border'></div>
                    <div>
                        <p className='text-[0.9rem]'><span className='font-[500]'>Lorem ipsum dolor:</span> sit amet consectetur adipisicing elit. Quod perspiciatis itaque sunt iusto repellat. Doloremque sed nesciunt illo facere dignissimos.</p>
                        <p className='text-[0.8rem] opacity-50 mt-3'>3,456 reactions . 3,449 comments</p>
                    </div>
                </div>

                {/* more */}
                <div className='font-[500] opacity-50'>
                    <p>22h</p>
                    <p>...</p>
                </div>
            </section>

            {/* btn */}
            <div className='p-8'>
                <button className='border p-0.5 w-full rounded-full text-[0.8rem] font-bold'>Show more details</button>
            </div>
        </div>
    </section>
  )
}

export default NotifyMid