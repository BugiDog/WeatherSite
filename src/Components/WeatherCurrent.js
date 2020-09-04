import React from 'react';
import IconsMeneger from '../Icons/IconsManager'

function WeatherCurrent({ data }) {
    const dateNow = new Date().toDateString()
    const sunrise = new Date(data.sys.sunrise * 1000).toTimeString().split('', 8)
    const sunset = new Date(data.sys.sunset * 1000).toTimeString().split('', 8)
    const temp = (data.main.temp - 273).toFixed(1)

    if ((data.weather[0].id === 800 || data.weather[0].id === 801 || data.weather[0].id === 500) &&
        (data.weather[0].icon.split('')[2] === 'n')) data.weather[0].id += 10
    const icon = IconsMeneger([data.weather[0].id]).get(data.weather[0].id).icon

    return (
        <div className='current'>
            <div className='current__SVG-container'>
                <img src={icon} />
            </div>
            <div className='current__content'>
                <div className='current__date'>
                    Погода на: {dateNow}
                </div>
                <div className='current__city' >
                    Город: {data.name}
                </div>
                <div className='current__temperature'>
                    {`Температура: ${temp}С/${data.main.temp}F`}
                </div>
                <div className='current__wind-speed'>
                    Скорость ветра: {data.wind.speed} М/с
                </div>
                <div className='current__solar-cycle'>
                    <div>
                        Восход:{sunrise}  
                    </div>
                    <div>
                        Закат:{sunset}  
                    </div>
                </div>
            </div>

        </div>
    );
}

export default WeatherCurrent;