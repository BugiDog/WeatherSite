import React, { useEffect } from 'react';
import IconsMeneger from '../Icons/IconsManager'



function ForecastHourlyItem({ value, icon }) {

    const time = new Date(value.dt * 1000).toTimeString().split('', 5)
    const temp = (value.temp - 273).toFixed(1)
    const feels_like = (value.feels_like - 273).toFixed(1)

    return (
        <div className='forecastHourlyItem'>
            <div>
                {time}
            </div>
            <div className='SVGContainerForecastHourly'>
                <img src={icon} />
            </div>
            <div>
                {temp}
            </div>
            <div>
                {feels_like}
            </div>
            <div>
                {value.pressure}
            </div>

        </div>
    );
}

function ForecastHourly({ data }) {

    const forecastForTwoDays = {
        today: [],
        tomorrow: [],
        aftertomorrow: [],
        iconsIDArr: []
    }

    console.log(data)

    data.map((item) => {
        if ((item.weather[0].id === 800 || item.weather[0].id === 801 || item.weather[0].id === 500) &&
            (item.weather[0].icon.split('')[2] === 'n')) item.weather[0].id += 10

        if (!forecastForTwoDays.iconsIDArr.includes(item.weather[0].id)) forecastForTwoDays.iconsIDArr.push(item.weather[0].id)
        switch (new Date(item.dt * 1000).toDateString()) {
            case new Date(data[0].dt * 1000).toDateString(): forecastForTwoDays.today.push(item); break
            case new Date((data[0].dt + 86400) * 1000).toDateString(): forecastForTwoDays.tomorrow.push(item); break
            case new Date((data[0].dt + 86400 * 2) * 1000).toDateString(): forecastForTwoDays.aftertomorrow.push(item); break
        }
    })

    const iconsArr = IconsMeneger(forecastForTwoDays.iconsIDArr)


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
                    Давление:
                </div>
            </div>

            <div className='forecast-hourly__content'>{/*forecastHourlyList  */}
                <div className='forecast-hourly__day-container'>
                    <div>{new Date(forecastForTwoDays.today[0].dt*1000).toDateString()}</div>
                    <div className='forecast-hourly__day-line'>
                        {forecastForTwoDays.today.map((item, index) => {
                            const icon = iconsArr.get(item.weather[0].id).icon
                            return <ForecastHourlyItem
                                key={index}
                                value={item}
                                icon={icon}
                            />
                        })}
                    </div>
                </div>
                <div className='forecast-hourly__day-container'>
                    <div>{new Date(forecastForTwoDays.tomorrow[0].dt*1000).toDateString()}</div>
                    <div className='forecast-hourly__day-line'>
                        {forecastForTwoDays.tomorrow.map((item, index) => {
                            const icon = iconsArr.get(item.weather[0].id).icon
                            return <ForecastHourlyItem
                                key={index}
                                value={item}
                                icon={icon}
                            />
                        })}
                    </div >
                </div>
                {forecastForTwoDays.aftertomorrow && 
                <div className='forecast-hourly__day-container'>
                    <div>{new Date(forecastForTwoDays.aftertomorrow[0].dt*1000).toDateString()}</div>
                    <div className='forecast-hourly__day-line'>
                        {forecastForTwoDays.aftertomorrow.map((item, index) => {
                            const icon = iconsArr.get(item.weather[0].id).icon
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