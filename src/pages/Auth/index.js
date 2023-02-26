import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Forgot from './Forgot'
import Login from './Login'
import Register from './Register'
import ResetPassword from './ResetPassword'

export default function Index() {
  return (
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='forgot' element={<Forgot/>}/>
        <Route path='resetpassword' element={<ResetPassword/>}/>
      </Routes>      
  )
}
