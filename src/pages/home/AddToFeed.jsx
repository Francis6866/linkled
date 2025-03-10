import React from 'react'

const AddToFeed = () => {
  return (
    <>
        {/* Add to feed */}
        <div className="shadow rounded-[10px] overflow-hidden p-2 space-y-4">
            <header className='flex justify-between px-4 py-2'>
                <h3 className='font-bold'>Add to your feed</h3>
                <span>ℹ</span>
            </header>

            <div className='flex gap-2'>
                <img src="" alt="" className='w-[40px] h-[40px] rounded-full border'/>
                <div className='space-y-1'>
                    <h4 className='font-bold'>LinkedIn</h4>
                    <p className='text-[0.8rem] opacity-50 mt-[-10px]'>Company. Software Development</p>
                    <button className='px-6 py-2 border rounded-full font-bold hover:border-2 hover:bg-[#F3F3F3]'>+ Follow</button>
                </div>
            </div>{/* first */}

            <div className='flex gap-2'>
                <img src="" alt="" className='w-[40px] h-[40px] rounded-full border'/>
                <div className='space-y-1'>
                    <h4 className='font-bold'>alx_africa</h4>
                    <p className='text-[0.8rem] opacity-50 mt-[-10px]'>Company. E-Learning Providers</p>
                    <button className='px-6 py-2 border rounded-full font-bold hover:border-2 hover:bg-[#F3F3F3]'>+ Follow</button>
                </div>
            </div>{/* second */}

            <div className='flex gap-2'>
                <img src="" alt="" className='w-[40px] h-[40px] rounded-full border'/>
                <div className='space-y-1'>
                    <h4 className='font-bold'>Google</h4>
                    <p className='text-[0.8rem] opacity-50 mt-[-10px]'>Company. Software Development</p>
                    <button className='px-6 py-2 border rounded-full font-bold hover:border-2 hover:bg-[#F3F3F3]'>+ Follow</button>
                </div>
            </div>{/* third */}

        <a href="#" className='text-[1rem] font-bold opacity-80 hover:bg-[#EBEBEB] p-2 rounded'>View all recomendations ➡</a>
        </div>
    </>
  )
}

export default AddToFeed
