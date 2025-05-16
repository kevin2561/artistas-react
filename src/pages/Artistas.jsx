import React, { useState, useEffect } from 'react'
import { urlApiRest } from '../util/Urlapi';

export default function Artistas() {
    const [artistasList, setArtistasList] = useState([]);
    const leerServicio = async () => {
        let url = urlApiRest + "cantantes/get";
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            });
            const data = await response.json();
            console.log(data)
            setArtistasList(data);
        } catch (error) {
            console.log(error)

        }

    }

    useEffect(() => {
        leerServicio();
    }, [])
    return (
        <section className='@container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-5 transition-all duration-500'>
            {artistasList.map((artista, index) =>
                <div key={index} className='border-[2px]'>
                    <h3>Nombre Artistico: {artista.nombreArtistico}</h3>
                    <h4>Nombre Real: {artista.nombreReal}</h4>
                    <h4>Genero: {artista.generoMusical}</h4>
                </div>
            )}


        </section>
    )
}
