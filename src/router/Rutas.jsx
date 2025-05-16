import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Header from '../common/Header'
import Artistas from '../pages/Artistas'

export default function Rutas() {
    return (
        <>


            <BrowserRouter>
                <Header />
                <main >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/artistas' element={<Artistas />} />

                    </Routes>
                </main>
            </BrowserRouter>


        </>
    )
}
