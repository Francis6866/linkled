import React from 'react'

const FeedsHeader = ({ data }) => {
  return (
    <>
         <div className="feed-header ">
                <div className='flex justify-between gap-2'>
                    <section className='flex gap-2'>
                        <img src={data.profilePicUrl} alt="" className='w-[50px] h-[50px] rounded-full border border-black'/>
                        <div className="userTitle">
                            <h3 className='text-[1rem] font-[500]'>{data.name}</h3>
                            <p className='text-[0.75rem]'>{data.shortBio}</p>
                            <a className='text-[0.8rem] font-bold text-[#0A66C2] hover:underline'>View my blog</a>
                        </div>
                    </section>
                    <p className="follow text-[1.2rem] font-bold text-[#0A66C2] hover:underline">+ Follow</p>
                </div>
            </div>{/* header */}
    </>
  )
}

export default FeedsHeader