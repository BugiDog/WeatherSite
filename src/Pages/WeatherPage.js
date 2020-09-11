import React, { useState, useEffect } from 'react';
import WeatherCurrent from '../Components/WeatherCurrent'
import ForecastHourly from '../Components/ForecastHourly'
import ForecastDaily from '../Components/ForecastDaily'
import { useSocket } from '../socket'


function WeatherPage() {
    const [city, setCity] = useState('')
    const [form, setForm] = useState('weatherCurrent')
    const { weatherData, status, setStatus, setWeatherData, requestWeather, getWeather } = useSocket()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude.toFixed(2);
            const longitude = position.coords.longitude.toFixed(2);
            setStatus(false)
            requestWeather({ latitude, longitude })
        })
    }, [])

    useEffect(() => {
        if (status) getWeather(form)
    }, [status, form])

    const handlerClick = (event) => {
        
        setWeatherData(null)
        setForm(event.target.name)
    }

    const inputChange = event => setCity(event.target.value)

    const requestСity = () => {
        setStatus(false)
        requestWeather(city)
    }

    return (
        
            <div className='weather-page'>
                <div className='weather-page__city-​​selection'>
                    <input className='weather-page__imput-city' type='text' placeholder='Введите город' onInput={inputChange} />
                    <button className='weather-page__button-request' onClick={requestСity}  >Узнать погоду </button>
                </div>
                <div className='weather-page__form-​​selection'>
                    <button disabled={form === 'weatherCurrent'} name='weatherCurrent'
                        onClick={handlerClick}>
                        Погода сейчас</button>
                    <button className='form-​​selection__button' disabled={form === 'forecastHourly'} name='forecastHourly'
                        onClick={handlerClick}>
                        Прогноз на два дня</button>
                    <button className='form-​​selection__button' disabled={form === 'forecastDaily'} name='forecastDaily'
                        onClick={handlerClick}>
                        Прогноз на неделю</button>
                </div>
                <div className='weather-page__content'>
                    {form === 'weatherCurrent' && !!weatherData && <WeatherCurrent weatherData={weatherData} />}
                    {form === 'forecastHourly' && !!weatherData && <ForecastHourly weatherData={weatherData} />}
                    {form === 'forecastDaily' && !!weatherData && <ForecastDaily weatherData={weatherData} />}
                </div>



            </div>

    );
}

export default WeatherPage;