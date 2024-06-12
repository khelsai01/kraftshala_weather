import React from 'react'
import TimeAndLocation from './TimeAndLocation'
import useTheme from './ThemeProvider'
import TempAndDetails from './TempAndDetails'
import Forecast from './Forecast'

const WeatherDasboard = ({weather,units}) => {
  const { theme } = useTheme()

  return (
      <div className={`maxW-[85%] ${theme==='dark'?'text-sky-400':'text-white'} py-20`} >
      <TimeAndLocation weather={weather} />
      <TempAndDetails weather={weather} units={units} />
      <Forecast title={'Hourly forecast'} data={weather.hourly} units={units} />
      <Forecast title={'Daily forecast'} data={weather.daily} units={units} />
    </div>
  )
}

export default WeatherDasboard
