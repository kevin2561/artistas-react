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
            </nav>

        </header>
    )
}
