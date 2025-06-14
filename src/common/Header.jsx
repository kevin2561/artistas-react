import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav className='bg-amber-400 flex gap-3'>
                <li className='list-none'>
                    <Link className='text-2xl' to="/">Inicio</Link>

                </li>
                <li className='list-none'>
                    <Link className='text-2xl' to="/artistas">Artistas</Link>

                </li>

                <li className='list-none'>
                    <Link className='text-2xl' to="/paginacion">Paginacion</Link>

                </li>

                <li className='list-none'>
                    <Link className='text-2xl' to="/cantantes">Cantantes</Link>

                </li>

                <li className='list-none'>
                    <Link className='text-2xl' to="/login-firebase">Login Firebase</Link>

                </li>

                <li className='list-none'>
                    <Link className='text-2xl' to="/graficos">Graficos</Link>

                </li>
                  <li className='list-none'>
                    <Link className='text-2xl' to="/chapGPT">ChatAi</Link>

                </li>


            </nav>

        </header>
    )
}
