import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Onboard from '../pages/Onboard'
import Dashboard from '../pages/Dashboard'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/onboard' element={<Onboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default AllRoutes