import React, { useEffect, useState } from 'react'

export default function Paginacion() {
    const [pagina, setPagina] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState();
    const [totalElementos, setTotalElementos] = useState(10);
    const [arryPagina, setArryPagina] = useState([]);

    const leerServicio = async () => {
        const url = `http://localhost:8080/cantantes/get-pagination?page=${pagina}&size=${totalElementos}`;
        const response = await fetch(url);
        const data = await response.json();
        setArryPagina(data.content)
        setTotalPaginas(data.totalPages)
        console.log(data)
        console.log(data.totalPages)

    }
    useEffect(() => {
        leerServicio();
    }, [pagina, totalElementos])

    const avanzarPagina = (e) => {
        e.preventDefault();
        //0        //5
        if (pagina < totalPaginas - 1) {
            setPagina(pagina + 1)

        }
    }
    const retrocederPagina = (e) => {
        e.preventDefault();
        //5        //0
        if (pagina > 0) {
            setPagina(pagina - 1)

        }
    }
    const actualizar = (e) => {
        e.preventDefault();
        setPagina(0);
        setTotalElementos(parseInt(e.target.value));
    }
    return (
        <section className='overflow-x-auto p-4'>
            <div className='flex flex-col'>
                <label >Mostrar datos </label>
                <select id="" className='w-50' onChange={(e) => actualizar(e)}>
                    <option value="" disabled selected >Seleccione un opcion</option>
                    <option value="10" >10</option>
                    <option value="30" >30</option>
                    <option value="50" >50</option>
                    <option value="100" >100</option>
                </select>
            </div>
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

            <div className='w-full bg-amber-400 flex justify-center items-center py-2'>
                <a onClick={(e) => retrocederPagina(e)} href="" className='mx-2 border-2 rounded px-5 text-amber-100 bg-black'>Atras</a>

                <a href="" className='mx-2 border-2 rounded px-5 text-amber-100 bg-black'>{pagina + 1}</a>
                <a onClick={(e) => avanzarPagina(e)} href="" className='mx-2 border-2 rounded px-5 text-amber-100 bg-black'>Next</a>

            </div>

        </section>
    )
}
