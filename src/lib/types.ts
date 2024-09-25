// Tipo para representar un sensor
export interface Sensor {
  nombre: string
  ubicacion: string
  estado: boolean
  tipo: TIPO_SENSOR
}

// Tipo para representar una lectura de un sensor
export interface Lectura {
  valor: string
  fecha: string
  sensor: Sensor
}

// Datos para la tabla de lecturas por sensor
export interface ChartData {
  name: string
  value: number
}

export enum ROL {
  ADMINISTRADOR = 'ADMINISTRADOR',
  USUARIO = 'USUARIO',
}

export enum TIPO_SENSOR {
  TEMPERATURA = 'TEMPERATURA',
  MOVIMIENTO = 'MOVIMIENTO',
  ACCESO = 'ACCESO',
}
