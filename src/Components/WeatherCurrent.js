import React from 'react';
import IconsMeneger from '../Icons/IconsManager'

function WeatherCurrent({ weatherData }) {

    const icon = IconsMeneger([weatherData.weatherId]).get(weatherData.weatherId).icon

    return (

        <div className='current'>
            <div className='current__SVG-container'>
                <img src={icon} alt='' />
            </div>
            <div className='current__content'>
                <div className='current__date'>
                    {`Погода на: ${weatherData.date}`}
                </div>
                <div className='current__city' >
                    {`Город: ${weatherData.sity}`}
                </div>
                <div className='current__temperature'>
                    {`Температура: ${weatherData.temperature} С`}
                </div>
                <div className='current__temperature'>
                    {`По ощущениям: ${weatherData.temperatureFeelsLike} С`}
                </div>
                <div className='current__wind-speed'>
                    {`Скорость ветра: ${weatherData.windSpeed} М/с`}
                </div>
                <div className='current__wind-speed'>
                    {`Влажность воздуха: ${weatherData.humidity} %`}
                </div>
                <div className='current__wind-speed'>
                    {`Атмосферное давление: ${weatherData.pressure} мм ртутного столба`}
                </div>
                <div className='current__solar-cycle'>
                    <div>
                        {`Восход:${weatherData.sunrise}`}
                    </div>
                    <div>
                        {`Закат:${weatherData.sunset}`}
                    </div>
                </div>
            </div>

        </div>


    );
}

export default WeatherCurrent;