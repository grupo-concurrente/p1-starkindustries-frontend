// Mock data for charts
export const temperatureData = [
  { name: '00:00', value: 20 },
  { name: '04:00', value: 18 },
  { name: '08:00', value: 22 },
  { name: '12:00', value: 25 },
  { name: '16:00', value: 23 },
  { name: '20:00', value: 21 },
]

export const movementData = [
  { name: 'Lun', value: 10 },
  { name: 'Mar', value: 15 },
  { name: 'Mie', value: 8 },
  { name: 'Jue', value: 12 },
  { name: 'Vie', value: 20 },
  { name: 'Sab', value: 5 },
  { name: 'Dom', value: 3 },
]

export const accessData = [
  { name: 'Lun', value: 50 },
  { name: 'Mar', value: 45 },
  { name: 'Mie', value: 60 },
  { name: 'Jue', value: 55 },
  { name: 'Vie', value: 70 },
  { name: 'Sab', value: 30 },
  { name: 'Dom', value: 25 },
]

// Mock data for recent activities
export const recentActivities = [
  {
    id: 1,
    type: 'temperatura',
    value: '23°C',
    location: 'Vestíbulo',
    time: 'Hace 2 minutos',
  },
  {
    id: 2,
    type: 'movimiento',
    value: 'Detectado',
    location: 'Planta 2',
    time: 'Hace 15 minutos',
  },
  {
    id: 3,
    type: 'acceso',
    value: 'Garantizado',
    location: 'Planta 1',
    time: 'Hace 1 hora',
  },
  {
    id: 4,
    type: 'temperatura',
    value: '18°C',
    location: 'Despacho Principal',
    time: 'Hace 3 horas',
  },
  {
    id: 5,
    type: 'movimiento',
    value: 'NaN',
    location: 'Vestíbulo',
    time: 'Hace 5 horas',
  },
]
