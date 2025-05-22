import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Header from '../common/Header'
import Artistas from '../pages/Artistas'
import RutaProtegida from '../components/RutaProtegida'
import Paginacion from '../pages/Paginacion'

export default function Rutas() {
    return (
        <>


            <BrowserRouter>
                <Header />
                <main >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/artistas' element={
                            <RutaProtegida>
                                <Artistas />
                            </RutaProtegida>} />
                        <Route path='/paginacion' element={<Paginacion />} />

                    </Routes>
                </main>
            </BrowserRouter>


        </>
    )
}
