import React, { useState, useEffect } from 'react';
import WeatherInfo from '../Components/weatherInfo'
import './style.css'


// {"coord":{"lon":30.52,"lat":50.43},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":302.38,"feels_like":301.99,"temp_min":302.04,"temp_max":303.15,"pressure":1014,"humidity":48},"visibility":10000,"wind":{"speed":4,"deg":70},"clouds":{"all":100},"dt":1595859408,"sys":{"type":1,"id":8903,"country":"UA","sunrise":1595816336,"sunset":1595872180},"timezone":10800,"id":703448,"name":"Kyiv","cod":200}


function WeatherPage() {
    const [city, setCity] = useState('Kyiv')
    const [res, setRes] = useState(null)
    let result = null

    const getGeolocation = () => {
        const geo=navigator.geolocation.getCurrentPosition(position => {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`latitude = ${latitude} ______ longitude = ${longitude}`);  
        })
        
    }

    const getWeather = async () => {
        const url = `http://localhost:5000/weather/Current?city=${city}`
        setRes(result = await fetch(url).then(response => response.json().then(data => {
            console.log(data)
            return data
        })))

    }


    return (
        <div className='container'>
            <div className='weatherWindow'>
                <input type='text' placeholder='Введите город' onInput={(event) => {
                    setCity(event.target.value)
                }} />
                <button className='btn' onClick={getWeather}  >Узнать погоду </button>
                <button className='btn' onClick={getGeolocation}  >Узнать местоположение </button>
                <div>
                    <button>Погода сейчас</button>
                    <button>Прогноз на час </button>
                    <button>Прогноз на два дня</button>
                    <button>Прогноз на неделю</button>
                </div>
                <div>
                    {
                        res && <WeatherInfo data={res} />
                    }
                </div>
            </div>

        </div>
    );
}

export default WeatherPage;