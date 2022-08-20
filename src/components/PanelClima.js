import React, {useState} from 'react';
import SelectClima from './SelectClima';
import InformationWeather from './InformationWeather';

const PanelClima = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=69b34db4e81bcec6834b291c4a34f23b&lang=es"
    let pathParamCity = "&q=";
    let measurement = "&units=metric"

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=69b34db4e81bcec6834b291c4a34f23b&lang=es"

    const [ weather, setWeather ] = useState([]);
    const [ forecast, setForecast ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ show, setShow ] = useState (false);
    const [ location, setLocation ] = useState ("");

    const getLocation = async (city) => {
       setLoading (true); //activa el spiner
       setLocation (city); //obtenemos la ciudad del select

       //weather
       urlWeather = urlWeather + pathParamCity + city + measurement;

       await fetch(urlWeather).then((response) => {
        if (!response.ok) throw {response}
        return response.json();
       }).then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
       }).catch(error => {
        //Si hay error lo muestro por consola, y oculto todo en pantalla
        console.log(error);
        setLoading(false);
        setShow(false)
       });

       //Forecast
       urlForecast = urlForecast + pathParamCity + city + measurement;

       await fetch(urlForecast).then((response) => {
        if (!response.ok) throw {response}
        return response.json();
       }).then((forecastData) => {
        console.log(forecastData);
        setForecast(forecastData);

        //Si esta todo ok, muestro en pantalla
        setLoading(false);
        setShow(true)

       }).catch(error => {
        //Si hay error lo muestro por consola, y oculto todo en pantalla
        console.log(error);
        setLoading(false);
        setShow(false)
       });
    }

    return (
        <React.Fragment>
            <SelectClima 
                 newLocation = {getLocation}
            />
            <InformationWeather 
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast ={forecast}
            />
        </React.Fragment>
    );
}

export default PanelClima;