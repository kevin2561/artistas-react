import React from 'react'
import { auth, faccebookProvider, githubProvider, provider, signInWithPopup } from '../config/FirebaseConfig'

export default function LoginFirebase() {

    const handlerLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            const user = result.user;
            console.log("Usuario: " + user.displayName)
            console.log("Email: " + user.email)
            console.log("Objeto: " + JSON.stringify(user, null, 2))
        } catch (error) {
            console.log("Error de Firebase: " + error)


        }

    }
    const handlerLoginFacebook = async () => {
        try {
            const result = await signInWithPopup(auth, faccebookProvider)
            const user = result;
            // console.log("Usuario: " + user)
            console.log("Nombre: " + user.user.displayName)
            console.log("Email: " + user.user.email)
            console.log("Objeto: " + JSON.stringify(user, null, 2))
        } catch (error) {
            console.log("Error de Firebase: " + error)
        }

    }

    const handlerLoginGithub = async ()=>{
    try {
            const result = await signInWithPopup(auth, githubProvider)
            const user = result;
            // console.log("Usuario: " + user)
            // console.log("Nombre: " + user.user.displayName)
            // console.log("Email: " + user.user.email)
            console.log("Objeto: " + JSON.stringify(user, null, 2))
        } catch (error) {
            console.log("Error de Firebase: " + error)
        }
    }


    return (
        <div className='flex flex-col justify-center items-center '>
            <button className='border-2 border-red-400 p-3' onClick={() => handlerLogin()}>
                Inicio de sesion con Google
            </button>

            <button className='border-2 border-blue-400 p-3' onClick={() => handlerLoginFacebook()}>
                Inicio de sesion con Facebook
            </button>

            <button className='border-2 border-blue-400 p-3' onClick={() => handlerLoginGithub()}>
                Inicio de sesion con Github
            </button>

        </div>
    )
}
