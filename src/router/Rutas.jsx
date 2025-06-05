import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Header from '../common/Header'
import Artistas from '../pages/Artistas'
import RutaProtegida from '../components/RutaProtegida'
import Paginacion from '../pages/Paginacion'
import DetalleArtista from '../pages/DetalleArtista'
import Categorias from '../pages/Categorias'
import LoginFirebase from '../pages/LoginFirebase'

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
                        <Route path='/detalle-artista' element={<DetalleArtista />} />
                        <Route path='/cantantes' element={<Categorias />} />
                        <Route path='/login-firebase' element={<LoginFirebase />} />

                    </Routes>
                </main>
            </BrowserRouter>


        </>
    )
}
