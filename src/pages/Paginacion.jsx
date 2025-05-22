import React, { useEffect, useState } from 'react'

export default function Paginacion() {
    const [pagina, setPagina] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState();
    const [arryPagina, setArryPagina] = useState([]);

    const leerServicio = async () => {
        const url = `http://localhost:8080/cantantes/get-pagination?page=${pagina}&size=30`;
        const response = await fetch(url);
        const data = await response.json();
        setArryPagina(data.content)
        setTotalPaginas(data.totalPages)
        console.log(data)
        console.log(data.totalPages)

    }
    useEffect(() => {
        leerServicio();
    }, [])

    const avanzarPagina = (e) => {
        e.preventDefault();
        if (pagina >= totalPaginas) {
            setPagina(pagina - 1)

        }
    }
    const retrocederPagina = (e) => {
        e.preventDefault();
        if (pagina  <  totalPaginas) {
                setPagina(pagina + 1)

        }
    }
    return (
        <section className='overflow-x-auto p-4'>
            <table className='min-w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg overflow-hidden shadow-lg'>
                <thead className='text-xs text-white uppercase bg-indigo-600'>
                    <tr>
                        <th scope="col" className='border-2 p-1'>Codigo</th>
                        <th scope="col" className='border-2 p-1'>Nombre Real</th>
                        <th scope="col" className='border-2 p-1'>Nombre Artistico</th>
                        <th scope="col" className='border-2 p-1'>Fecha Nacimiento</th>
                        <th scope="col" className='border-2 p-1'>Pais Origen</th>
                        <th scope="col" className='border-2 p-1'>Genero Musical</th>
                        <th scope="col" className='border-2 p-1'>Edad</th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {arryPagina.map((item, index) => (
                        <tr key={index} className='hover:bg-indigo-50'>
                            <td className='px-6 py-4 font-medium text-gray-900'>{item.idCantante}</td>
                            <td className='px-6 py-4 font-medium text-gray-900'>{item.nombreReal}</td>
                            <td className='px-6 py-4 font-medium text-gray-900'>{item.nombreArtistico}</td>
                            <td className='px-6 py-4 font-medium text-gray-900'>{item.fechaNacimiento}</td>
                            <td className='px-6 py-4 font-medium text-gray-900'>{item.paisOrigen}</td>
                            <td className='px-6 py-4 font-medium text-gray-900'>{item.generoMusical}</td>
                            <td className='px-6 py-4 font-medium text-gray-900'>{item.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='w-screen bg-amber-400 flex justify-center items-center py-2'>
                <a onClick={(e) => avanzarPagina(e)} href="" className='mx-2 border-2 rounded px-5 text-amber-100 bg-black'>Next</a>
                <a href="" className='mx-2 border-2 rounded px-5 text-amber-100 bg-black'>{pagina}</a>
                <a onClick={(e) => retrocederPagina(e)} href="" className='mx-2 border-2 rounded px-5 text-amber-100 bg-black'>Atras</a>
            </div>

        </section>
    )
}
