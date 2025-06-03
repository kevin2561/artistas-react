import React, { use, useEffect, useState } from 'react'
import { urlApiRest } from '../util/Urlapi';

export default function CardCantantes({ idCategoria, onCantidadCategorias }) {
  const [cantantes, setCantantes] = useState([]);
  useEffect(() => {
    if (idCategoria !== undefined) {
      leerServicio(idCategoria)
    }
    // leerServicio(idCategoria)
  }, [idCategoria])


  const leerServicio = async (id) => {
    const url = urlApiRest + "genero/genero-categoria?idGnero=" + id;
    const response = await fetch(url);
    const data = await response.json();
    setCantantes(data)
    if (onCantidadCategorias) {
      onCantidadCategorias(data.length)

    }
    // console.log(data.length)
  }

  // console.log(idCategoria)
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cantantes.map((artista) => (
        <div
          key={artista.idCantante}
          className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition"
        >
          <h2 className="text-xl font-bold mb-2 text-gray-800">{artista.nombreReal}</h2>
          <p className="text-gray-600">{artista.nombreArtistico}</p>
          <p className="text-sm text-gray-500 mt-2">ID: {artista.idCantante}</p>
        </div>
      ))}
    </section>

  )
}
