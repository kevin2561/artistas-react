import React, { useEffect, useState } from 'react'
import './Paginacion.css'

export default function Paginacion() {
    const [pagina, setPagina] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState();
    const [totalElementos, setTotalElementos] = useState(10);
    const [arryPagina, setArryPagina] = useState([]);
    const [arryPaginaFiltrada, setArryPaginaFiltrada] = useState([]);

    const [buscarCantante, setBuscarCantante] = useState("");

    const leerServicio = async () => {
        const url = `http://localhost:8080/cantantes/get-pagination?page=${pagina}&size=${totalElementos}`;
        const response = await fetch(url);
        const data = await response.json();
        setArryPagina(data.content)
        setTotalPaginas(data.totalPages)
        setArryPaginaFiltrada(data.content)
        console.log(data)
        // console.log(data.totalPages)

    }
    useEffect(() => {
        leerServicio();
    }, [pagina, totalElementos])
    
    useEffect(() => {
        const filtrados = arryPagina.filter((cantante) =>
            cantante.nombreReal.toLowerCase().includes(buscarCantante.toLowerCase())
        );
        setArryPaginaFiltrada(filtrados);
    }, [buscarCantante, arryPagina])

    const avanzarPagina = (e) => {
        e.preventDefault();
        //0        //5
        if (pagina < totalPaginas - 1) {
            setPagina(pagina + 1)
            // setBuscarCantante("")

        }
    }
    const retrocederPagina = (e) => {
        e.preventDefault();
        //5        //0
        if (pagina > 0) {
            setPagina(pagina - 1)
            // setBuscarCantante("")

        }
    }
    const actualizar = (e) => {
        e.preventDefault();
        setPagina(0);
        setTotalElementos(parseInt(e.target.value));
    }

    const pintarFila = (e) => {
        e.currentTarget.classList.toggle("colorFila");
        // console.log(e.currentTarget)
    }
    // const filtrarCantantes = (e) => {
    //     const valor = e.target.value
    //     setBuscarCantante(valor)
    //     const textFiltro = arryPagina.filter((canante) => canante.nombreReal.toLowerCase().includes(valor.toLowerCase()))
    //     setArryPaginaFiltrada(textFiltro)
    //     console.log(valor)
    //     // setPagina(0);
    //     // setBuscarCantante(e.target.value);

    // }


    // const removerPintarFila = (e) => {
    //     e.currentTarget.classList.remove("colorFila");

    // }
    return (
        <section className='overflow-x-auto p-4'>
            <section className='bg-lime-400 flex flex-row py-5 gap-10'>
                <div className=''>
                    <label >Mostrar datos </label>
                    <select id="" className='w-50 border-2' onChange={(e) => actualizar(e)} value={totalElementos}>
                        <option value="" disabled>Seleccione un opcion</option>
                        <option value="10">10</option>
                        <option value="30" >30</option>
                        <option value="50" >50</option>
                        <option value="100" >100</option>
                    </select>
                </div>
                <div className='flex gap-5'>
                    <label htmlFor="">Buscardor</label>
                    <input onChange={(e) => setBuscarCantante(e.target.value)} value={buscarCantante} type="text" className='border-2 w-150' />
                </div>
            </section>
            <table className='min-w-full min-h-50 text-sm text-left text-gray-500 border border-gray-200 rounded-lg overflow-hidden shadow-lg'>
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
                    {arryPaginaFiltrada.length === 0 ? <tr className='text-center'><td>XD</td></tr>
                        : arryPaginaFiltrada.map((item, index) => (
                            <tr key={index} className='hover:bg-red-600' onMouseEnter={(e) => pintarFila(e)} onMouseLeave={(e) => pintarFila(e)}>
                                <td className='px-6 py-4 font-medium text-gray-900'>{item.idCantante}</td>
                                <td className='px-6 py-4 font-medium text-gray-900'>{item.nombreReal}</td>
                                <td className='px-6 py-4 font-medium text-gray-900'>{item.nombreArtistico}</td>
                                <td className='px-6 py-4 font-medium text-gray-900'>{item.fechaNacimiento.split("-").reverse().join("/")}</td>
                                <td className='px-6 py-4 font-medium text-gray-900'>{item.paisOrigen}</td>
                                <td className='px-6 py-4 font-medium text-gray-900'>{item.generoMusical}</td>
                                <td className='px-6 py-4 font-medium text-gray-900'>{item.edad}</td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <div id='conten-paginacion' className='w-full bg-amber-400 flex justify-center items-center py-2'>
                <a onClick={(e) => retrocederPagina(e)} href="" className='mx-2 border-2 rounded px-5 text-amber-100 bg-black'>Atras</a>
                <a onClick={(e) => e.preventDefault()} href="" className='mx-2 border-2 rounded px-5 text-amber-100 bg-black'>{pagina + 1}</a>
                <a onClick={(e) => avanzarPagina(e)} href="" className='mx-2 border-2 rounded px-5 text-amber-100 bg-black'>Next</a>

            </div>

        </section>
    )
}
