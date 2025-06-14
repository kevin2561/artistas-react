import React, { useState } from 'react'

export default function ChatAI() {

  const [mensaje, setMensaje] = useState([]);
  const [input, setInput] = useState("");


  const enviarMensaje = async () => {
    if (!input.trim()) return;

    const nuevoMensajeUsuario = { role: "auth", content: input }
    const nuevoMensaje = [...mensaje, nuevoMensajeUsuario]
    setMensaje(nuevoMensaje);
    setInput("");
    try {
      const reponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },

        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            role: "user",
            content: "Responde solo sobre animales como un experto en zoología."
          }],
          ...nuevoMensaje
        })

      })

      const data = await reponse.json();
      console.log(data)
      if (!data.choices || !data.choices[0]) {
        console.error("No hay respuesta válida:", data);
        return;
      }
      const aiRply = data.choices[0].message;
      setMensaje((prev) => [...prev, aiRply])



    } catch (error) {
      console.log(error)


    }



  }
  return (
    <>
      <section>
        <div>
          {mensaje.map((mens, index) => {
            <p id={index}>
              <strong>{mens.role === "user" ? "Tu" : "AI"}:</strong> {mens.content}

            </p>


          })}

        </div>
        <div>
          <input type="text" placeholder='Hacer una pregunta' value={input} onChange={(e) => setInput(e.target.value)} />

          <button onClick={enviarMensaje}>Enviar</button>

        </div>
      </section>

    </>
  )
}
