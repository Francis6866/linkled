import React from 'react'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import CardMain from './CardMain'

const Card = () => {
  return (
      <div className='shadow rounded-2xl overflow-hidden h-[300px] flex flex-col'>
        <CardHeader />
        <CardMain />
        <CardFooter />
      </div>
  )
}

export default Card