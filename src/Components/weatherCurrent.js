import React from 'react';
import IconsMeneger from '../Icons/IconsManager'

function WeatherCurrent({ data }) {
    const dateNow = new Date().toDateString()
    const sunrise = new Date(data.sys.sunrise * 1000).toTimeString().split('', 8)
    const sunset = new Date(data.sys.sunset * 1000).toTimeString().split('', 8)
    const temp = (data.main.temp - 273).toFixed(1)

    if ((data.weather[0].id === 800 || data.weather[0].id === 801 || data.weather[0].id === 500) &&
    (data.weather[0].icon.split('')[2] === 'n')) data.weather[0].id += 10
    const icon = IconsMeneger([data.weather[0].id])[0].icon

    return (
        <div className='line'>
            <div className='SVGContainerCurrent'>
                <img src={icon} />
            </div>
            <div>
                Погода на {dateNow}<br />
                Город: {data.name}
                <div>
                    {`Температура: ${temp}С/${data.main.temp}F`}
                </div>
                <div>
                    Скорость ветра: {data.wind.speed} М/с
                </div>
                <div >
                    Восход: <label> {sunrise}  </label><br />
                Закат: <label> {sunset}  </label>
                </div>
            </div>

        </div>
    );
}

export default WeatherCurrent;