import React from 'react'
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset  } from "react-icons/gi";
import { MdKeyboardArrowDown , MdKeyboardArrowUp  } from "react-icons/md";

const verticalTemp = [
    {
        id: 1,
        Icon: FaThermometerEmpty,
        title: 'Real feel',
        value: '25°C',
    },
    {
        id: 2,
        Icon: BiSolidDropletHalf,
        title: 'Humidity',
        value: '343%',
    },
    {
        id: 3,
        Icon: FiWind,
        title: 'Wind',
        value: '11 km/hr',
    }
]
const horizontalTemp=[
    {
        id: 1,
        Icon: GiSunrise,
        title: 'Sunrise',
        value: '05:33 am',
    },
    {
        id: 2,
        Icon: GiSunset,
        title: 'Sunset',
        value: '6:45 pm',
    },
    {
        id: 3,
        Icon: MdKeyboardArrowUp,
        title: 'High',
        value: '37°',
    },
    {
        id: 4,
        Icon: MdKeyboardArrowDown,
        title: 'Low',
        value: '3°',
    }
]
const TempAndDetails = () => {
  
  return (
    <div className='w-[85%] m-auto'>
          <div className=' flex items-center justify-center py-6 text-xl text-cyan-300'>
              <p>Rain</p>
          </div>
          <div className='flex flex-row items-center justify-between py-3'>
              <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="weatherIcon" className='w-20' />
          <p className='text-5xl '>25° </p>
         
          <div className='flex flex-col space-y-3 items-start'>
              {
                  verticalTemp.map((item) => (
                      <div key={item.id} className='flex font-light text-sm items-center justify-center'>
                          <item.Icon className='mr-1' />
                          {item.title}
                          <span className='font-medium ml-1'>{item.value}</span>

                      </div>
                  ))
                      
             }
              </div >
          </div >
          
          <div className='flex flex-row items-center justify-center space-x-10 text-sm py-3'>
              {
                  horizontalTemp.map((item) => (
                      <div key={item.id} className='flex flex-row items-center'>
                          <item.Icon size={30} />
                          <p className='font-light ml-1'>{`${item.title} : `}
                              <span className='font-medium ml-1'>{item.value}</span></p>
                      </div>

                  ))
              }
          </div>

    </div>
  )
}

export default TempAndDetails
