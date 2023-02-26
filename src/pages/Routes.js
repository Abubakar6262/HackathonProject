import React,{useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Frontend from '../pages/Frontend'
import Auth from './Auth'
import { AuthContext } from '../contexts/AuthContext'

export default function HandlePath() {
    const{authentication} = useContext(AuthContext)
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<Frontend/>} />
                    <Route path='auth/*' element={!authentication?<Auth/>:<Navigate to="/"/>} />
                </Routes>
        </BrowserRouter>
    )
}
