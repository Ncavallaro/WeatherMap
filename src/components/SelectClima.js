import React, {useState} from 'react';
import '../css/SelectClima.css'


const SelectClima = () => {
    
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
    }

    return (
        <div className="selectConteiner">
            <form onSubmit={onSubmit}>
                <div className='conteinerForm mx-auto input-group' >
                    <select className="form-select" aria-label="Default select example" placeholder='Seleccione la ciudad' 
                    onChange={(e) => setCity(e.target.value)}>
                        <option value="CAPITAL_FEDERAL">Capital Federal</option>
                        <option value="CORDOBA">Cordoba</option>
                        <option value="ENTRE_RIOS">Entre Rios</option>
                        <option value="BARILOCHE">Bariloche</option>
                        <option value="TANDIL">Tandil</option>
                        <option value="SALTA">Salta</option>
                    </select>
                    <button className='btn btn-primary' type='submit'>Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default SelectClima;