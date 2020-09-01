import React, {useEffect, useState} from 'react';
import io from 'socket.io-client'

const socket = io(`http://localhost:5000`)

export const useSocket = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        socket.on('status', (data) => {
            console.log('status  ' + data);
            setStatus(data)
        })
        socket.on('weatherCurrent', data => {
            setWeatherData(data)
            console.log('weatherCurrent',data);
        })
        socket.on('forecastHourly', data => {
            setWeatherData(data)
            console.log('forecastHourly',data);
        })
        socket.on('forecastDaily', data => {
            setWeatherData(data)
            console.log('forecastDaily',data);
        })
    }, [])

    const requestWeather = (data) => {
        socket.emit('takeWeather',data)
    }

    const getWeather = (data) =>{
        socket.emit(data)
    }

    return {
        weatherData,
        status,
        setStatus,
        setWeatherData,
        requestWeather,
        getWeather
    }
}
