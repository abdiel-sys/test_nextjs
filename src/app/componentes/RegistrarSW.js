'use client'

import { useEffect } from 'react'

export default function RegistrarSW() {
  useEffect(() => {
    //Verificar que el navegador soporte Service Workers
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      //Registrar la ruta del sw.js
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registrado con éxito en:', registration.scope)
        })
        .catch((error) => {
          console.error('Error al registrar el Service Worker:', error)
        })
    }
  }, [])

  return null
}
