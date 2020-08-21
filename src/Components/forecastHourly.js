import React from 'react';


function ForecastHourlyItem({ value, index }) {
    const time = new Date(value.dt * 1000).toTimeString()
    const temp = (value.temp - 273).toFixed(1)

    return (
        <div className='forecastHourlyItem'>
            <div>
                №{index}
            </div>
            <div>
                Время:<br />
                {time}
            </div>
            <div>
                Температура:<br />
                {temp}
            </div>
        </div>
    );
}

function forecastHourly({ data }) {


    return (
        <div className='forecastHourly'>
            {data.map((item, index) => <ForecastHourlyItem key={index} value={item} index={index} />)}

        </div>
    );
}

export default forecastHourly;