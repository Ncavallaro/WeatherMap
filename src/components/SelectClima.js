import React, { useState } from 'react'
import '../css/SelectClima.css'

const SelectClima = ({ newLocation }) => {
  const [city, setCity] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    newLocation(city)
  };

  return (
    <div className='selectConteiner'>
      <form onSubmit={onSubmit}>
        <div className='conteinerForm mx-auto input-group'>
          <select
            className='form-select'
            aria-label='Default select example'
            placeholder='Seleccione la ciudad'
            onChange={(e) => setCity(e.target.value)}
          >
            <option value='Seleccione la ciudad'>Seleccione la ciudad</option>
            <option value='Bariloche'>Bariloche</option>
            <option value='Buenos Aires'>Buenos Aires</option>
            <option value='Catamarca'>Catamarca</option>
            <option value='Chaco'>Chaco</option>
            <option value='Chubut'>Chubut</option>
            <option value='Córdoba'>Córdoba</option>
            <option value='Corrientes'>Corrientes</option>
            <option value='Entre Ríos'>Entre Ríos</option>
            <option value='Formosa'>Formosa</option>
            <option value='Jujuy'>Jujuy</option>
            <option value='La Pampa'>La Pampa</option>
            <option value='La Rioja'>La Rioja</option>
            <option value='Mendoza'>Mendoza</option>
            <option value='Misiones'>Misiones</option>
            <option value='Neuquén'>Neuquén</option>
            <option value='Río Negro'>Río Negro</option>
            <option value='Salta'>Salta</option>
            <option value='San Juan'>San Juan</option>
            <option value='San Luis'>San Luis</option>
            <option value='Santa Cruz'>Santa Cruz</option>
            <option value='Santa Fe'>Santa Fe</option>
            <option value='Santiago del Estero'>Santiago del Estero</option>
            <option value='Tierra del Fuego'>Tierra del Fuego</option>
            <option value='Tucumán'>Tucumán</option>
            <option value='Tandil'>Tandil</option>
            <option value='Rosario'>Rosario</option>
          </select>
          <button className='btn btn-secondary' type='submit'>
            Buscar
          </button>
        </div>
      </form>
    </div>
  )
}

export default SelectClima