import React from 'react'

const Puzzle = () => {
  return (
    <>
          {/* Puzzle */}
          <div className="shadow rounded-[10px] overflow-hidden">
            <h3 className='font-bold p-2'>Today's puzzle games</h3>
            <div className="puzzle flex justify-between mt-2 px-4 py-2 rounded hover:bg-[#EBEBEB]">
                <section className='flex items-center gap-2'>
                    <img src="" alt="" className='w-[40px] h-[40px] rounded'/>
                    <div className="des">
                        <h4 className='font-[500] text-[1rem]'>Tango</h4>
                        <p className='text-[0.8rem] opacity-50'>Harmonize the grid</p>
                    </div>
                </section>
                <p className='font-bold text-2xl'>&gt;</p>
            </div>{/* first */}

            <div className="puzzle flex justify-between mt-2 px-4 py-2 rounded hover:bg-[#EBEBEB]">
                <section className='flex items-center gap-2'>
                    <img src="" alt="" className='w-[40px] h-[40px] rounded'/>
                    <div className="des">
                        <h4 className='font-[500] text-[1rem]'>Queens</h4>
                        <p className='text-[0.8rem] opacity-50'>Crown each region</p>
                    </div>
                </section>
                <p className='font-bold text-2xl'>&gt;</p>
            </div>{/* second */}

            <div className="puzzle flex justify-between mt-2 px-4 py-2 rounded hover:bg-[#EBEBEB]">
                <section className='flex items-center gap-2'>
                    <img src="" alt="" className='w-[40px] h-[40px] rounded'/>
                    <div className="des">
                        <h4 className='font-[500] text-[1rem]'>Pinpoint</h4>
                        <p className='text-[0.8rem] opacity-50'>Guess the category</p>
                    </div>
                </section>
                <p className='font-bold text-2xl'>&gt;</p>
            </div>{/* third */}

            <div className="puzzle flex justify-between mt-2 px-4 py-2 rounded hover:bg-[#EBEBEB]">
                <section className='flex items-center gap-2'>
                    <img src="" alt="" className='w-[40px] h-[40px] rounded'/>
                    <div className="des">
                        <h4 className='font-[500] text-[1rem]'>Crossclimb</h4>
                        <p className='text-[0.8rem] opacity-50'>Unluck a trivia ladder</p>
                    </div>
                </section>
                <p className='font-bold text-2xl'>&gt;</p>
            </div>{/* fourth */}
        </div>
    </>
  )
}

export default Puzzle