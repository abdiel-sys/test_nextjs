"use client"
import { useState } from "react";
/*
 * Input para correo
 * Input para motivo
 * Text para comentario
 * Boton para enviar
 * */

export default function ContactoPage() {
  const [correo, setCorreo] = useState('')
  const [motivo, setMotivo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nuevoMensaje = {
      correo,
      motivo,
      mensaje,
    }
    localStorage.setItem("Mensaje", JSON.stringify(nuevoMensaje))
    console.log('DATOS GUARDADOS EN LOCALSTORAGE', nuevoMensaje)

    setCorreo('')
    setMotivo('')
    setMensaje('')
  }
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Contáctame
        </h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="correo" className="text-sm text-gray-700">
            Correo
          </label>
          <input
            id="correo"
            value={correo}
            onChange={e => setCorreo(e.target.value)}
            type="email"
            placeholder="tu@email.com"
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-gray-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="motivo" className="text-sm text-gray-700">
            Motivo
          </label>
          <input
            id="motivo"
            value={motivo}
            onChange={e => setMotivo(e.target.value)}
            type="text"
            placeholder="Motivo del mensaje"
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-gray-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="comentario" className="text-sm text-gray-700">
            Comentario
          </label>
          <textarea
            id="comentario"
            value={mensaje}
            onChange={e => setMensaje(e.target.value)}
            rows={5}
            placeholder="Escribe tu mensaje..."
            className="border border-gray-300 rounded px-3 py-2 outline-none resize-none focus:border-gray-500"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-700"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
