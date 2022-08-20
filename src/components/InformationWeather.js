import React from "react";
import Spinner from "./Spinner";
import '../css/InformationWeather.css';
import WeekWeather from "./WeekWeather";

const InformationWeather = ({showData, loadingData, weather,forecast}) => {

    let url = "";
    let iconUrl = "";
    let iconUrl0 = "";
    let iconUrl7 = "";
    let iconUrl15 = "";
    let iconUrl23 = "";
    let iconUrl31 = "";

    if(loadingData){
        return <Spinner/>
    }

    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        iconUrl0 = url + forecast.list[0].weather[0].icon + ".png";
        iconUrl7 = url + forecast.list[7].weather[0].icon + ".png";
        iconUrl15 = url + forecast.list[15].weather[0].icon + ".png";
        iconUrl23 = url + forecast.list[23].weather[0].icon + ".png";
        iconUrl31 = url + forecast.list[31].weather[0].icon + ".png";
    }

    return (
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <h1 className="card-temp">{(weather.main.temp).toFixed(1)}°C</h1>
                                    <p className="card-description"><img src={iconUrl} /> {(weather.weather[0].description).charAt(0).toUpperCase() +
                                    (weather.weather[0].description).slice(1)}</p>
                                    <p className="card-temp-max-min">Máx.: {(weather.main.temp_max).toFixed(1)}° Mín.: {(weather.main.temp_min).toFixed(1)}°</p>
                                    <img src="https://images.pexels.com/photos/356286/pexels-photo-356286.jpeg" 
                                    className="img-fluid rounded-start" alt=".."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        <WeekWeather 
                                            dt_txt = {forecast.list[0].dt_txt}
                                            iconUrl = {iconUrl0}
                                            description = {forecast.list[0].weather[0].description}
                                            temp_min = {forecast.list[0].main.temp_min}
                                            temp_max = {forecast.list[0].main.temp_max}
                                        />
                                        <WeekWeather 
                                            dt_txt = {forecast.list[7].dt_txt}
                                            iconUrl = {iconUrl7}
                                            description = {forecast.list[7].weather[0].description}
                                            temp_min = {forecast.list[7].main.temp_min}
                                            temp_max = {forecast.list[7].main.temp_max}
                                        />
                                        <WeekWeather 
                                            dt_txt = {forecast.list[15].dt_txt}
                                            iconUrl = {iconUrl15}
                                            description = {forecast.list[15].weather[0].description}
                                            temp_min = {forecast.list[15].main.temp_min}
                                            temp_max = {forecast.list[15].main.temp_max}
                                        />
                                        <WeekWeather 
                                            dt_txt = {forecast.list[23].dt_txt}
                                            iconUrl = {iconUrl23}
                                            description = {forecast.list[23].weather[0].description}
                                            temp_min = {forecast.list[23].main.temp_min}
                                            temp_max = {forecast.list[23].main.temp_max}
                                        />
                                        <WeekWeather 
                                            dt_txt = {forecast.list[31].dt_txt}
                                            iconUrl = {iconUrl31}
                                            description = {forecast.list[31].weather[0].description}
                                            temp_min = {forecast.list[31].main.temp_min}
                                            temp_max = {forecast.list[31].main.temp_max}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2 className="text-light">Sin datos</h2>
                )
            }
        </div>
    );
}

export default InformationWeather;