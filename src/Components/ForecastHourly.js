import React, { useEffect } from 'react';
import '../CSS/ComponentStyle.css'
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

    // TODO:  ПРЕНЕСТИ НА БЭК И ОТПРАВЛЯТЬ НОРМАЛЬНЫЕ ДАТУ И ВРЕМЯ
    const forecastForTwoDays = {
        today: [],
        tomorrow: [],
        aftertomorrow: [],
        iconsIDArr: []
    }

    // TODO:  ПРЕНЕСТИ НА БЭК И ОТПРАВЛЯТЬ НОРМАЛЬНЫЕ ДАТУ И ВРЕМЯ
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
        <div className="forecastHourly" >
            <div className="marking">
                <div>
                    День недели:
                </div>
                <div>
                    Время:
                </div>
                <div className='SVGContainerForecastHourly'>
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
            <div className='forecastHourlyList'>
                <div className='column'>
                    <div>{new Date(forecastForTwoDays.today[0].dt).toDateString()}</div>
                    <div className='dayContainer'>
                        {forecastForTwoDays.today.map((item, index) => {
                            const icon = iconsArr[forecastForTwoDays.iconsIDArr.indexOf(item.weather[0].id)].icon
                            return <ForecastHourlyItem
                                // TODO: key должен быть уникальным индефикатором, попробуй `${city}-${data}`
                                key={index}
                                value={item}
                                icon={icon}
                            />
                        })}
                    </div>
                </div>
                <div className='column'>
                    <div>{new Date(forecastForTwoDays.tomorrow[0].dt).toDateString()}</div>
                    <div className='dayContainer'>
                        {forecastForTwoDays.tomorrow.map((item, index) => {
                            const icon = iconsArr[forecastForTwoDays.iconsIDArr.indexOf(item.weather[0].id)].icon
                            return <ForecastHourlyItem
                                // TODO: key должен быть уникальным индефикатором, попробуй `${city}-${data}`
                                key={index}
                                value={item}
                                icon={icon}
                            />
                        })}
                    </div >
                </div>
                {!!forecastForTwoDays.aftertomorrow && <div className='column'>
                    <div>{new Date(forecastForTwoDays.aftertomorrow[0].dt).toDateString()}</div>
                    <div className='dayContainer'>
                        {forecastForTwoDays.aftertomorrow.map((item) =>
                            <ForecastHourlyItem
                                // TODO: key должен быть уникальным индефикатором, попробуй `${city}-${data}`
                                key={item.dt}
                                value={item}
                                icon={iconsArr[forecastForTwoDays.iconsIDArr.indexOf(item.weather[0].id)].icon}
                            />
                        )}
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default ForecastHourly;