import React from 'react';
import IconsMeneger from '../Icons/IconsManager'
import Thermometer from '../Icons/WeatherPage/Thermometer.svg'
import Celsius from '../Icons/WeatherPage/Celsius.png'
import Winds from '../Icons/WeatherPage/Winds.svg'
import Drop from '../Icons/WeatherPage/Drop.svg'
import Barometer from '../Icons/WeatherPage/Barometer.png'

function CurrentForecast({ weatherData }) {

    const icon = IconsMeneger([weatherData.weatherId]).get(weatherData.weatherId).icon

    return (

        <div className='current-forecast'>
            <div className='current-forecast__position-information'>
                <div className='current-forecast__address'>
                    {weatherData.sity}
                </div>
                <div className='current-forecast__date-now'>
                    {`Погода на: ${weatherData.date}`}
                </div>
            </div>
            <div className='current-forecast__main-information main-information'>
                <div className='main-information__thermometer-container'>
                    <img className='main-information__thermometer-SVG' src={Thermometer} alt='' />
                </div>
                <div className='main-information__temperature'>
                    {weatherData.temperature}
                </div>
                <div className='main-information__celsius-container'>
                    <img className='main-information__celsius-PNG' src={Celsius} alt='' />
                </div>
                <div className='main-information__icon-container'>
                    <img className='main-information__icon-container' src={icon} alt='' />
                </div>
                <div className='main-information__feels-like'>
                    <div className='main-information__description-weather'>
                        {weatherData.weatherDescription}
                    </div>
                    <div className='main-information__temperature-feels-like'>
                        {`Ощущается как ${weatherData.temperatureFeelsLike}`}
                    </div>
                </div>
            </div>
            <div className='current-forecast__more-information more-information'>
                <div className='more-information__wind-speed'>
                    <div className='more-information__icon-container'>
                        <img  src={Winds} alt=''/>
                    </div>
                    <div className='more-information__wind-speed-data'>
                        {`${weatherData.windSpeed} м/с`}
                    </div>
                </div>
                <div className='more-information__humidity'>
                    <div className='more-information__icon-container'>
                        <img  src={Drop} alt=''/>
                    </div>
                    <div className='more-information__humidity-data'>
                        {`${weatherData.humidity} %`}
                    </div>
                </div>
                <div className='more-information__pressure'>
                    <div className='more-information__icon-container'>
                        <img  src={Barometer} alt=''/>
                    </div>
                    <div className='more-information__pressure-data'>
                        {`${weatherData.pressure} мм.рт.ст.`}
                    </div>
                    
                </div>
            </div>
        </div>














        // <div className='current'>
        //     <div className='current__SVG-container'>
        //         <img src={icon} alt='' />
        //     </div>
        //     <div className='current__content'>
        //         <div className='current__date'>
        //             {`Погода на: ${weatherData.date}`}
        //         </div>
        //         <div className='current__city' >
        //             {`Город: ${weatherData.sity}`}
        //         </div>
        //         <div className='current__temperature'>
        //             {`Температура: ${weatherData.temperature} С`}
        //         </div>
        //         <div className='current__temperature'>
        //             {`По ощущениям: ${weatherData.temperatureFeelsLike} С`}
        //         </div>
        //         <div className='current__wind-speed'>
        //             {`Скорость ветра: ${weatherData.windSpeed} М/с`}
        //         </div>
        //         <div className='current__wind-speed'>
        //             {`Влажность воздуха: ${weatherData.humidity} %`}
        //         </div>
        //         <div className='current__wind-speed'>
        //             {`Атмосферное давление: ${weatherData.pressure} мм ртутного столба`}
        //         </div>
        //         <div className='current__solar-cycle'>
        //             <div>
        //                 {`Восход:${weatherData.sunrise}`}
        //             </div>
        //             <div>
        //                 {`Закат:${weatherData.sunset}`}
        //             </div>
        //         </div>
        //     </div>

        // </div>


    );
}

export default CurrentForecast;