import React from 'react'
import Puzzle from './Puzzle'
import AddToFeed from './AddToFeed'

const RightSide = () => {
  return (
    <section className='space-y-4'>
      <Puzzle />

      <AddToFeed />

        {/* tip */}
        <div  className="shadow rounded-[10px] overflow-hidden border p-4 flex gap-2 items-center">
            <p className="p-1 bg-[#FCE3BC] font-[400] rounded">TIP</p>
            <p className="font-bold opacity-60">Try LinkedIn on the Windows App</p>
        </div>
    </section>
  )
}

export default RightSide