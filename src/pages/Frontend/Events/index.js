import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext';
import CreateEvent from './CreateEvent'
import Home from './Home'
import JoinEvent from './JoinEvent';

export default function Index() {
  const { authentication } = useContext(AuthContext);

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createEvent' element={authentication?<CreateEvent/>:<Navigate to="/auth/login"/>}/>
        <Route path='/joinevent' element={authentication?<JoinEvent/>:<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
