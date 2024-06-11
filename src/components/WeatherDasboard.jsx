import React from 'react'
import TimeAndLocation from './TimeAndLocation'
import useTheme from './ThemeProvider'
import TempAndDetails from './TempAndDetails'

const WeatherDasboard = () => {
    const {theme} = useTheme()
  return (
      <div className={`maxW-[85%] ${theme==='dark'?'bg-slate-700 text-sky-400':'bg-sky-400 text-white'}`} >
      <TimeAndLocation />
      <TempAndDetails />
    </div>
  )
}

export default WeatherDasboard
