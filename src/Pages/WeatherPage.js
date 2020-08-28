import React, { useState, useEffect, useMemo } from 'react';
import WeatherCurrent from '../Components/WeatherCurrent'
import ForecastHourly from '../Components/ForecastHourly'
import ForecastDaily from '../Components/ForecastDaily'
import socket from '../socket'
import { useSocket } from '../socket'
import '../CSS/WPStyle.css'



function WeatherPage() {
    const [city, setCity] = useState('Kyiv')
    const [form, setForm] = useState('weatherCurrent')
    const [disabled, setDisabled] = useState('weatherCurrent')
    const { weatherData, status, setStatus, setWeatherData} = useSocket()

    console.log('weatherData', weatherData)
    console.log('status', status)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude.toFixed(2);
            const lon = position.coords.longitude.toFixed(2);
            console.log(lat, lon);
            setStatus(false)
            socket.emit('takeWeather', { lat, lon })
        })
    }, [])

    useEffect(() => {
        console.log(status, form)
        if (status) socket.emit(form)
    }, [status, form])

    const handlerClick = (targetName) => {
        setDisabled(targetName)
        setWeatherData(null)
        setForm(targetName)
    }

    return (
        <div className='container'>
            <div className='weatherWindow'>
                <input type='text' placeholder='Введите город' onInput={(event) => {
                    setCity(event.target.value)
                }} />
                <button className='btn' onClick={() => {
                    setStatus(false)
                    socket.emit('takeWeather', city)
                }}  >Узнать погоду </button>
                <div>
                    <button disabled={disabled === 'weatherCurrent'} name='weatherCurrent'
                        onClick={(event) => { handlerClick(event.target.name) }}>
                        Погода сейчас</button>
                    <button disabled={disabled === 'forecastHourly'} name='forecastHourly'
                        onClick={(event) => { handlerClick(event.target.name) }}>
                        Прогноз на два дня</button>
                    <button disabled={disabled === 'forecastDaily'} name='forecastDaily'
                        onClick={(event) => { handlerClick(event.target.name) }}>
                        Прогноз на неделю</button>
                </div>
                <div>
                    {form === 'weatherCurrent' && weatherData && <WeatherCurrent data={weatherData} />}
                </div>
                <div>
                    {form === 'forecastHourly' && weatherData && <ForecastHourly data={weatherData} />}
                </div>
                <div>
                    {form === 'forecastDaily' && weatherData && <ForecastDaily data={weatherData} />}
                </div>
            </div>

        </div>
    );
}

export default WeatherPage;