'use client'

import { useState } from "react"
import Image from "next/image"
import { eliminarProducto } from "../actions/productosActions"

export default function TarjetaProducto({ producto }) {
  const [cargando, setCargando] = useState(false)

  const handleEliminar = async () => {
    const confirmacion = window.confirm(`Estas seguro de eliminar  "${producto.nombre}"?`)

    if (confirmacion) {
      setCargando(true)
      try {
        await eliminarProducto(producto.id)
      } catch (error) {
        alert('Ocurrio un error al eliminar el producto')
      }
    }
  }
  return (
    <section className="p-2 w-1/4">
      <div key={producto.id}>
        <h1 className="font-bold">Nombre del producto:</h1>
        <h2>{producto.nombre}</h2>
        <h3 className="font-bold">Descripcion</h3>
        <p>{producto.descripcion}</p>
        <h3 className="font-bold">Precio</h3>
        <p>{producto.precio}</p>
        <Image className="w-full" src={producto.imagen} width={100} height={100} alt="Producto" />
        <button
          onClick={handleEliminar}
          disabled={cargando}
          className="m-1 bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-700">
          {cargando ? "Eliminando Producto" : "Eliminar producto"}
        </button>
      </div>
    </section>
  )
}
