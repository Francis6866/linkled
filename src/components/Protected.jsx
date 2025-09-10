import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'

const Protected = ({ children }) => {
    const [username, setUsername] = useState(() => JSON.parse(localStorage.getItem('userName')))
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem('userDetails')))

    // useEffect(()=>{
    //     let user = JSON.parse(localStorage.getItem('userName'))
    //     let details = JSON.parse(localStorage.getItem('userDetails'))
    //     console.log(details)
    //     console.log(user)
    //     setData(details)
    //     setUsername(user)
    // }, [])

    if(!data) {
      return <Navigate to="/"/>
    }
    
    if(!username) {
      return <Navigate to="/signIn"/>
    }

  return (
    <div>
      { children }
    </div>
  )
}

export default Protected
