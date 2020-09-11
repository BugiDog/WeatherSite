import React from 'react';
import IconsMeneger from '../Icons/IconsManager'



function ForecastHourlyItem({ value, icon }) {
    return (
        <div className='forecastHourlyItem'>
            <div>
                {value.time}
            </div>
            <div className='SVGContainerForecastHourly'>
                <img src={icon} alt='' />
            </div>
            <div>
                {value.temperature}
            </div>
            <div>
                {value.temperatureFeelsLike}
            </div>
            <div>
                {value.windSpeed}
            </div>
        </div>
    );
}

function ForecastHourly({ weatherData }) {
    const iconsArr = IconsMeneger(weatherData.iconsIDArr)

    return (
        <div className="forecast-hourly" >
            <div className="forecast-hourly__marking">
                <div>
                    День недели:
                </div>
                <div>
                    Время:
                </div>
                <div className='forecast-hourly__SVG-container'>
                    Погода:
                </div>
                <div>
                    Температура:
                </div>
                <div>
                    Ощущается:
                </div>
                <div>
                    Скорость ветра:
                </div>
            </div>

            <div className='forecast-hourly__content'>
                <div className='forecast-hourly__day-container'>
                    <div>{weatherData.today.date}</div>
                    <div className='forecast-hourly__day-line'>
                        {weatherData.today.forecast.map((item, index) => {
                            const icon = iconsArr.get(item.weatherId).icon
                            return <ForecastHourlyItem
                                key={index}
                                value={item}
                                icon={icon}
                            />
                        })}
                    </div>
                </div>
                <div className='forecast-hourly__day-container'>
                    <div>{weatherData.tomorrow.date}</div>
                    <div className='forecast-hourly__day-line'>
                        {weatherData.tomorrow.forecast.map((item, index) => {
                            const icon = iconsArr.get(item.weatherId).icon
                            return <ForecastHourlyItem
                                key={index}
                                value={item}
                                icon={icon}
                            />
                        })}
                    </div >
                </div>
                {!!weatherData.aftertomorrow &&
                    <div className='forecast-hourly__day-container'>
                        <div>{weatherData.aftertomorrow.date}</div>
                        <div className='forecast-hourly__day-line'>
                            {weatherData.aftertomorrow.forecast.map((item, index) => {
                                const icon = iconsArr.get(item.weatherId).icon
                                return <ForecastHourlyItem
                                    key={index}
                                    value={item}
                                    icon={icon}
                                />
                            })}
                        </div>
                    </div>}
            </div>
        </div>

    );
}

export default ForecastHourly;