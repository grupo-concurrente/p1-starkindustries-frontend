"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Thermometer, Activity, Key, User } from 'lucide-react'

// Mock data for charts
const temperatureData = [
  { name: '00:00', value: 20 },
  { name: '04:00', value: 18 },
  { name: '08:00', value: 22 },
  { name: '12:00', value: 25 },
  { name: '16:00', value: 23 },
  { name: '20:00', value: 21 },
]

const movementData = [
  { name: 'Lun', value: 10 },
  { name: 'Mar', value: 15 },
  { name: 'Mie', value: 8 },
  { name: 'Jue', value: 12 },
  { name: 'Vie', value: 20 },
  { name: 'Sab', value: 5 },
  { name: 'Dom', value: 3 },
]

const accessData = [
  { name: 'Lun', value: 50 },
  { name: 'Mar', value: 45 },
  { name: 'Mie', value: 60 },
  { name: 'Jue', value: 55 },
  { name: 'Vie', value: 70 },
  { name: 'Sab', value: 30 },
  { name: 'Dom', value: 25 },
]

// Mock data for recent activities
const recentActivities = [
  { id: 1, type: 'temperatura', value: '23°C', location: 'Vestíbulo', time: 'Hace 2 minutos' },
  { id: 2, type: 'movimiento', value: 'Detectado', location: 'Planta 2', time: 'Hace 15 minutos' },
  { id: 3, type: 'acceso', value: 'Garantizado', location: 'Planta 1', time: 'Hace 1 hora' },
  { id: 4, type: 'temperatura', value: '18°C', location: 'Despacho Principal', time: 'Hace 3 horas' },
  { id: 5, type: 'movimiento', value: 'NaN', location: 'Vestíbulo', time: 'Hace 5 horas' },
]

export default function Dashboard() {
  const [selectedChart, setSelectedChart] = useState('temperatura')

  const renderChart = () => {
    let data, color
    switch (selectedChart) {
      case 'temperatura':
        data = temperatureData
        color = "#ef4444"
        break
      case 'movimiento':
        data = movementData
        color = "#3b82f6"
        break
      case 'acceso':
        data = accessData
        color = "#10b981"
        break
      default:
        data = temperatureData
        color = "#ef4444"
    }

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Panel de sensores</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Ajustes</DropdownMenuItem>
              <DropdownMenuItem>Salir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sensores de temperatura</CardTitle>
                <Thermometer className="h-6 w-6 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">3 alertas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sensores de Movimiento</CardTitle>
                <Activity className="h-6 w-6 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">1 alerta</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sensor de Acceso</CardTitle>
                <Key className="h-6 w-6 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Sin aletras</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Actividad de los Sensores</CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant={selectedChart === 'temperatura' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedChart('temperatura')}
                  >
                    Temperatura
                  </Button>
                  <Button
                    variant={selectedChart === 'movimiento' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedChart('movimiento')}
                  >
                    Movimiento
                  </Button>
                  <Button
                    variant={selectedChart === 'acceso' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedChart('acceso')}
                  >
                    Acceso
                  </Button>
                </div>
              </CardHeader>
              <CardContent>{renderChart()}</CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Eventos Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {activity.type === 'temperatura' && <Thermometer className="h-6 w-6 text-red-500" />}
                        {activity.type === 'movimiento' && <Activity className="h-6 w-6 text-blue-500" />}
                        {activity.type === 'acceso' && <Key className="h-6 w-6 text-green-500" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Sensor de {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                        </p>
                        <p className="text-sm text-gray-500 truncate">{activity.location}</p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <p className="text-sm text-gray-500">{activity.value}</p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}