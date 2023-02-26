import React from 'react'
import {  Route, Routes } from 'react-router-dom'

// components
import Header from '../../Commponets/Frontend/Header/Header'
import Footer from '../../Commponets/Frontend/Footer/Footer'
import Home from './Home'
import Events from "./Events"
export default function Index() {

    return (
        <>
        <Header/>
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='event/*' element={<Events/>} />
            </Routes>
        </main>
        <Footer/>
        </>
    )
}
