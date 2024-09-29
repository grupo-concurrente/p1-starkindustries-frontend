import axios from 'axios'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { AuthResponse, Lectura, Sensor } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeSince(date: string) {
  var seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  )

  var interval = seconds / 31536000

  if (interval > 1) {
    return Math.floor(interval) + ' años'
  }
  interval = seconds / 2592000
  if (interval > 1) {
    return Math.floor(interval) + ' meses'
  }
  interval = seconds / 86400
  if (interval > 1) {
    return Math.floor(interval) + ' días'
  }
  interval = seconds / 3600
  if (interval > 1) {
    return Math.floor(interval) + ' horas'
  }
  interval = seconds / 60
  if (interval > 1) {
    return Math.floor(interval) + ' minutos'
  }
  return Math.floor(seconds) + ' segundos'
}

// Función para obtener los datos de sensores y lecturas
export const fetchData = async (): Promise<{
  sensores: Sensor[]
  lecturas: Lectura[]
}> => {
  try {
    // Obtener las credenciales cifradas del localStorage
    const storedCredentials = localStorage.getItem('session_credentials')

    if (!storedCredentials) {
      throw new Error('No se encontraron credenciales almacenadas')
    }

    // Parsear las credenciales almacenadas
    const { email, password } = JSON.parse(storedCredentials)

    // Codificar las credenciales en formato Base64 para Basic Auth
    const encodedCredentials = btoa(`${email}:${password}`)
    console.log(email, password, encodedCredentials) //ESTOY VIENDO QUE SÍ QUE IMPRIME LAS CREDENCIALES CORRECTAS AQUÍ
    // Hacer las solicitudes con autenticación básica
    const sensoresResponse = await axios.get(
      'http://localhost:8080/api/v1/sensores',
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    )

    const lecturasResponse = await axios.get(
      'http://localhost:8080/api/v1/lecturas',
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    )

    return {
      sensores: sensoresResponse.data,
      lecturas: lecturasResponse.data,
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { sensores: [], lecturas: [] }
  }
}

// Función para autenticar al usuario
export async function authenticateUser(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    const response = await axios.post('http://localhost:8080/publico/login', {
      email,
      password,
    })

    if (response.status === 200) {
      return { status: true, info: 'Login exitoso' }
    } else if (response.status === 401) {
      return { status: false, info: 'Credenciales incorrectas' }
    } else {
      console.error('Error:', response.statusText)
      return { status: false, info: 'Error desconocido' }
    }
  } catch (error) {
    console.error('Error conectando con el servidor:', error)
    return { status: false, info: 'Error conectando con el servidor' }
  }
}
