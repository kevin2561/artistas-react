import React from 'react'
import { useThemeStore } from '../store/useThemeStore'
import { dataProyectos } from '../data/data';
import { CardMenu } from '../components/HomeComponents/CardMenu';
export default function Home() {
    const { theme, toggleTheme } = useThemeStore();
    return (

        <main className='bg-primary h-screen dark:bg-primary-dark flex flex-col justify-center items-center'>
            <section className='rounded-lg min-w-[450px] overflow-hidden'>
                <h1 className='text-black dark:text-white text-4xl font-bold mb-4'>Proyectos</h1>
                {dataProyectos.map((proyecto, index) =>
                    <CardMenu item={proyecto} index={index} key={index} />
                )}

            </section>
            <button className='p-2 border-2 rounded-lg  bg-white dark:bg-black text-black dark:text-white'
                onClick={toggleTheme}>{theme === "light" ? "☀️" : "🌙"}Theme</button>
        </main>
    )
}
