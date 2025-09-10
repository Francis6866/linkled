import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'

const Protected = ({ children }) => {
    const [data, setData] = useState({})

    useEffect(()=>{
        let details = JSON.parse(localStorage.getItem('userDetails'))
        setData(details)
    }, [])

    if(!data) return <Navigate to="/"/>

  return (
    <div>
      { children }
    </div>
  )
}

export default Protected
