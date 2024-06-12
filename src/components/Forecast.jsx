import React from 'react'

const Forecast = ({title, data,units}) => {


  return (
    <div className={`w-[85%] mx-auto pb-10`} >
          <div className='flex items-center jusity-start mt-6'>
              <p className='font-medium'> {title}</p>
          </div>
          <hr className='my-1' />
          <div className='flex items-center justify-between'>
              {data?.map((d
                  , index) => (
                  <div key={index} className='flex flex-col items-center  justify-center'>
                      <p className='font-medium text-sm'> {d.title}</p>
                      <img src={d.icon} alt="forecast icon"
                          className='w-12 my-1' />
                      <p className='sm:font-medium text-lg '>{`${d.temp.toFixed()}${units=='metric'?'°C':'°F'}` }</p>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default Forecast
