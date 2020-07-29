import React from 'react';


function weatherInfo({data}) {
    const dateNow =  new Date().toDateString()
    const sunrise = new Date(data[2] * 1000).toTimeString()
    const sunset = new Date(data[3] * 1000).toTimeString()
 
    const temp= (data[0] - 273).toFixed(1)
    /* console.log('temp:' + temp) */



    return (
        <div >
            Погода на {dateNow}<br/>
            Город: {data[4]}
        <div>
            Температура: { temp } С    {'---------'+data[0]}F
        </div>
        <div>
            Скорость ветра: { data[1] } М/с      
        </div>
        <div >
            Восход: <label> { sunrise}  </label><br/>
            Закат: <label> { sunset}  </label>
        </div>
        </div>
    );
}

export default weatherInfo;