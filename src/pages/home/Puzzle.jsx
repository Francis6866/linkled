import React from 'react'
import games from "../../data/games.json"

const Puzzle = () => {
  return (
    <>
          {/* Puzzle */}
          <div className="shadow rounded-[10px] overflow-hidden">
            <h3 className='font-bold p-2'>Today's puzzle games</h3>
            {
                games && games.map(game => {
                    return (
                        <div className="puzzle flex justify-between mt-2 px-4 py-2 rounded hover:bg-[#EBEBEB]">
                            <section className='flex items-center gap-2'>
                                <img src={game.imgUrl} alt="" className='w-[40px] h-[40px] rounded'/>
                                <div className="des">
                                    <h4 className='font-[500] text-[1rem]'>{game.name}</h4>
                                    <p className='text-[0.8rem] opacity-50'>{game.text}</p>
                                </div>
                            </section>
                            <p className='font-bold text-2xl'>&gt;</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Puzzle