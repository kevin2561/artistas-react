import React from 'react'
import { useLocation } from 'react-router-dom'

export default function DetalleArtista() {

    const location = useLocation();

    const { artista } = location.state || {};

    console.log(location)

    console.log(artista)
    return (
        <div>DetalleArtista</div>
    )
}
