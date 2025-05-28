import React, { useState, useEffect } from 'react'
import { urlApiRest } from '../util/Urlapi';
import { Link, useNavigate } from 'react-router-dom';

export default function Artistas() {
    const navigate = useNavigate();
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
            if (response.status === 401) {
                localStorage.removeItem("token");
                navigate("/login");
                return;

            }
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
            {artistasList.sort((a, b) => a.nombreArtistico.localeCompare(b.nombreArtistico)).map((artista, index) =>
                <Link to="/detalle-artista" state={{artista}}  key={index} className="group relative block bg-black m-3">
                    <img
                        alt="x"
                        src="https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">{artista.nombreReal}</p>

                        <p className="text-xl font-bold text-white sm:text-2xl">{artista.nombreArtistico}</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm text-white">
                                    <span>Genero: {artista.generoMusical}</span><br />
                                    <span>Pais: {artista.paisOrigen}</span><br />
                                    <span>Edad: {artista.edad}</span>

                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            )}

        </section>



    )
}





















