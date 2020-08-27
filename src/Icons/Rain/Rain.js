import lightRainDay from './lightRainDay.svg'
import lightRainDayNight from './lightRainDayNight.svg'
import moderateRain from './moderateRain.svg'
import heavyIntensityRain from './heavyIntensityRain.svg'
import veryHeavyRain from './veryHeavyRain.svg'
import extremeRain from './extremeRain.svg'
import freezingRain from './freezingRain.svg'
//520/521/522/531===504(extremeRain)

function Rain (id) {
    const iconStock = {
        500: {
            'icon': lightRainDay,
            'text': 'light rain'
        },
        510: {
            'icon': lightRainDayNight,
            'text': 'light rain'
        },
        501: {
            'icon': moderateRain,
            'text': 'moderate rain'
        },
        502: {
            'icon': heavyIntensityRain,
            'text': 'heavy intensity rain'
        },
        503: {
            'icon': veryHeavyRain,
            'text': 'very heavy rain'
        },
        504: {
            'icon': extremeRain,
            'text': 'extreme rain'
        },
        511: {
            'icon': freezingRain,
            'text': 'freezing rain'
        },
        520: {
            'icon': extremeRain,
            'text': 'light intensity shower rain'
        },
        521: {
            'icon': extremeRain,
            'text': 'shower rain'
        },
        522: {
            'icon': extremeRain,
            'text': 'heavy intensity shower rain'
        },
        531: {
            'icon': extremeRain,
            'text': 'ragged shower rain'
        },
    }
    return (iconStock[id])
          
}

export default Rain;