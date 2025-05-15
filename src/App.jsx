import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rutas from './router/rutas'
import { useThemeStore } from './store/useThemeStore'

function App() {
  const { theme } = useThemeStore();
  document.documentElement.classList.toggle("dark", theme === "dark");
  return (
    <>
      <Rutas />

    </>
  )
}

export default App
