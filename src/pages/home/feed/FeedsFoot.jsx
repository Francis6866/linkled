import React from 'react'

const FeedsFoot = () => {
  return (
    <>
         <div className="feed-footer border-t mt-4 flex justify-between">
                <button className='p-4 rounded hover:bg-[#F3F3F3] text-[1rem] font-[500] opacity-80'>👍 Like</button>
                <button className='p-4 rounded hover:bg-[#F3F3F3] text-[1rem] font-[500] opacity-80'>💬 Comment</button>
                <button className='p-4 rounded hover:bg-[#F3F3F3] text-[1rem] font-[500] opacity-80'>🔁Repost</button>
                <button className='p-4 rounded hover:bg-[#F3F3F3] text-[1rem] font-[500] opacity-80'>✈Send</button>
         </div>
    </>
  )
}

export default FeedsFoot