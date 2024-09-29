'use client'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginProps } from './Login'
import { Lectura, Sensor, TIPO_SENSOR } from '@/lib/types'
import { fetchData } from '@/lib/utils'
import Header from '@/components/Header'
import SensorCard from '@/components/SensorCard'
import SensorChart from '@/components/SensorChart'
import RecentEvents from '@/components/RecentEvents'

export default function Dashboard({ setIsAuthenticated }: LoginProps) {
  const [selectedChart, setSelectedChart] = useState(TIPO_SENSOR.TEMPERATURA)
  const [sensoresData, setSensoresData] = useState<Sensor[]>([])
  const [lecturasData, setLecturasData] = useState<Lectura[]>([])
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsAuthenticated(false)
    navigate('/login')
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      const { sensores, lecturas } = await fetchData()
      setSensoresData(sensores)
      setLecturasData(lecturas)
    }

    fetchDataAsync()
    const interval = setInterval(fetchDataAsync, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Header handleLogout={handleLogout} />
      <main className='flex-1 py-8 mt-14'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <SensorCard type={TIPO_SENSOR.TEMPERATURA} data={sensoresData} />
            <SensorCard type={TIPO_SENSOR.MOVIMIENTO} data={sensoresData} />
            <SensorCard type={TIPO_SENSOR.ACCESO} data={sensoresData} />
          </div>
          <div className='mt-8'>
            <SensorChart
              selectedChart={selectedChart}
              setSelectedChart={setSelectedChart}
              lecturasData={lecturasData}
            />
          </div>
          <div className='mt-8'>
            <RecentEvents lecturasData={lecturasData} />
          </div>
        </div>
      </main>
    </div>
  )
}
