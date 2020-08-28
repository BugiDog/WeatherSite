import React, {useEffect, useState} from 'react';
import io from 'socket.io-client'

const socket = io(`http://localhost:5000`)

export default socket

export const useSocket = () => {
    const [res, setRes] = useState(null)
    const [status, setStatus] = useState(false)

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
    }, [socket, setRes, setStatus])

    return {
        weatherData: res,
        status,
        setStatus,
        setWeatherData: setRes,
    }
}
