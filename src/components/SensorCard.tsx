import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sensor, TIPO_SENSOR } from '@/lib/types'
import { Thermometer, Activity, Key } from 'lucide-react'

const sensorIcons = {
  [TIPO_SENSOR.TEMPERATURA]: <Thermometer className='h-6 w-6 text-red-500' />,
  [TIPO_SENSOR.MOVIMIENTO]: <Activity className='h-6 w-6 text-blue-500' />,
  [TIPO_SENSOR.ACCESO]: <Key className='h-6 w-6 text-green-500' />,
}

const SensorCard = ({ type, data }: { type: TIPO_SENSOR; data: Sensor[] }) => {
  const count = data.filter((sensor) => sensor.tipo === type).length

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>
          {`Sensores de ${type.charAt(0).toUpperCase() + type.slice(1)}`}
        </CardTitle>
        {sensorIcons[type]}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{count}</div>
        <p className='text-xs text-muted-foreground'>0 alertas</p>
      </CardContent>
    </Card>
  )
}

export default SensorCard
