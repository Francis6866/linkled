import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'

const OverallOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default OverallOut
