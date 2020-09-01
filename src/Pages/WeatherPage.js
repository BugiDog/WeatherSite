import React, { useState, useEffect } from 'react';
import WeatherCurrent from '../Components/WeatherCurrent'
import ForecastHourly from '../Components/ForecastHourly'
import ForecastDaily from '../Components/ForecastDaily'
import { useSocket } from '../socket'
import '../CSS/WPStyle.css'



function WeatherPage() {
    const [city, setCity] = useState('Kyiv')
    const [form, setForm] = useState('weatherCurrent')
    const [disabled, setDisabled] = useState('weatherCurrent')
    const { weatherData, status, setStatus, setWeatherData, requestWeather, getWeather} = useSocket()
    
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
        setDisabled(event.target.name)
        setWeatherData(null)
        setForm(event.target.name)
    }

    const inputChange = event => setCity(event.target.value)

    const requestСity = () => {
        setStatus(false)
        requestWeather(city)
    }

    return (
        <div className='container'>
            <div className='weatherWindow'>
                <input type='text' placeholder='Введите город' onInput={inputChange} />
                <button className='btn' onClick={requestСity}  >Узнать погоду </button>
                <div>
                    <button disabled={disabled === 'weatherCurrent'} name='weatherCurrent'
                        onClick={handlerClick}>
                        Погода сейчас</button>
                    <button disabled={disabled === 'forecastHourly'} name='forecastHourly'
                        onClick={handlerClick}>
                        Прогноз на два дня</button>
                    <button disabled={disabled === 'forecastDaily'} name='forecastDaily'
                        onClick={handlerClick}>
                        Прогноз на неделю</button>
                </div>
                <div>
                    {form === 'weatherCurrent' && !!weatherData && <WeatherCurrent data={weatherData} />}
                </div>
                <div>
                    {form === 'forecastHourly' && !!weatherData && <ForecastHourly data={weatherData} />}
                </div>
                <div>
                    {form === 'forecastDaily' && !!weatherData && <ForecastDaily data={weatherData} />}
                </div>
            </div>

        </div>
    );
}

export default WeatherPage;