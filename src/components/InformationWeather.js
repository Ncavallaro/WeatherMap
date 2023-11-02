import React from 'react'
import Spinner from './Spinner'
import '../css/InformationWeather.css'
import WeekWeather from './WeekWeather'
import DayWeather from './DayWeather'

const InformationWeather = ({ showData, loadingData, weather, forecast }) => {
  let url = ''
  let iconUrl = ''
  let iconUrl0 = ''
  let iconUrl7 = ''
  let iconUrl15 = ''
  let iconUrl23 = ''
  let iconUrl31 = ''

  if (loadingData) {
    return <Spinner />
  }

  if (showData) {
    url = 'http://openweathermap.org/img/w/'
    iconUrl = url + weather.weather[0].icon + '.png'

    iconUrl0 = url + forecast.list[0].weather[0].icon + '.png'
    iconUrl7 = url + forecast.list[7].weather[0].icon + '.png'
    iconUrl15 = url + forecast.list[15].weather[0].icon + '.png'
    iconUrl23 = url + forecast.list[23].weather[0].icon + '.png'
    iconUrl31 = url + forecast.list[31].weather[0].icon + '.png'
  }

  return (
    <div className='mt-5'>
      {showData === true ? (
        <div className='container'>
          <div className='card mb-3 mx-auto bg-dark text-light'>
            <div className='row g-0'>
              <div className='card-body text-start mt-2'>
                <DayWeather
                  name={weather.name}
                  temp={weather.main.temp}
                  icon={iconUrl}
                  description={weather.weather[0].description}
                  temp_max={weather.main.temp_max}
                  temp_min={weather.main.temp_min}
                />
                <hr />
                <WeekWeather
                  dt_txt={forecast.list[0].dt_txt}
                  iconUrl={iconUrl0}
                  description={forecast.list[0].weather[0].description}
                  temp_min={forecast.list[0].main.temp_min}
                  temp_max={forecast.list[0].main.temp_max}
                />
                <WeekWeather
                  dt_txt={forecast.list[7].dt_txt}
                  iconUrl={iconUrl7}
                  description={forecast.list[7].weather[0].description}
                  temp_min={forecast.list[7].main.temp_min}
                  temp_max={forecast.list[7].main.temp_max}
                />
                <WeekWeather
                  dt_txt={forecast.list[15].dt_txt}
                  iconUrl={iconUrl15}
                  description={forecast.list[15].weather[0].description}
                  temp_min={forecast.list[15].main.temp_min}
                  temp_max={forecast.list[15].main.temp_max}
                />
                <WeekWeather
                  dt_txt={forecast.list[23].dt_txt}
                  iconUrl={iconUrl23}
                  description={forecast.list[23].weather[0].description}
                  temp_min={forecast.list[23].main.temp_min}
                  temp_max={forecast.list[23].main.temp_max}
                />
                <WeekWeather
                  dt_txt={forecast.list[31].dt_txt}
                  iconUrl={iconUrl31}
                  description={forecast.list[31].weather[0].description}
                  temp_min={forecast.list[31].main.temp_min}
                  temp_max={forecast.list[31].main.temp_max}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
          <></>
      )}
    </div>
  )
}

export default InformationWeather