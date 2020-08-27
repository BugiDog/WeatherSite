import React, { useState, useEffect, useMemo } from 'react';
import WeatherCurrent from '../Components/WeatherCurrent'
import ForecastHourly from '../Components/ForecastHourly'
import ForecastDaily from '../Components/ForecastDaily'
import socket from '../socket'
import '../CSS/WPStyle.css'


function WeatherPage() {
    const [city, setCity] = useState('Kyiv')
    const [res, setRes] = useState(null)
    const [form, setForm] = useState('weatherCurrent')
    const [status, setStatus] = useState(false)
    const [disabled, setDisabled] = useState('weatherCurrent')

    useEffect(() => {
        socket.on('status', (data) => {
            console.log('status  ' + data);
            setStatus(data)
        })
        socket.on('weatherCurrent', data => {
            setRes(data)
            console.log('weatherCurrent');
            console.log(data);
        })
        socket.on('forecastHourly', data => {
            setRes(data)
            console.log('forecastHourly');
            console.log(data);
        })
        socket.on('forecastDaily', data => {
            setRes(data)
            console.log('forecastDaily');
            console.log(data);
        })
    }, [])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude.toFixed(2);
            const lon = position.coords.longitude.toFixed(2);
            console.log(lat, lon);
            setStatus(false)
            socket.emit('takeWeather', { lat, lon })
        })
    }, [])

    useMemo(() => {
        if (status) socket.emit(form)
    }, [status, form])

    const handlerClick = (e) => {
        setDisabled(e.target.name)
        setRes(null)
        setForm(e.target.name)
    }

    return (
        <div className='container'>
            <div className='weatherWindow'>
                {/*TODO: Сделать inputHandler чтобы не пересоздавать анонимную функцию*/}
                <input type='text' placeholder='Введите город' onInput={(event) => {
                    setCity(event.target.value)
                }} />
                {/*TODO: Сделать inputHandler чтобы не пересоздавать анонимную функцию*/}
                <button className='btn' onClick={() => {
                    setStatus(false)
                    socket.emit('takeWeather', city)
                }}  >Узнать погоду </button>
                <div>
                    <button type='button' disabled={disabled === 'weatherCurrent'} name='weatherCurrent'
                        onClick={handlerClick}>
                        Погода сейчас</button>
                    <button type='button' disabled={disabled === 'forecastHourly'} name='forecastHourly'
                        onClick={handlerClick}>
                        Прогноз на два дня</button>
                    <button type='button' disabled={disabled === 'forecastDaily'} name='forecastDaily'
                        onClick={handlerClick}>
                        Прогноз на неделю</button>
                </div>
                <div>
                    {form === 'weatherCurrent' && !!res && <WeatherCurrent data={res} />}
                </div>
                <div>
                    {form === 'forecastHourly' && !!res && <ForecastHourly data={res} />}
                </div>
                <div>
                    {form === 'forecastDaily' && !!res && <ForecastDaily data={res} />}
                </div>
            </div>

        </div>
    );
}

export default WeatherPage;