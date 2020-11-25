import React, { useState, useEffect, useRef } from 'react';
import CurrentForecast from '../Components/CurrentForecast'
import ForecastHourly from '../Components/ForecastHourly'
import ForecastDaily from '../Components/ForecastDaily'
import { useSocket } from '../socket'
import AvatarIcon from '../Icons/WeatherPage/AvatarIcon.png'
import SearchIcon from '../Icons/WeatherPage/SearchIcon.svg'


function WeatherPage() {
    const city = useRef('')
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

    const inputChange = event => city.current = event.target.value

    const requestСity = () => {
        setStatus(false)
        requestWeather(city.current)
    }

    return (


        <div className='weather-page'>
            <div className='weather-page__nav-bar nav-bar'>
                <div className='nav-bar__container'>
                    <div className='nav-bar__icon-container'>
                        <img className='nav-bar__avatar-icon' src={AvatarIcon} alt='' />
                    </div>
                    <div className='nav-bar__search'>
                        <input className='nav-bar__search-input' placeholder='Введите город' />
                        <img className='nav-bar__search-img' src={SearchIcon} alt='' />
                    </div>
                    <div className='nav-bar__link-container'>
                        <a className='nav-bar__hourly-forecast-2-days'>
                            Прогноз на 2 дня
                        </a>
                        <a className='nav-bar__daily-forecast-7-days'>
                            Прогноз на 7 дней
                        </a>
                        <a className='nav-bar__map'>
                            Погода на карте
                        </a>
                    </div>


                </div>
            </div>
            <div className='weather-page__content content'>
                <div className='content__line-current-and-map'>
                    <div className='content-current-and-minute-forecast current-and-minute-forecast'>
                        <div className='current-and-minute-forecast__current-forecast'>
                            {!!weatherData &&<CurrentForecast weatherData={weatherData}/>}
                        </div>
                        <div className='current-and-minute-forecast__minute-forecast'>

                        </div>
                    </div>
                    <div className='content-mini-map mini-map'>

                    </div>
                </div>
                <div className='content__line-forecast'>
                    <div className='content__hourly-forecast-2-days hourly-forecast-2-days'>

                    </div>
                </div>
                <div className='content__line-dop-info'>

                </div>
            </div>
        </div>


        // <div className='weather-page'>
        //     <div className='weather-page__city-​​selection'>
        //         <input className='weather-page__imput-city' type='text' placeholder='Введите город' onInput={inputChange} />
        //         <button className='weather-page__button-request' onClick={requestСity}  >Узнать погоду </button>
        //     </div>
        //     <div className='weather-page__form-​​selection'>
        //         <button disabled={form === 'weatherCurrent'} name='weatherCurrent'
        //             onClick={handlerClick}>
        //             Погода сейчас</button>
        //         <button className='form-​​selection__button' disabled={form === 'forecastHourly'} name='forecastHourly'
        //             onClick={handlerClick}>
        //             Прогноз на два дня</button>
        //         <button className='form-​​selection__button' disabled={form === 'forecastDaily'} name='forecastDaily'
        //             onClick={handlerClick}>
        //             Прогноз на неделю</button>
        //     </div>
        //     <div className='weather-page__content'>
        //         {form === 'weatherCurrent' && !!weatherData && <WeatherCurrent weatherData={weatherData} />}
        //         {form === 'forecastHourly' && !!weatherData && <ForecastHourly weatherData={weatherData} />}
        //         {form === 'forecastDaily' && !!weatherData && <ForecastDaily weatherData={weatherData} />}
        //     </div>



        // </div>

    );
}

export default WeatherPage;