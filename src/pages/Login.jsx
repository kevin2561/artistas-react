import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const leerServicio = async () => {
        const url = "http://localhost:8080/usuario/login";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "usuario": usuario,
                    "password": password
                })
            })
            const data = await response.text();
            if (!response.ok) {
                throw new Error(data);
            }
            localStorage.setItem("token", data);
            console.log("token " + data)
            navigate("/");
            console.log("exito")
            // console.log(data)

        } catch (error) {
            if (error.message.trim() === "0") {
                alert("Usuario no encontrado");
            }
        }


    }

    const iniciarSesion = (e) => {
        e.preventDefault();
        leerServicio();
        // console.log(e)
    }
    return (
        <section className='h-screen  flex flex-col justify-center items-center'>
            <div className='w-full max-w-[300px] border-2 border-amber-500 rounded-3xl p-8'>
                <h2 className='text-center'>Ingresar</h2>
                <form className='text-black'>
                    <div className='flex flex-col gap-5'>
                        <label className='block'>Ususario</label>
                        <input onChange={(e) => setUsuario(e.target.value)} type="text" className="border-2 rounded-md" value={usuario} />
                        <span></span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <label className='block'>Passowrd</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="border-2 rounded-md" value={password} />
                        <span></span>
                    </div>
                    <button onClick={(e) => iniciarSesion(e)} className='bg-blue-600 border-2 border-radio-2 p-2 rounded-2xl text-amber-50' type='submit'>Ingresar</button>
                </form>
            </div>

        </section>
    )
}
