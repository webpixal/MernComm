import React from 'react'
import { Navigate, Outlet, } from 'react-router-dom'

const Privet = () => {
    const auth = localStorage.getItem('user');
  return auth? <Outlet/> :<Navigate to="/dashboard"/>
}

export default Privet;