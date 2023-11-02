import React from 'react'
import BarraIndicadora from './BarraIndicadora'

const WeekWeather = ({ dt_txt, iconUrl, description, temp_min, temp_max }) => {

  return (
    <div className='row'>
      <div className='col' id='colDate'>
        {obtenerDiaSemana(dt_txt.slice(0, 10))}
      </div>
      <div className='col-1' id='colIcon'>
        <img src={iconUrl} alt='icon'/>
      </div>
      <div className='col' id='colDescription'>
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </div>
      <div className='col-5' id='colTemp'>
        <BarraIndicadora
          min={temp_min.toFixed(1)}
          max={temp_max.toFixed(1)}
        />
      </div>
    </div>
  )
}

function obtenerDiaSemana(texto) {
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const fecha = new Date(texto);
  const diaSemana = diasSemana[fecha.getUTCDay()];

  return diaSemana;
}

export default WeekWeather
