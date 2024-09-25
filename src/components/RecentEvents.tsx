import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Thermometer, Activity, Key } from 'lucide-react'
import { timeSince } from '@/lib/utils'
import { Lectura, TIPO_SENSOR } from '@/lib/types'

const RecentEvents = ({ lecturasData }: { lecturasData: Lectura[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Eventos Recientes</CardTitle>
      </CardHeader>
      <CardContent className='h-96 overflow-y-auto'>
        <div className='space-y-4'>
          {lecturasData
            .slice()
            .reverse()
            .slice(0, 30)
            .map((activity) => (
              <div key={activity.fecha} className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  {activity.sensor.tipo === TIPO_SENSOR.TEMPERATURA && (
                    <Thermometer className='h-6 w-6 text-red-500' />
                  )}
                  {activity.sensor.tipo === TIPO_SENSOR.MOVIMIENTO && (
                    <Activity className='h-6 w-6 text-blue-500' />
                  )}
                  {activity.sensor.tipo === TIPO_SENSOR.ACCESO && (
                    <Key className='h-6 w-6 text-green-500' />
                  )}
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-gray-900 truncate'>
                    Sensor de{' '}
                    {activity.sensor.tipo.charAt(0).toUpperCase() +
                      activity.sensor.tipo.slice(1)}
                  </p>
                  <p className='text-sm text-gray-500 truncate'>
                    {activity.sensor.ubicacion}
                  </p>
                </div>
                <div className='flex-shrink-0 text-right'>
                  <p className='text-sm text-gray-500'>
                    {activity.valor}
                    {activity.sensor.tipo === TIPO_SENSOR.TEMPERATURA && ' ºC'}
                  </p>
                  <p className='text-xs text-gray-400'>
                    Hace {timeSince(activity.fecha)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentEvents
