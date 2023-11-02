import React from 'react'

const DayWeather = ({ name, temp, icon, description, temp_max, temp_min }) => {
  return (
    <div className='row'>
      <h3 className='card-title'>{name}</h3>
      <h1 className='card-temp'>{temp.toFixed(1)}°C</h1>
      <p className='card-description'>
        <img src={icon} alt='icon'/>
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </p>
      <p className='card-temp-max-min'>
       Mínima: {temp_min.toFixed(1)}° Máxima: {temp_max.toFixed(1)}°
      </p>
    </div>
  )
}

export default DayWeather
