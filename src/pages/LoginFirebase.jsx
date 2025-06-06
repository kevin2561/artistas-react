import React from 'react'
import { auth, providerFacebook, providerGithub, providerGoogle, signInWithPopup } from '../config/FirebaseConfig'

export default function LoginFirebase() {

    const handlerLoginGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, providerGoogle)
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
            const result = await signInWithPopup(auth, providerFacebook)
            const user = result;
            // console.log("Usuario: " + user)
            console.log("Nombre: " + user.user.displayName)
            console.log("Email: " + user.user.email)
            console.log("Objeto: " + JSON.stringify(user, null, 2))
        } catch (error) {
            console.log("Error de Firebase: " + error)
        }

    }

    const handlerLoginGithub = async () => {
        try {
            const result = await signInWithPopup(auth, providerGithub)
            const user = result;
            // console.log("Usuario: " + user)
            // console.log("Nombre: " + user.user.displayName)
            // console.log("Email: " + user.user.email)
            console.log("Objeto: " + JSON.stringify(user, null, 2))
        } catch (error) {
            if (error.code === 'auth/account-exists-with-different-credential') {
                const email = error.customData?.email;
                alert(`Ya existe una cuenta registrada con el correo ${email}, pero con otro método de inicio de sesión (por ejemplo, Google).`);
            } else {
                console.log("Otro error de Firebase:", error);
            }
        }
    }


    const handlerLogin = async (providerName) => {
        let provider;
        if (providerName === "google") provider = providerGoogle;
        if (providerName === "facebook") provider = providerFacebook;
        if (providerName === "github") provider = providerGithub;
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Objeto" + JSON.stringify(result, null, 2))
        } catch (error) {
            if (error.code === 'auth/account-exists-with-different-credential') {
                alert("Ya existe una cuenta con ese correo, pero usando otro proveedor.");
            } else {
                console.error("Error:", error);
            }
        }

    }

    return (
        <div className='flex flex-col justify-center items-center '>
            <button className='border-2 border-red-400 p-3' onClick={() => handlerLogin("google")}>
                Inicio de sesion con Google
            </button>

            <button className='border-2 border-blue-400 p-3' onClick={() => handlerLogin("facebook")}>
                Inicio de sesion con Facebook
            </button>

            <button className='border-2 border-blue-400 p-3' onClick={() => handlerLogin("github")}>
                Inicio de sesion con Github
            </button>

        </div>
    )
}
