import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Lectura, TIPO_SENSOR } from '@/lib/types'

const SensorChart = ({
  selectedChart,
  setSelectedChart,
  lecturasData,
}: {
  selectedChart: TIPO_SENSOR
  setSelectedChart: (chart: TIPO_SENSOR) => void
  lecturasData: Lectura[]
}) => {
  const renderChart = () => {
    const filteredData = lecturasData
      .filter((lectura) => lectura.sensor.tipo === selectedChart)
      .map((lectura) => {
        const formattedDate = new Date(lectura.fecha).toLocaleTimeString(
          'es-ES',
          {
            hour: '2-digit',
            minute: '2-digit',
          }
        )

        let value
        if (selectedChart === TIPO_SENSOR.TEMPERATURA) {
          value = parseFloat(lectura.valor)
        } else if (selectedChart === TIPO_SENSOR.MOVIMIENTO) {
          value = lectura.valor === 'Movimiento detectado' ? 1 : 0
        } else if (selectedChart === TIPO_SENSOR.ACCESO) {
          value = lectura.valor === 'Acceso permitido' ? 1 : 0
        }

        return {
          name: formattedDate,
          value,
        }
      })

    let color
    let yAxisTickFormatter
    let yAxisDomain

    switch (selectedChart) {
      case TIPO_SENSOR.TEMPERATURA:
        color = '#ef4444'
        yAxisTickFormatter = (value: number) => `${value}°C`
        yAxisDomain = [10, 40]
        break
      case TIPO_SENSOR.MOVIMIENTO:
        color = '#3b82f6'
        yAxisTickFormatter = (value: number) => (value === 1 ? 'SI' : 'NO')
        yAxisDomain = [0, 1]
        break
      case TIPO_SENSOR.ACCESO:
        color = '#10b981'
        yAxisTickFormatter = (value: number) =>
          value === 1 ? 'PERMITIDO' : 'DENEGADO'
        yAxisDomain = [0, 1]
        break
      default:
        color = '#ef4444'
    }

    return (
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' fontSize={11} />
          <YAxis
            domain={yAxisDomain}
            tickFormatter={yAxisTickFormatter}
            fontSize={10}
            fontWeight={600}
            ticks={
              selectedChart === TIPO_SENSOR.TEMPERATURA ? undefined : [0, 1]
            } // Mostrar solo etiquetas en 0 y 1
          />
          <Tooltip />
          <Line
            type='monotone'
            dataKey='value'
            stroke={color}
            strokeWidth={2}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad de los Sensores</CardTitle>
        <div className='flex space-x-2'>
          {Object.values(TIPO_SENSOR).map((tipo) => (
            <Button
              key={tipo}
              variant={selectedChart === tipo ? 'default' : 'outline'}
              size='sm'
              onClick={() => setSelectedChart(tipo)}
            >
              {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>{renderChart()}</CardContent>
    </Card>
  )
}

export default SensorChart
