import React, { useEffect, useState } from 'react'
import { urlApiRest } from '../util/Urlapi';
import CardCantantes from './CardCantantes';
import './Categorias.css'

export default function Categorias() {
    const [categoria, setCategoria] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);
    const [cantidadC, setcantidadC] = useState();

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = async () => {
        const url = urlApiRest + "genero/get";
        const response = await fetch(url);
        const data = await response.json();
        setCategoria(data)
        // console.log(data)
    }

    const seleccionarElemento = (e, item) => {
        const lista = document.querySelectorAll('li');
        lista.forEach(li => li.classList.remove('active'));
        //    e.target.classList.add('active')
        e.currentTarget.classList.add('active')
        // console.log(id)
        setCategoriaSeleccionada(item)
        // console.log(e.target)
        // console.log(e.currentTarget)

    }
    const cantidadCantantes = (cantidad) => {
        setcantidadC(cantidad)

    }
    return (
        <section className='w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 mt-10 px-50'>
            <div className='flex flex-col items-center'>
                {categoriaSeleccionada.idGenero === undefined ? "Seleccione una Categoria" : categoria[categoriaSeleccionada.idGenero - 1].nombre + " (" + cantidadC + ")"}

                {categoria.map((item) =>
                    <div className='w-50' key={item.idGenero}>
                        {/* <li className="list-none border-2 p-2 `{item.idGenero === 0 ? 'active' : ''}`"  >{item.nombre}</li> */}
                        <li className='list-none border-2 p-2 ' onClick={(e) => seleccionarElemento(e, item)}>
                            {item.nombre} {item.idGenero === categoriaSeleccionada ? cantidadC : ""}
                            {/* <span>xd</span> */}
                        </li>
                    </div>
                )
                }
            </div >

            <div>
                {/* <CardCantantes idCategoria={categoriaSeleccionada.idGenero === undefined ? 1 : categoriaSeleccionada.idGenero} onCantidadCategorias={cantidadCantantes} /> */}
                <CardCantantes idCategoria={categoriaSeleccionada.idGenero} onCantidadCategorias={cantidadCantantes} />
            </div>
        </section >
    )
}
