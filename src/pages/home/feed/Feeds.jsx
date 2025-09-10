import React from 'react'
import FeedSug from './FeedSug'
import FeedsHeader from './FeedsHeader'
import FeedsFoot from './FeedsFoot'
import datas from  '../../../data/feeds.json'


const Feeds = () => {
  return (
    <>
    {/* feeds */}
        {
            datas && datas?.map((data, index) => {
                return (
                    <div key={index} className="feed shadow rounded-[10px] overflow-hidden p-4 space-y-2">
            <FeedSug />

                    <div className="mb-4">
                        <FeedsHeader data={data}/>

                        <article className="writeUp">
                            <p className='text-[1rem]'>{data.writeUp}</p>
                        </article>{/* writeUp */}

                        <div className="image space-y-1.5">
                            <img src={data.displayUrl} alt="" className='border w-full h-[200px] border-black'/>
                            <div className='flex text-[0.8rem] opacity-50 justify-between'>
                                <a className='hover:text-[#0A66C2] hover:underline hover:opacity-100'>👍👌 2,565</a>
                                <div className='flex gap-2'>
                                    <a className='hover:text-[#0A66C2] hover:underline hover:opacity-100'>194 comments. </a>
                                    <a className='hover:text-[#0A66C2] hover:underline hover:opacity-100'> 256 repost</a>
                                </div>
                            </div>
                        </div>{/* Feed image */}
                    </div>
            <FeedsFoot />

        </div>
                )
            })
        }
       
       
    </>
  )
}

export default Feeds
