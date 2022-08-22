import React from "react";

const WeekWeather = ({dt_txt, iconUrl, description, temp_min, temp_max}) => {
    return (
        <div className="row">
            <div className="col" id="colDate">
                {formato((dt_txt).slice(0 , 10))} 
            </div>
            <div className="col-1" id="colIcon">
                <img src={iconUrl}/>
            </div>
            <div className="col" id="colDescription">
                {description.charAt(0).toUpperCase() + description.slice(1)}
            </div>
            <div className="col-5" id="colTemp">
                <span> Mín.: {(temp_min).toFixed(1)}° - Máx.: {(temp_max).toFixed(1)}° </span>
            </div>
        </div>

    )
}

function formato(texto){
    return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
  }

export default WeekWeather;