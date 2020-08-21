import React from 'react';

function weatherCurrent({ data }) {
    const dateNow = new Date().toDateString()
    const sunrise = new Date(data.sys.sunrise * 1000).toTimeString()
    const sunset = new Date(data.sys.sunset * 1000).toTimeString()
    const temp = (data.main.temp - 273).toFixed(1)

    return (
        <div >
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
    );
}

export default weatherCurrent;