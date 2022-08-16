import React, {useState} from 'react';
import '../css/SelectClima.css'


const SelectClima = ({newLocation}) => {
    
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});

        newLocation(city);
    }

    return (
        <div className="selectConteiner">
            <form onSubmit={onSubmit}>
                <div className='conteinerForm mx-auto input-group' >
                    <select className="form-select" aria-label="Default select example" placeholder='Seleccione la ciudad' 
                    onChange={(e) => setCity(e.target.value)}>
                        <option value="Seleccione la ciudad">Seleccione la ciudad</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="cordoba">Cordoba</option>
                        <option value="Entre Rios">Entre Rios</option>
                        <option value="Bariloche">Bariloche</option>
                        <option value="Tandil">Tandil</option>
                        <option value="Salta">Salta</option>
                    </select>
                    <button className='btn btn-primary' type='submit'>Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default SelectClima;