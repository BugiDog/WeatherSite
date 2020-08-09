import React from 'react';


function weatherInfo({data}) {
    const dateNow =  new Date().toDateString()
    const sunrise = new Date(data.sys.sunrise * 1000).toTimeString()
    const sunset = new Date(data.sys.sunset * 1000).toTimeString()
    const temp= (data.main.temp - 273).toFixed(1)
    /* console.log('temp:' + temp) */

    const getWeatherOneHour =async () => {
        const url = `http://localhost:5000/weather/OneHour?lat=${data.coord.lat}&lon=${data.coord.lon}`
        console.log('1')
        const result = await fetch(url).then(response => response.json())
        console.log('3')
        console.log(result)
        console.log('4')
        console.log(new Date(result.hourly[1].dt*1000).toDateString())
    }


    return (
        <div >
            Погода на {dateNow}<br/>
            Город: {data.name}
        <div>
            {`Температура: ${ temp }С/${data.main.temp}F`}
        </div>
        <div>
            Скорость ветра: { data.wind.speed } М/с      
        </div>
        <div >
            Восход: <label> { sunrise}  </label><br/>
            Закат: <label> { sunset}  </label>
        </div>
        <button onClick={getWeatherOneHour}>
            Подробнее
        </button>
        </div>
    );
}

export default weatherInfo;